import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './components/pages/home/home.component';
import { PageAboutComponent } from './components/pages/about/about.component';
import { PageContactComponent } from './components/pages/contact/contact.component';
import { PageLoginComponent } from './components/pages/login/login.component';
import { PageMembershipComponent } from './components/pages/membership/membership.component';
import { PageActivitiesComponent } from './components/pages/activities/activities.component';
import { PageCommunitiesComponent } from './components/pages/communities/communities.component';

// User pages
import { PageUserMembershipComponent } from './components/pages/user/membership/membership.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: PageHomeComponent },

  { path: 'about', component: PageAboutComponent },
  { path: 'contact', component: PageContactComponent },

  { path: 'membership', component: PageMembershipComponent },
  { path: 'activities', component: PageActivitiesComponent },
  { path: 'communities', component: PageCommunitiesComponent },

  { path: 'login', component: PageLoginComponent },
  { path: 'user', children: [
    { path: 'membership', component: PageUserMembershipComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
