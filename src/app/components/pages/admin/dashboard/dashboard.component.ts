import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class PageAdminDashboardComponent implements OnInit {
  public events = [
    {
      title: 'event 1',
      date: Date.now(),
      daysRemaining: 0
    },
    {
      title: 'event 2',
      date: Date.now(),
      daysRemaining: 0
    },
    {
      title: 'event 3',
      date: Date.now(),
      daysRemaining: 0
    },
  ];

  public sliderClass = {
    display: 'none !important'
  };

  public summary  = [
    {
      i: 'fas fa-users',
      label: 'Total members',
      value: 0,
    },
    {
      i: 'fas fa-user-check',
      label: 'Active members',
      value: 0,
    },
    {
      i: 'fas fa-user-plus',
      label: 'New members',
      value: 0,
    },
    {
      i: 'fas fa-user-minus',
      label: 'Closed accounts',
      value: 0,
    },
  ];

  public todos = [
    {
      label: 'Todo label',
      tick: true,
    },
    {
      label: 'Todo label',
      tick: false,
    },
    {
      label: 'Todo label',
      tick: false,
    },
    {
      label: 'Todo label',
      tick: false,
    },
    {
      label: 'Todo label',
      tick: false,
    },
  ];

  public activities = [
    {
      icon: 'fas fa-cog',
      sections: ['Members', 'Accounts'],
      time: this.timePipe(Date.now()),
      action: 'Deleted account MYRAS00001'
    },
    {
      icon: 'fas fa-cog',
      sections: ['Content editor', 'Activities'],
      time: this.timePipe(Date.now() - 1000000),
      action: 'Posted new Event (MyRAS meeting)'
    },
    {
      icon: 'fas fa-cog',
      sections: ['Content editor', 'Home'],
      time: this.timePipe(Date.now() - 3000000),
      action: 'Updated sponsors logo'
    },
  ];

  public data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'User activity',
            data: [28, 48, 40, 19, 86, 27, 90],
            borderColor: 'orange',
            backgroundColor: 'rgba(255, 165, 0, 0.3)',
            lineTension: 0
        }
    ]
}

  private timePipe(time: number): string {
    const months = [ 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December' ];
    const date = new Date(time);
    return `${date.getHours()}:${date.getMinutes()} ${date.getDate()} ${months[date.getMonth()]}`;
  }

  public tickTodoItem(x: number) {
    this.todos[x].tick = !this.todos[x].tick;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
