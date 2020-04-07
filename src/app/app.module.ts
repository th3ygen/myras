import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { AuthGuardService } from './guards/auth-guard.service';

import { HomeModule } from './components/pages/home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAboutComponent } from './components/pages/about/about.component';
import { PageContactComponent } from './components/pages/contact/contact.component';

// PrimeNG modules
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CheckboxModule } from 'primeng/checkbox';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { ChipsModule } from 'primeng/chips';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StepsModule } from 'primeng/steps';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CarouselModule } from 'primeng/carousel';
import { DropdownModule } from 'primeng/dropdown';

/* import {DropdownModule} from 'primeng/dropdown'; */

// Sections
import { PageUserProfileComponent } from './components/pages/user/profile/profile.component';
import { PageUserMembershipComponent } from './components/pages/user/membership/membership.component';
import { PageAdminHomeComponent } from './components/pages/admin/home/home.component';
import { PageAdminNewsComponent } from './components/pages/admin/news/news.component';
/* import { PageRegistrationComponent } from './components/pages/registration/registration.component'; */
import { PagesUserNewsAddComponent } from './components/pages/user/news/add/add.component';
import { PageAdminUsersComponent } from './components/pages/admin/users/users.component';


// interceptors
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

// Guest
import { PageNewsPageComponent } from './components/pages/news-page/news-page.component';
import { SectionFooterComponent } from './components/sections/footer/footer.component';
import { SectionPageHeaderComponent } from './components/sections/page-header/page-header.component';
import { PageLoginComponent } from './components/pages/login/login.component';
import { PageMembershipComponent } from './components/pages/membership/membership.component';
import { PageActivitiesComponent } from './components/pages/activities/activities.component';
import { PageCommunitiesComponent } from './components/pages/communities/communities.component';

// Admin
import { PageAdminDashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { PageAdminNewsOverviewComponent } from './components/pages/admin/news/overview/overview.component';
import { PageAdminNewsPostComponent } from './components/pages/admin/news/post/post.component';
import { PageAdminMembersManagerComponent } from './components/pages/admin/members/manager/manager.component';
import { PageAdminMembersPaymentsComponent } from './components/pages/admin/members/payments/payments.component';

// User
import { PageUserProfilePersonalComponent } from './components/pages/user/profile/personal/personal.component';
import { PageUserProfilePasswordComponent } from './components/pages/user/profile/password/password.component';
import { PageUserMembershipSubscriptionComponent } from './components/pages/user/membership/subscription/subscription.component';
import { PageUserMembershipCardComponent } from './components/pages/user/membership/card/card.component';
import { PageUserNewsOverviewComponent } from './components/pages/user/news/overview/overview.component';

// Shared
import { LoadingComponent } from './components/loading/loading.component';
import { FormRegisterComponent } from './components/forms/register/register.component';
import { PageSharedNewsPostComponent } from './components/shared/news/post/post.component';
import { AdminSharedContenteditComponent } from './components/pages/admin/shared/contentedit/contentedit.component';


@NgModule({
  declarations: [
    AppComponent,

    PageUserMembershipComponent,
    PageAdminHomeComponent,
    PageAdminNewsComponent,
    /* PageRegistrationComponent, */
    PagesUserNewsAddComponent,
    PageNewsPageComponent,
    PageAdminUsersComponent,
    PageUserProfileComponent,

    // Guest
    PageAboutComponent,
    PageContactComponent,
    SectionFooterComponent,
    SectionPageHeaderComponent,
    PageLoginComponent,
    PageMembershipComponent,
    PageActivitiesComponent,
    PageCommunitiesComponent,

    // Admin
    PageAdminDashboardComponent,
    PageAdminNewsOverviewComponent,
    PageAdminNewsPostComponent,
    PageAdminMembersManagerComponent,
    PageAdminMembersPaymentsComponent,

    // User
    PageUserProfilePersonalComponent,
    PageUserProfilePasswordComponent,
    PageUserMembershipSubscriptionComponent,
    PageUserMembershipCardComponent,
    PageUserNewsOverviewComponent,

    // Shared
    LoadingComponent,
    FormRegisterComponent,
    PageSharedNewsPostComponent,
    AdminSharedContenteditComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,

    // PrimeNg
    TabMenuModule,
    BreadcrumbModule,
    CheckboxModule,
    InputTextModule,
    EditorModule,
    ChipsModule,
    SelectButtonModule,
    ButtonModule,
    InputTextareaModule,
    AccordionModule,
    BrowserAnimationsModule,
    StepsModule,
    RadioButtonModule,
    CalendarModule,
    TableModule,
    DialogModule,
    CarouselModule,
    DropdownModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    AuthService, AuthGuardService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
