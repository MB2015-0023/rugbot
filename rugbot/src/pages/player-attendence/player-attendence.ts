import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-player-attendence',
  templateUrl: 'player-attendence.html',
})
export class PlayerAttendencePage {

  users: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public afd: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerAttendencePage');
  }

  ngOnInit() {
    this.users = this.afd.list('/attendance',
      ref => ref.orderByChild('uid').equalTo("tHvVdlbQXFb0alEL6AxxOMHv7u73")).valueChanges();
  }
}
