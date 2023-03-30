import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Cat } from './interfaces/cat.interface';
import { CatService } from './cat.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent{

  showSideBar!: boolean;
  showCreate !: boolean;
  showFind   !: boolean;
  showEdit   !: boolean;
  showEditCat!: boolean;
  showDelete !: boolean;
  cat        !: Cat;
  cats       !: Cat[];
  pedigrees  !: string[];
  ages       !: number[];
  genders    !: string[];
  selectedCat!: Cat;

  constructor( 
    private primeNGConfig : PrimeNGConfig,
    private catServive    : CatService,
    private messageService: MessageService){
    this.showSideBar = false;
    this.showCreate  = false;
    this.showFind    = false;
    this.showEdit    = false;
    this.resetCat();
    this.initCatProperties();
  }

  ngOnInit(): void {
    this.primeNGConfig.ripple = true;
  }

  showCreateModal(){
    this.resetCat();
    this.showCreate = true;
  }

  showFindModal(){
    this.findCats();
    this.showFind = true;
  }

  showEditModal(){
    this.findCats();
    this.showEdit = true;
  }

  createCat(){
    this.showCreate = false;
    this.catServive.createCat(this.cat).subscribe({
      next: (resp: any) => {
        this.messageService.add({ severity: 'success', summary: "Success", detail: resp.msg});
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: "Error", detail: error.error.errors.name.msg});
      }
    });
    this.resetCat();
  }

  findCats(){
    this.showFind = false;
    this.catServive.findCats().subscribe({
      next: (resp: any) => {
        this.cats = resp.cats;
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: "Erro", detail: error.msg});
      }
    })
  }

  showCatUpdating(event: any){
    this.cat = event.data;
    this.showEditCat = true;
  }

  updateCat(){
    this.catServive.updateCat(this.cat).subscribe({
      next: (resp: any) => {
        this.messageService.add({ severity: 'success', summary: "Success", detail: resp.msg});
        this.showEditCat = false;
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: "Error", detail: error.error.errors.name.msg});
        this.showEditCat = false;
      }
    })
  }

  deleteCat(){
    this.catServive.deleteCat(this.cat).subscribe({
      next: (resp: any) => {
        this.messageService.add({ severity: 'success', summary: "Success", detail: resp.msg});
        this.showEditCat = false;
        this.showEdit = false;
      },
      error: (error) => {
        this.messageService.add({ severity: 'error', summary: "Error", detail: error.error.errors.name.msg});
        this.showEditCat = false;
        this.showEdit = false;
      }
    })
  }

  resetCat(){
    this.cat = {
      pedigree: "",
      name    : "",
      gender  : ""
    }
  }

  initCatProperties(){
    this.pedigrees = [
      "American Curl",
      "Angora turco",
      "Bosque de Noruega",
      "Británico de pelo largo",
      "Highland fold",
      "Javanés",
      "Maine Coon"
    ];
    
    this.ages = [1,2,3,4,5,6,7,8,9,10];
    this.genders = ["Famale", "Male"];
  }
}