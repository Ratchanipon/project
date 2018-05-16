import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ArticledetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articledetail',
  templateUrl: 'articledetail.html',
})
export class ArticledetailPage {
  articleList:any;
  content:string;
  name:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticledetailPage');

    this.articleList = this.navParams.data;

    this.content = this.articleList.content;
  }

}
