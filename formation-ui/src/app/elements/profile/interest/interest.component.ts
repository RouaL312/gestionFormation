import { Component, OnInit } from '@angular/core';
import { LightboxConfig, Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  
  galleryCol1 = [
    {
      src: "assets/images/profile/2.jpg",
      caption:"Image Caption 1",
      thumb: "assets/images/profile/2.jpg",
    },
    {
      src: "assets/images/profile/3.jpg",
      caption:"Image Caption 2",
      thumb: "assets/images/profile/3.jpg",
    },
    {
      src: "assets/images/profile/4.jpg",
      caption:"Image Caption 3",
      thumb: "assets/images/profile/4.jpg",
    },
    {
      src: "assets/images/profile/3.jpg",
      caption:"Image Caption 4",
      thumb: "assets/images/profile/3.jpg",
    },
    {
      src: "assets/images/profile/4.jpg",
      caption:"Image Caption 5",
      thumb: "assets/images/profile/4.jpg",
    },
    {
      src: "assets/images/profile/2.jpg",
      caption:"Image Caption 6",
      thumb: "assets/images/profile/2.jpg",
    }
  ]
  
  constructor(private _lightboxConfig: LightboxConfig, private _lightbox: Lightbox) {}  
  
  open(_albumsArray:any, index: number): void {
    this._lightbox.open(_albumsArray, index, { showZoom: false, showImageNumberLabel: true, alwaysShowNavOnTouchDevices: true, fitImageInViewPort: true, disableScrolling: true, centerVertically: true });
  }
 
  close(): void {
    this._lightbox.close();
  }

  ngOnInit(): void {
  }
  

  

}
