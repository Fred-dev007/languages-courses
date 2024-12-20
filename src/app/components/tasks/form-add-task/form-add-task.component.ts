import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskGroups } from '../../../models/task-groups';
import { TASKGROUPSLIST } from '../../../data/taskGroupsList';
import { TaskGroupsListService } from '../../../service/task-groups-list.service';

@Component({
  selector: 'app-form-add-task',
  standalone: false,
  
  templateUrl: './form-add-task.component.html',
  styleUrl: './form-add-task.component.css'
})
export class FormAddTaskComponent {
  @Input() task!:TaskGroups;
  taskGroupList:TaskGroups[]=[];
  constructor(private taskService:TaskGroupsListService){}
  
  sendtask(t: NgForm){
    this.taskGroupList = this.taskService.getTaskGroupList()
    console.log(t.value);
    if (this.task) {
      this.taskService.addTask(this.task.id,{ id: (this.task.id+'.'+(this.task.task.length+1)), titreTask: t.value.task, statut: false }) 
      t.value.task = ''
    }else{
      this.taskService.addLanguage({
        id: (this.taskGroupList.length+1).toString(),
        titreGroupTasks: t.value.task,
        task: [
          { id: "1.1", titreTask: "Introduction à JavaScript", statut: false },
          { id: "1.2", titreTask: "Fonctions et portées", statut: false },
          { id: "1.3", titreTask: "DOM Manipulation", statut: false },
        ],
        statut: false
      })
    }
    t.reset();
       
  }
}
