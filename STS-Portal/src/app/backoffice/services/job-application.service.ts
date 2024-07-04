import { Injectable } from '@angular/core';
import { JobApplication } from '../interfaces/job-application';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  
  private apiUrl = 'http://localhost:8080/api/jobApplications';

  constructor(private http: HttpClient) { }

  applyForJob(jobId: number, jobApplication: JobApplication): Observable<number> {
    const url = `${this.apiUrl}/${jobId}/apply`;
    return this.http.post<number>(url, jobApplication)
      .pipe(
        catchError(this.handleError<number>('applyForJob'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
