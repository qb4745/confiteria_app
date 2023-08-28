import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductModel } from '../models/ProductModel';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { UserModel } from '../models/UserModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})

export class RegistrarPage {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.userForm = this.formBuilder.group({
      id: [null, Validators.required],
      rut: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      user_type: ['', [Validators.required]],
      user_enabled: [true, Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  createUser() {
    if (this.userForm.valid) {
      const newUser = UserModel.crearUsuario(this.userForm.value);
      console.log('nuevo usuario:', newUser);

      this.userService.addUser(newUser);
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  printUserService() {
    console.log(this.userService);
  }

}