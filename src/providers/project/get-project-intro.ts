import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetProjectIntroProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProjectProvider Provider');
  }

  getProjectIntro(){                          // ดึงข้อมูลร

    return new Promise(resolve=>{
        this.http.get('http://localhost/RYP/services/project/getProjectIntro')
        .subscribe(data=>{
        resolve(data);      
        console.log(data);
        
      }, err =>{
        console.error(err);      
        });
      }); 
    
  }
  

}
