import { Component } from '@angular/core' ;
import {CoursesService} from './courses.service';


@Component({
  selector: 'courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  courses = ["dansk", "engelsk", "matematik"] ;

  constructor(service : CoursesService){
    this.courses = service.getCourses();
  }
}
