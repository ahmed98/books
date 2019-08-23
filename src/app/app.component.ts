import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book';
  constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyDZ4GzZ1MMktmJtIvQCb_TkSS25gBGxNL0",
      authDomain: "book-85511.firebaseapp.com",
      databaseURL: "https://book-85511.firebaseio.com",
      projectId: "book-85511",
      storageBucket: "book-85511.appspot.com",
      messagingSenderId: "113004167983",
      appId: "1:113004167983:web:41a9e8a8f1ad561a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
