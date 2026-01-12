import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-guidelines',
  imports: [CommonModule],
  templateUrl: './guidelines.html',
  styleUrl: './guidelines.css',
})
export class Guidelines {
  navItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'start-here', label: 'Start Here (10-Min Setup)' },
    { id: 'roles', label: 'Roles Mapping' },
    { id: 'mini-example', label: 'Mini Example' },
    { id: 'config', label: 'Scrum Configuration' },
    { id: 'epics', label: 'Defining Epics' },
    { id: 'stories', label: 'User Stories' },
    { id: 'backlogs', label: 'Backlog Management' },
    { id: 'taskboard', label: 'Taskboard Execution' },
  ];

}
