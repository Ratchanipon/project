import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Projectdetail2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projectdetail2',
  templateUrl: 'projectdetail2.html',
})
export class Projectdetail2Page {

  [x: string]: any;
  listProject:any;

  name:string;
  detail:string;
  store:string;
  location:string;
  hostelry:string;
  video:string;

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "https://travel.mthai.com/app/uploads/2015/06/iStock_000057679524_Small-1.jpg",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "https://travel.mthai.com/app/uploads/2015/06/iStock_000057679524_Small-1.jpg",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "https://travel.mthai.com/app/uploads/2015/06/iStock_000057679524_Small-1.jpg",
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Projectdetail2Page');
    this.listProject = this.navParams.data;
 
    this.name = this.listProject.name;
    this.detail = this.listProject.detail;
    this.store = this.listProject.store;
    this.location = this.listProject.location;
    this.hostelry = this.listProject.hostelry;
    this.video = this.listProject.video;

  }

}
