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
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './email.service';
import { LegalMentionsComponent } from './legal-mentions/legal-mentions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule} from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from "@angular/fire/compat/analytics";
import { AngularFirePerformanceModule, PerformanceMonitoringService } from '@angular/fire/compat/performance';


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
    LegalMentionsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirePerformanceModule,
  ],
  providers: [
   EmailService,
   PerformanceMonitoringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
