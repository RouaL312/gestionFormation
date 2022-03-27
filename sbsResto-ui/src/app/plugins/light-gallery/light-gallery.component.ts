import { Component, OnInit } from '@angular/core';
import { LightboxConfig, Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-light-gallery',
  templateUrl: './light-gallery.component.html',
  styleUrls: ['./light-gallery.component.css']
})
export class LightGalleryComponent implements OnInit {

  
  galleryCol1 = [
    {
      src: "assets/images/big/img1.jpg",
      caption:"Image Caption 1",
      thumb: "assets/images/big/img1.jpg",
    },
    {
      src: "assets/images/big/img2.jpg",
      caption:"Image Caption 2",
      thumb: "assets/images/big/img2.jpg",
    },
    {
      src: "assets/images/big/img3.jpg",
      caption:"Image Caption 3",
      thumb: "assets/images/big/img3.jpg",
    },
    {
      src: "assets/images/big/img4.jpg",
      caption:"Image Caption 4",
      thumb: "assets/images/big/img4.jpg",
    },
    {
      src: "assets/images/big/img5.jpg",
      caption:"Image Caption 5",
      thumb: "assets/images/big/img5.jpg",
    },
    {
      src: "assets/images/big/img6.jpg",
      caption:"Image Caption 6",
      thumb: "assets/images/big/img6.jpg",
    },
    {
      src: "assets/images/big/img7.jpg",
      caption:"Image Caption 7",
      thumb: "assets/images/big/img7.jpg",
    },
    {
      src: "assets/images/big/img8.jpg",
      caption:"Image Caption 7",
      thumb: "assets/images/big/img8.jpg",
    },
  ];
  
  constructor(private _lightboxConfig: LightboxConfig, private _lightbox: Lightbox) {}  
  
  open(_albumsArray:any, index: number): void {
    this._lightbox.open(_albumsArray, index, { showZoom: false, showImageNumberLabel: true, alwaysShowNavOnTouchDevices: true, fitImageInViewPort: true, disableScrolling: false, centerVertically: true });
  }
 
  close(): void {
    this._lightbox.close();
  }

  ngOnInit(): void {
  }

}
