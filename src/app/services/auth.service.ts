import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private mockUser = {
    loggedIn: false,

    credential: {
      username: 'adam',
      password: 'adam123'
    },

    details: {
      fullname: 'Adam Abd Aziz',
      gender: 'Male',
      dob: '20 Februaru 1997',
      uni: 'Universiti Malaysia Pahang',
      program: 'Diploma in Computer Science'
    },

    contact: {
      phone: '011223334455',
      email: 'adam.ziz@gmail.com'
    },

    member: {
      id: '18023',
      username: 'Adam',
      level: 'Student',
      active: true,
      since: '9 January 2019'
    }
  };

  public login(username: string, password: string) {
    this.mockUser.loggedIn = true;
    return ( (username === this.mockUser.credential.username) && (password === this.mockUser.credential.password) );
  }

  public getDetails() {
    return this.mockUser.details;
  }

  public getContact() {
    return this.mockUser.contact;
  }

  public getMemberInfo() {
    return this.mockUser.member;
  }

  public loggedIn(): boolean {
    return this.mockUser.loggedIn;
  }

  constructor() { }
}
