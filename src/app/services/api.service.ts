import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:8000/api';


  constructor(private http: HttpClient) { }

 
  getPatients(): Observable<any> {
    return this.http.get(`${this.url}/patients`);
  }

  getPatient(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/patients/${id}`);
  }

  createPatient(patient: any): Observable<any> {
    return this.http.post<any>(`${this.url}/patients`, patient);
  }

  updatePatient(id: number, patient: any): Observable<any> {
    return this.http.put<any>(`${this.url}/patients/${id}`, patient);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/patients/${id}`);
  }


  getVisits(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/visits`);
  }

  getVisit(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/visits/${id}`);
  }

  createVisit(visit: any): Observable<any> {
    return this.http.post<any>(`${this.url}/visits`, visit);
  }

  updateVisit(id: number, visit: any): Observable<any> {
    return this.http.put<any>(`${this.url}/visits/${id}`, visit);
  }

  deleteVisit(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/visits/${id}`);
  }

}
