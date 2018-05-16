import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetProjectIntroProvider } from '../../providers/project/get-project-intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  listProjectIntro:any;

  constructor(public navCtrl: NavController,
              public projectIntro: GetProjectIntroProvider) {

                this.projectIntro.getProjectIntro().then(data => {
                  this.listProjectIntro = data;
                  console.log(data);
                  
                })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

}
