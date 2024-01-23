import { Component } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
//pas besoin d'importer FormControl et FormGroup si on utilise FormBuilder

@Component({
  selector: 'app-user-v2',
  templateUrl: './user-v2.component.html',
  styleUrl: './user-v2.component.scss'
})
export class UserV2Component {

  constructor(private fb: FormBuilder) {};

  userForm = this.fb.group({
    credentials: this.fb.group({
      email:  [''],
      password:  ['']
    }),
    username: [''],
    street:  [''],
    postcode:  [''],
    city:  ['']
  })

  

 onSubmit() :void {
  console.log(this.userForm.value);
  
 }

}
