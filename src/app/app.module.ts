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
/* import {DropdownModule} from 'primeng/dropdown'; */

// Sections
import { SectionFooterComponent } from './components/sections/footer/footer.component';
import { SectionPageHeaderComponent } from './components/sections/page-header/page-header.component';
import { PageLoginComponent } from './components/pages/login/login.component';
import { PageMembershipComponent } from './components/pages/membership/membership.component';
import { PageActivitiesComponent } from './components/pages/activities/activities.component';
import { PageCommunitiesComponent } from './components/pages/communities/communities.component';
import { PageUserMembershipComponent } from './components/pages/user/membership/membership.component';
import { PageAdminHomeComponent } from './components/pages/admin/home/home.component';
import { PageAdminNewsComponent } from './components/pages/admin/news/news.component';
import { PageRegistrationComponent } from './components/pages/registration/registration.component';
import { PageAdminOverviewComponent } from './components/pages/admin/news/overview/overview.component';
import { PagesUserNewsAddComponent } from './components/pages/user/news/add/add.component';
import { PageNewsPageComponent } from './components/pages/news-page/news-page.component';
import { RegisterComponent } from './components/pages/popup/register/register.component';
import { PageAdminUsersComponent } from './components/pages/admin/users/users.component';
import { PageUserProfileComponent } from './components/pages/user/profile/profile.component';

// interceptors
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PageAboutComponent,
    PageContactComponent,
    SectionFooterComponent,
    SectionPageHeaderComponent,
    PageLoginComponent,
    PageMembershipComponent,
    PageActivitiesComponent,
    PageCommunitiesComponent,
    PageUserMembershipComponent,
    PageAdminHomeComponent,
    PageAdminNewsComponent,
    PageRegistrationComponent,
    PageAdminOverviewComponent,
    PagesUserNewsAddComponent,
    PageNewsPageComponent,
    RegisterComponent,
    PageAdminUsersComponent,
    PageUserProfileComponent
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
    DialogModule
   /*  DropdownModule */

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    AuthService, AuthGuardService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
