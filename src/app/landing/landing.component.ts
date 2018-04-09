import { Component, OnInit } from '@angular/core';
import { AppService } from '../core/services/app.service';
import { Task } from '../core/tasks/tasks';

@Component({
  selector: 'ng-e-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  exerciseTasks: Array<Task>;
  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.exerciseTasks = this.appService.getTasks();
  }

}
