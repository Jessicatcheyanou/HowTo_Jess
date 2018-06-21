import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

loginUser(email: string, password: string): Promise<any> {
return firebase.auth().signInWithEmailAndPassword(email, password);
}

signupUser(email: string, password: string): Promise<any> {
return firebase
.auth()
.createUserWithEmailAndPassword(email, password)
.then(newUser => {
firebase
.database()
.ref(`/userProfile/${newUser.uid}/email`)
.set(email);
})
.catch(error => {
console.error(error);
throw new Error(error);
});
}

resetPassword(email:string): Promise<void> {
return firebase.auth().sendPasswordResetEmail(email);
}

logoutUser(): Promise<void> {
const userId: string = firebase.auth().currentUser.uid;
firebase
.database()
.ref(`/userProfile/${userId}`)
.off();
return firebase.auth().signOut();
}



}