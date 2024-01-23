import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../models/User.model';

@Component({
  selector: 'app-user-v2',
  templateUrl: './user-v2.component.html',
  styleUrl: './user-v2.component.scss'
})
export class UserV2Component {

  // username = new FormControl('');
  // email = new FormControl('');
  // password = new FormControl('');
  // street = new FormControl('');
  // postcode = new FormControl('');
  // city = new FormControl('');

  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    street: new FormControl(''),
    postcode: new FormControl(''),
    city: new FormControl('')
  })

  // newUser: User = {
  //   username:"",
  //   email:"",
  //   password:"",
  //   street:"",
  //   postcode:"",
  //   city:""
  // }

  newUser!:User;
  // l’opérateur ! permet d'indiquer à TypeScript que vous êtes conscient que newUser peut être undefined, 
  //et que vous le gérerez correctement.

  // changeUserName() :void {
  //   this.username.setValue('Schreck')
  // }

  inscription() :void {
    // this.newUser = {
    //   username:String(this.username.value),
    //   email:String(this.email.value),
    //   password:String(this.password.value),
    //   street:String(this.street.value),
    //   postcode:String(this.postcode.value),
    //   city:String(this.city.value)

    if(this.userForm.valid) {
      this.newUser = this.userForm.value as User;
    }

    console.log(this.newUser);
    }

}
