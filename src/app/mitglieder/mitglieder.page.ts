import { Component, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-mitglieder',
  templateUrl: './mitglieder.page.html',
  styleUrls: ['./mitglieder.page.scss'],
})
export class MitgliederPage implements OnInit {

  members : Observable<any>;

  constructor(public navCtrl: NavController,private httpClient:HttpClient, private plt: Platform, private alertCtrl: AlertController) { 
    this.members = this.httpClient.get('https://randomuser.me/api/?results=20')
    .pipe(
    map(res => res['results']))
  }

  ngOnInit() {

  }
  
}

