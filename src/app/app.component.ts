import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clothes-shop';

ngOnInit() {
  firebase.initializeApp({
    apiKey:"AIzaSyDwlLA2A0_5pib5eYj0hRHjJk2T-x6EC3U",
    authDomain: "angular-41816.firebaseapp.com",
  });

}
}