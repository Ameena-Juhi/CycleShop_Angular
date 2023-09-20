import { Component } from '@angular/core';
import { student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student';

  students:student[]=[
    {
      id: 1,
      name: 'Ameena',
      DOB: new Date('2002-10-05'),
      course: 'ECE',
      fees: 12000},
      {
        id: 2,
      name: 'Chaitanya',
      DOB: new Date('2001-01-15'),
      course: 'CSE',
      fees: 10000
      },
      {
        id: 3,
      name: 'Revathi',
      DOB: new Date('1992-01-15'),
      course: 'EEE',
      fees: 5000
      },
      {
        id: 4,
      name: 'Ankan',
      DOB: new Date('2000-12-15'),
      course: 'ETM',
      fees: 1000
      }
    ]
}
