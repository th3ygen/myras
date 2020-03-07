import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-page-user-profile-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PageUserProfilePersonalComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    /* console.log(jwt_decode(this.auth.currentUserValue.token)); */
  }

}
