import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { GetProjectProvider } from '../../providers/project/get-project';
import { GetProjectByProvinceProvider } from '../../providers/project/get-projectByProvice';
import { GetProjectByKeyWordProvider } from '../../providers/project/get-projectByKeyWord';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  projectList: any;
  projectByProvince: any;
  actionSheet: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  doProvice() {
    let actionSheet = this.actionSheet.create({
      buttons: [
        {
          text: 'เชียงใหม่',
          role: 'destructive',
          handler: () => {
            let id=2;

            this.projectByProvince.getProjecByProvince(id).then((data:any) => {
              this.projectList = data;
            })
          }
        },
        {
          text: 'แม่ฮองสอน',
          role: 'destructive',
          handler: () => {
            let id=8;

            this.projectByProvince.getProjecByProvince(id).then((data:any) => {
              this.projectList = data;
            })
          }
        }
      ]
    });
    actionSheet.present();
  }
}
