import { Component } from '@angular/core';
import { LogoDisplayService } from '../logo-display-service';

@Component({
  selector: 'app-new-about',
  templateUrl: './new-about.component.html',
  styleUrls: ['./new-about.component.scss']
})
export class NewAboutComponent {

  constructor(private readonly _serv: LogoDisplayService) {}

  ngOnInit() {
    this._serv.logo = "assets/images/logo.png";
  }
}
