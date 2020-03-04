import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './guards/auth-guard.service';

import { PageHomeComponent } from './components/pages/home/home.component';
import { PageAboutComponent } from './components/pages/about/about.component';
import { PageContactComponent } from './components/pages/contact/contact.component';
import { PageLoginComponent } from './components/pages/login/login.component';
import { PageMembershipComponent } from './components/pages/membership/membership.component';
import { PageActivitiesComponent } from './components/pages/activities/activities.component';
import { PageCommunitiesComponent } from './components/pages/communities/communities.component';
import { PageRegistrationComponent } from './components/pages/registration/registration.component';
import { PageNewsPageComponent } from './components/pages/news-page/news-page.component';


// Admin pages
import { PageAdminHomeComponent } from './components/pages/admin/home/home.component';
import { PageAdminNewsComponent } from './components/pages/admin/news/news.component';
import { PageAdminOverviewComponent } from './components/pages/admin/news/overview/overview.component';
import { PageAdminUsersComponent } from './components/pages/admin/users/users.component';


// User pages
import { PageUserMembershipComponent } from './components/pages/user/membership/membership.component';
import { PagesUserNewsAddComponent } from './components/pages/user/news/add/add.component';
import { PageUserProfileComponent } from './components/pages/user/profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: PageHomeComponent },

  { path: 'about', component: PageAboutComponent },
  { path: 'contact', component: PageContactComponent },

  { path: 'membership', component: PageMembershipComponent },
  { path: 'pricing', component: PageRegistrationComponent },
  { path: 'activities', component: PageActivitiesComponent },
  { path: 'communities', component: PageCommunitiesComponent },

  { path: 'news', component: PageNewsPageComponent },

  { path: 'login', component: PageLoginComponent },
  { path: 'user', canActivate: [AuthGuardService], data: { role: 'user' }, children: [
    { path: 'membership', component: PageUserMembershipComponent },
    { path: 'profile', component: PageUserProfileComponent },
    { path: 'news', children: [
      { path: 'add', component: PageAdminNewsComponent },
    ] },
  ] },
  { path: 'admin', canActivate: [AuthGuardService], data: { role: 'admin' }, children: [
    { path: 'home', component: PageAdminHomeComponent },
    { path: 'news', children: [
      { path: 'add', component: PageAdminNewsComponent },
      { path: 'overview', component: PageAdminOverviewComponent },
    ] },
    { path: 'users', children: [
      { path: 'overview', component: PageAdminUsersComponent },
    ] }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
