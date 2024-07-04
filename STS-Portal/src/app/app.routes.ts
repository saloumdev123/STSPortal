import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { CarrersJobsComponent } from './carrers-jobs/carrers-jobs.component';
import { ServicesComponent } from './services/services.component';
import { JobApplicationComponent } from './backoffice/components/job-application/job-application.component';
import { SubscriptionComponent } from './backoffice/components/subscription/subscription.component';
import { ResourceComponent } from './resource/resource.component';
import { JobComponent } from './backoffice/components/job/job.component';

export const routes: Routes = [
  // { path: '', pathMatch: 'full', component: HomeComponent },
  { path: '', component: HomeComponent },

  { path: 'about-us', component: AboutComponent },
  { path: 'services', component: ServicesComponent },

  { path: 'resources', component: ResourceComponent },

  { path: 'corporate-careers-overview', component: CarrersJobsComponent },
  { path: 'job-applications-add',component: JobApplicationComponent},
  { path: 'job-list', component:JobComponent},

  { path: 'subscriptions-add',component:SubscriptionComponent},
];
