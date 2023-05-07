import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://your-api-url.com/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  register(username: string, password: string, email: string) {
    return this.http.post(`${this.apiUrl}/register`, { username, password, email });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }

}
