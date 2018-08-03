import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

declare var Bugly:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {
  }

  setTagID() {
    const prompt = this.alertCtrl.create({
      title: '设置TagID',
      message: "请输入数字ID",
      inputs: [
        {
          name: 'id',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            console.log(data);
            if(data.id) {
              Bugly.setTagID(data.id);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  setUserID() {
    const prompt = this.alertCtrl.create({
      title: '设置UserID',
      message: "请输入数字ID",
      inputs: [
        {
          name: 'id',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            console.log(data);
            if(data.id) {
              Bugly.setUserID(data.id);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  setUserData() {
    const prompt = this.alertCtrl.create({
      title: '设置UserData',
      message: "请输入key和value",
      inputs: [
        {
          name: 'key',
          placeholder: 'key'
        },
        {
          name: 'value',
          placeholder: 'value'
        }
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '保存',
          handler: data => {
            console.log(data);
            if(data) {
              Bugly.putUserData(data);
            }
          }
        }
      ]
    });
    prompt.present();
  }

  testJSCrash() {
    let arr;
    alert(arr.d.f);
  }

  testJavaCrash() {
    Bugly.testJavaCrash();
  }

  testNativeCrash() {
    Bugly.testNativeCrash();
  }

  testANRCrash() {
    Bugly.testANRCrash();
  }

  testOCCrash() {
    Bugly.testOCCrash();
  }

}
