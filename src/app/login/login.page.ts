import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { IUserLogin } from '../models/IUserLogin';
import { UserModel } from '../models/UserModel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule]
})
export class LoginPage implements OnInit {
  hardcodedUsers: UserModel[] = [
    new UserModel(
      6,
      '6666666-6',
      'juan@confiteria.cl',
      'Juan',
      'González',
      'WORKER',
      true,
      '123-456-7890',
      '123 Worker St',
      'juang',
      'juang123'
    ),
    new UserModel(
      7,
      '7777777-7',
      'maria@confiteria.cl',
      'Maria',
      'López',
      'WORKER',
      true,
      '234-567-8901',
      '456 Baker St',
      'mlopez',
      'maria123'
    ),
    new UserModel(
      8,
      '8888888-8',
      'pedro@confiteria.cl',
      'Pedro',
      'Martínez',
      'WORKER',
      true,
      '345-678-9012',
      '789 Chef St',
      'pmartinez',
      'pedro123'
    ),
    new UserModel(
      9,
      '9999999-9',
      'laura@confiteria.cl',
      'Laura',
      'Rodríguez',
      'WORKER',
      true,
      '456-789-0123',
      '012 Baker St',
      'lrodriguez',
      'laura123'
    ),
    new UserModel(
      10,
      '10101010-0',
      'carlos@confiteria.cl',
      'Carloos',
      'Gómez',
      'WORKER',
      true,
      '567-890-1234',
      '234 Pastry St',
      'cgomez',
      'carlos123'
    ),
    new UserModel(
      11,
      '1111111-1',
      'admin1@admin.confiteria.cl',
      'Mario',
      'Perez',
      'ADMIN',
      true,
      '123-456-7890',
      '123 Admin St',
      'admin1',
      'admin123'
    ),
    new UserModel(
      12,
      '2222222-2',
      'admin2@admin.confiteria.cl',
      'Miguel',
      'Jara',
      'ADMIN',
      true,
      '234-567-8901',
      '456 Admin St',
      'admin2',
      'admin456'
    ),
    ];

  userLoginModal: IUserLogin = {
    username: '',
    password: ''
  };
  listUser: UserModel[] = [];

  constructor(private route: Router, private userService: UserService) {}

  ngOnInit() {
    this.userLoginModalRestart();
    const serviceUsers = this.userService.getUserList();
    this.listUser = [...this.hardcodedUsers, ...serviceUsers];
  }

  userLogin(userLoginInfo: IUserLogin): boolean{
    const serviceUsers = this.userService.getUserList();
    this.listUser = [...this.hardcodedUsers, ...serviceUsers.slice(0, serviceUsers.length)];
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].username == userLoginInfo.username) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.username, this.userLoginModal.password);
        console.log('listo');
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]

          }
        }
        if(this.listUser[i].user_type == 'WORKER'){
          let sendInfo = this.route.navigate(['/usuario'], userInfoSend);
          console.log('listo');
          return true;
        }else{
          let sendInfo = this.route.navigate(['/admin'], userInfoSend);
          return true;
        }

      }
    }
    this.userLoginModalRestart();
    return false;

  }


  userLoginModalRestart(): void {
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
  }

  goToRegistrar() {
    this.route.navigate(['/registrar']);
  }

  printListUser(): void {
    console.log(this.listUser);
  }

  printUserService(): void {
    console.log(this.userService);
  }
}
