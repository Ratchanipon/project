import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { ProjectPage } from '../project/project';
import { ArticlePage } from '../article/article';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = "ProjectPage";
  tab3Root = "VideoPage";
  tab4Root = "ArticlePage";
  tab5Root = UserPage;

  constructor() {

  }
}
