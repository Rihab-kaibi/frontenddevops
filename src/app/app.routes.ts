import { Routes } from '@angular/router';
import { InstructorListComponent } from './instructor-list1/instructor-list1.component';
export const routes: Routes = [
  { path: 'instructors', component: InstructorListComponent },
    { path: '', redirectTo: '/instructors', pathMatch: 'full' }, // redirige vers la liste des instructeurs par défaut
    { path: '**', redirectTo: '/instructors' } // redirige vers la liste des instructeurs pour les routes inconnues

];
