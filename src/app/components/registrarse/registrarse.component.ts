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

  onLogin() : void{
    console.log(this.ci);
    console.log(this.fecha_nac);
    console.log(this.genero);
    console.log(this.organos);
    
    
    
    // this.authService.loginEmailUser(this.email, this.pass)
    // .then((res)=> {
    //   this.router.navigate(['inicio']);
    // }).catch(err => console.log(err.message));
  }

  onLoginGoogle(){
    this.authService.loginGoogleUser().then((res)=>{
      this.router.navigate(['inicio']);
    }).catch(err => console.log(err.message));
    // this.afAuth.auth.signInWithPopup( new auth.GoogleAuthProvider());
  }

  onLogout(){
    // this.afAuth.auth.signOut();
    this.authService.logoutUser();
  }

}
