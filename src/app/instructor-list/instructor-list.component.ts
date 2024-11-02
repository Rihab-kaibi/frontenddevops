import { Component } from '@angular/core';
import { ApiService } from '../services/service';

@Component({
  selector: 'app-instructor-list',
  standalone: true,
  imports: [],
  templateUrl: './instructor-list.component.html',
  styleUrl: './instructor-list.component.css'
})
export class InstructorListComponent {
  instructors: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
      this.apiService.getInstructors().subscribe(data => {
          this.instructors = data;
      });
  }
}
