import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHomeComponent } from './home.component';

import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    CommonModule,

    CarouselModule
  ]
})
export class HomeModule { }
