import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-pages-',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class PageAdminMembersNewComponent implements OnInit {
  public DD_ACCOUNT: SelectItem[] = [
    {
      label: 'User', value: 'user'
    },
    {
      label: 'Admin', value: 'admin'
    },
  ];
  public selectedAccLvl = 'user';
  public accountKey: string;

  public DD_PLAN: SelectItem[] = [
    {
      label: 'Regular', value: 'Regular'
    },
    {
      label: 'Corporate', value: 'Corporate'
    },
    {
      label: 'Student', value: 'Student'
    }
  ];
  public selectedPlan: string;
  public lifetime = false;
  public paid = false;

  public DD_CLUSTER: SelectItem[] = [
    {
      label: 'Government', value: 'Government'
    },
    {
      label: 'Industry', value: 'Industry'
    },
    {
      label: 'Academia', value: 'Academia'
    },
    {
      label: 'Public', value: 'Public'
    },
  ];
  public selectedCluster: string;

  public DD_TITLES: SelectItem[] = [
    {
      label: 'Mr.', value: 'Mr.'
    },
    {
      label: 'Ms.', value: 'Ms.'
    },
  ];
  public selectedTitle: string;

  public DD_PASS_OPT: SelectItem[] = [
    {
      label: 'Manual', value: false
    },
    {
      label: 'Generate', value: true
    },
  ];
  public selectedPassOpt: boolean;
  public generatedPass = 'g70x9080g7';
  public inputPass: string;

  public formChecklist = [
    {
      label: 'Account key',
      status: 'init',
      errorItem: '',

      msg: {
        error: {
          invalid: 'Invalid key'
        }
      }
    },
    {
      label: 'Fullname',
      status: 'init',
      errorItem: '',

      msg: { }
    },
    {
      label: 'Validated username',
      status: 'init',
      errorItem: 'taken',

      msg: {
        error: {
          taken: 'Username is already taken'
        }
      }
    },
    {
      label: 'Validated email',
      status: 'init',
      errorItem: '',

      msg: {
        error: {
          notValidated: 'Email appears to be invalid'
        }
      }
    },
  ];
  public checklistStatus = 'init';

  public DD_ID_TYPE: SelectItem[] = [
    {
      label: 'NRIC', value: 'nric'
    },
    {
      label: 'Passport', value: 'passport'
    },
  ];
  public selectedIdType: string;

  public dob: Date;
  constructor() { }

  ngOnInit(): void {
  }

}
