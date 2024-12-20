import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';

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

  data: any;
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    // this.getData();
    this.getDataWithErrorHandling();
  }

  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.data = response;
      });
  }

  getDataWithErrorHandling() {
    this.http.get('https://jsonplaceholder.typicode.com/invalid-url')
      .pipe(
        catchError(error => {
          console.error('Erreur détectée :', error);
          return throwError(error);  // Propagation de l'erreur
        })
      )
      .subscribe(
        response => console.log(response),
        err => console.log('Gestion de l\'erreur :', err)
      );
  }


}
