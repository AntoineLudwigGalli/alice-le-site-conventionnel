import { Component } from '@angular/core';
import { LogoDisplayService } from '../logo-display-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public get logo() {
    return this._serv.logo;
  }

  constructor(private readonly _serv: LogoDisplayService) {}

}
