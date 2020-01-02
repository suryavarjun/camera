import { Component } from '@angular/core';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  caputredSnapUrl: string;

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera) { }
  
  takePic(){
    this.camera.getPicture(this.cameraOptions).then((ImageData) => {
      let base64Image = 'data:image/jpeg;base64,' + ImageData;
      this.caputredSnapUrl = base64Image;
    }, (err) => {
      console.log(err);
    });
  }


}
