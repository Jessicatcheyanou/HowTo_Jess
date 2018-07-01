import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

// import { Router } from '@angular/router';

import { auth } from 'firebase/app';
//import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


//import { switchMap} from 'rxjs/operators';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable()
export class AuthService {

  // user: Observable<User>;
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});

		// this.user = this.afAuth.authState.pipe(
    //     switchMap(user => {
    //       if (user) {
    //         return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
    //       } else {
    //         return (null)
    //       }
    //     })

}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

  signUp(credentials) {
	return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
}

get authenticated(): boolean {
  return this.user !== null;
}
getEmail() {
  return this.user && this.user.email;
}
getDisplayName(){
	  return this.user && this.user.displayName;
}
getPhoto() {
  return this.user && this.user.photoURL;
}


signOut(): Promise<void> {
  return this.afAuth.auth.signOut();
}

googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
		.then(function(result) {
			if (result.credential) {
			    // This gives you a Google Access Token. You can use it to access the Google API.
			    var token = result.credential;
			    // ...
			  }
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
  }

	// private updateUserData(user) {
	//  // Sets user data to firestore on login
 //
	//  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
 //
	//  const data: User = {
	// 	 uid: user.uid,
	// 	 email: user.email,
	// 	 displayName: user.displayName,
	// 	 photoURL: user.photoURL
	//  }
 //
	//  return userRef.set(data, { merge: true })
 //
 // }

}