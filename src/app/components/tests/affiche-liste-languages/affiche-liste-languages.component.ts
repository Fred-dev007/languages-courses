import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-affiche-liste-languages',
  standalone: false,
  
  templateUrl: './affiche-liste-languages.component.html',
  styleUrl: './affiche-liste-languages.component.css'
})
export class AfficheListeLanguagesComponent {
  @Input() listeLanguages!:string[];
  @Output() sendValue = new EventEmitter<string>();
  selectedLanguage?:string;

  selectLanguage(param:string){
    this.selectedLanguage = param;
    console.log(param);
    this.sendValue.emit(param);
  }
}
