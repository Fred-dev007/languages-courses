import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-register-form',
  standalone: false,

  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  inscriptionForm = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    profession: new FormControl('', [Validators.required]),
    motDePass: new FormControl('', [Validators.required, Validators.minLength(6)]),
    motDePass_confirmation: new FormControl('', [Validators.required]),
  })

  constructor(private userService: UserService) { }

  onSubmit() {
    if (this.inscriptionForm.valid) {
      console.log('Données du formulaire :', this.inscriptionForm.value);
  
      if (this.motDePassCorrespond()) {
  
        this.userService.addUser(this.inscriptionForm.value).subscribe(
          (response) => {
            console.log('Utilisateur ajouté avec succès :', response);
          },
          (error) => {
            console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
          }
        );
      } else {
        console.log('Les mots de passe ne correspondent pas.');
      }
    } else {
      console.log('Le formulaire est invalide');
    }
  }
  
  motDePassCorrespond() {
    return this.inscriptionForm.value.motDePass === this.inscriptionForm.value.motDePass_confirmation
  }
}
