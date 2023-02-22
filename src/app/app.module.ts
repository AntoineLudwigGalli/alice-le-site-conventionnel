import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewAboutComponent } from './new-about/new-about.component';
import { NewDevSectionComponent } from './new-dev-section/new-dev-section.component';
import { NewAssistanceSectionComponent } from './new-assistance-section/new-assistance-section.component';
import { NewOtherSectionComponent } from './new-other-section/new-other-section.component';
import { NewCreationsSectionComponent } from './new-creations-section/new-creations-section.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NewAboutComponent,
    NewDevSectionComponent,
    NewAssistanceSectionComponent,
    NewOtherSectionComponent,
    NewCreationsSectionComponent,
    NewContactComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
