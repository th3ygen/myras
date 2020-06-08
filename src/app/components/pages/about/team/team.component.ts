import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-page-about-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class PageAboutTeamComponent implements OnInit {
  data: TreeNode[];

  orgChart: TreeNode[];

  orgChartLv0: TreeNode[];
  orgChartLv1: TreeNode[];
  orgChartLv2: TreeNode[];

  constructor() { }

  ngOnInit(): void {
    this.orgChartLv2 = [
      {
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
        expanded: true,
      },
    ];

    this.orgChartLv1 = [
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
        expanded: true,
      },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
        expanded: true,
        children: []
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
          ],
          image: '../../../../../assets/svg/undraw_male_avatar_323b.svg'
        },
        expanded: true,
      },
    ];

    this.orgChartLv0 = [
      {
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
              link: 'https://web.whatsapp.com'
            },
            {
              icon: 'fab fa-twitter',
              link: 'https://twitter.com'
            },
          ],
          image: '../../../../../assets/photo/prof-iskandar.jpg'
        },
        expanded: true,
        children: this.orgChartLv1
      }
    ];
  }

}
