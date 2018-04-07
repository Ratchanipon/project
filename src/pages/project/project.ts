import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetProjectProvider } from '../../providers/project/get-project';

/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {

  projectList:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public project: GetProjectProvider) {

              this.project.getProject().then(data => {
                this.projectList = data;
                console.log(this.projectList);
                
              })  


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

}
