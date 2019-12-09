import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public email: string = '';
  public pass: string ='';

  public isLogin : boolean = false;

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth,public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.siUsuarioAutentificado();
  }

  siUsuarioAutentificado(){
    this.authService.isAuth().subscribe( auth =>{
      if (auth) {
        console.log("logged");
        this.isLogin = true;
      }else{
        console.log("not logged");
        this.isLogin = false;        
      }
    })
  }

  onLogin() : void{    
    
    this.authService.loginEmailUser(this.email, this.pass)
    .then((res)=> {
      this.onLoginRedirect();
      
    }).catch(err => console.log(err.message));
  }

  onLoginGoogle(){
    this.authService.loginGoogleUser().then((res)=>{
      this.onLoginRedirect();
    }).catch(err => console.log(err.message));    
  }

  onLogout(){    
    this.authService.logoutUser();
  }

  onLoginRedirect(): void{
    this.router.navigate(['inicio']);

  }

}
