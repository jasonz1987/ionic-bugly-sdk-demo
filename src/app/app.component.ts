import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

declare var Bugly:any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      var args = {
          // 通用配置
          debug:true,
          channel:"test",
          develop:true,
          version:"1.0",
          // 安卓配置
          // delay:20000,
          // package:"com.jasonz.bugly.demo",
          // IOS配置
          // device_id: "xxx-xxx",
          // block_monitor_enable: true,
          // block_monitor_timeout: 10000
      };

      Bugly.initSDK(function(success){

      },function(err){

      },args);

      if(platform.is('android')) {
        Bugly.enableJSMonitor();
      }

    });
  }
}

