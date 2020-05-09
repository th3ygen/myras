import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../../services/master.service';
import { TreeNode } from 'primeng/api';

import { PageHeaderServiceService } from '../../../services/page-header-service.service';

@Component({
  selector: 'app-page-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class PageAboutComponent implements OnInit {
  public team = [];

  public top = [];
  public mid = [];
  public bot = [];

  public org: TreeNode[] = [];

  constructor(private master: MasterService, private headerService: PageHeaderServiceService) { }

  initTeam(): void {
    this.org = [{
      label: 'President',
      data: {
        name: 'Dr Ishkandar Bin Baharin',
        contacts: [
          {
            icon: 'fas fa-at',
            link: ''
          },
          {
            icon: 'fab fa-whatsapp',
            link: ''
          },
          {
            icon: 'fab fa-twitter',
            link: ''
          },
        ]
      },
      type: 'member',
      expanded: true,
      children: [
        {
          label: 'Vice President',
          data: {
            name: 'Prof. Zamri Bin Mohamed',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
          children: [
            {
              label: 'Hon. Secretary',
              data: {
                name: 'Dr. Mohd Azizi Abdul Rahman',
                contacts: [
                  {
                    icon: 'fas fa-at',
                    link: ''
                  },
                  {
                    icon: 'fab fa-whatsapp',
                    link: ''
                  },
                  {
                    icon: 'fab fa-twitter',
                    link: ''
                  },
                ]
              },
              type: 'member',
              expanded: true,
            },
            {
              label: 'Asst. Secretary',
              data: {
                name: 'Mr. Abdul Muhaimin Zamri',
                contacts: [
                  {
                    icon: 'fas fa-at',
                    link: ''
                  },
                  {
                    icon: 'fab fa-whatsapp',
                    link: ''
                  },
                  {
                    icon: 'fab fa-twitter',
                    link: ''
                  },
                ]
              },
              type: 'member',
              expanded: true,
            },
            {
              label: 'Treasurer',
              data: {
                name: 'Dr. Abdul Hadi Abdul Rahman',
                contacts: [
                  {
                    icon: 'fas fa-at',
                    link: ''
                  },
                  {
                    icon: 'fab fa-whatsapp',
                    link: ''
                  },
                  {
                    icon: 'fab fa-twitter',
                    link: ''
                  },
                ]
              },
              type: 'member',
              expanded: true,
            },
          ]
        },
        
        /* {
          label: 'Exco',
          data: {
            name: 'Ir. Max Ong Chong Hup',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Mr. Raghunathan Kuppusamy',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Mr. Mohd Bazli Bahar',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Mr. Chu Chee Seng',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Mr. Syed Zaini Putra Aljamalullail Syed Yusof',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Mr. Tim Lim',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Dr. Syafiq Fauzi Kamarulzaman',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Mr. Jonathan Kan',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Dr. Yeong Che Fai',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Dr. Syamimi Shamsuddin',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Mrs. Ainil Fidrah Mohd Ghazali',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Mr. Azharuddin Bin Zahamail',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Mr. Ahmad Khairi Bin Hamzah',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Mr. Hamidi Bin Maulod',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Mohammed Norwin Bin Ishkandar Amir',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Asyraf Bin Abdul Rahman',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        },
        {
          label: 'Exco',
          data: {
            name: 'Matthew Troniak',
            contacts: [
              {
                icon: 'fas fa-at',
                link: ''
              },
              {
                icon: 'fab fa-whatsapp',
                link: ''
              },
              {
                icon: 'fab fa-twitter',
                link: ''
              },
            ]
          },
          type: 'member',
          expanded: true,
        } */
      ]
    }];
  }

  ngOnInit() {
    this.initTeam();

    this.team.forEach(e => {
      switch (e.level) {
        case 0:
          this.top.push(e);
          break;
        case 1:
          this.mid.push(e);
          break;
        case 2:
          this.bot.push(e);
      }
    });

    this.master.setActive(4);

    this.headerService.setHeader('About');
    this.headerService.setBody('Get In Touch With Us');
    this.headerService.setDescription('To promote the advancement of the robotics and automation industry.');
    this.headerService.setBreadcrumbItems([
      {label: 'About', url: '/about'}
    ]);
  }

}
