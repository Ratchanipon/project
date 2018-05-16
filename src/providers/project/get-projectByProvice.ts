import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetProjectByProvinceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GetProjectByProvinceProvider Provider');
  }

  getProjecByProvince(id){                          // ดึงข้อมูลร

    return new Promise(resolve=>{
        this.http.get('http://localhost/RYP/services/project/getProjectByCategory?category_id='+id)
        .subscribe(data=>{
        resolve(data);      
        console.log(data);
        
      }, err =>{
        console.error(err);      
        });
      }); 
    
  }
  

}
