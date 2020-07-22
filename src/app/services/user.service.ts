import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ROUTE_CONFIG } from '../configs/api.config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get<any>(ROUTE_CONFIG.user.getAll);
  }

  public disable(id: string, flag: string) {
    return this.http.get<any>(ROUTE_CONFIG.user.disable + `?id=${id}&flag=${flag}`);
  }
  public remove(id: string) {
    return this.http.get<any>(ROUTE_CONFIG.user.remove + `?id=${id}`);
  }

  public activateMember(userId: string) {
    return this.http.get<any>(ROUTE_CONFIG.user.activateMember + userId);
  }
}
