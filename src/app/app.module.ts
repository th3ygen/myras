import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeModule } from './components/pages/home/home.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAboutComponent } from './components/pages/about/about.component';
import { PageContactComponent } from './components/pages/contact/contact.component';


// PrimeNG modules
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CheckboxModule } from 'primeng/checkbox';

// Sections
import { SectionFooterComponent } from './components/sections/footer/footer.component';
import { SectionPageHeaderComponent } from './components/sections/page-header/page-header.component';
import { PageLoginComponent } from './components/pages/login/login.component';
import { PageMembershipComponent } from './components/pages/membership/membership.component';
import { PageActivitiesComponent } from './components/pages/activities/activities.component';
import { PageCommunitiesComponent } from './components/pages/communities/communities.component';
import { PageUserMembershipComponent } from './components/pages/user/membership/membership.component';

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
    PageUserMembershipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,

    // PrimeNg
    BreadcrumbModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
