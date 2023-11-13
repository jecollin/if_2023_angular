import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MainNavbarComponent} from "./main-navbar/main-navbar.component";
import {HttpClient} from "@angular/common/http";
import {Student} from "./model/Student";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainNavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'if_2023_angular';
  private URL_STUDENT = 'http://localhost:52001';
  studentList: Student[];
  constructor(private readonly httpClient: HttpClient) {}

  getAllStudents(): Observable<Student[]> {
    const url = `${this.URL_STUDENT}/students`;
    return this.httpClient.get<Student[]>(url);
  }

  ngOnInit(): void {
    this.getAllStudents()
      .pipe() // Vous pouvez ajouter des opérateurs RxJS ici si nécessaire
      .subscribe(value => {
        this.studentList = value;
      });

  }

}


