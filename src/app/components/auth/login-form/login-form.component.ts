import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserConnexion } from '../../../models/user-connexion';
import { UserGestionService } from '../../../service/user-gestion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: false,
  
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email!:string;
  password!:string;
  user?:UserConnexion | null;
    
    constructor(private userGestion:UserGestionService,private routes:Router){}
  onSubmit(form: NgForm){
    if(form.valid){
      this.email = form.value.email;
      this.password = form.value.password;
      this.user = this.userGestion.verifyUser(this.email,this.password)

      if (this.user) {
        console.log('Connexion réussie:');
        this.routes.navigate(['/']);

      } else {
        console.error('Utilisateur introuvable ou informations incorrectes.');
        this.routes.navigate(['/register']);
      }
    
    }
    
  }
}
