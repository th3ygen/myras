import { Injectable } from '@angular/core';

import { User } from '../mockup/user';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private user: User;

  public getCurrentUser(): User {
    return this.user;
  }

  public login(username: string, password: string): User {
    this.user = User.login(username, password);
    return this.user;
  }

  constructor() { }
}
