import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: false,
  
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  languages:string[] = [
    'TypeScript',
    'Swift',
    'Kotlin',
    'Go (Golang)',
    'PHP',
    'C++',
    'Java',
    'Python',
    'JavaScript'
  ];

  showLanguages:boolean = true;

  selectedLanguage: string ='';

  textColor: string = 'blue';
  fontSize: number = 24
  fontSizetext: number = 20

  recupValue(param:string){
    this.selectedLanguage=param;
  }
}
