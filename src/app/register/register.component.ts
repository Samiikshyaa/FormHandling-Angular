import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
//template driven
  // submitForm(form:any){
  //   console.log(form.invalid)
  // }



//reactive form
loginForm: FormGroup = new FormGroup({
  userName : new FormControl('',[Validators.required]), 
  // Validators.email,Validators.required,Validators.minLength(5)
  password: new FormControl('',[Validators.required])
})

// loginForm: FormGroup | null=null
constructor(private formBuilder: FormBuilder){
  this.loginForm = this.formBuilder.group({})
}
  submitForm(){
    console.log(this.loginForm)
  }
}
