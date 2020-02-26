import { Injectable } from '@angular/core';

import { User, TEST_ACC } from '../mockup/user';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private static TEST_MODE = false;
  private user: User;

  public getCurrentUser(): User {
    return (AuthService.TEST_MODE ? TEST_ACC : this.user);
  }

  public login(username: string, password: string): User {
    this.user = User.login(username, password);
    return this.user;
  }

  constructor() { }
}
