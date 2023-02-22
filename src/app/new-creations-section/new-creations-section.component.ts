import { Component } from '@angular/core';
import { LogoDisplayService } from '../logo-display-service';

@Component({
  selector: 'app-new-creations-section',
  templateUrl: './new-creations-section.component.html',
  styleUrls: ['./new-creations-section.component.scss']
})
export class NewCreationsSectionComponent {
  constructor(private readonly _serv: LogoDisplayService) {}

  ngOnInit() {
    this._serv.logo = "assets/images/logo.png";
  }

}
