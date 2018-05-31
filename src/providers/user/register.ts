import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../model/user';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { FirebaseListFactoryOpts } from 'angularfire2/database-deprecated/interfaces';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegisterProvider {

  constructor(
    public http: HttpClient,
    private database:AngularFireDatabase
  ) {
    console.log('Hello RegisterProvider Provider');
  }

  Register(user:User){

    let host = sessionStorage.getItem("host");

    return new Promise<User>(resolve=>{
      this.http.post(host+'/services/users/register',JSON.stringify({data:user}),
      {headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')}
  )
      .subscribe(user=>{
        
        let data = this.extacObject(user);
        resolve(data);
      })
    });
    
    
    // return this.http.get('http://localhost/AppManagement/services/users/getUserById?username='+user.username+'&password='+user.password);
}


extacObject(data){
  let json = JSON.stringify(data);
  //console.log(json);
  let obj = JSON.parse(json);
  //console.log(obj);
  return obj;
}

createUser(id,User){
  return this.database.object('User/'+id).set(User);
}


}
