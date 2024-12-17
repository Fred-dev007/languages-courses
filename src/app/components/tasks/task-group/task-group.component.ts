import { Component, Input } from '@angular/core';
import { TaskGroups } from '../../../models/task-groups';

@Component({
  selector: 'app-task-group',
  standalone: false,
  
  templateUrl: './task-group.component.html',
  styleUrl: './task-group.component.css'
})
export class TaskGroupComponent {
  @Input() list!:TaskGroups;
}
