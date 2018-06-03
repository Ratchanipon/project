import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Creatarticle } from '../../model/interface/creatarticle';
import { CreatarticleProvider } from '../../providers/creatarticle/creatarticle';

/**
 * Generated class for the CreatarticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-creatarticle',
  templateUrl: 'creatarticle.html',
})
export class CreatarticlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public CreatarticleProvider:CreatarticleProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatarticlePage');

  }
  section: string = "index";
  creatarticle:Creatarticle= { name: '', detail: '',uid:'',status:''};

  save(creatarticle:Creatarticle) {
    let id = localStorage.getItem("user_id");
    this.creatarticle = { name:creatarticle.name , detail: creatarticle.detail,uid:id,status:'wait'};
    this.CreatarticleProvider.save(this.creatarticle).then(res => {
      console.log(this.creatarticle);
      
      this.creatarticle = { name: '',detail: '',uid:'',status:'' };
      this.navCtrl.push('MyarticlePage')
    })
  }

}

