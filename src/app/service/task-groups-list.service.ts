import { Injectable } from '@angular/core';
import { TaskGroups } from '../models/task-groups';
import { TASKGROUPSLIST } from '../data/taskGroupsList';
import { UserConnexion } from '../models/user-connexion';
import { USER } from '../data/user';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskGroupsListService {
  private taskGroupList:TaskGroups[]=TASKGROUPSLIST
  
  getTaskGroupList():TaskGroups[]{
    return this.taskGroupList;
  }

  getTaskById(id:string):TaskGroups | undefined{
    return this.taskGroupList.find((task)=>task.id == id) 
  }

  addTask(id: string, newTask: Task) {

    this.taskGroupList.find((task)=>task.id == id)?.task.push(newTask);
    console.log(newTask);
    
    console.log(this.taskGroupList);
    
    return true; // Tâche ajoutée avec succès
  
}

  addLanguage(newLanguage:TaskGroups){
    this.taskGroupList.push(newLanguage)
  }

  
}
