import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  profileForm: FormGroup

  lastName: FormControl

  firstName: FormControl
  
  constructor(private authSvc: AuthService, private router:Router) { }

  ngOnInit() { 

    this.firstName = new FormControl(this.authSvc.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.authSvc.currentUser.lastName, Validators.required)

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  cancel(){
    this.router.navigate(['events'])
  }

  saveProfile(formValues){

    if(this.profileForm.valid){
      this.authSvc.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }
 }

 validateFirstName(){
   return this.firstName.valid || this.firstName.untouched;
 }

 validateLastName(){
  return this.lastName.valid || this.lastName.untouched;
}

}