import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  _albums:any=[];

  constructor(private _lightbox: Lightbox) {
    for (let i = 3; i <= 19; i++) {


      if(i==8 || i==9  || i==12 || i==13 || i==14)
      {
        continue;
      }
      else{
      const src = './assets/images/image' + i + '.jpg';
      const caption = 'Image ' + i + ' caption';
      const thumb = './assets/images/thumbs/image' + i + '.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._albums.push(album);
      }
    }
  }

  open(index: number): void {
    this._lightbox.open(this._albums, index);
  }

  close(): void {
    this._lightbox.close();
  }

}
