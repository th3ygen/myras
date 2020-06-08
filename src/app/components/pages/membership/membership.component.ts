import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { MasterService } from '../../../services/master.service';
import { PageHeaderServiceService } from '../../../services/page-header-service.service';

import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-page-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class PageMembershipComponent implements OnInit {
  public packages = [];

  constructor(private master: MasterService, private headerService: PageHeaderServiceService, private auth: AuthService) { }

  public register(): void {
    this.master.setRegisterForm(false);
  }

  ngOnInit() {
    this.packages.push({
      name: 'Corporate',
      svg: 'undraw_active_options_8je6.svg',
      brief: 'Pay only RM200 of our membership fee and enjoy these benefits',
      price: 200,
      lifetime: 1000,

      features: [
        {
          icon: 'fas fa-cog',
          label: 'Receive MyRAS\'s Newsletter '
        },
        {
          icon: 'fas fa-cog',
          label: 'Have your company logo displayed on the MyRAS official website'
        },
        {
          icon: 'fas fa-cog',
          label: 'Give your company\'s product talk at any of MyRAS\'s event for FREE!'
        },
        {
          icon: 'fas fa-cog',
          label: 'Invitation for Free/Heavily discounted' +
          ' booth space in major events organized by MyRAS partners and MyRAS co-organized events'
        },
        {
          icon: 'fas fa-cog',
          label: 'Display your products on our NRX website for FREE!'
        },
        {
          icon: 'fas fa-cog',
          label: 'Special corporate member discount on our Global Certification Program'
        },
        {
          icon: 'fas fa-cog',
          label: 'Special offer for co-organized events'
        },
      ]
    });
    this.packages.push({
      name: 'Regular',
      svg: 'undraw_abstract_x68e.svg',
      brief: 'Pay only RM50 of our membership fee and enjoy these benefits',
      price: 50,
      lifetime: 200,

      features: [
        {
          icon: 'fas fa-cog',
          label: 'Receive MyRAS\'s Newsletter '
        },
        {
          icon: 'fas fa-cog',
          label: 'Access to MyRAS network of companies and job opportunities'
        },
        {
          icon: 'fas fa-cog',
          label: '20% Discounts for events directly organized by MyRAS'
        },
        {
          icon: 'fas fa-cog',
          label: 'Display your products on our NRX website for FREE!'
        },
        {
          icon: 'fas fa-cog',
          label: 'Member discount on our Global Certification Program'
        },
        {
          icon: 'fas fa-cog',
          label: 'Personal invitation to events by MyRAS, our partners and co-organized by MyRAS'
        },
        {
          icon: 'fas fa-cog',
          label: 'Discount on event booth registration'
        },
      ]
    });
    this.packages.push({
      name: 'Student',
      svg: 'undraw_Graduation_ktn0.svg',
      brief: 'Register for FREE and enjoy these benefits',
      price: 0,

      features: [
        {
          icon: 'fas fa-cog',
          label: 'Receive MyRAS\'s Newsletter '
        },
        {
          icon: 'fas fa-cog',
          label: 'Access to MyRAS network of companies and job opportunities'
        },
        {
          icon: 'fas fa-cog',
          label: '10% Discounts for events directly organized by MyRAS'
        },
      ]
    });

    this.master.setActive(3);

    this.headerService.setHeader('Membership');
    this.headerService.setBody('Join Us For More Information');
    this.headerService.setDescription('To promote the advancement of the robotics and automation industry.');
    this.headerService.setBreadcrumbItems([
      {label: 'Membership', url: '/membership'}
    ]);

  }

}
