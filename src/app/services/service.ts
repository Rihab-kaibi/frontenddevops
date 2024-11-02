import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Instructor } from '../models/Instructor';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8089/api/instructor'; // Correct the API URL to match your endpoints

  constructor(private http: HttpClient) {}

  getInstructors(): Observable<Instructor[]> { // Specify the return type
      return this.http.get<Instructor[]>(`${this.apiUrl}/all`);
  }
}
