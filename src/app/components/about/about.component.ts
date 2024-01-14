import { Component } from '@angular/core';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faXTwitter} from '@fortawesome/free-brands-svg-icons';   

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  faYoutube=faYoutube;
  faInstagram=faInstagram;
  faFacebook=faFacebook;
  faXTwitter=faXTwitter;

}
