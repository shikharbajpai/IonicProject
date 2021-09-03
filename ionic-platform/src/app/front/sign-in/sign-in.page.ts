import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { ConnectionService } from 'src/app/Services/connection.service';
import { DisabledService } from 'src/app/Services/disabled.service';
import { ProfileService } from 'src/app/Services/profile.service';
import { SignInModel } from 'src/app/shared/signInModel';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  @ViewChild('signInForm') signInForm: any;
  model: SignInModel = new SignInModel();
  formArray = [];
  constructor(public toastController: ToastController, private router: Router,
    public profileService: ProfileService, public disabledService: DisabledService,
    public menuController: MenuController) {
  }

  ngOnInit() {
    this.menuController.enable(false, 'main-content');
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: 'User Logged In Sucessfully.',
      duration: 2000,
      color: 'secondary'
    });
    toast.present();
  };

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'All Fields are mandatory.',
      duration: 1000,
      color: 'tertiary'
    });
    toast.present();
  };

  onSignIn() {
    if (this.signInForm.valid) {
      localStorage.removeItem('UserDetails');
      this.successToast();
      console.log(this.signInForm.value);
      this.formArray.push(this.signInForm.value);
      console.log(this.formArray);
      localStorage.setItem('UserDetails', JSON.stringify(this.formArray));
      console.log(this.model.firstName);
      this.profileService.setName(this.model.firstName);
      this.router.navigate([`tabs/tab1`]);
      this.disabledService.setisLoggedIn(true);
      this.signInForm.reset();
    } else {
      this.errorToast();
      this.signInForm.reset();
    }

  }
}
