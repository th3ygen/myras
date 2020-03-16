import { Component, OnInit } from '@angular/core';

import { MasterService } from '../../../services/master.service';

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

  constructor(private master: MasterService, private headerService: PageHeaderServiceService) { }

  initTeam(): void {
    this.team.push({
      level: 0,
      name: 'Dr Ishkandar Bin Baharin',
      title: 'President',
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
    });

    this.team.push({
      level: 1,
      name: 'Prof. Zamri Bin Mohamed',
      title: 'Vice President',
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
    });

    this.team.push({
      level: 1,
      name: 'Dr. Mohd Azizi Abdul Rahman',
      title: 'Hon. Secretary',
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
    });

    this.team.push({
      level: 1,
      name: 'Mr. Abdul Muhaimin Zamri',
      title: 'Asst. Secretary',
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
    });

    this.team.push({
      level: 1,
      name: 'Dr. Abdul Hadi Abdul Rahman',
      title: 'Treasurer',
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
    });

    this.team.push({
      level: 2,
      name: 'Ir. Max Ong Chong Hup',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Mr. Raghunathan Kuppusamy',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Mr. Mohd Bazli Bahar',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Mr. Chu Chee Seng',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Mr. Syed Zaini Putra Aljamalullail Syed Yusof',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Mr. Tim Lim',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Dr. Syafiq Fauzi Kamarulzaman',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Mr. Jonathan Kan',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Dr. Yeong Che Fai',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Dr. Syamimi Shamsuddin',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Mrs. Ainil Fidrah Mohd Ghazali',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Mr. Azharuddin Bin Zahamail',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Mr. Ahmad Khairi Bin Hamzah',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Mr. Hamidi Bin Maulod',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Mohammed Norwin Bin Ishkandar Amir',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Asyraf Bin Abdul Rahman',
      title: 'Exco',
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
    });

    this.team.push({
      level: 2,
      name: 'Matthew Troniak',
      title: 'Exco',
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
    });

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
