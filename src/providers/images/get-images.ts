import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GetVideoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetImagesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GetImagesProvider Provider');
  }

  getVideo(){                          // ดึงข้อมูล

    return new Promise(resolve=>{
        this.http.get('http://localhost/RYP/services/image/getImages')
        .subscribe(data=>{
        resolve(data);      
        console.log(data);
        
      }, err =>{
        console.error(err);      
        });
      }); 
    
}

}
