import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Moments } from '../interfaces/Moments';
import { environments } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environments.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/moments`

  constructor(private http: HttpClient) { }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
  }
}
