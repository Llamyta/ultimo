import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
declare var jQuery: any;
declare var $: any;
import Swal from 'sweetalert2'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public email: string = '';
  public pass: string ='';

  public isLogin : boolean = false;
  public fotoUsuario: string;

  constructor(private authService: AuthService, private afsAuth: AngularFireAuth,public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.siUsuarioAutentificado();


    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.fotoUsuario = user.photoURL;
      }
    })

    $(document).ready(function() {
      $(".menu-toggle").click(function() {
        $("nav").toggleClass("active");
      });
    });
    const menu = document.getElementById("menu1");
    const altura = menu.offsetTop;
    // const altura = 150;
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > altura) {
        menu.classList.add("color-nav");
      } else {
        menu.classList.remove("color-nav");
        menu.classList.add("color-nav2");
      }
    });
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
      if (this.email == "" && this.pass == "") {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al iniciar sesion'        
        })
      }      
    }).catch(err => 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El usuario no esta registrado o su password esta incorrecto'        
      }));
  }

  onLoginGoogle(){
    this.authService.loginGoogleUser().then((res)=>{
      this.onLoginRedirect();
    }).catch(err => 
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error en red'        
      }));    
  }

  onLogout(){    
    this.authService.logoutUser();
  }

  onLoginRedirect(): void{
    this.router.navigate(['usuarios']);

  }

}
