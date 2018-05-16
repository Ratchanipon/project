import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { GetVideoProvider } from '../../providers/video/get-video';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the VideoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video',
  templateUrl: 'video.html',
})
export class VideoPage {
  videoList:any;
  link:string;

  l:string="https://www.youtube.com/embed/y782WflFL-U";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public getVideo: GetVideoProvider,
              public loadingCtrl: LoadingController,
              private domSanitizer: DomSanitizer
            ){

              this.getVideo.getVideo().then(data => {
                this.videoList = data;
              })
              // this.link = this.videoList.link;
}
    trustedVideoUrl: SafeResourceUrl;
    loading: Loading;

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPage');

    this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.l);

        // this.loading = this.loadingCtrl.create({
        //     content: 'Please wait...'
        // });

        // this.loading.present();
  }

  handleIFrameLoadEvent(): void {
    //this.loading.dismiss();
  }


}
