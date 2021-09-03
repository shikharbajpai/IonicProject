import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { PhotoService } from 'src/app/Services/photo.service';
import { consultants } from '../../shared/consultants';
import { Model } from '../../shared/model';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  @ViewChild('addConsultantsForm') addConsultantsForm: any;
  @ViewChild('removeConsultantForm') removeConsultantForm: any;
  model: Model = new Model();
  updateConsultants = [];
  removeConsultants = [];
  formArray = [];
  show = true;
  localItem = '';
  photo: SafeResourceUrl;
  showImage: any;
  // showAndroidCamera = false;

  constructor(public toastController: ToastController,
    public photoService: PhotoService,
    public sanitizer: DomSanitizer,
    private platform: Platform) { }

  ngOnInit() {
    this.localItem = localStorage.getItem('Consultants');
    if (this.localItem === null) {
      this.updateConsultants = consultants;
      console.log(this.updateConsultants);
    } else {
      this.localItem = localStorage.getItem('Consultants');
      this.updateConsultants = JSON.parse(this.localItem);
    }

    // this.platform.ready().then(() => {
    //   if (this.platform.is('android')) {
    //     this.showAndroidCamera = true;
    //   } else if (this.platform.is('ios')) {
    //     this.showAndroidCamera = false;
    //   } else {
    //     //fallback to browser APIs or
    //     this.showAndroidCamera = false;
    //   }
    // });
  }

  async successToast() {
    const toast = await this.toastController.create({
      message: 'Consultant added sucessfully.',
      duration: 2000,
      color: 'secondary'
    });
    toast.present();
  };

  async errorToast() {
    const toast = await this.toastController.create({
      message: 'All Fields are mandatory',
      duration: 2000,
      color: 'tertiary'
    });
    toast.present();
  };

  async removedToast() {
    const toast = await this.toastController.create({
      message: 'Consultant removed successfully',
      duration: 2000,
      color: 'primary'
    });
    toast.present();
  };

  async errToast() {
    const toast = await this.toastController.create({
      message: 'Correct Consultant Id required',
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  };

  onSubmit() {
    if (this.addConsultantsForm.valid) {
      this.successToast();
      console.log(this.addConsultantsForm.value);
      this.formArray.push(this.addConsultantsForm.value);
      console.log(this.formArray);
      this.updateConsultants.push(this.addConsultantsForm.value);
      this.updateConsultants.forEach((o, i) => o.id = i + 1);
      console.log(this.updateConsultants);
      localStorage.setItem('Consultants', JSON.stringify(this.updateConsultants));
      this.addConsultantsForm.reset();
    } else {
      this.errorToast();
      localStorage.setItem('Consultants', JSON.stringify(this.updateConsultants));
      this.addConsultantsForm.reset();
    }
  }

  onRemove() {
    console.log(this.model.id);
    if (this.removeConsultantForm.valid) {
      this.removedToast();
      this.localItem = localStorage.getItem('Consultants');
      this.removeConsultants = JSON.parse(this.localItem);
      const index = this.removeConsultants.findIndex(x => x.id === this.model.id);
      console.log(index);
      if (index > -1) {
        this.removeConsultants.splice(index, 1);
        localStorage.setItem('Consultants', JSON.stringify(this.removeConsultants));
        this.removeConsultantForm.reset();
      }
    } else {
      localStorage.setItem('Consultants', JSON.stringify(this.updateConsultants));
      this.errToast();
      this.removeConsultantForm.reset();

    }
  }

  // addPhotoToGallery() {
  //   this.photoService.addNewToGallery();
  // }

  async addPhotoToGallery() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      saveToGallery: true,
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    this.showImage = image.webPath;
    console.log(this.photo);

  };
}
