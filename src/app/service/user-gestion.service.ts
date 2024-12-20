import { Injectable } from '@angular/core';
import { UserConnexion } from '../models/user-connexion';
import { USER } from '../data/user';

@Injectable({
  providedIn: 'root'
})
export class UserGestionService {

    private users:UserConnexion[]=USER
  
    verifyUser(email: string, password: string): UserConnexion | null {
      return this.users.find(user => user.email === email && user.password === password) || null;
    }
}
