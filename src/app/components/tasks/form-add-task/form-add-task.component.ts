import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskGroups } from '../../../models/task-groups';
import { TASKGROUPSLIST } from '../../../data/taskGroupsList';

@Component({
  selector: 'app-form-add-task',
  standalone: false,
  
  templateUrl: './form-add-task.component.html',
  styleUrl: './form-add-task.component.css'
})
export class FormAddTaskComponent {
 @Input() task!:TaskGroups;
  tasks:string = "";
  tasklist = TASKGROUPSLIST;
  
  sendtask(t: NgForm){
    console.log(t.value);
    
    this.tasks='';
  }
}
