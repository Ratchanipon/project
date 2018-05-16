import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../model/user';
import { LoginProvider } from '../../providers/user/login';
import { TabsPage } from '../tabs/tabs';
import { UserPage } from '../user/user';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user:FormGroup;
  user1:User;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public login_: LoginProvider,
              public toastCtrl: ToastController,
              private app:App
              ) {

                this.form();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.form();
  }

  form(){

    this.user = this.formBuilder.group({

      password:['12345678',Validators.compose([Validators.required,
                                                  Validators.minLength(8),
                                                  Validators.pattern("[a-zA-Z0-9.-_*#@$%&!]{1,}")])],
      email:['B@gmail.com',Validators.compose([Validators.required,
                                                  Validators.email])]
    })

  }

  login(user:User){

    this.login_.loginProvider(this.user.value).then(user=>{

      this.user1 = user;
      if(this.user1!=null){
        this.loginSuccess()
        console.error("uer===",this.user1);

        localStorage.setItem("user_id",this.user1.user_id);
        localStorage.setItem("email",this.user1.email);
        localStorage.setItem("name",this.user1.name);
        // localStorage.setItem("last_name",this.user1.last_name);
        //  this.navCtrl.push("UserPage");
        this.navCtrl.setRoot(UserPage);    
        const root = this.app.getRootNav();
        root.popToRoot();
      }
      else{
        this.invalid();
        this.navCtrl.setRoot('LoginPage');    
        const root = this.app.getRootNav();
        root.popToRoot();
      }

    })

  }

  loginSuccess() {
    let toast = this.toastCtrl.create({
      message: 'ลงชื่อเข้าใช้สำเร็จ',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  invalid() {
    let toast = this.toastCtrl.create({
      message: 'ข้อมูลผู้ใช้ไม่ถูกต้อง',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
