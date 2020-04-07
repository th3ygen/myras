import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, BehaviorSubject } from 'rxjs';

import { MasterService } from '../services/master.service';

import { ROUTE_CONFIG } from '../configs/api.config';

import { User } from '../models/user';

/* import { User, TEST_ACC } from '../mockup/user'; */
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  public refreshAccessToken(): Observable<any> {
    return this.http.post<any>(ROUTE_CONFIG.auth.refreshToken, { refreshToken: this.currentUserValue.refreshToken })
    .pipe(map(data => {
      if (data) {
        const u = this.currentUserValue;

        u.token = data.token;
        localStorage.setItem('currentUser', JSON.stringify(u));
        this.currentUserSubject.next(u);
    }
    }));
  }

  public register(userData): Observable<any> {
    return this.http.post<any>(ROUTE_CONFIG.auth.register, userData);
  }

  public getUser(userId: string): Observable<any> {
    return this.http.get<any>(ROUTE_CONFIG.user.getOne + userId);
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    /* return this.http.delete<any>(ROUTE_CONFIG.auth.logout)
    .pipe(map(data => {
      
    })); */

  }

  public login(username: string, password: string): Observable<any> {
    return this.http.post<any>(ROUTE_CONFIG.auth.login, {username, password})
      .pipe(map(data => {
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        this.currentUserSubject.next(data.user);
        return data.user;
      }));
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
}
