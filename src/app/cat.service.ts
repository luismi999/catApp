import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cat } from './interfaces/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor( private http: HttpClient ) { }

  createCat( cat: Cat ){
    const { pedigree, name, age, gender } = cat;
    return this.http.post("http://localhost:3000/api/cat/create",{ pedigree, name, age, gender });
  }

  findCats(){
    return this.http.get("http://localhost:3000/api/cat");
  }

  updateCat(cat: Cat){
    const { uid, pedigree, name, age, gender } = cat;
    return this.http.patch(`http://localhost:3000/api/cat?id=${uid}`,{pedigree, name, age, gender});
  }

  deleteCat(cat: Cat){
    const { uid, pedigree, name, age, gender } = cat;
    return this.http.delete(`http://localhost:3000/api/cat?id=${uid}`);
  }
}
