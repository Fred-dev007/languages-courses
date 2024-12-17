import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-affiche-details-language',
  standalone: false,
  
  templateUrl: './affiche-details-language.component.html',
  styleUrl: './affiche-details-language.component.css'
})
export class AfficheDetailsLanguageComponent {
  @Input() selectedLanguage!:string;
  fontSizetext: number = 20

}
