import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetProjectByKeyWordProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GetProjectByKeyWordProvider Provider');
  }

  getProjecByKeyWord(keyword){                          // ดึงข้อมูลร

    return new Promise(resolve=>{
        this.http.get('http://localhost/RYP/services/project/getProjectByKeyWord?keyword='+keyword)
        .subscribe(data=>{
        resolve(data);      
        console.log(data);
        
      }, err =>{
        console.error(err);      
        });
      }); 
    
  }
  

}
