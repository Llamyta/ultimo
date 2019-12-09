import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isLogin : boolean = false;

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth) { }

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

  onLogout(){
    this.afsAuth.auth.signOut();
  }

}
