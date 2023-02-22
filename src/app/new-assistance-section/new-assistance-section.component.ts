import { Component } from '@angular/core';
import { LogoDisplayService } from '../logo-display-service';

@Component({
  selector: 'app-new-assistance-section',
  templateUrl: './new-assistance-section.component.html',
  styleUrls: ['./new-assistance-section.component.scss']
})
export class NewAssistanceSectionComponent {
  private fragment: string | null | undefined;

  constructor(private readonly _serv: LogoDisplayService) {}
 

  ngOnInit() {
    
    this._serv.logo = "assets/images/logo_assistance.png";
  }
}
