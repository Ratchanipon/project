import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetProjectIntroProvider } from '../../providers/project/get-project-intro';
import { GetProjectProvider } from '../../providers/project/get-project';
import { GetProjectByProvinceProvider } from '../../providers/project/get-projectByProvice';
import { GetProjectByKeyWordProvider } from '../../providers/project/get-projectByKeyWord';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  listProjectIntro:any;
 
  projectList:any;

  constructor(public navCtrl: NavController,
              public projectIntro: GetProjectIntroProvider,
              public project: GetProjectProvider,
              public projectByProvince: GetProjectByProvinceProvider,
              public projectByKeyWord: GetProjectByKeyWordProvider
            ) {

                this.projectIntro.getProjectIntro().then(data => {
                  this.listProjectIntro = data;
                  console.log(data);
                  
                })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

  search(ev: any){

    let keyword = ev.target.value;
    console.log(keyword);
    this.projectByKeyWord.getProjecByKeyWord(keyword).then((data:any) => {
      this.projectList = data;
    })
    
  }
  showProjectByCategory(item){
    let id=item.category_id;
    this.projectByProvince.getProjecByProvince(id).then((data:any) => {
      this.projectList = data;
    })
  }

  showDetial(item){
    // alert(item.detail)
    this.navCtrl.push("Projectdetail2Page",item);
    
  }

}
