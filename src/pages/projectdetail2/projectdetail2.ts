import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Platform} from "ionic-angular";
import {GoogleMaps, GoogleMap, LatLng, GoogleMapsEvent} from "@ionic-native/google-maps";
import { ProjectDatabaseProvider } from '../../providers/project-database/project-database';
import { Project } from '../../model/interface/project';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  @ViewChild('map')
  private mapElement:ElementRef;
  private map:GoogleMap;
  private location:LatLng;

  [x: string]: any;
  listProject:any;

  link:SafeResourceUrl;

  name:string;
  detail:string;
  store:string;
  locations:string;
  hostelry:string;
  video:string;

  slides = [
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "https://firebasestorage.googleapis.com/v0/b/royolproject-f9706.appspot.com/o/images%2F%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9B%E0%B8%B001.jpg?alt=media&token=df609b66-c33a-4cf1-9d82-84f600f861bc",
    },
    {
      title: "What is Ionic?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "https://firebasestorage.googleapis.com/v0/b/royolproject-f9706.appspot.com/o/images%2F%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9B%E0%B8%B002.jpg?alt=media&token=e89ec8f4-e9b8-4aca-80a0-119138510d7c",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "https://firebasestorage.googleapis.com/v0/b/royolproject-f9706.appspot.com/o/images%2F%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9B%E0%B8%B003.jpg?alt=media&token=39f496fc-b561-40cc-9735-ac084cdc34d3",
    },
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "https://firebasestorage.googleapis.com/v0/b/royolproject-f9706.appspot.com/o/images%2F%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9B%E0%B8%B004.jpg?alt=media&token=52cebdc7-c92e-485b-8655-7f74a36ed572",
    },
    {
      title: "Welcome to the Docs!",
      description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "https://firebasestorage.googleapis.com/v0/b/royolproject-f9706.appspot.com/o/images%2F%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B8%99%E0%B9%81%E0%B8%9B%E0%B8%B005.jpg?alt=media&token=0c2f9b0e-a805-447b-990a-da427e186109",
    },
  ];

  project:Project= {status:true,home:true,category:'',contact:'',detail:'',hostelry:'',imageproject:'',gallery:null,location:'',name:'',store:'',travel:'',video:'',};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private projectDatabase:ProjectDatabaseProvider,
              private domSanitizer:DomSanitizer
            ) {
              this.project = this.navParams.data;

              this.link = this.domSanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/2JeKfQ2r2r8');
            }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Projectdetail2Page');
    this.listProject = this.navParams.data;
 
    this.name = this.listProject.name;
    this.detail = this.listProject.detail;
    this.store = this.listProject.store;
    this.locations = this.listProject.location;
    this.hostelry = this.listProject.hostelry;
    this.video = this.listProject.video;



  }


}
