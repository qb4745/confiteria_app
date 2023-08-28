import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { UserModel } from '../models/UserModel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLinkWithHref]
})
export class AdminPage implements OnInit {

  adminInfoReceived: UserModel | undefined;

  constructor(private router: Router) {
    this.adminInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
   }

  ngOnInit() {
  }

  goToProductList() {
    this.router.navigate(['/productlist']);
  }





}
