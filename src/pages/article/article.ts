import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticleProvider } from '../../providers/article/article';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {


  articleList:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public article: ArticleProvider
            ) {
              this.article.getArticle().then(data => {
                this.articleList = data;
                console.log("++++++++++++",this.articleList);
                
              })
              
              
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

  
  showContent(item){
    this.navCtrl.push("ArticledetailPage",item);

    
  }
    
  
  }


