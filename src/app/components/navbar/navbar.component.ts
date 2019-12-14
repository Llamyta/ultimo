import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
declare var jQuery: any;
declare var $: any;
import Swal from "sweetalert2";
import { DataApiService } from '../../services/data-api.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public email: string = "";
  public pass: string = "";

  public isLogin: boolean = false;
  public fotoUsuario: string;
  public isAdmin: boolean = false;

  personas: any[]=[];
  constructor(
    private authService: AuthService,
    private afsAuth: AngularFireAuth,
    public afAuth: AngularFireAuth,
    private router: Router,
    private persona: DataApiService
  ) {}

  ngOnInit() {
    this.siUsuarioAutentificado();

    this.authService.isAuth().subscribe(user => {
      if (user) {
        this.fotoUsuario = user.photoURL;

        this.persona.obtenerPersonaRegistro().subscribe(resp =>{
          this.personas = resp;
          this.personas.forEach(element => {
            if (user.email == element.email) {
              this.isAdmin = true;
            }
          });
        });
      }
    });

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

  siUsuarioAutentificado() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log("logged");
        this.isLogin = true;
      } else {
        console.log("not logged");
        this.isLogin = false;
        this.isAdmin = false;
      }
    });
  }

  onLogin(): void {
    this.authService
      .loginEmailUser(this.email, this.pass)
      .then(res => {
        if (this.isAdmin) {
          this.router.navigate(["hospitales"]);    
          console.log(this.isAdmin);
                
        }else{          
          this.onLoginRedirect();
        }
        if (this.email == "" && this.pass == "") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al iniciar sesion"
          });
        }
      })
      .catch(err =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "El usuario no esta registrado o su password esta incorrecto"
        })
      );
  }

  onLoginGoogle() {
    this.authService
      .loginGoogleUser()
      .then(res => {
        this.onLoginRedirect();
      })
      .catch(err =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error en red"
        })
      );
  }

  onLogout() {
    this.authService.logoutUser();
  }

  onLoginRedirect(): void {
    this.router.navigate(["usuarios"]);
  }
}
