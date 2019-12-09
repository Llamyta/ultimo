import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  ci: string ='';
  nombre: string = '';
  apellido_p: string ='';
  apellido_m: string ='';
  fecha_nac: string ='';
  genero: string = '';
  tipo_sangre: string ='';  
  public email: string = '';
  public pass: string ='';
  organos: string = '';
  sangre: string = '';

  constructor(public afAuth: AngularFireAuth, private router: Router, private authService:AuthService) { }

  ngOnInit() {
  }

  onAddUser(){
    this.authService.registerUser(this.email, this.pass).then(res =>{
      this.router.navigate(['inicio']);
    }).catch(err => console.log(err.message));
  }
  
  onLoginRedirect(): void{
    this.router.navigate(['inicio']);

  }

  onLoginGoogle(){
    this.authService.loginGoogleUser().then((res)=>{
      this.onLoginRedirect();
    }).catch(err => console.log(err.message));    
  }

}
