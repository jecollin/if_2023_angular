import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Student} from "../model/Student";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  private readonly APPLICATION_JSON = 'application/json';
  private readonly studentURL: string; private readonly option = {headers: this.httpHeaders };
    private http: any;

    constructor(private readonly httpClient: HttpClient, private readonly studentService: StudentServiceService, private router: Router) {
      this.studentURL = 'http://localhost:52001/students';
    }

  public save(student: Student) {
    const headers = { 'content-type': 'application/json'};
      // @ts-ignore
      return this.http.post<Student>(this.studentURL, student, this.option); }
  private get httpHeaders(): HttpHeaders {
    return new HttpHeaders( {
        'Content-Type': this.APPLICATION_JSON,
        'Accept': this.APPLICATION_JSON,
        'Access-Control-Allow-Origin' : "*" });
  }

  /*
  onSubmit(): void { if (this.form.valid) {
    this.submitted = true;
    this.studentToBeCreated = this.form.value;
    this.studentService.save(this.studentToBeCreated).subscribe(res => { this.router.navigate(['/students']); });
  } }

   */
}
