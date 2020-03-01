import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

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
import {AccordionModule} from 'primeng/accordion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StepsModule} from 'primeng/steps';
import {RadioButtonModule, } from 'primeng/radiobutton';



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
    PageRegistrationComponent
  ],
  imports: [
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

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
