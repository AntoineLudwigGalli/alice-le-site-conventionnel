import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAboutComponent } from './new-about/new-about.component';
import { NewAssistanceSectionComponent } from './new-assistance-section/new-assistance-section.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NewCreationsSectionComponent } from './new-creations-section/new-creations-section.component';
import { NewDevSectionComponent } from './new-dev-section/new-dev-section.component';
import { NewOtherSectionComponent } from './new-other-section/new-other-section.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path: '', 
    component: NewAboutComponent,
  },
  { 
    path: 'notFound', 
    component: NotFoundComponent 
  },
  { 
    path: 'decouvrez-alice', 
    component: NewAboutComponent,
  },
  { 
    path: 'assistance-numerique', 
    component: NewAssistanceSectionComponent,
  },
  { 
    path: 'creation-gestion-reparation-de-votre-site-internet', 
    component: NewDevSectionComponent,
  },
  { 
    path: 'signe-alice', 
    component: NewCreationsSectionComponent,
  },
  { 
    path: 'autres-activites-alice', 
    component: NewOtherSectionComponent,
  },
  { 
    path: 'contact', 
    component: NewContactComponent,
  },
  { 
    path: '**', 
    component: NotFoundComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Active les ancres sur le meme lien + scroll
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
