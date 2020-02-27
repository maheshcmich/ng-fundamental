import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-temp',
  templateUrl: './ng-temp.component.html',
  styleUrls: ['./ng-temp.component.css']
})
export class NgTempComponent implements OnInit {

  loginText = 'Login';
    signUpText = 'Sign Up'; 
    lessons = ['Lesson 1', 'Lessons 2'];

    login() {
        console.log('Login');
    }

    signUp() {
        console.log('Sign Up');
    }

  constructor() { }

  ngOnInit() {
  }

}
