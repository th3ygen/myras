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
/* import { PageRegistrationComponent } from './components/pages/registration/registration.component'; */
import { PageNewsPageComponent } from './components/pages/news-page/news-page.component';


// Admin pages
import { PageAdminHomeComponent } from './components/pages/admin/home/home.component';
import { PageAdminNewsComponent } from './components/pages/admin/news/news.component';
// import { PageAdminNewsOverviewComponent } from './components/pages/admin/news/overview/overview.component';
import { PageAdminUsersComponent } from './components/pages/admin/users/users.component';
import { PageAdminDashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { PageAdminNewsOverviewComponent } from './components/pages/admin/news/overview/overview.component';
import { PageAdminNewsPostComponent } from './components/pages/admin/news/post/post.component';
import { PageAdminMembersManagerComponent } from './components/pages/admin/members/manager/manager.component';
import { PageAdminMembersPaymentsComponent } from './components/pages/admin/members/payments/payments.component';


// User pages
import { PageUserDashboardComponent } from './components/pages/user/dashboard/dashboard.component';
import { PageUserMembershipComponent } from './components/pages/user/membership/membership.component';
import { PagesUserNewsAddComponent } from './components/pages/user/news/add/add.component';
import { PageUserProfileComponent } from './components/pages/user/profile/profile.component';
import { PageUserProfilePersonalComponent } from './components/pages/user/profile/personal/personal.component';
import { PageUserProfilePasswordComponent } from './components/pages/user/profile/password/password.component';
import { PageUserMembershipSubscriptionComponent } from './components/pages/user/membership/subscription/subscription.component';
import { PageUserMembershipCardComponent } from './components/pages/user/membership/card/card.component';
import { PageUserNewsOverviewComponent } from './components/pages/user/news/overview/overview.component';
import { PageUserPurchaseInvoicesComponent } from './components/pages/user/purchases/invoices/invoices.component';
import { PageUserPurchaseOrdersComponent } from './components/pages/user/purchases/orders/orders.component';


// Shared
import { PageSharedNewsPostComponent } from './components/shared/news/post/post.component';
import { AdminSharedContenteditComponent } from './components/pages/admin/shared/contentedit/contentedit.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: PageHomeComponent },

  { path: 'about', component: PageAboutComponent },
  { path: 'contact', component: PageContactComponent },

  { path: 'membership', component: PageMembershipComponent },
  { path: 'activities', component: PageActivitiesComponent },
  { path: 'communities', component: PageCommunitiesComponent },

  { path: 'news', component: PageNewsPageComponent },

  { path: 'login', component: PageLoginComponent },

  { path: 'user', canActivate: [AuthGuardService], data: { role: 'user' }, children: [
    { path: 'dashboard', component: PageUserDashboardComponent },
    { path: 'profile', children: [
      { path: 'info', component: PageUserProfilePersonalComponent },
      { path: 'password', component: PageUserProfilePasswordComponent },

    ] },
    { path: 'membership', children: [
      { path: 'subscription', component: PageUserMembershipSubscriptionComponent },
      { path: 'card', component: PageUserMembershipCardComponent },
      /* { path: 'directories', component: PageUserMembershipSubscriptionComponent }, */
    ] },
    { path: 'purchase', children: [
      { path: 'invoices', component: PageUserPurchaseInvoicesComponent },
      { path: 'orders', component: PageUserPurchaseOrdersComponent },
    ] },
  ] },
  { path: 'admin', canActivate: [AuthGuardService], data: { role: 'admin' }, children: [
    { path: 'dashboard', component: PageAdminDashboardComponent },
    { path: 'news', children: [
      { path: 'overview', component: PageAdminNewsOverviewComponent },
      { path: 'post', component: PageSharedNewsPostComponent },
    ] },
    { path: 'contentedit', children: [
      { path: 'home', component: AdminSharedContenteditComponent },
      { path: 'activities', component: AdminSharedContenteditComponent },
      { path: 'communities', component: AdminSharedContenteditComponent },
      { path: 'membership', component: AdminSharedContenteditComponent },
      { path: 'about', component: AdminSharedContenteditComponent },
      { path: 'footer', component: AdminSharedContenteditComponent },
    ] },
    { path: 'members', children: [
      { path: 'manager', component: PageAdminMembersManagerComponent },
      { path: 'payments', component: PageAdminMembersPaymentsComponent },
    ] }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
