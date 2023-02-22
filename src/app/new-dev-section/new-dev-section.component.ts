import { Component } from '@angular/core';
import { LogoDisplayService } from '../logo-display-service';

@Component({
  selector: 'app-new-dev-section',
  templateUrl: './new-dev-section.component.html',
  styleUrls: ['./new-dev-section.component.scss']
})
export class NewDevSectionComponent {
  constructor(private readonly _serv: LogoDisplayService) {}

  ngOnInit() {
    this._serv.logo = "assets/images/logo_dev.png";
  }
}
