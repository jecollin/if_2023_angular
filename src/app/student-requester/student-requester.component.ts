import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Student} from "../model/Student";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-requester',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './student-requester.component.html',
  styleUrl: './student-requester.component.css'
})
export class StudentRequesterComponent {
  form: FormGroup = new FormGroup({});
  submitted = false;
  studentToBeCreated: Student | any;

  constructor(private readonly httpClient: HttpClient, private router: Router) { }

  onSubmit(): void { this.submitted = true; }

  loadForm(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      source: new FormControl('',
        Validators.required),
      dest: new FormControl('',
        Validators.required),
      rate: new FormControl(''),
      amount: new FormControl('',
        Validators.required),
      dateExchange: new FormControl(new Date()) });
  }

  ngOnInit(): void { this.loadForm(); }

  get f() { return this.form.controls; }

}
