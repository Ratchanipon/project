import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  name:string='';
  email:string='';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {

               let user=localStorage.getItem('user_id'); 

               if(user!=null){
                this.name = localStorage.getItem('name');
                this.email = localStorage.getItem('email');
               }
              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }


}
