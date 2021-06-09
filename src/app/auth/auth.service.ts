import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token!: string;
  hide = false;
  basic!:string

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      response => {
        this.router.navigate(['/']);}
    )
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          this.basic = "basic"
          this.hide = true;
          var user = firebase.auth().currentUser;

          if (user) {
            user.getToken()
            .then(
              (token: string) => this.token = token
             
            )
        }
      
  }

         )
        }


  logout() {
    firebase.auth().signOut().then(() => {
       this.token='';
       this.hide = false;
       this.basic=""
    
  }).catch((error) => {
    console.log(error)
  });
}

 getToken() {
  var user = firebase.auth().currentUser;

  if (user) {
  user.getToken().then(
     (token: string)=>this.token = token );
     return  this.token
  
  } else {
   return null;
  }

  }

  isAuthenticated() {
    return this.token != null;
    
  }

 }
