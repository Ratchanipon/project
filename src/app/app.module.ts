import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GetProjectProvider } from '../providers/project/get-project';
import { HttpClientModule } from '@angular/common/http';
import { GetVideoProvider } from '../providers/video/get-video';
import { GetImagesProvider } from '../providers/images/get-images';
import { ArticleProvider } from '../providers/article/article';
import { GetProjectIntroProvider } from '../providers/project/get-project-intro';
import { GetProjectByProvinceProvider } from '../providers/project/get-projectByProvice';
import { GetProjectByKeyWordProvider } from '../providers/project/get-projectByKeyWord';
import { LoginProvider } from '../providers/user/login';
import { CategoryProvider } from '../providers/category/category';
import { RegisterProvider } from '../providers/user/register';
import { UserPage } from '../pages/user/user';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserPage,
    TabsPage,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserPage,
    TabsPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetProjectProvider,
    GetVideoProvider,
    GetImagesProvider,
    ArticleProvider,
    GetProjectIntroProvider,
    GetProjectByProvinceProvider,
    GetProjectByKeyWordProvider,
    LoginProvider,
    CategoryProvider,
    RegisterProvider
    
    
  ]
})
export class AppModule {}
