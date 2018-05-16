import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ArticleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticleProvider {

  data: any;
  constructor(public http: HttpClient) {
    console.log('Hello ArticleProvider Provider');
  }
  getArticle(){    
  return new Promise(resolve=>{
    this.http.get('http://localhost/RYP/services/article/getarticle')
    .subscribe(data=>{
    resolve(data);      
    console.log(data);
    
  }, err =>{
    console.error(err);      
    });
  }); 
  }
}
