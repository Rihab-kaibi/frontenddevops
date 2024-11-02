import { Component, OnInit } from '@angular/core';
import { Instructor } from '../models/Instructor';
import { ApiService } from '../services/service';
import { CommonModule } from '@angular/common'; // Ajoutez ceci

@Component({
  selector: 'app-instructor-list',
  template: `
        <h2>Instructors</h2>
      <table>
          <thead>
              <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of Hire</th>
                  <th>Instructor Number</th>
              </tr>
          </thead>
          <tbody>
              <tr *ngFor="let instructor of instructors">
                  <td>{{ instructor.firstName }}</td>
                  <td>{{ instructor.lastName }}</td>
                  <td>{{ instructor.dateOfHire }}</td>
                  <td>{{ instructor.numInstructor }}</td>
              </tr>
          </tbody>
      </table>
  `,
  standalone: true,
  providers: [ApiService],
  imports: [CommonModule] // Ajoutez CommonModule ici

})
export class InstructorListComponent implements OnInit {
  instructors: Instructor[] = []; // Use the Instructor type

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.apiService.getInstructors().subscribe({
          next: (data) => {
              this.instructors = data;
          },
          error: (err) => {
              console.error('Error fetching instructors:', err);
          }
      });
  }
}
