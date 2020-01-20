function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/campaniasdonacion/campaniasdonacion.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/campaniasdonacion/campaniasdonacion.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCampaniasdonacionCampaniasdonacionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"seccion\">\r\n    <div>\r\n        <h1 class=\"encabezado\">Campaña de Donacion</h1>\r\n    </div>\r\n    <div style=\" padding: 60px 0 60px 0;\">\r\n        <div class=\"container\">\r\n            <div class=\"row row-cols-1 row-cols-md-3\">\r\n                <div class=\"col mb-4\" *ngFor=\"\r\n            let item of personaSolicitud | filtraSangre: tipoSangreUsuario\r\n          \">\r\n                    <div class=\"card\" data-toggle=\"modal\" data-target=\"#exampleModal1\" (click)=\"enviarIdSolicitud(item.ci)\" *ngIf=\"estaLogeado == true\">\r\n                        <img src=\"{{ item.foto }} \" class=\"card-img-top imagen\" alt=\"...\" />\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                Nombre: {{ item.nombre }} {{ item.apellid_p }} {{ item.apellid_m }}\r\n                            </h5>\r\n                            <h5 class=\"card-title\">\r\n                                Cantidad Donadores: {{ item.cantidad_donadores }}\r\n                            </h5>\r\n                            <h5 class=\"card-title\">Tipo de Sangre: {{ item.tipo_sangre }}</h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col mb-4\" *ngFor=\"let item of sinLogeoPersonas\">\r\n                    <div class=\"card\" data-toggle=\"modal\" data-target=\"#exampleModal\" *ngIf=\"estaLogeado == false\">\r\n                        <img src=\"{{ item.foto }} \" class=\"card-img-top\" alt=\"...\" />\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                Nombre: {{ item.nombre }} {{ item.apellid_p }} {{ item.apellid_m }}\r\n                            </h5>\r\n                            <h5 class=\"card-title\">\r\n                                Cantidad Donadores: {{ item.cantidad_donadores }}\r\n                            </h5>\r\n                            <h5 class=\"card-title\">Tipo de Sangre: {{ item.tipo_sangre }}</h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"modal fade\" id=\"exampleModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Campaña de Donadores</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n            </div>\r\n            <form #formRegister=\"ngForm\" (ngSubmit)=\"guardar(formRegister)\">\r\n                <div class=\"modal-body\">\r\n                    <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"hidden\" [(ngModel)]=\"this.citas.seleccionarCitasRegistro.id_usuario\" name=\"id_usuario\" />\r\n                                    <input type=\"hidden\" [(ngModel)]=\"\r\n                      this.citas.seleccionarCitasRegistro.id_solicitud\r\n                    \" name=\"id_solicitud\" />\r\n                                    <input type=\"hidden\" [(ngModel)]=\"\r\n                      this.citas.seleccionarCitasRegistro.estado\r\n                    \" name=\"estado\" />\r\n\r\n                                    <label for=\"fecha\">Seleccione la fecha para la Donacion</label\r\n                  >\r\n                  <input\r\n                    name=\"fecha\"\r\n                    type=\"date\"\r\n                    class=\"form-control\"\r\n                    id=\"fecha\"\r\n                    required\r\n                    [(ngModel)]=\"this.citas.seleccionarCitasRegistro.fecha\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"hora\">Seleccione la Hora para la Donacion</label>\r\n                                    <input name=\"hora\" type=\"time\" class=\"form-control\" id=\"hora\" required [(ngModel)]=\"this.citas.seleccionarCitasRegistro.hora\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">\r\n          Cerrar\r\n        </button>\r\n                <button type=\"submit\" class=\"btn btn-danger\">\r\n          Agendar Cita\r\n        </button>\r\n            </form>\r\n            <div class=\"modal-footer\"></div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/donaciones/donaciones.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/donaciones/donaciones.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDonacionesDonacionesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"seccion\" style=\"padding-top: 10%;\">\r\n    <div class=\"centrear\">\r\n        <h1 class=\"encabezado\">Personas a las que haz ayudado</h1>\r\n    </div>\r\n    <div class=\"container\" style=\"padding:5% 0 5% 0;\">\r\n        <div class=\"card\" style=\"width: 18rem;\">\r\n            <img src=\"../../../assets/images/person1.jpg\" class=\"card-img-top\" alt=\"...\" style=\"padding: 0 2% 2% 2%;\">\r\n            <div class=\"card-body\">\r\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n<!--esto solo debe verse si es donador de organos-->\r\n<section class=\"seccion\" style=\"padding-top: 10%;\">\r\n    <div class=\"centrear\">\r\n        <h1 class=\"encabezado\">Estas personas necesitan tu ayuda</h1>\r\n    </div>\r\n    <div class=\"container\" style=\"padding:5% 0 5% 0;\">\r\n        <div class=\"row row-cols-1 row-cols-md-3\">\r\n            <div class=\"col mb-4\" *ngFor=\"let item of donadores\">\r\n                <div class=\"card\">\r\n                    <div style=\"text-align: center;\">\r\n                        <img src=\"{{ item.foto }} \" class=\"card-img-top\" alt=\"...\" />\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title\">Nombre completo: {{ item.nombre }} {{ item.apellido_m }}</h5>\r\n                        <h5 class=\"card-title\">Necesita: {{ item.organo }}</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/donacionorganos/donacionorganos.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/donacionorganos/donacionorganos.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDonacionorganosDonacionorganosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"seccion\" class=\"imagenfondo mr-auto\">\r\n    <div class=\"centrear\" style=\"text-align: left; padding-top:20%; padding-left:55%\" >\r\n        <h1>Tu tambien puedes</h1>\r\n        <h1>ser un Heroe...</h1>\r\n        <button type=\"button\" class=\"btn btn-danger\">Quiero Donar</button>\r\n    </div>\r\n\r\n</div>\r\n<section id=\"seccion\">\r\n    <div class=\"centreado\">\r\n        <h1 class=\"encabezado\">Pasos para solicitar Donadores</h1>\r\n    </div>\r\n    <div class=\"centreado container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <img class=\"imga\" src=\"../../../assets/images/Requisitosdonarorganos.png\">\r\n                <p>Ser mayor de 21 años</p>\r\n\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <img  class=\"imga\"  src=\"../../../assets/images/Requisitosdonarorganos2.png\">\r\n                <p></p>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <img  class=\"imga\" src=\"../../../assets/images/Requisitosdonarorganos3.png\">\r\n                <p>Comparte en tus redes sociales</p>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <img  class=\"imga\" src=\"../../../assets/images/Requisitosdonarorganos4.png\">\r\n                <p>Gozar de buena salud</p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</section>\r\n<section id=\"seccion\">\r\n    <div class=\"centreado\">\r\n        <h1 class=\"encabezado\">Que Organos puedo Donar?</h1>\r\n    </div>\r\n    <div class=\"centreado container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <img src=\"../../../assets/images/Untitled-1.png\">\r\n\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <img src=\"../../../assets/images/Untitled-2.png\">\r\n                <p></p>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    \r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Footer -->\r\n<footer class=\"page-footer font-small unique-color-dark\" style=\"background: #2E2E2E !important;\">\r\n\r\n\r\n    <!-- Footer Links -->\r\n    <div class=\"container text-center text-md-left\" style=\"padding-top: 5%;\">\r\n\r\n        <!-- Grid row -->\r\n        <div class=\"row mt-3\">\r\n\r\n            <!-- Grid column -->\r\n            <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4\">\r\n\r\n                <!-- Content -->\r\n                <h6 class=\"text-uppercase font-weight-bold\">Quienes somos?</h6>\r\n                <p>Somos una empresa dedicada a la promocion y sensibilizacion acerca de los procesos de gestion y donacion de sangre.</p>\r\n\r\n            </div>\r\n            <!-- Grid column -->\r\n\r\n\r\n\r\n            <!-- Grid column -->\r\n            <div class=\"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4\">\r\n\r\n                <!-- Links -->\r\n                <h6 class=\"text-uppercase font-weight-bold\">Redes Sociales</h6>\r\n                <p>\r\n                    <i class=\"fab fa-facebook-f white-text mr-4\"> </i>Siguenos en Facebook\r\n                </p>\r\n                <p>\r\n                    <i class=\"fab fa-twitter white-text mr-4\"> </i>Siguenos en Twitter\r\n                </p>\r\n                <p>\r\n                    <i class=\"fab fa-instagram white-text mr-4\"></i>Siguenos en Instagram\r\n                </p>\r\n\r\n            </div>\r\n            <!-- Grid column -->\r\n\r\n            <!-- Grid column -->\r\n            <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">\r\n\r\n                <!-- Links -->\r\n                <h6 class=\"text-uppercase font-weight-bold\">Contactanos</h6>\r\n                <p>\r\n                    <i class=\"fas fa-envelope mr-3\"></i>Donasangre@gmail.com\r\n                </p>\r\n                <p>\r\n                    <i class=\"fas fa-home mr-3\"></i> Cochabamba, NY 10012, Bolivia\r\n                </p>\r\n\r\n            </div>\r\n            <!-- Grid column -->\r\n\r\n        </div>\r\n        <!-- Grid row -->\r\n\r\n    </div>\r\n\r\n</footer>\r\n<!-- Footer -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main role=\"main\">\r\n\r\n    <section>\r\n        <div id=\"seccion\" class=\"imagenfondo\">\r\n            <div class=\"centrear\">\r\n                <div class=\"animated flipInX delay-1s\">\r\n\r\n                    <h1>Dona Sangre</h1>\r\n                    <h1>para Salvar Vidas...</h1>\r\n\r\n                </div>\r\n                <a class=\"btn btn-danger\" href=\"../registrarse\" style=\"color: white;\">Quiero Donar</a>\r\n            </div>\r\n\r\n        </div>\r\n    </section>\r\n    <section>\r\n        <div id=\"seccion\">\r\n            <div>\r\n                <h1 class=\"encabezado\">¿Por qué donar sangre?</h1>\r\n                <div class=\"row separador-seccion\">\r\n                    <div class=\"col-md-3 \">\r\n                        <div class=\"flip-card mx-auto\">\r\n                            <div class=\"flip-card-inner\">\r\n                                <div class=\"flip-card-front\">\r\n                                    <img src=\"../../../assets/images/imagenseccionmotivos.png\" class=\"img-fluid\" roundedCircle>\r\n                                    <!-- <Image src={img} roundedCircle class=\"img-fluid\" /> -->\r\n                                </div>\r\n                                <div class=\"flip-card-back\">\r\n                                    <p>La sangre es impresindible en situaciones de urgencia</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"flip-card mx-auto\">\r\n                            <div class=\"flip-card-inner\">\r\n                                <div class=\"flip-card-front\">\r\n                                    <img src=\"../../../assets/images/imagenseccionmotivos2.png\" class=\"img-fluid\" roundedCircle>\r\n                                    <!-- <Image src={img} roundedCircle class=\"img-fluid\" /> -->\r\n                                </div>\r\n                                <div class=\"flip-card-back\" style=\"background-color:  #4CBCB3;\">\r\n                                    <p>Es necesaria durante partos y operaciones</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"flip-card mx-auto\">\r\n                            <div class=\"flip-card-inner\">\r\n                                <div class=\"flip-card-front\">\r\n                                    <img src=\"../../../assets/images/imagenseccionmotivos3.png\" class=\"img-fluid\" roundedCircle>\r\n                                    <!-- <Image src={img} roundedCircle class=\"img-fluid\" /> -->\r\n                                </div>\r\n                                <div class=\"flip-card-back\" style=\"background-color: #ff3547;\">\r\n                                    <p>Disminuye el riesgo de enfermedades cardiovasculares</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"flip-card mx-auto\">\r\n                            <div class=\"flip-card-inner\">\r\n                                <div class=\"flip-card-front\">\r\n                                    <img src=\"../../../assets/images/imagenseccionmotivos4.png\" class=\"img-fluid\" roundedCircle>\r\n                                    <!-- <Image src={img} roundedCircle class=\"img-fluid\" /> -->\r\n                                </div>\r\n                                <div class=\"flip-card-back\" style=\"background-color: #6EC38F;\">\r\n                                    <p>Nos informa de nuestro estado de salud actual</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section>\r\n        <div id=\"seccion\" class=\"imagenfondo2\">\r\n            <div class=\"container\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"ml-auto\" style=\"padding-top: 10%;\">\r\n                        <div>\r\n                            <h2 class=\"encabezado\">Pasos para Donar Sangre</h2>\r\n                            <img src=\"../../../assets/images/imagen.png\" style=\"height: 380px;\" class=\"im\" />\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div>\r\n\r\n    </section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hospitales/hospitales.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hospitales/hospitales.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHospitalesHospitalesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"seccion\">\r\n  <div class=\"centreado\">\r\n    <h1 class=\"encabezado\">Formulario de Registro de Hospitales</h1>\r\n  </div>\r\n  <div>\r\n    <form\r\n      #formSolicitud=\"ngForm\"\r\n      (ngSubmit)=\"guardarSolicitud(formSolicitud)\"\r\n      class=\"needs-validation\"\r\n    >\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6 has-danger\">\r\n          <label for=\"hospital\">Nombre del Hospital</label>\r\n          <input\r\n            name=\"hospital\"\r\n            [(ngModel)]=\"this.hospitalesServices.seleccionarHospitales.hospital\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"hospital\"\r\n            required\r\n            placeholder=\"Nombre del Hospital\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"telefono\">Telefono</label>\r\n          <input\r\n            name=\"telefono\"\r\n            [(ngModel)]=\"this.hospitalesServices.seleccionarHospitales.telefono\"\r\n            type=\"number\"\r\n            class=\"form-control\"\r\n            id=\"telefono\"\r\n            required\r\n            placeholder=\"Telefono\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"ubicacion\">Ubicacion</label>\r\n        <input\r\n          name=\"ubicacion\"\r\n          [(ngModel)]=\"this.hospitalesServices.seleccionarHospitales.ubicacion\"\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          id=\"ubicacion\"\r\n          required\r\n          placeholder=\"Calle Bella Vista\"\r\n        />\r\n      </div>\r\n\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"horaEntrada\">Horario de Entrada</label>\r\n          <input\r\n            name=\"horario_entrada\"\r\n            [(ngModel)]=\"\r\n            this.hospitalesServices.seleccionarHospitales.horario_entrada\r\n            \"\r\n            type=\"time\"\r\n            class=\"form-control\"\r\n            id=\"horaEntrada\"\r\n            required            \r\n          />\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"horaSAlida\">Horario de Salida</label>\r\n          <input\r\n            name=\"horario_salida\"\r\n            [(ngModel)]=\"this.hospitalesServices.seleccionarHospitales.horario_salida\"\r\n            type=\"time\"\r\n            class=\"form-control\"\r\n            id=\"horaSAlida\"\r\n            required            \r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleFormControlFile1\">Imagen del Hospital</label>\r\n        <input\r\n          (change)=\"onUpload($event)\"\r\n          required\r\n          type=\"file\"\r\n          class=\"form-control-file\"\r\n          id=\"exampleFormControlFile1\"\r\n        />\r\n        <input\r\n          type=\"hidden\"\r\n          name=\"foto\"\r\n          #imagenFoto\r\n          [value]=\"urlFoto | async\"\r\n          [(ngModel)]=\"this.hospitalesServices.seleccionarHospitales.foto\"\r\n        />\r\n        <!-- <input type=\"file\" id=\"Logo\" (change)=\"onUpload($event, cualEs = 'logo')\"> -->\r\n        <div class=\"progress mt-3\">\r\n          <div\r\n            class=\"progress-bar progress-bar-striped bg-success\"\r\n            role=\"progressbar\"\r\n            [style.width]=\"(uploadPercentFoto | async) + '%'\"\r\n          ></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"centreado\" style=\"padding-top: 10%;\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-danger\"\r\n          *ngIf=\"\r\n            formSolicitud.valid == true && urlFoto | async;\r\n            else btnDisabled\r\n          \"\r\n        >\r\n          Registrarse\r\n        </button>\r\n        <ng-template #btnDisabled>\r\n          <button type=\"submit\" class=\"btn btn-danger\" disabled=\"true\">\r\n            Registrarse\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"menu-fixed\">\r\n    <header class=\"header espaciado\" id=\"menu1\">\r\n        <a [routerLink]=\"['inicio']\">\r\n            <img src=\"../../../assets/images/dona sangre.png\" width=\"150px\" height=\"auto\" alt=\"\">\r\n        </a>\r\n        <nav>\r\n            <ul>\r\n                <li routerLinkActive=\"activee\">\r\n                    <a class=\"boton-nav\" [routerLink]=\"['aprobar']\" *ngIf=\"isAdmin\">Inicio </a>\r\n                </li>\r\n                <li class=\"nav-item dropdown\" routerLinkActive=\"activee\">\r\n                    <a class=\"boton-nav dropdown-toggle\" href=\"#\" *ngIf=\"isAdmin\" id=\"navbarDropdownMenuLinkadmin\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Registrar\r\n        </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLinkadmin\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['hospitales']\">Registrar Hospitales</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['regorganos']\">Solicitud de Organos</a>\r\n                    </div>\r\n                </li>\r\n                <li routerLinkActive=\"activee\">\r\n                    <a class=\"boton-nav\" routerLink=\"inicio\" *ngIf=\"!isLogin\">Inicio </a>\r\n                </li>\r\n                <li routerLinkActive=\"activee\">\r\n                    <a class=\"boton-nav\" [routerLink]=\"['usuarios']\" *ngIf=\"isLogin && !isAdmin\">Perfil</a>\r\n                </li>\r\n                <li routerLinkActive=\"activee\">\r\n                    <a class=\"boton-nav\" [routerLink]=\"['donaciones']\" *ngIf=\"isLogin && !isAdmin\">Donaciones</a>\r\n                </li>\r\n                <li class=\"nav-item dropdown\" routerLinkActive=\"activee\" *ngIf=\"!isAdmin\">\r\n                    <a class=\"boton-nav dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Donar Sangre\r\n          </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['requisitos']\" *ngIf=\"!isLogin\">Requisitos</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['registrarse']\" *ngIf=\"!isLogin\">Registrarse</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['pntdon']\">Puntos de Donacion</a>\r\n                        <a class=\"dropdown-item\" [routerLink]=\"['campaniaDonacion']\">Campañas de Donacion</a>\r\n                    </div>\r\n                </li>\r\n                <li routerLinkActive=\"activee\" *ngIf=\"!isAdmin\">\r\n                    <a class=\"boton-nav\" [routerLink]=\"['solicitadonadores']\">Solicitar Donadores</a>\r\n                </li>\r\n                <li routerLinkActive=\"activee\" *ngIf=\"!isAdmin\">\r\n                    <a class=\"boton-nav\" [routerLink]=\"['organos']\" *ngIf=\"!isLogin\">Donacion Organos</a>\r\n                </li>\r\n                <li style=\"cursor: pointer;\" routerLinkActive=\"activee\" *ngIf=\"!isLogin && !isAdmin\">\r\n                    <a class=\"boton-nav\" data-toggle=\"modal\" data-target=\"#exampleModal\">Iniciar Sesion</a>\r\n                </li>\r\n                <li *ngIf=\"isLogin\" class=\"nav-item dropdown\" routerLinkActive=\"activee\">\r\n                    <a class=\"boton-nav dropdown-toggle\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                        <img src=\"{{fotoUsuario}}\" *ngIf=\"fotoUsuario\" class='imgRedonda'>\r\n                        <img src=\"../../../assets/images/personaperfil.jpg\" *ngIf=\"!fotoUsuario\" class='imgRedonda'>\r\n                    </a>\r\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                        <a (click)=\"onLogout()\" class=\"boton-nav\" style=\"cursor: pointer;\">Cerrar Sesion</a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </nav>\r\n        <div class=\"menu-toggle\"><i class=\"fas fa-bars\"></i> </div>\r\n    </header>\r\n</div>\r\n\r\n\r\n<!-- Inicio Modal Sesion -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Iniciar Sesion</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"centreado\">\r\n                    <button type=\"button\" (click)=\"onLoginGoogle()\" data-dismiss=\"modal\" class=\"btn btn-primary boton\">\r\n            <img class=\"imagen\" src=\"../../../assets/images/google.jpg\">\r\n            Iniciar sesion con google\r\n          </button>\r\n                </div>\r\n                <form #formLogin=\"ngForm\" (ngSubmit)=\"onLogin()\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\">Email address</label>\r\n                        <input name=\"email\" [(ngModel)]=\"email\" type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" required>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputPassword1\">Password</label>\r\n                        <input name=\"pass\" [(ngModel)]=\"pass\" type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" required>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-secondary mr-3\" data-dismiss=\"modal\">Cerrar</button>\r\n                    <button type=\"button\" data-dismiss=\"modal\" (click)=\"onLogin()\" class=\"btn btn-danger\">Iniciar Sesion</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- Fin Modal -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/puntosdonacion/puntosdonacion.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/puntosdonacion/puntosdonacion.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPuntosdonacionPuntosdonacionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"seccion\">\r\n    <div>\r\n        <h1 class=\"encabezado\">Puntos de Donacion habilitados</h1>\r\n    </div>\r\n    <div style=\" padding: 60px 0 60px 0;\">\r\n        <div class=\"container\">\r\n            <div class=\"row row-cols-1 row-cols-md-3\">\r\n                <div class=\"col mb-4\" *ngFor=\"let item of hospitales\">\r\n\r\n\r\n\r\n                    <div class=\"card\" data-toggle=\"modal\" data-target=\"#exampleModal1\" *ngIf=\"estaLogeado == true; else noLogeado\" (click)=\"enviarIdSolicitud(item.hospital)\">\r\n                        <img src=\"{{ item.foto }} \" class=\"card-img-top\" alt=\"...\" />\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">Hospital: {{ item.hospital }}</h5>\r\n                            <h5 class=\"card-title\">Telefono de contacto: {{ item.telefono }}</h5>\r\n                            <p>Seleccione para ver mas...</p>\r\n                        </div>\r\n                    </div>\r\n                    <ng-template #noLogeado>\r\n                        <div class=\"card\" data-toggle=\"modal\" data-target=\"#exampleModal\" *ngIf=\"estaLogeado == false\">\r\n                            <img src=\"{{ item.foto }} \" class=\"card-img-top\" alt=\"...\" />\r\n                            <div class=\"card-body\">\r\n                                <h5 class=\"card-title\">Hospital: {{ item.hospital }}</h5>\r\n                                <h5 class=\"card-title\">Telefono de contacto: {{ item.telefono }}</h5>\r\n                                <p>Seleccione para ver mas...</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"modal fade\" id=\"exampleModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Cita Donacion</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form #formRegister=\"ngForm\" (ngSubmit)=\"guardar(formRegister)\">\r\n                    <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"hidden\" name=\"id_usuario\" [(ngModel)]=\"this.citas.seleccionarCitasRegistro.id_usuario\">\r\n                                    <input type=\"hidden\" name=\"hospital\" [(ngModel)]=\"this.citas.seleccionarCitasRegistro.hospital\">\r\n                                    <input type=\"hidden\" name=\"estado\" [(ngModel)]=\"this.citas.seleccionarCitasRegistro.estado\">\r\n                                    <label for=\"fecha\">Seleccione la fecha para la Donacion</label>\r\n                                    <input [(ngModel)]=\"this.citas.seleccionarCitasRegistro.fecha\" name=\"fecha\" type=\"date\" class=\"form-control\" id=\"fecha\" required placeholder=\"1234 Main St\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"hora\">Seleccione la Hora para la Donacion</label>\r\n                                    <input [(ngModel)]=\"this.citas.seleccionarCitasRegistro.hora\" name=\"hora\" type=\"time\" class=\"form-control\" id=\"hora\" required placeholder=\"1234 Main St\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n            Cerrar\r\n          </button>\r\n                    <button type=\"submit\" class=\"btn btn-primary\">\r\n            Agendar Cita\r\n          </button>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registrarse/registrarse.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registrarse/registrarse.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegistrarseRegistrarseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"seccion\">\r\n  <div class=\"centreado\">\r\n    <h1 class=\"encabezado\">Formulario de Registro</h1>\r\n    <button\r\n      type=\"button\"\r\n      class=\"btn btn-primary boton\"\r\n      (click)=\"onLoginGoogle()\"\r\n    >\r\n      <img class=\"imagen\" src=\"../../../assets/images/google.jpg\" />\r\n      Iniciar sesion con google\r\n    </button>\r\n  </div>\r\n</section>\r\n<section id=\"seccion\">\r\n  <div>\r\n    <form #formRegister=\"ngForm\" (ngSubmit)=\"onAddUser()\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"ci\">Carnet de Identidad</label>\r\n          <input\r\n            name=\"ci\"\r\n            [(ngModel)]=\"ci\"\r\n            type=\"number\"\r\n            class=\"form-control\"\r\n            id=\"ci\"\r\n            required\r\n            placeholder=\"C.I.\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"nombre\">Nombre(s)</label>\r\n          <input\r\n            name=\"nombre\"\r\n            [(ngModel)]=\"nombre\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nombre\"\r\n            required\r\n            placeholder=\"Nombre\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"ap\">Apellido Paterno</label>\r\n          <input\r\n            name=\"apellido_p\"\r\n            [(ngModel)]=\"apellido_p\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"ap\"\r\n            required\r\n            placeholder=\"Apellido\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"am\">Apellido Materno</label>\r\n          <input\r\n            name=\"apellido_m\"\r\n            [(ngModel)]=\"apellido_m\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"am\"\r\n            required\r\n            placeholder=\"Apellido\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"fnac\">Fecha de Nacimiento</label>\r\n        <input\r\n          name=\"fecha_nac\"\r\n          [(ngModel)]=\"fecha_nac\"\r\n          type=\"date\"\r\n          class=\"form-control\"\r\n          id=\"fnac\"\r\n          required\r\n          placeholder=\"1234 Main St\"\r\n        />\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"genero\">Genero</label>\r\n          <select\r\n            id=\"genero\"\r\n            name=\"genero\"\r\n            required\r\n            [(ngModel)]=\"genero\"\r\n            class=\"form-control\"\r\n          >\r\n            <option selected>Choose...</option>\r\n            <option>Masculino</option>\r\n            <option>Femenino</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tiposangre\">Tipo de Sangre</label>\r\n          <select\r\n            id=\"tiposangre\"\r\n            name=\"tipo_sangre\"\r\n            required\r\n            [(ngModel)]=\"tipo_sangre\"\r\n            class=\"form-control\"\r\n          >\r\n            <option selected>Choose...</option>\r\n            <option>A</option>\r\n            <option>B</option>\r\n            <option>O</option>\r\n            <option>O+</option>\r\n            <option>O-</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Email</label>\r\n        <input\r\n          name=\"email\"\r\n          [(ngModel)]=\"email\"\r\n          type=\"email\"\r\n          class=\"form-control\"\r\n          id=\"exampleInputEmail1\"\r\n          aria-describedby=\"emailHelp\"\r\n          required\r\n          placeholder=\"Enter email\"\r\n        />\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputPassword1\">Password</label>\r\n        <input\r\n          name=\"pass\"\r\n          [(ngModel)]=\"pass\"\r\n          type=\"password\"\r\n          class=\"form-control\"\r\n          id=\"exampleInputPassword1\"\r\n          required\r\n          placeholder=\"Password\"\r\n        />\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <div class=\"form-check\">\r\n            <input\r\n              class=\"form-check-input\"\r\n              name=\"NAME\"\r\n              [checked]=\"organos\"\r\n              (change)=\"organos = !organos\"\r\n              type=\"checkbox\"\r\n              id=\"organos\"\r\n            />\r\n            <label class=\"form-check-label\" for=\"organos\">\r\n              Donador de Organos\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <div class=\"form-check\">\r\n            <input\r\n              class=\"form-check-input\"\r\n              name=\"NAME\"\r\n              [checked]=\"sangre\"\r\n              (change)=\"sangre = !sangre\"\r\n              type=\"checkbox\"\r\n              id=\"sangre\"\r\n            />\r\n            <label class=\"form-check-label\" for=\"sangre\">\r\n              Donador de Sangre\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"centreado\" style=\"padding-top: 10%;\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-danger\"\r\n          *ngIf=\"formRegister.valid == true; else btnDisabled\"\r\n        >\r\n          Registrarse\r\n        </button>\r\n        <ng-template #btnDisabled>\r\n          <button type=\"submit\" class=\"btn btn-danger\" disabled=\"true\">\r\n            Registrarse\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro-google/registro-google.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro-google/registro-google.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegistroGoogleRegistroGoogleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1\r\n  style=\"text-align: center; padding-top: 100px; font-size: 40px;\r\n    font-family: 'learning curve';\"\r\n  class=\" mb-5\"\r\n>\r\n  Ya casi esta...\r\n</h1>\r\n<hr />\r\n<form class=\"container\" #formRegister=\"ngForm\" (ngSubmit)=\"guardarGoogle()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"ci\">Carnet de Identidad</label>\r\n    <input\r\n      name=\"ci\"\r\n      [(ngModel)]=\"ci\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      id=\"ci\"\r\n      placeholder=\"C.I.\"\r\n      required\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"fnac\">Fecha de Nacimiento</label>\r\n    <input\r\n      name=\"fecha_nac\"\r\n      [(ngModel)]=\"fecha_nac\"\r\n      type=\"date\"\r\n      class=\"form-control\"\r\n      id=\"fnac\"\r\n      placeholder=\"1234 Main St\"\r\n      required\r\n    />\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"genero\">Genero</label>\r\n    <select\r\n      id=\"genero\"\r\n      name=\"genero\"\r\n      [(ngModel)]=\"genero\"\r\n      required\r\n      class=\"form-control\"\r\n    >\r\n      <option selected>Choose...</option>\r\n      <option>Masculino</option>\r\n      <option>Femenino</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"tiposangre\">Tipo de Sangre</label>\r\n    <select\r\n      id=\"tiposangre\"\r\n      name=\"tipo_sangre\"\r\n      [(ngModel)]=\"tipo_sangre\"\r\n      class=\"form-control\"\r\n      required\r\n    >\r\n      <option selected>Choose...</option>\r\n      <option>A</option>\r\n      <option>B</option>\r\n      <option>O</option>\r\n      <option>O+</option>\r\n      <option>O-</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div class=\"form-check\">\r\n      <input\r\n        class=\"form-check-input\"\r\n        name=\"NAME\"\r\n        [checked]=\"organos\"\r\n        (change)=\"organos = !organos\"\r\n        type=\"checkbox\"\r\n        id=\"organos\"\r\n      />\r\n      <label class=\"form-check-label\" for=\"organos\">\r\n        Donador de Organos\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <div class=\"form-check\">\r\n      <input\r\n        class=\"form-check-input\"\r\n        name=\"NAME\"\r\n        [checked]=\"sangre\"\r\n        (change)=\"sangre = !sangre\"\r\n        type=\"checkbox\"\r\n        id=\"sangre\"\r\n      />\r\n      <label class=\"form-check-label\" for=\"sangre\">\r\n        Donador de Sangre\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <div class=\"text-center mb-5\">\r\n    <button\r\n    type=\"submit\"\r\n    class=\"btn btn-danger\"\r\n    *ngIf=\"formRegister.valid == true; else btnDisabled\"\r\n  >\r\n    Registrarse\r\n  </button>\r\n  <ng-template #btnDisabled>\r\n    <button type=\"submit\" class=\"btn btn-danger\" disabled=\"true\">\r\n      Registrarse\r\n    </button>\r\n  </ng-template>\r\n  </div>\r\n</form>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registroorganos/registroorganos.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/registroorganos/registroorganos.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegistroorganosRegistroorganosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"seccion\">\r\n    <div class=\"centreado\">\r\n        <h1 class=\"encabezado\">Formulario de Solicitud de Donadores de Organos</h1>\r\n    </div>\r\n    <div>\r\n        <form #formSolicitud=\"ngForm\" (ngSubmit)=\"guardarSolicitud(formSolicitud)\" class=\"needs-validation\">\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6 has-danger\">\r\n                    <label for=\"ci\">Carnet de Identidad</label>\r\n                    <input name=\"ci\" [(ngModel)]=\"this.dataApi.seleccionarSolicitudOrganos.ci\" type=\"number\" class=\"form-control\" id=\"ci\" required placeholder=\"C.I.\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"nombre\">Nombre(s)</label>\r\n                    <input name=\"nombre\" [(ngModel)]=\"this.dataApi.seleccionarSolicitudOrganos.nombre\" type=\"text\" class=\"form-control\" id=\"nombre\" required placeholder=\"Nombre\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"ap\">Apellido Paterno</label>\r\n                    <input name=\"apellido_p\" [(ngModel)]=\"this.dataApi.seleccionarSolicitudOrganos.apellido_p\" type=\"text\" class=\"form-control\" id=\"ap\" required placeholder=\"Apellido\">\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"am\">Apellido Materno</label>\r\n                    <input name=\"apellido_m\" [(ngModel)]=\"this.dataApi.seleccionarSolicitudOrganos.apellido_m\" type=\"text\" class=\"form-control\" id=\"am\" required placeholder=\"Apellido\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"fnac\">Fecha de Nacimiento</label>\r\n                <input name=\"facha_nac\" [(ngModel)]=\"this.dataApi.seleccionarSolicitudOrganos.fecha_nac\" type=\"date\" class=\"form-control\" id=\"fnac\" required placeholder=\"1234 Main St\">\r\n            </div>\r\n            <div class=\"form-row\">\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"genero\">Genero</label>\r\n                    <select id=\"genero\" required [(ngModel)]=\"this.dataApi.seleccionarSolicitudOrganos.genero\" name=\"genero\" class=\"form-control\">\r\n                      <option selected>Choose...</option>\r\n                      <option>Masculino</option>\r\n                      <option>Femenino</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"organo\">Organo o Tejido Requerido</label>\r\n                    <select id=\"organo\" required [(ngModel)]=\"this.dataApi.seleccionarSolicitudOrganos.organo\" name=\"organo\" class=\"form-control\">\r\n                      <option selected>Choose...</option>\r\n                      <option>Corazon</option>\r\n                      <option>Higado</option>\r\n                      <option>Piel</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n\r\n                <div class=\"form-group col-md-6\">\r\n                    <label for=\"contacto\">Telefono</label>\r\n                    <input name=\"telefono\" [(ngModel)]=\"this.dataApi.seleccionarSolicitudOrganos.telefono\" type=\"number\" class=\"form-control\" id=\"contacto\" required placeholder=\"Telefono de Contacto\">\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"exampleFormControlFile1\">Seleccionar imagen</label>\r\n                <input (change)=\"onUpload($event)\" required type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">\r\n                <input type=\"hidden\" name=\"foto\" #imagenFoto [value]=\"urlFoto | async\" [(ngModel)]=\"this.dataApi.seleccionarSolicitudOrganos.foto\">\r\n\r\n\r\n                <!-- <input type=\"file\" id=\"Logo\" (change)=\"onUpload($event, cualEs = 'logo')\"> -->\r\n                <div class=\"progress mt-3\">\r\n                    <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"(uploadPercentFoto | async) + '%'\">\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n            <div class=\"centreado\" style=\"padding-top: 10%;\">\r\n                <button type=\"submit\" class=\"btn btn-danger\">Registrarse</button>\r\n                <ng-template #btnDisabled>\r\n                    <button type=\"submit\" class=\"btn btn-danger\" disabled=true>Registrarse</button>\r\n                </ng-template>\r\n\r\n            </div>\r\n        </form>\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/requisitos/requisitos.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/requisitos/requisitos.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRequisitosRequisitosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"seccion \" class=\"seccionModil\">\r\n    <div>\r\n        <h1 class=\"encabezado\">Requisitos para ser Donador</h1>\r\n        <div class=\"container \">\r\n            <div class=\"card-group imagenfondo\">\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/2.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">No presentar síntomas de Resfriado</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/3.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">Ser mayor de edad y no tener más de 65</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/4.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">Presentar tu Cedula de Identidad Vigente</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/5.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">No presentar síntomas de Resfriado</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/6.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">No haber pasado más de 4 horas sin comer</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/7.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">No haber consumido analgésicos</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/8.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">No haberse hecho tatuajes o perforaciones recientemente</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/9.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">No haber consumido alcohol en las últimas 48 horas</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/10.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">Pueden donar quienes padecieron Hepatitis A antes de los 10 años de edad</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/15.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">No estar Embarazada o en etapa de lactancia</p>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/16.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">No tener mas de una pareja sexual.</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 tarjeta\">\r\n                        <img class=\"card-img-top imagen\" src=\"../../../assets/images/13.png\">\r\n\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">No haber sido detectado con VIH, Chagas o Hepatitis tipo B o C</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</section>\r\n<section>\r\n    <div class=\"imagenfondo2\">\r\n        <div class=\"centrear\">\r\n            <div class=\"animated flipInX delay-1s\">\r\n\r\n                <h1>¿Quieres Donar Sangre?</h1>\r\n                <h1>Registrate</h1>\r\n\r\n            </div>\r\n            <a class=\"btn btn-danger\" href=\"../registrarse\" style=\"color: white;\">Quiero Donar</a>\r\n        </div>\r\n\r\n    </div>\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/solicitardonadores/solicitardonadores.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/solicitardonadores/solicitardonadores.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSolicitardonadoresSolicitardonadoresComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section id=\"seccion\">\r\n  <div class=\"centreado\">\r\n    <h1 class=\"encabezado\">Pasos para solicitar Donadores</h1>\r\n  </div>\r\n  <div class=\"centreado container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <img src=\"../../../assets/images/llena.png\" />\r\n        <p>Llena el Formulario</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <img src=\"../../../assets/images/tasks-solid.png\" />\r\n        <p>Registra tu solicitud</p>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <img src=\"../../../assets/images/compartir.png\" />\r\n        <p>Comparte en tus redes sociales</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section id=\"seccion\">\r\n  <div class=\"centreado\">\r\n    <h1 class=\"encabezado\">Formulario de Solicitud de Donadores</h1>\r\n  </div>\r\n  <div>\r\n    <form\r\n      #formSolicitud=\"ngForm\"\r\n      (ngSubmit)=\"guardarSolicitud(formSolicitud)\"\r\n      class=\"needs-validation\"\r\n    >\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6 has-danger\">\r\n          <label for=\"ci\">Carnet de Identidad</label>\r\n          <input\r\n            name=\"ci\"\r\n            [(ngModel)]=\"this.dataApi.seleccionarSolicitudSangre.ci\"\r\n            type=\"number\"\r\n            class=\"form-control\"\r\n            id=\"ci\"\r\n            required\r\n            placeholder=\"C.I.\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"nombre\">Nombre(s)</label>\r\n          <input\r\n            name=\"nombre\"\r\n            [(ngModel)]=\"this.dataApi.seleccionarSolicitudSangre.nombre\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"nombre\"\r\n            required\r\n            placeholder=\"Nombre\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"ap\">Apellido Paterno</label>\r\n          <input\r\n            name=\"apellido_p\"\r\n            [(ngModel)]=\"this.dataApi.seleccionarSolicitudSangre.apellido_p\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"ap\"\r\n            required\r\n            placeholder=\"Apellido\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"am\">Apellido Materno</label>\r\n          <input\r\n            name=\"apellido_m\"\r\n            [(ngModel)]=\"this.dataApi.seleccionarSolicitudSangre.apellido_m\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"am\"\r\n            required\r\n            placeholder=\"Apellido\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"fnac\">Fecha de Nacimiento</label>\r\n        <input\r\n          name=\"facha_nac\"\r\n          [(ngModel)]=\"this.dataApi.seleccionarSolicitudSangre.fecha_nac\"\r\n          type=\"date\"\r\n          class=\"form-control\"\r\n          id=\"fnac\"\r\n          required\r\n          placeholder=\"1234 Main St\"\r\n        />\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"genero\">Genero</label>\r\n          <select\r\n            id=\"genero\"\r\n            required\r\n            [(ngModel)]=\"this.dataApi.seleccionarSolicitudSangre.genero\"\r\n            name=\"genero\"\r\n            class=\"form-control\"\r\n          >\r\n            <option selected>Choose...</option>\r\n            <option>Masculino</option>\r\n            <option>Femenino</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"tiposangre\">Tipo de Sangre</label>\r\n          <select\r\n            id=\"tiposangre\"\r\n            required\r\n            [(ngModel)]=\"this.dataApi.seleccionarSolicitudSangre.tipo_sangre\"\r\n            name=\"tipo_sangre\"\r\n            class=\"form-control\"\r\n          >\r\n            <option selected>Choose...</option>\r\n            <option>O+</option>\r\n            <option>O-</option>\r\n            <option>O</option>\r\n            <option>A</option>\r\n            <option>B</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"cant\">Cantidad de Dondores</label>\r\n          <input\r\n            name=\"cantidad_donadores\"\r\n            [(ngModel)]=\"\r\n              this.dataApi.seleccionarSolicitudSangre.cantidad_donadores\r\n            \"\r\n            type=\"number\"\r\n            class=\"form-control\"\r\n            id=\"cant\"\r\n            required\r\n            placeholder=\"Cantidad de Donadores\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group col-md-6\">\r\n          <label for=\"contacto\">Telefono</label>\r\n          <input\r\n            name=\"telefono\"\r\n            [(ngModel)]=\"this.dataApi.seleccionarSolicitudSangre.telefono\"\r\n            type=\"number\"\r\n            class=\"form-control\"\r\n            id=\"contacto\"\r\n            required\r\n            placeholder=\"Telefono de Contacto\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-md-6\">\r\n            <label for=\"exampleFormControlFile1\">Seleccionar imagen</label>\r\n            <input\r\n              (change)=\"onUpload($event)\"\r\n              required\r\n              type=\"file\"\r\n              class=\"form-control-file\"\r\n              id=\"exampleFormControlFile1\"\r\n            />\r\n            <input\r\n              type=\"hidden\"\r\n              name=\"foto\"\r\n              #imagenFoto\r\n              [value]=\"urlFoto | async\"\r\n              [(ngModel)]=\"this.dataApi.seleccionarSolicitudSangre.foto\"\r\n            />\r\n  \r\n            <!-- <input type=\"file\" id=\"Logo\" (change)=\"onUpload($event, cualEs = 'logo')\"> -->\r\n            <div class=\"progress mt-3\">\r\n              <div\r\n                class=\"progress-bar progress-bar-striped bg-success\"\r\n                role=\"progressbar\"\r\n                [style.width]=\"(uploadPercentFoto | async) + '%'\"\r\n              ></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group col-md-6\">\r\n            <div >\r\n                <label for=\"hospital\">Hospital</label>\r\n                <select\r\n                  id=\"hospital\"\r\n                  required\r\n                  [(ngModel)]=\"this.dataApi.seleccionarSolicitudSangre.hospital\"\r\n                  name=\"hospital\"\r\n                  class=\"form-control\"\r\n                >              \r\n                  <option *ngFor=\"let item of hospitalesVar\">{{item.hospital}}</option>              \r\n                </select>\r\n            </div>\r\n          </div>\r\n      </div>      \r\n      <div class=\"centreado\" style=\"padding-top: 10%;\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-danger\"\r\n          *ngIf=\"\r\n            formSolicitud.valid == true && urlFoto | async;\r\n            else btnDisabled\r\n          \"\r\n        >\r\n          Registrarse\r\n        </button>\r\n        <ng-template #btnDisabled>\r\n          <button type=\"submit\" class=\"btn btn-danger\" disabled=\"true\">\r\n            Registrarse\r\n          </button>\r\n        </ng-template>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/usuario.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/usuario.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsUsuarioUsuarioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"seccion\">\r\n    <div class=\"centrear\" style=\"padding:20% 0 10% 0;\">\r\n        <div class=\"card\" style=\"width: auto;\">\r\n            <div class=\"container\">\r\n\r\n                <div class=\"row\" >\r\n                    <div class=\"col-6\">\r\n                        <img src=\"../../../assets/images/person1.jpg\" *ngIf=\"!fotoPersona\" class=\"card-img-top\" alt=\"...\">\r\n                        <img src=\"{{fotoPersona}}\" *ngIf=\"fotoPersona\" class=\"card-img-top\" alt=\"...\">\r\n                    </div>\r\n                    <div class=\"col-6\" *ngFor=\"let item of personaCompleta\" >\r\n                        <div class=\"card-body\">\r\n                            <h2 class=\"card-title encabezado\">Bienvenido</h2>\r\n                            <hr>\r\n                            <p>Nombre Completo: {{item.nombre}} {{item.apellido_p}} {{item.apellido_m}} </p>\r\n                            <p *ngIf=\"item.sangre == true\">Registrado como: Donador de Sangre </p>\r\n                            <p *ngIf=\"item.organos == true\">Registrado como: Donador de Organos </p>\r\n                            <p>Tipo de Sangre: {{item.tipo_sangre}}  </p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div style=\"background-color: #F1414E; height: 80px;\">\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</section>\r\n<section class=\"seccion\">\r\n    <div class=\"centrear\">\r\n        <h1 class=\"encabezado\">Citas</h1>\r\n    </div>\r\n    <div class=\"container\" style=\"padding:5% 0 5% 0;\">\r\n        <table class=\"table\">\r\n            <thead class=\"thead-dark\">\r\n                <tr>\r\n                    <th scope=\"col\">Hora</th>\r\n                    <th scope=\"col\">Fecha</th>\r\n                    <th scope=\"col\">Lugar</th>\r\n                    <th scope=\"col\">Estado</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of citasHospitalesvar\">                    \r\n                    <td>{{item.hora}}</td>\r\n                    <td>{{item.fecha}}</td>\r\n                    <td>{{item.hospital}}</td>\r\n                    <td *ngIf=\"item.estado == false\">En espera</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </div>\r\n\r\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componets/aprobarcitas/aprobarcitas.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componets/aprobarcitas/aprobarcitas.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponetsAprobarcitasAprobarcitasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"seccion\">\r\n  <div class=\"centrear\" style=\"padding:20% 0 10% 0;\">\r\n    <div class=\"container\">\r\n      <table class=\"table\">\r\n        <thead class=\"thead-dark\">\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">First</th>\r\n            <th scope=\"col\">Last</th>\r\n            <th scope=\"col\">Handle</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th scope=\"row\">1</th>\r\n            <td>Mark</td>\r\n            <td>Otto</td>\r\n            <td>@mdo</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">2</th>\r\n            <td>Jacob</td>\r\n            <td>Thornton</td>\r\n            <td>@fat</td>\r\n          </tr>\r\n          <tr>\r\n            <th scope=\"row\">3</th>\r\n            <td>Larry</td>\r\n            <td>the Bird</td>\r\n            <td>@twitter</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_hospitales_hospitales_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/hospitales/hospitales.component */
    "./src/app/components/hospitales/hospitales.component.ts");
    /* harmony import */


    var _components_campaniasdonacion_campaniasdonacion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/campaniasdonacion/campaniasdonacion.component */
    "./src/app/components/campaniasdonacion/campaniasdonacion.component.ts");
    /* harmony import */


    var _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/usuario/usuario.component */
    "./src/app/components/usuario/usuario.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_requisitos_requisitos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/requisitos/requisitos.component */
    "./src/app/components/requisitos/requisitos.component.ts");
    /* harmony import */


    var _components_registrarse_registrarse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/registrarse/registrarse.component */
    "./src/app/components/registrarse/registrarse.component.ts");
    /* harmony import */


    var _components_puntosdonacion_puntosdonacion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/puntosdonacion/puntosdonacion.component */
    "./src/app/components/puntosdonacion/puntosdonacion.component.ts");
    /* harmony import */


    var _components_solicitardonadores_solicitardonadores_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/solicitardonadores/solicitardonadores.component */
    "./src/app/components/solicitardonadores/solicitardonadores.component.ts");
    /* harmony import */


    var _components_donacionorganos_donacionorganos_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/donacionorganos/donacionorganos.component */
    "./src/app/components/donacionorganos/donacionorganos.component.ts");
    /* harmony import */


    var _components_registro_google_registro_google_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/registro-google/registro-google.component */
    "./src/app/components/registro-google/registro-google.component.ts");
    /* harmony import */


    var _components_registroorganos_registroorganos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/registroorganos/registroorganos.component */
    "./src/app/components/registroorganos/registroorganos.component.ts");
    /* harmony import */


    var _components_donaciones_donaciones_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/donaciones/donaciones.component */
    "./src/app/components/donaciones/donaciones.component.ts");
    /* harmony import */


    var _componets_aprobarcitas_aprobarcitas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./componets/aprobarcitas/aprobarcitas.component */
    "./src/app/componets/aprobarcitas/aprobarcitas.component.ts");

    var routes = [{
      path: 'inicio',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }, {
      path: 'google',
      component: _components_registro_google_registro_google_component__WEBPACK_IMPORTED_MODULE_12__["RegistroGoogleComponent"]
    }, {
      path: 'requisitos',
      component: _components_requisitos_requisitos_component__WEBPACK_IMPORTED_MODULE_7__["RequisitosComponent"]
    }, {
      path: 'registrarse',
      component: _components_registrarse_registrarse_component__WEBPACK_IMPORTED_MODULE_8__["RegistrarseComponent"]
    }, {
      path: 'pntdon',
      component: _components_puntosdonacion_puntosdonacion_component__WEBPACK_IMPORTED_MODULE_9__["PuntosdonacionComponent"]
    }, {
      path: 'solicitadonadores',
      component: _components_solicitardonadores_solicitardonadores_component__WEBPACK_IMPORTED_MODULE_10__["SolicitardonadoresComponent"]
    }, {
      path: 'organos',
      component: _components_donacionorganos_donacionorganos_component__WEBPACK_IMPORTED_MODULE_11__["DonacionorganosComponent"]
    }, {
      path: 'usuarios',
      component: _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_3__["UsuarioComponent"]
    }, {
      path: 'donaciones',
      component: _components_donaciones_donaciones_component__WEBPACK_IMPORTED_MODULE_14__["DonacionesComponent"]
    }, {
      path: 'aprobar',
      component: _componets_aprobarcitas_aprobarcitas_component__WEBPACK_IMPORTED_MODULE_15__["AprobarcitasComponent"]
    }, {
      path: 'campaniaDonacion',
      component: _components_campaniasdonacion_campaniasdonacion_component__WEBPACK_IMPORTED_MODULE_2__["CampaniasdonacionComponent"]
    }, {
      path: 'regorganos',
      component: _components_registroorganos_registroorganos_component__WEBPACK_IMPORTED_MODULE_13__["RegistroorganosComponent"]
    }, {
      path: 'hospitales',
      component: _components_hospitales_hospitales_component__WEBPACK_IMPORTED_MODULE_1__["HospitalesComponent"]
    }, {
      path: '**',
      pathMatch: 'full',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'donarSangre';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_requisitos_requisitos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/requisitos/requisitos.component */
    "./src/app/components/requisitos/requisitos.component.ts");
    /* harmony import */


    var _components_registrarse_registrarse_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/registrarse/registrarse.component */
    "./src/app/components/registrarse/registrarse.component.ts");
    /* harmony import */


    var _components_puntosdonacion_puntosdonacion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/puntosdonacion/puntosdonacion.component */
    "./src/app/components/puntosdonacion/puntosdonacion.component.ts");
    /* harmony import */


    var _components_campaniasdonacion_campaniasdonacion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/campaniasdonacion/campaniasdonacion.component */
    "./src/app/components/campaniasdonacion/campaniasdonacion.component.ts");
    /* harmony import */


    var _components_solicitardonadores_solicitardonadores_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/solicitardonadores/solicitardonadores.component */
    "./src/app/components/solicitardonadores/solicitardonadores.component.ts");
    /* harmony import */


    var _components_donacionorganos_donacionorganos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/donacionorganos/donacionorganos.component */
    "./src/app/components/donacionorganos/donacionorganos.component.ts");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/database/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/usuario/usuario.component */
    "./src/app/components/usuario/usuario.component.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _components_registro_google_registro_google_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/registro-google/registro-google.component */
    "./src/app/components/registro-google/registro-google.component.ts");
    /* harmony import */


    var _components_hospitales_hospitales_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/hospitales/hospitales.component */
    "./src/app/components/hospitales/hospitales.component.ts");
    /* harmony import */


    var _components_registroorganos_registroorganos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/registroorganos/registroorganos.component */
    "./src/app/components/registroorganos/registroorganos.component.ts");
    /* harmony import */


    var _pipes_filtra_sangre_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pipes/filtra-sangre.pipe */
    "./src/app/pipes/filtra-sangre.pipe.ts");
    /* harmony import */


    var _components_donaciones_donaciones_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/donaciones/donaciones.component */
    "./src/app/components/donaciones/donaciones.component.ts");
    /* harmony import */


    var _componets_aprobarcitas_aprobarcitas_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./componets/aprobarcitas/aprobarcitas.component */
    "./src/app/componets/aprobarcitas/aprobarcitas.component.ts"); // Firebase


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _components_requisitos_requisitos_component__WEBPACK_IMPORTED_MODULE_10__["RequisitosComponent"], _components_registrarse_registrarse_component__WEBPACK_IMPORTED_MODULE_11__["RegistrarseComponent"], _components_puntosdonacion_puntosdonacion_component__WEBPACK_IMPORTED_MODULE_12__["PuntosdonacionComponent"], _components_campaniasdonacion_campaniasdonacion_component__WEBPACK_IMPORTED_MODULE_13__["CampaniasdonacionComponent"], _components_solicitardonadores_solicitardonadores_component__WEBPACK_IMPORTED_MODULE_14__["SolicitardonadoresComponent"], _components_donacionorganos_donacionorganos_component__WEBPACK_IMPORTED_MODULE_15__["DonacionorganosComponent"], _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_21__["UsuarioComponent"], _components_registro_google_registro_google_component__WEBPACK_IMPORTED_MODULE_24__["RegistroGoogleComponent"], _components_hospitales_hospitales_component__WEBPACK_IMPORTED_MODULE_25__["HospitalesComponent"], _components_registroorganos_registroorganos_component__WEBPACK_IMPORTED_MODULE_26__["RegistroorganosComponent"], _pipes_filtra_sangre_pipe__WEBPACK_IMPORTED_MODULE_27__["FiltraSangrePipe"], _components_donaciones_donaciones_component__WEBPACK_IMPORTED_MODULE_28__["DonacionesComponent"], _componets_aprobarcitas_aprobarcitas_component__WEBPACK_IMPORTED_MODULE_29__["AprobarcitasComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig), _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_16__["AngularFontAwesomeModule"]],
      providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestore"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__["AngularFireStorage"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/campaniasdonacion/campaniasdonacion.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/campaniasdonacion/campaniasdonacion.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCampaniasdonacionCampaniasdonacionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 10% 15% 5% 15%;\r\n}\r\n\r\n.col {\r\n    display: -webkit-box !important;\r\n    display: flex !important;\r\n    -webkit-box-align: center !important;\r\n            align-items: center !important;\r\n    -webkit-box-pack: center !important;\r\n            justify-content: center !important;\r\n    min-height: 40vh !important;\r\n}\r\n\r\np {\r\n    font-weight: lighter;\r\n}\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    padding: 10% 0 5% 0;\r\n}\r\n\r\n.tarjeta {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.imagen {\r\n    height: 150px;\r\n    width: 150px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin: 0 auto;\r\n}\r\n\r\n/*cards*/\r\n\r\nbody,\r\nhtml {\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-color: #f4f4f4;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.cards {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    max-width: 820px;\r\n}\r\n\r\n.card__time {\r\n    font-size: 12px;\r\n    color: #313131;\r\n    margin-left: 5px;\r\n}\r\n\r\n.card__clock-info {\r\n    float: right;\r\n}\r\n\r\n.card__img {\r\n    visibility: hidden;\r\n    background-position: center;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.card__info-hover {\r\n    position: absolute;\r\n    padding: 16px;\r\n    width: 100%;\r\n    opacity: 0;\r\n    top: 0;\r\n}\r\n\r\n.card__img--hover {\r\n    -webkit-transition: 0.2s all ease-out;\r\n    transition: 0.2s all ease-out;\r\n    width: 100%;\r\n    position: absolute;\r\n    height: 235px;\r\n    top: 0;\r\n}\r\n\r\n.card {\r\n    margin-right: 25px;\r\n    -webkit-transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\r\n    transition: all .4s cubic-bezier(0.175, 0.885, 0, 1);\r\n    background-color: #fff;\r\n    width: 100%;\r\n    position: relative;\r\n    border-radius: 12px;\r\n    overflow: hidden;\r\n    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card:hover {\r\n    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);\r\n    -webkit-transform: scale(1.05, 1.05);\r\n            transform: scale(1.05, 1.05);\r\n}\r\n\r\n.card__info {\r\n    z-index: 2;\r\n    background-color: #fff;\r\n    padding: 16px 24px 24px 24px;\r\n}\r\n\r\n.card__category {\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    letter-spacing: 2px;\r\n    font-weight: 500;\r\n    color: #868686;\r\n}\r\n\r\n.card__title {\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.card__by {\r\n    font-size: 12px;\r\n    font-weight: 500;\r\n}\r\n\r\n.card__author {\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n    color: #ad7d52;\r\n}\r\n\r\n.card:hover .card__img--hover {\r\n    height: 100%;\r\n    opacity: 0.3;\r\n}\r\n\r\n.card:hover .card__info {\r\n    background-color: transparent;\r\n    position: relative;\r\n}\r\n\r\n.card:hover .card__info-hover {\r\n    opacity: 1;\r\n}\r\n\r\n@media screen and (max-width: 988px) {\r\n    h1 {\r\n        font-family: learning curve;\r\n        font-size: 2rem;\r\n        color: white;\r\n        font-weight: bold;\r\n    }\r\n    .im {\r\n        height: 200px;\r\n    }\r\n    .card {\r\n        margin-right: 0;\r\n        width: 100%;\r\n    }\r\n    .encabezado {\r\n        padding-top: 15% !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    h1 {\r\n        font-family: learning curve;\r\n        font-size: 2rem;\r\n        color: white;\r\n        font-weight: bold;\r\n    }\r\n    .im {\r\n        height: 200px;\r\n    }\r\n    .card {\r\n        margin-right: 0;\r\n        width: 100%;\r\n    }\r\n    .encabezado {\r\n        padding-top: 20% !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYW1wYW5pYXNkb25hY2lvbi9jYW1wYW5pYXNkb25hY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksK0JBQXdCO0lBQXhCLHdCQUF3QjtJQUN4QixvQ0FBOEI7WUFBOUIsOEJBQThCO0lBQzlCLG1DQUFrQztZQUFsQyxrQ0FBa0M7SUFDbEMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUdBLFFBQVE7O0FBRVI7O0lBRUksU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1YsTUFBTTtBQUNWOztBQUVBO0lBQ0kscUNBQTZCO0lBQTdCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNERBQW9EO0lBQXBELG9EQUFvRDtJQUNwRCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7UUFDZixXQUFXO0lBQ2Y7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7UUFDZixXQUFXO0lBQ2Y7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYW1wYW5pYXNkb25hY2lvbi9jYW1wYW5pYXNkb25hY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlY2Npb24ge1xyXG4gICAgcGFkZGluZzogMTAlIDE1JSA1JSAxNSU7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gICAgY29sb3I6ICMyRTJFMkU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMCUgMCA1JSAwO1xyXG59XHJcblxyXG4udGFyamV0YSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmltYWdlbiB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5cclxuLypjYXJkcyovXHJcblxyXG5ib2R5LFxyXG5odG1sIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmRzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWF4LXdpZHRoOiA4MjBweDtcclxufVxyXG5cclxuLmNhcmRfX3RpbWUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICMzMTMxMzE7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uY2FyZF9fY2xvY2staW5mbyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jYXJkX19pbWcge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkX19pbmZvLWhvdmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5jYXJkX19pbWctLWhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2Utb3V0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDIzNXB4O1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAsIDEpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTNweCAxMHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMzBweCAxOHB4IC04cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1LCAxLjA1KTtcclxufVxyXG5cclxuLmNhcmRfX2luZm8ge1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDI0cHggMjRweCAyNHB4O1xyXG59XHJcblxyXG4uY2FyZF9fY2F0ZWdvcnkge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6ICM4Njg2ODY7XHJcbn1cclxuXHJcbi5jYXJkX190aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZF9fYnkge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmNhcmRfX2F1dGhvciB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNhZDdkNTI7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5jYXJkX19pbWctLWhvdmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIgLmNhcmRfX2luZm8ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5jYXJkX19pbmZvLWhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4OHB4KSB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGxlYXJuaW5nIGN1cnZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuaW0ge1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmVuY2FiZXphZG8ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNSUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogbGVhcm5pbmcgY3VydmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5pbSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZW5jYWJlemFkbyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/campaniasdonacion/campaniasdonacion.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/campaniasdonacion/campaniasdonacion.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: CampaniasdonacionComponent */

  /***/
  function srcAppComponentsCampaniasdonacionCampaniasdonacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CampaniasdonacionComponent", function () {
      return CampaniasdonacionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_solicitud_sangre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/solicitud-sangre.service */
    "./src/app/services/solicitud-sangre.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_data_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/data-api.service */
    "./src/app/services/data-api.service.ts");
    /* harmony import */


    var _services_citas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/citas.service */
    "./src/app/services/citas.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var CampaniasdonacionComponent =
    /*#__PURE__*/
    function () {
      function CampaniasdonacionComponent(solicitudSangre, authService, persona, citas) {
        _classCallCheck(this, CampaniasdonacionComponent);

        this.solicitudSangre = solicitudSangre;
        this.authService = authService;
        this.persona = persona;
        this.citas = citas;
        this.estaLogeado = false;
        this.personaSolicitud = [];
        this.sinLogeoPersonas = [];
        this.personaLogeada = [];
      }

      _createClass(CampaniasdonacionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // Verifica que este logeado
          this.authService.isAuth().subscribe(function (user) {
            if (user) {
              _this.estaLogeado = true;
              _this.emailLogeado = user.email;

              _this.persona.obtenerPersonaRegistro().subscribe(function (persona) {
                _this.personaLogeada = persona;

                _this.personaLogeada.forEach(function (element) {
                  if (_this.emailLogeado == element.email) {
                    _this.ciUsuario = element.ci;
                    _this.tipoSangreUsuario = element.tipo_sangre;
                    console.log(_this.tipoSangreUsuario);
                  }
                });
              });
            } else {
              _this.estaLogeado = false;
            }
          });
          this.solicitudSangre.obtenersolicitudSangre().subscribe(function (resp) {
            _this.personaSolicitud = resp;
            _this.sinLogeoPersonas = resp;
          }); // $(document).ready(function() {
          //   $(".your-class").slick({
          //     slidesToShow: 3,
          //     slidesToScroll: 1,
          //     autoplay: true,
          //     autoplaySpeed: 4000,
          //     dots: true,
          //     arrows: true,
          //   });
          // });
        }
      }, {
        key: "enviarIdSolicitud",
        value: function enviarIdSolicitud(id) {
          this.ciSolicitud = id;
        }
      }, {
        key: "guardar",
        value: function guardar(form) {
          form.value.id_usuario = this.ciUsuario;
          form.value.id_solicitud = this.ciSolicitud;
          form.value.id_solicitud = this.ciSolicitud;
          form.value.estado = false;
          this.citas.agregarCitasRegistro(form.value);
          form.resetForm();
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se guardo correctamente',
            showConfirmButton: false,
            timer: 1500
          });
        }
      }]);

      return CampaniasdonacionComponent;
    }();

    CampaniasdonacionComponent.ctorParameters = function () {
      return [{
        type: _services_solicitud_sangre_service__WEBPACK_IMPORTED_MODULE_2__["SolicitudSangreService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_4__["DataApiService"]
      }, {
        type: _services_citas_service__WEBPACK_IMPORTED_MODULE_5__["CitasService"]
      }];
    };

    CampaniasdonacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-campaniasdonacion',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./campaniasdonacion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/campaniasdonacion/campaniasdonacion.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./campaniasdonacion.component.css */
      "./src/app/components/campaniasdonacion/campaniasdonacion.component.css")).default]
    })], CampaniasdonacionComponent);
    /***/
  },

  /***/
  "./src/app/components/donaciones/donaciones.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/donaciones/donaciones.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDonacionesDonacionesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 10% 15% 10% 15% !important;\r\n}\r\n\r\n.col {\r\n    display: -webkit-box !important;\r\n    display: flex !important;\r\n    -webkit-box-align: center !important;\r\n            align-items: center !important;\r\n    -webkit-box-pack: center !important;\r\n            justify-content: center !important;\r\n    min-height: 40vh !important;\r\n}\r\n\r\n.centrear {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\np {\r\n    font-weight: lighter;\r\n}\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n}\r\n\r\n.tarjeta {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\nimg {\r\n    width: 300px;\r\n    margin: 2% 0 2% 0 !important;\r\n}\r\n\r\np {\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb25hY2lvbmVzL2RvbmFjaW9uZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLCtCQUF3QjtJQUF4Qix3QkFBd0I7SUFDeEIsb0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixtQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZG9uYWNpb25lcy9kb25hY2lvbmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VjY2lvbiB7XHJcbiAgICBwYWRkaW5nOiAxMCUgMTUlIDEwJSAxNSUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNDB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2VudHJlYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gICAgY29sb3I6ICMyRTJFMkU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXJqZXRhIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAyJSAwIDIlIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/donaciones/donaciones.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/donaciones/donaciones.component.ts ***!
    \***************************************************************/

  /*! exports provided: DonacionesComponent */

  /***/
  function srcAppComponentsDonacionesDonacionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonacionesComponent", function () {
      return DonacionesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_solicitud_organos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/solicitud-organos.service */
    "./src/app/services/solicitud-organos.service.ts");

    var DonacionesComponent =
    /*#__PURE__*/
    function () {
      function DonacionesComponent(donadoresorganos) {
        _classCallCheck(this, DonacionesComponent);

        this.donadoresorganos = donadoresorganos;
        this.donadores = [];
      }

      _createClass(DonacionesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.donadoresorganos.obtenerSolicitudOrganos().subscribe(function (datos) {
            _this2.donadores = datos;
          });
        }
      }]);

      return DonacionesComponent;
    }();

    DonacionesComponent.ctorParameters = function () {
      return [{
        type: _services_solicitud_organos_service__WEBPACK_IMPORTED_MODULE_2__["SolicitudOrganosService"]
      }];
    };

    DonacionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-donaciones',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./donaciones.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/donaciones/donaciones.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./donaciones.component.css */
      "./src/app/components/donaciones/donaciones.component.css")).default]
    })], DonacionesComponent);
    /***/
  },

  /***/
  "./src/app/components/donacionorganos/donacionorganos.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/donacionorganos/donacionorganos.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDonacionorganosDonacionorganosComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 10% 15% 5% 15%;\r\n}\r\n\r\n.imagenfondo {\r\n    background-image: url('fondoseccionorganos2.jpg');\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: \"no-repeat\";\r\n    height: 100vh;\r\n    width: 100%;\r\n}\r\n\r\n.centreado {\r\n    text-align: center;\r\n}\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    padding-bottom: 5%;\r\n}\r\n\r\n.imga {\r\n    height: 120px;\r\n    padding-bottom: 3%;\r\n}\r\n\r\n@media screen and (max-width: 988px) {\r\n    h1 {\r\n        font-family: learning curve;\r\n        font-size: 2rem;\r\n        color: white;\r\n        font-weight: bold;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kb25hY2lvbm9yZ2Fub3MvZG9uYWNpb25vcmdhbm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxpREFBd0U7SUFDeEUsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO1FBQzNCLGVBQWU7UUFDZixZQUFZO1FBQ1osaUJBQWlCO0lBQ3JCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RvbmFjaW9ub3JnYW5vcy9kb25hY2lvbm9yZ2Fub3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWNjaW9uIHtcclxuICAgIHBhZGRpbmc6IDEwJSAxNSUgNSUgMTUlO1xyXG59XHJcblxyXG4uaW1hZ2VuZm9uZG8ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZvbmRvc2VjY2lvbm9yZ2Fub3MyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogXCJuby1yZXBlYXRcIjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNlbnRyZWFkbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIHtcclxuICAgIGNvbG9yOiAjMkUyRTJFO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDUlO1xyXG59XHJcblxyXG4uaW1nYSB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODhweCkge1xyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBsZWFybmluZyBjdXJ2ZTtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/donacionorganos/donacionorganos.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/donacionorganos/donacionorganos.component.ts ***!
    \*************************************************************************/

  /*! exports provided: DonacionorganosComponent */

  /***/
  function srcAppComponentsDonacionorganosDonacionorganosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonacionorganosComponent", function () {
      return DonacionorganosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DonacionorganosComponent =
    /*#__PURE__*/
    function () {
      function DonacionorganosComponent() {
        _classCallCheck(this, DonacionorganosComponent);
      }

      _createClass(DonacionorganosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DonacionorganosComponent;
    }();

    DonacionorganosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-donacionorganos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./donacionorganos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/donacionorganos/donacionorganos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./donacionorganos.component.css */
      "./src/app/components/donacionorganos/donacionorganos.component.css")).default]
    })], DonacionorganosComponent);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/footer/footer.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\r\n    background-color: #2e2e2e;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlMmUyZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/components/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 0 15% 0 15%;\r\n}\r\n\r\n.col {\r\n    display: -webkit-box !important;\r\n    display: flex !important;\r\n    -webkit-box-align: center !important;\r\n            align-items: center !important;\r\n    -webkit-box-pack: center !important;\r\n            justify-content: center !important;\r\n    min-height: 40vh !important;\r\n}\r\n\r\n.imagenfondo {\r\n    background-image: url('d3.png');\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: \"no-repeat\";\r\n    height: 800px;\r\n    width: 100%;\r\n}\r\n\r\n.imagenfondo2 {\r\n    background-image: url('recuperar.png');\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: \"no-repeat\";\r\n    height: 700px;\r\n    width: 100%;\r\n}\r\n\r\n.centrear {\r\n    position: absolute;\r\n    top: 50%;\r\n    -webkit-transform: translate(0%, -50%);\r\n            transform: translate(0%, -50%);\r\n}\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    padding: 5% 0 5% 0;\r\n}\r\n\r\n/*tarjetas hover redonditas*/\r\n\r\n.flip-card {\r\n    background-color: transparent;\r\n    width: 239px;\r\n    height: 239px;\r\n    background-color: #F2F2F2;\r\n    -webkit-perspective: 1000px;\r\n            perspective: 1000px;\r\n}\r\n\r\n.flip-card-inner {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    -webkit-transition: -webkit-transform 0.8s;\r\n    transition: -webkit-transform 0.8s;\r\n    transition: transform 0.8s;\r\n    transition: transform 0.8s, -webkit-transform 0.8s;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n}\r\n\r\n.flip-card:hover .flip-card-inner {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n}\r\n\r\n.flip-card-front,\r\n.flip-card-back {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n\r\n.flip-card-front {\r\n    background-color: transparent;\r\n    color: black;\r\n}\r\n\r\n.flip-card-back {\r\n    background-color: #F77E79;\r\n    color: white;\r\n    border-radius: 50%;\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n    padding: 40% 2% 2% 2%;\r\n}\r\n\r\n.separador-seccion {\r\n    margin-bottom: 20%;\r\n}\r\n\r\n@media screen and (max-width: 988px) {\r\n    .im {\r\n        height: 300px !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 448px) {\r\n    .im {\r\n        height: 250px !important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLCtCQUF3QjtJQUF4Qix3QkFBd0I7SUFDeEIsb0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixtQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLCtCQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksc0NBQTZEO0lBQzdELHNCQUFzQjtJQUN0QixrQ0FBa0M7SUFDbEMsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFHQSw0QkFBNEI7O0FBRTVCO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDJCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMENBQTBCO0lBQTFCLGtDQUEwQjtJQUExQiwwQkFBMEI7SUFBMUIsa0RBQTBCO0lBQzFCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlY2Npb24ge1xyXG4gICAgcGFkZGluZzogMCAxNSUgMCAxNSU7XHJcbn1cclxuXHJcbi5jb2wge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwdmggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltYWdlbmZvbmRvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kMy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IFwibm8tcmVwZWF0XCI7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWFnZW5mb25kbzIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3JlY3VwZXJhci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IFwibm8tcmVwZWF0XCI7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jZW50cmVhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gICAgY29sb3I6ICMyRTJFMkU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1JSAwIDUlIDA7XHJcbn1cclxuXHJcblxyXG4vKnRhcmpldGFzIGhvdmVyIHJlZG9uZGl0YXMqL1xyXG5cclxuLmZsaXAtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAyMzlweDtcclxuICAgIGhlaWdodDogMjM5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xyXG4gICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4uZmxpcC1jYXJkLWZyb250LFxyXG4uZmxpcC1jYXJkLWJhY2sge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtZnJvbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc3RTc5O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICBwYWRkaW5nOiA0MCUgMiUgMiUgMiU7XHJcbn1cclxuXHJcbi5zZXBhcmFkb3Itc2VjY2lvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4OHB4KSB7XHJcbiAgICAuaW0ge1xyXG4gICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQ4cHgpIHtcclxuICAgIC5pbSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/hospitales/hospitales.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/hospitales/hospitales.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHospitalesHospitalesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 10% 15% 5% 15%;\r\n}\r\n\r\n\r\n/* FORMULARIOS VALIDACION */\r\n\r\n\r\n.ng-invalid.ng-touched:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n\r\n/* FIN FORMULARIOS VALIDACION */\r\n\r\n\r\n.centreado {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    padding: 0 0 5% 0;\r\n}\r\n\r\n\r\nimg {\r\n    height: 120px;\r\n    padding-bottom: 3%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob3NwaXRhbGVzL2hvc3BpdGFsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7O0FBR0EsMkJBQTJCOzs7QUFFM0I7SUFDSSxxQkFBcUI7QUFDekI7OztBQUdBLCtCQUErQjs7O0FBRS9CO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvc3BpdGFsZXMvaG9zcGl0YWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NlY2Npb24ge1xyXG4gICAgcGFkZGluZzogMTAlIDE1JSA1JSAxNSU7XHJcbn1cclxuXHJcblxyXG4vKiBGT1JNVUxBUklPUyBWQUxJREFDSU9OICovXHJcblxyXG4ubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdChmb3JtKSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcblxyXG4vKiBGSU4gRk9STVVMQVJJT1MgVkFMSURBQ0lPTiAqL1xyXG5cclxuLmNlbnRyZWFkbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIHtcclxuICAgIGNvbG9yOiAjMkUyRTJFO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAwIDUlIDA7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/hospitales/hospitales.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/hospitales/hospitales.component.ts ***!
    \***************************************************************/

  /*! exports provided: HospitalesComponent */

  /***/
  function srcAppComponentsHospitalesHospitalesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalesComponent", function () {
      return HospitalesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_hospitales_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/hospitales.service */
    "./src/app/services/hospitales.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);

    var HospitalesComponent =
    /*#__PURE__*/
    function () {
      function HospitalesComponent(hospitalesServices, storage) {
        _classCallCheck(this, HospitalesComponent);

        this.hospitalesServices = hospitalesServices;
        this.storage = storage;
      }

      _createClass(HospitalesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onUpload",
        value: function onUpload(e, cualEs) {
          var _this3 = this;

          var id = Math.random().toString(36).substring(2);
          var file = e.target.files[0];
          var filePath = "SolicitudSangre/SolicitudSangre_".concat(id);
          var ref = this.storage.ref(filePath);
          var taks = this.storage.upload(filePath, file);
          this.uploadPercentFoto = taks.percentageChanges();
          taks.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            return _this3.urlFoto = ref.getDownloadURL();
          })).subscribe();
        }
      }, {
        key: "guardarSolicitud",
        value: function guardarSolicitud(form) {
          form.value.foto = this.inputFoto.nativeElement.value;
          this.hospitalesServices.agregarHospitalRegistro(form.value);
          form.resetForm();
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se guardo correctamente',
            showConfirmButton: false,
            timer: 1500
          });
        }
      }]);

      return HospitalesComponent;
    }();

    HospitalesComponent.ctorParameters = function () {
      return [{
        type: _services_hospitales_service__WEBPACK_IMPORTED_MODULE_1__["HospitalesService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("imagenFoto", {
      static: true
    })], HospitalesComponent.prototype, "inputFoto", void 0);
    HospitalesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-hospitales',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hospitales.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hospitales/hospitales.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hospitales.component.css */
      "./src/app/components/hospitales/hospitales.component.css")).default]
    })], HospitalesComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".espaciado {\r\n    padding: 0 15% 10px 15%;\r\n}\r\n\r\n.imagen {\r\n    height: 36px;\r\n    margin-right: 5%;\r\n}\r\n\r\n.imgRedonda {\r\n    width: 50px;\r\n    height: auto;\r\n    border-radius: 150px;\r\n}\r\n\r\n.centreado {\r\n    text-align: center;\r\n}\r\n\r\n.boton {\r\n    width: 272px !important;\r\n    padding: 10px 0 10px 0 !important;\r\n}\r\n\r\n.App-header {\r\n    position: absolute;\r\n    left: 0;\r\n    padding-bottom: 20px;\r\n    background: transparent;\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.774);\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.color-nav {\r\n    background: #4CBCB3;\r\n    padding-bottom: 0px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n.color-nav2 {\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n.menu-fixed {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1000;\r\n}\r\n\r\n.color-nav {\r\n    background: #4CBCB3;\r\n    padding-bottom: 0px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n}\r\n\r\n/* Aca Comienza el menu del home */\r\n\r\nheader {\r\n    position: absolute;\r\n    left: 0;\r\n    padding: 0 100px;\r\n    padding-bottom: 20px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n    background: #ffffff3b;\r\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.774);\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n\r\nheader.header a img.logo {\r\n    color: black;\r\n    height: 60px;\r\n    width: 60px;\r\n    float: left;\r\n    padding: 5px;\r\n}\r\n\r\nheader nav {\r\n    float: right;\r\n}\r\n\r\nheader nav ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\nheader nav ul li {\r\n    list-style: none;\r\n}\r\n\r\nheader nav ul li a {\r\n    height: 60px;\r\n    line-height: 60px;\r\n    padding: 0 20px;\r\n    color: black;\r\n    font-size: small;\r\n    text-decoration: none !important;\r\n    display: block;\r\n}\r\n\r\nheader nav ul li a:hover {\r\n    color: white;\r\n    background: #F1414E;\r\n}\r\n\r\nheader nav ul li a:hover {\r\n    color: white;\r\n    background: #F1414E;\r\n}\r\n\r\n.activee {\r\n    color: white;\r\n    background: #F1414E;\r\n}\r\n\r\n.menu-toggle {\r\n    color: black;\r\n    float: right;\r\n    line-height: 50px;\r\n    font-size: 24px;\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n\r\n@media (max-width: 1231px) {\r\n    header {\r\n        padding: 0 20px;\r\n    }\r\n    .menu-toggle {\r\n        display: block;\r\n    }\r\n    header nav {\r\n        position: absolute;\r\n        width: 65%;\r\n        height: calc(100vh - 50px);\r\n        background: #4CBCB3;\r\n        top: 60px;\r\n        left: -100%;\r\n        -webkit-transition: 0.5s;\r\n        transition: 0.5s;\r\n    }\r\n    header nav.active {\r\n        left: 0;\r\n    }\r\n    header nav ul {\r\n        display: block;\r\n        text-align: center;\r\n    }\r\n    header nav ul li a {\r\n        border-bottom: 1px solid rgba(0, 0, 0, .2)\r\n    }\r\n}\r\n\r\n.der-ini {\r\n    background: rgb(119, 119, 119);\r\n    cursor: pointer;\r\n}\r\n\r\n.der-reg {\r\n    background: rgb(119, 119, 119);\r\n    cursor: pointer;\r\n}\r\n\r\n.boton-nav {\r\n    cursor: pointer;\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQWdCO0lBQWhCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7O0FBR0Esa0NBQWtDOztBQUVsQztJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQiwyQ0FBMkM7SUFDM0MsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDViwwQkFBMEI7UUFDMUIsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxXQUFXO1FBQ1gsd0JBQWdCO1FBQWhCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksT0FBTztJQUNYO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVzcGFjaWFkbyB7XHJcbiAgICBwYWRkaW5nOiAwIDE1JSAxMHB4IDE1JTtcclxufVxyXG5cclxuLmltYWdlbiB7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcblxyXG4uaW1nUmVkb25kYSB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG59XHJcblxyXG4uY2VudHJlYWRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJvdG9uIHtcclxuICAgIHdpZHRoOiAyNzJweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uQXBwLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjc3NCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5jb2xvci1uYXYge1xyXG4gICAgYmFja2dyb3VuZDogIzRDQkNCMztcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uY29sb3ItbmF2MiB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4ubWVudS1maXhlZCB7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLmNvbG9yLW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNENCQ0IzO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcblxyXG4vKiBBY2EgQ29taWVuemEgZWwgbWVudSBkZWwgaG9tZSAqL1xyXG5cclxuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDEwMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjNiO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNzc0KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaGVhZGVyLmhlYWRlciBhIGltZy5sb2dvIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IHVsIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IHVsIGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmhlYWRlciBuYXYgdWwgbGkgYSB7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5oZWFkZXIgbmF2IHVsIGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogI0YxNDE0RTtcclxufVxyXG5cclxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNGMTQxNEU7XHJcbn1cclxuXHJcbi5hY3RpdmVlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNGMTQxNEU7XHJcbn1cclxuXHJcbi5tZW51LXRvZ2dsZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjMxcHgpIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUtdG9nZ2xlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIGhlYWRlciBuYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNjUlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDUwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM0Q0JDQjM7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB9XHJcbiAgICBoZWFkZXIgbmF2LmFjdGl2ZSB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICAgIGhlYWRlciBuYXYgdWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIGhlYWRlciBuYXYgdWwgbGkgYSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjIpXHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZXItaW5pIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYigxMTksIDExOSwgMTE5KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRlci1yZWcge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDExOSwgMTE5LCAxMTkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYm90b24tbmF2IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _services_data_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/data-api.service */
    "./src/app/services/data-api.service.ts");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(authService, afsAuth, afAuth, router, persona) {
        _classCallCheck(this, NavbarComponent);

        this.authService = authService;
        this.afsAuth = afsAuth;
        this.afAuth = afAuth;
        this.router = router;
        this.persona = persona;
        this.email = "";
        this.pass = "";
        this.isLogin = false;
        this.isAdmin = false;
        this.personas = [];
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.siUsuarioAutentificado();
          this.authService.isAuth().subscribe(function (user) {
            if (user) {
              _this4.fotoUsuario = user.photoURL;

              _this4.persona.obtenerPersonaRegistro().subscribe(function (resp) {
                _this4.personas = resp;

                _this4.personas.forEach(function (element) {
                  if (user.email == "adminpatito@hotmail.com") {
                    _this4.isAdmin = true;

                    _this4.router.navigate(["hospitales"]);
                  }
                });
              });
            }
          });
          $(document).ready(function () {
            $(".menu-toggle").click(function () {
              $("nav").toggleClass("active");
            });
          });
          var menu = document.getElementById("menu1");
          var altura = menu.offsetTop; // const altura = 150;

          window.addEventListener("scroll", function () {
            if (window.pageYOffset > altura) {
              menu.classList.add("color-nav");
            } else {
              menu.classList.remove("color-nav");
              menu.classList.add("color-nav2");
            }
          });
        }
      }, {
        key: "verificaAdmin",
        value: function verificaAdmin() {
          var _this5 = this;

          this.authService.isAuth().subscribe(function (user) {
            if (user) {
              _this5.fotoUsuario = user.photoURL;

              _this5.persona.obtenerPersonaRegistro().subscribe(function (resp) {
                _this5.personas = resp;

                _this5.personas.forEach(function (element) {
                  if (user.email == element.email) {
                    _this5.isAdmin = true;
                  }
                });
              });
            }
          });
        }
      }, {
        key: "siUsuarioAutentificado",
        value: function siUsuarioAutentificado() {
          var _this6 = this;

          this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
              console.log("logged");
              _this6.isLogin = true;
            } else {
              console.log("not logged");
              _this6.isLogin = false;
              _this6.isAdmin = false;
            }
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this7 = this;

          this.authService.loginEmailUser(this.email, this.pass).then(function (res) {
            if (_this7.isAdmin == true) {} else {
              _this7.onLoginRedirect();
            }

            if (_this7.email == "" && _this7.pass == "") {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al iniciar sesion"
              });
            }
          }).catch(function (err) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              icon: "error",
              title: "Oops...",
              text: "El usuario no esta registrado o su password esta incorrecto"
            });
          });
        }
      }, {
        key: "onLoginGoogle",
        value: function onLoginGoogle() {
          var _this8 = this;

          this.authService.loginGoogleUser().then(function (res) {
            _this8.onLoginRedirect();
          }).catch(function (err) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              icon: "error",
              title: "Oops...",
              text: "Hubo un error en red"
            });
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logoutUser();
          this.router.navigate(["inicio"]);
        }
      }, {
        key: "onLoginRedirect",
        value: function onLoginRedirect() {
          this.router.navigate(["usuarios"]);
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_6__["DataApiService"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-navbar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/puntosdonacion/puntosdonacion.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/puntosdonacion/puntosdonacion.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPuntosdonacionPuntosdonacionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 10% 15% 5% 15%;\r\n}\r\n\r\n\r\n/* FORMULARIOS VALIDACION */\r\n\r\n\r\n.ng-invalid.ng-touched:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n\r\n/* FIN FORMULARIOS VALIDACION */\r\n\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    padding: 10% 0 5% 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wdW50b3Nkb25hY2lvbi9wdW50b3Nkb25hY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFHQSwyQkFBMkI7OztBQUUzQjtJQUNJLHFCQUFxQjtBQUN6Qjs7O0FBR0EsK0JBQStCOzs7QUFFL0I7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHVudG9zZG9uYWNpb24vcHVudG9zZG9uYWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWNjaW9uIHtcclxuICAgIHBhZGRpbmc6IDEwJSAxNSUgNSUgMTUlO1xyXG59XHJcblxyXG5cclxuLyogRk9STVVMQVJJT1MgVkFMSURBQ0lPTiAqL1xyXG5cclxuLm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG5cclxuLyogRklOIEZPUk1VTEFSSU9TIFZBTElEQUNJT04gKi9cclxuXHJcbi5lbmNhYmV6YWRvIHtcclxuICAgIGNvbG9yOiAjMkUyRTJFO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTAlIDAgNSUgMDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/puntosdonacion/puntosdonacion.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/puntosdonacion/puntosdonacion.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PuntosdonacionComponent */

  /***/
  function srcAppComponentsPuntosdonacionPuntosdonacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PuntosdonacionComponent", function () {
      return PuntosdonacionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_hospitales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/hospitales.service */
    "./src/app/services/hospitales.service.ts");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_citas_hospital_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/citas-hospital.service */
    "./src/app/services/citas-hospital.service.ts");
    /* harmony import */


    var _services_data_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/data-api.service */
    "./src/app/services/data-api.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var PuntosdonacionComponent =
    /*#__PURE__*/
    function () {
      function PuntosdonacionComponent(hospitalesServices, authService, citas, donador) {
        _classCallCheck(this, PuntosdonacionComponent);

        this.hospitalesServices = hospitalesServices;
        this.authService = authService;
        this.citas = citas;
        this.donador = donador;
        this.estaLogeado = false;
        this.hospitales = [];
      }

      _createClass(PuntosdonacionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          // Verifica que este logeado
          this.authService.isAuth().subscribe(function (user) {
            if (user) {
              _this9.estaLogeado = true;

              _this9.donador.obtenerPersonaRegistro().subscribe(function (resp) {
                resp.forEach(function (element) {
                  if (user.email == element.email) {
                    _this9.ciDonador = element.ci;
                  }
                });
              });
            } else {
              _this9.estaLogeado = false;
            }
          });
          $(document).ready(function () {
            $(".your-class").slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 1000,
              dots: true,
              arrows: true
            });
          }); // Recupera todos los hopitales

          this.hospitalesServices.obtenerHospitalRegistro().subscribe(function (resp) {
            _this9.hospitales = resp;
          });
        }
      }, {
        key: "enviarIdSolicitud",
        value: function enviarIdSolicitud(hospital) {
          this.hospitalReceptor = hospital;
        }
      }, {
        key: "guardar",
        value: function guardar(form) {
          form.value.id_usuario = this.ciDonador;
          form.value.hospital = this.hospitalReceptor;
          form.value.estado = false;
          this.citas.agregarCitasRegistro(form.value);
          form.resetForm();
          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            position: "top-end",
            icon: "success",
            title: "Se guardo correctamente",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }]);

      return PuntosdonacionComponent;
    }();

    PuntosdonacionComponent.ctorParameters = function () {
      return [{
        type: _services_hospitales_service__WEBPACK_IMPORTED_MODULE_2__["HospitalesService"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services_citas_hospital_service__WEBPACK_IMPORTED_MODULE_4__["CitasHospitalService"]
      }, {
        type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_5__["DataApiService"]
      }];
    };

    PuntosdonacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-puntosdonacion",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./puntosdonacion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/puntosdonacion/puntosdonacion.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./puntosdonacion.component.css */
      "./src/app/components/puntosdonacion/puntosdonacion.component.css")).default]
    })], PuntosdonacionComponent);
    /***/
  },

  /***/
  "./src/app/components/registrarse/registrarse.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/components/registrarse/registrarse.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegistrarseRegistrarseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 5% 15% 5% 15%;\r\n}\r\n\r\n.ng-invalid.ng-touched:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n.centreado {\r\n    text-align: center;\r\n}\r\n\r\np {\r\n    font-weight: lighter;\r\n}\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    padding: 5% 0 5% 0;\r\n}\r\n\r\nimg {\r\n    height: 36px;\r\n    margin-right: 5%;\r\n}\r\n\r\n.boton {\r\n    width: 272px !important;\r\n    padding: 10px 0 10px 0 !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXJzZS9yZWdpc3RyYXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmFyc2UvcmVnaXN0cmFyc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWNjaW9uIHtcclxuICAgIHBhZGRpbmc6IDUlIDE1JSA1JSAxNSU7XHJcbn1cclxuXHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmNlbnRyZWFkbyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbi5lbmNhYmV6YWRvIHtcclxuICAgIGNvbG9yOiAjMkUyRTJFO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNSUgMCA1JSAwO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuLmJvdG9uIHtcclxuICAgIHdpZHRoOiAyNzJweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMCAhaW1wb3J0YW50O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/registrarse/registrarse.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/registrarse/registrarse.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RegistrarseComponent */

  /***/
  function srcAppComponentsRegistrarseRegistrarseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrarseComponent", function () {
      return RegistrarseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_data_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/data-api.service */
    "./src/app/services/data-api.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var RegistrarseComponent =
    /*#__PURE__*/
    function () {
      function RegistrarseComponent(afAuth, router, authService, personaServices) {
        _classCallCheck(this, RegistrarseComponent);

        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.personaServices = personaServices;
        this.ci = "";
        this.nombre = "";
        this.apellido_p = "";
        this.apellido_m = "";
        this.fecha_nac = new Date();
        this.genero = "";
        this.tipo_sangre = "";
        this.email = "";
        this.pass = "";
        this.organos = "";
        this.sangre = "";
      }

      _createClass(RegistrarseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onAddUser",
        value: function onAddUser() {
          var _this10 = this;

          var persona = {
            ci: this.ci,
            nombre: this.nombre,
            apellido_p: this.apellido_p,
            apellido_m: this.apellido_m,
            fecha_nac: this.fecha_nac,
            genero: this.genero,
            tipo_sangre: this.tipo_sangre,
            email: this.email,
            pass: this.pass,
            organos: this.organos,
            sangre: this.sangre,
            id: ""
          };
          this.personaServices.agregarPersonaRegistro(persona);
          this.authService.registerUser(this.email, this.pass).then(function (res) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Gracias por registrarse',
              showConfirmButton: false,
              timer: 2000
            });

            _this10.router.navigate(["inicio"]);
          }).catch(function (err) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No se puede realizar esta accion'
            });
          });
        }
      }, {
        key: "onLoginRedirect",
        value: function onLoginRedirect() {
          this.router.navigate(["inicio"]);
        }
      }, {
        key: "onLoginGoogle",
        value: function onLoginGoogle() {
          var _this11 = this;

          this.authService.loginGoogleUser().then(function (res) {
            _this11.router.navigate(["google"]);
          }).catch(function (err) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No se puede realizar esta accion'
            });
          });
        }
      }]);

      return RegistrarseComponent;
    }();

    RegistrarseComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_5__["DataApiService"]
      }];
    };

    RegistrarseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-registrarse",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registrarse.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registrarse/registrarse.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registrarse.component.css */
      "./src/app/components/registrarse/registrarse.component.css")).default]
    })], RegistrarseComponent);
    /***/
  },

  /***/
  "./src/app/components/registro-google/registro-google.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/registro-google/registro-google.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegistroGoogleRegistroGoogleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ng-invalid.ng-touched:not(form){\r\n    border: 1px solid red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Ryby1nb29nbGUvcmVnaXN0cm8tZ29vZ2xlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdHJvLWdvb2dsZS9yZWdpc3Ryby1nb29nbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6bm90KGZvcm0pe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/registro-google/registro-google.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/registro-google/registro-google.component.ts ***!
    \*************************************************************************/

  /*! exports provided: RegistroGoogleComponent */

  /***/
  function srcAppComponentsRegistroGoogleRegistroGoogleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroGoogleComponent", function () {
      return RegistroGoogleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var src_app_services_data_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/data-api.service */
    "./src/app/services/data-api.service.ts");

    var RegistroGoogleComponent =
    /*#__PURE__*/
    function () {
      function RegistroGoogleComponent(afAuth, router, authService, personaServices) {
        _classCallCheck(this, RegistroGoogleComponent);

        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.personaServices = personaServices;
        this.ci = "";
        this.nombre = "";
        this.apellido_p = "";
        this.apellido_m = "";
        this.fecha_nac = new Date();
        this.genero = "";
        this.tipo_sangre = "";
        this.email = "";
        this.pass = "";
        this.organos = "";
        this.sangre = "";
        this.foto = '';
        this.providerId = "null";
      }

      _createClass(RegistroGoogleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.authService.isAuth().subscribe(user => {
          //   if (user) {
          //     this.providerId = user.providerData[0].providerId;
          //     // console.log(this.providerId);
          //     console.log(user);        
          //   }
          // });
        }
      }, {
        key: "guardarGoogle",
        value: function guardarGoogle() {
          var _this12 = this;

          this.authService.isAuth().subscribe(function (user) {
            if (user) {
              var persona = {
                ci: _this12.ci,
                nombre: user.displayName,
                fecha_nac: _this12.fecha_nac,
                genero: _this12.genero,
                tipo_sangre: _this12.tipo_sangre,
                email: user.email,
                organos: _this12.organos,
                sangre: _this12.sangre,
                foto: user.photoURL
              };

              _this12.personaServices.agregarPersonaRegistro(persona);
            }
          });
          this.router.navigate(["inicio"]);
        }
      }]);

      return RegistroGoogleComponent;
    }();

    RegistroGoogleComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: src_app_services_data_api_service__WEBPACK_IMPORTED_MODULE_5__["DataApiService"]
      }];
    };

    RegistroGoogleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-registro-google",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registro-google.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registro-google/registro-google.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registro-google.component.css */
      "./src/app/components/registro-google/registro-google.component.css")).default]
    })], RegistroGoogleComponent);
    /***/
  },

  /***/
  "./src/app/components/registroorganos/registroorganos.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/components/registroorganos/registroorganos.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegistroorganosRegistroorganosComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 10% 15% 5% 15%;\r\n}\r\n\r\n\r\n/* FORMULARIOS VALIDACION */\r\n\r\n\r\n.ng-invalid.ng-touched:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n\r\n/* FIN FORMULARIOS VALIDACION */\r\n\r\n\r\n.centreado {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    padding: 0 0 5% 0;\r\n}\r\n\r\n\r\nimg {\r\n    height: 120px;\r\n    padding-bottom: 3%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Ryb29yZ2Fub3MvcmVnaXN0cm9vcmdhbm9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUdBLDJCQUEyQjs7O0FBRTNCO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQSwrQkFBK0I7OztBQUUvQjtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Ryb29yZ2Fub3MvcmVnaXN0cm9vcmdhbm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VjY2lvbiB7XHJcbiAgICBwYWRkaW5nOiAxMCUgMTUlIDUlIDE1JTtcclxufVxyXG5cclxuXHJcbi8qIEZPUk1VTEFSSU9TIFZBTElEQUNJT04gKi9cclxuXHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuXHJcbi8qIEZJTiBGT1JNVUxBUklPUyBWQUxJREFDSU9OICovXHJcblxyXG4uY2VudHJlYWRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gICAgY29sb3I6ICMyRTJFMkU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDAgNSUgMDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/registroorganos/registroorganos.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/registroorganos/registroorganos.component.ts ***!
    \*************************************************************************/

  /*! exports provided: RegistroorganosComponent */

  /***/
  function srcAppComponentsRegistroorganosRegistroorganosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistroorganosComponent", function () {
      return RegistroorganosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_solicitud_organos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/solicitud-organos.service */
    "./src/app/services/solicitud-organos.service.ts");

    var RegistroorganosComponent =
    /*#__PURE__*/
    function () {
      function RegistroorganosComponent(dataApi, storage) {
        _classCallCheck(this, RegistroorganosComponent);

        this.dataApi = dataApi;
        this.storage = storage;
      }

      _createClass(RegistroorganosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onUpload",
        value: function onUpload(e, cualEs) {
          var _this13 = this;

          var id = Math.random().toString(36).substring(2);
          var file = e.target.files[0];
          var filePath = "SolicitudOrganos/SolicitudOrganos".concat(id);
          var ref = this.storage.ref(filePath);
          var taks = this.storage.upload(filePath, file);
          this.uploadPercentFoto = taks.percentageChanges();
          taks.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
            return _this13.urlFoto = ref.getDownloadURL();
          })).subscribe();
        }
      }, {
        key: "guardarSolicitud",
        value: function guardarSolicitud(form) {
          form.value.foto = this.inputFoto.nativeElement.value;
          this.dataApi.agregarSolicitudOrganos(form.value);
          form.resetForm();
          sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se guardo correctamente',
            showConfirmButton: false,
            timer: 1500
          });
        }
      }]);

      return RegistroorganosComponent;
    }();

    RegistroorganosComponent.ctorParameters = function () {
      return [{
        type: _services_solicitud_organos_service__WEBPACK_IMPORTED_MODULE_5__["SolicitudOrganosService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("imagenFoto", {
      static: true
    })], RegistroorganosComponent.prototype, "inputFoto", void 0);
    RegistroorganosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registroorganos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registroorganos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/registroorganos/registroorganos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./registroorganos.component.css */
      "./src/app/components/registroorganos/registroorganos.component.css")).default]
    })], RegistroorganosComponent);
    /***/
  },

  /***/
  "./src/app/components/requisitos/requisitos.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/components/requisitos/requisitos.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRequisitosRequisitosComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 100% 15% 5% 15%;\r\n}\r\n\r\n.seccionModil {\r\n    padding-top: 10%;\r\n}\r\n\r\n.imagenfondo {\r\n    background-image: url('logoparafondo10.png');\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: \"no-repeat\";\r\n    text-align: center;\r\n}\r\n\r\n.centrear {\r\n    position: absolute;\r\n    padding-top: 5%;\r\n    text-align: left;\r\n    padding-left: 55%;\r\n}\r\n\r\n.imagenfondo2 {\r\n    background-image: url('fondoseccionrequisitos.png');\r\n    background-size: cover;\r\n    background-position: center center;\r\n    background-repeat: \"no-repeat\";\r\n    height: 400px;\r\n    opacity: 80%;\r\n}\r\n\r\n.col {\r\n    display: -webkit-box !important;\r\n    display: flex !important;\r\n    -webkit-box-align: center !important;\r\n            align-items: center !important;\r\n    -webkit-box-pack: center !important;\r\n            justify-content: center !important;\r\n    min-height: 40vh !important;\r\n}\r\n\r\np {\r\n    font-weight: lighter;\r\n}\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    padding: 3% 0 5% 0;\r\n}\r\n\r\n.tarjeta {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\n.imagen {\r\n    height: 150px;\r\n    width: 150px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin: 0 auto;\r\n}\r\n\r\n@media screen and (max-width: 988px) {\r\n    .im {\r\n        height: 200px;\r\n    }\r\n    .seccionModil {\r\n        padding-top: 120px!important;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXF1aXNpdG9zL3JlcXVpc2l0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRDQUFtRTtJQUNuRSxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtREFBMEU7SUFDMUUsc0JBQXNCO0lBQ3RCLGtDQUFrQztJQUNsQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwrQkFBd0I7SUFBeEIsd0JBQXdCO0lBQ3hCLG9DQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsbUNBQWtDO1lBQWxDLGtDQUFrQztJQUNsQywyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXF1aXNpdG9zL3JlcXVpc2l0b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWNjaW9uIHtcclxuICAgIHBhZGRpbmc6IDEwMCUgMTUlIDUlIDE1JTtcclxufVxyXG5cclxuLnNlY2Npb25Nb2RpbCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcblxyXG4uaW1hZ2VuZm9uZG8ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ29wYXJhZm9uZG8xMC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IFwibm8tcmVwZWF0XCI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50cmVhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLXRvcDogNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1NSU7XHJcbn1cclxuXHJcbi5pbWFnZW5mb25kbzIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ZvbmRvc2VjY2lvbnJlcXVpc2l0b3MucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBcIm5vLXJlcGVhdFwiO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG9wYWNpdHk6IDgwJTtcclxufVxyXG5cclxuLmNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogNDB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyB7XHJcbiAgICBjb2xvcjogIzJFMkUyRTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMlIDAgNSUgMDtcclxufVxyXG5cclxuLnRhcmpldGEge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5pbWFnZW4ge1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTg4cHgpIHtcclxuICAgIC5pbSB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIH1cclxuICAgIC5zZWNjaW9uTW9kaWwge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMjBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/requisitos/requisitos.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/requisitos/requisitos.component.ts ***!
    \***************************************************************/

  /*! exports provided: RequisitosComponent */

  /***/
  function srcAppComponentsRequisitosRequisitosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequisitosComponent", function () {
      return RequisitosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RequisitosComponent =
    /*#__PURE__*/
    function () {
      function RequisitosComponent() {
        _classCallCheck(this, RequisitosComponent);
      }

      _createClass(RequisitosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RequisitosComponent;
    }();

    RequisitosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-requisitos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./requisitos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/requisitos/requisitos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./requisitos.component.css */
      "./src/app/components/requisitos/requisitos.component.css")).default]
    })], RequisitosComponent);
    /***/
  },

  /***/
  "./src/app/components/solicitardonadores/solicitardonadores.component.css":
  /*!********************************************************************************!*\
    !*** ./src/app/components/solicitardonadores/solicitardonadores.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSolicitardonadoresSolicitardonadoresComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 10% 15% 5% 15%;\r\n}\r\n\r\n\r\n/* FORMULARIOS VALIDACION */\r\n\r\n\r\n.ng-invalid.ng-touched:not(form) {\r\n    border: 1px solid red;\r\n}\r\n\r\n\r\n/* FIN FORMULARIOS VALIDACION */\r\n\r\n\r\n.centreado {\r\n    text-align: center;\r\n}\r\n\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n    padding: 0 0 5% 0;\r\n}\r\n\r\n\r\nimg {\r\n    height: 120px;\r\n    padding-bottom: 3%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb2xpY2l0YXJkb25hZG9yZXMvc29saWNpdGFyZG9uYWRvcmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUdBLDJCQUEyQjs7O0FBRTNCO0lBQ0kscUJBQXFCO0FBQ3pCOzs7QUFHQSwrQkFBK0I7OztBQUUvQjtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb2xpY2l0YXJkb25hZG9yZXMvc29saWNpdGFyZG9uYWRvcmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VjY2lvbiB7XHJcbiAgICBwYWRkaW5nOiAxMCUgMTUlIDUlIDE1JTtcclxufVxyXG5cclxuXHJcbi8qIEZPUk1VTEFSSU9TIFZBTElEQUNJT04gKi9cclxuXHJcbi5uZy1pbnZhbGlkLm5nLXRvdWNoZWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuXHJcbi8qIEZJTiBGT1JNVUxBUklPUyBWQUxJREFDSU9OICovXHJcblxyXG4uY2VudHJlYWRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gICAgY29sb3I6ICMyRTJFMkU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwIDAgNSUgMDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/solicitardonadores/solicitardonadores.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/solicitardonadores/solicitardonadores.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: SolicitardonadoresComponent */

  /***/
  function srcAppComponentsSolicitardonadoresSolicitardonadoresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitardonadoresComponent", function () {
      return SolicitardonadoresComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_solicitud_sangre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/solicitud-sangre.service */
    "./src/app/services/solicitud-sangre.service.ts");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _services_hospitales_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/hospitales.service */
    "./src/app/services/hospitales.service.ts");

    var SolicitardonadoresComponent =
    /*#__PURE__*/
    function () {
      function SolicitardonadoresComponent(dataApi, storage, hospitales) {
        _classCallCheck(this, SolicitardonadoresComponent);

        this.dataApi = dataApi;
        this.storage = storage;
        this.hospitales = hospitales;
        this.hospitalesVar = [];
      }

      _createClass(SolicitardonadoresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.hospitales.obtenerHospitalRegistro().subscribe(function (resp) {
            _this14.hospitalesVar = resp;
          });
        }
      }, {
        key: "onUpload",
        value: function onUpload(e, cualEs) {
          var _this15 = this;

          var id = Math.random().toString(36).substring(2);
          var file = e.target.files[0];
          var filePath = "SolicitudSangre/SolicitudSangre_".concat(id);
          var ref = this.storage.ref(filePath);
          var taks = this.storage.upload(filePath, file);
          this.uploadPercentFoto = taks.percentageChanges();
          taks.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            return _this15.urlFoto = ref.getDownloadURL();
          })).subscribe();
        }
      }, {
        key: "guardarSolicitud",
        value: function guardarSolicitud(form) {
          form.value.foto = this.inputFoto.nativeElement.value;
          this.dataApi.agregarsolicitudSangre(form.value);
          form.resetForm();
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se guardo correctamente',
            showConfirmButton: false,
            timer: 1500
          });
        }
      }]);

      return SolicitardonadoresComponent;
    }();

    SolicitardonadoresComponent.ctorParameters = function () {
      return [{
        type: _services_solicitud_sangre_service__WEBPACK_IMPORTED_MODULE_2__["SolicitudSangreService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
      }, {
        type: _services_hospitales_service__WEBPACK_IMPORTED_MODULE_6__["HospitalesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("imagenFoto", {
      static: true
    })], SolicitardonadoresComponent.prototype, "inputFoto", void 0);
    SolicitardonadoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-solicitardonadores',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./solicitardonadores.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/solicitardonadores/solicitardonadores.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./solicitardonadores.component.css */
      "./src/app/components/solicitardonadores/solicitardonadores.component.css")).default]
    })], SolicitardonadoresComponent);
    /***/
  },

  /***/
  "./src/app/components/usuario/usuario.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/usuario/usuario.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsUsuarioUsuarioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 10% 15% 10% 15% !important;\r\n}\r\n\r\n.col {\r\n    display: -webkit-box !important;\r\n    display: flex !important;\r\n    -webkit-box-align: center !important;\r\n            align-items: center !important;\r\n    -webkit-box-pack: center !important;\r\n            justify-content: center !important;\r\n    min-height: 40vh !important;\r\n}\r\n\r\n.centrear {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\np {\r\n    font-weight: lighter;\r\n}\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n}\r\n\r\n.tarjeta {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\nimg {\r\n    margin: 2% 0 2% 0 !important;\r\n}\r\n\r\np {\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c3VhcmlvL3VzdWFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLCtCQUF3QjtJQUF4Qix3QkFBd0I7SUFDeEIsb0NBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixtQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c3VhcmlvL3VzdWFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWNjaW9uIHtcclxuICAgIHBhZGRpbmc6IDEwJSAxNSUgMTAlIDE1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHZoICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jZW50cmVhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG4uZW5jYWJlemFkbyB7XHJcbiAgICBjb2xvcjogIzJFMkUyRTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRhcmpldGEge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBtYXJnaW46IDIlIDAgMiUgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/usuario/usuario.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/usuario/usuario.component.ts ***!
    \*********************************************************/

  /*! exports provided: UsuarioComponent */

  /***/
  function srcAppComponentsUsuarioUsuarioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function () {
      return UsuarioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_citas_hospital_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/citas-hospital.service */
    "./src/app/services/citas-hospital.service.ts");
    /* harmony import */


    var _services_citas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/citas.service */
    "./src/app/services/citas.service.ts");
    /* harmony import */


    var _services_data_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/data-api.service */
    "./src/app/services/data-api.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var UsuarioComponent =
    /*#__PURE__*/
    function () {
      function UsuarioComponent(citasHospitales, citaspersonas, persona, authService) {
        _classCallCheck(this, UsuarioComponent);

        this.citasHospitales = citasHospitales;
        this.citaspersonas = citaspersonas;
        this.persona = persona;
        this.authService = authService;
        this.citasHospitalesvar = [];
        this.personaCompleta = [];
      }

      _createClass(UsuarioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.authService.isAuth().subscribe(function (user) {
            _this16.fotoPersona = user.photoURL;
            console.log(_this16.fotoPersona); // recupera hospitales

            _this16.persona.obtenerPersonaRegistro().subscribe(function (resp) {
              resp.forEach(function (element) {
                if (user.email == element.email) {
                  _this16.personaCompleta.push(element);

                  _this16.ciPersona = element.ci;

                  _this16.citasHospitales.obtenerCitasRegistro().subscribe(function (citasHosp) {
                    citasHosp.forEach(function (element2) {
                      if (_this16.ciPersona == element2.id_usuario) {
                        _this16.citasHospitalesvar.push(element2);
                      }
                    });
                  });
                }
              });
            }); //  recupera citas personales


            _this16.persona.obtenerPersonaRegistro().subscribe(function (resp) {
              resp.forEach(function (element) {
                if (user.email == element.email) {
                  _this16.ciPersona = element.ci;

                  _this16.citaspersonas.obtenerCitasRegistro().subscribe(function (citasHosp) {
                    citasHosp.forEach(function (element2) {
                      if (_this16.ciPersona == element2.id_usuario) {
                        _this16.citasHospitalesvar.push(element2);

                        console.log(_this16.citasHospitalesvar);
                      }
                    });
                  });
                }
              });
            });
          });
        }
      }]);

      return UsuarioComponent;
    }();

    UsuarioComponent.ctorParameters = function () {
      return [{
        type: _services_citas_hospital_service__WEBPACK_IMPORTED_MODULE_2__["CitasHospitalService"]
      }, {
        type: _services_citas_service__WEBPACK_IMPORTED_MODULE_3__["CitasService"]
      }, {
        type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_4__["DataApiService"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }];
    };

    UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-usuario",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./usuario.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/usuario/usuario.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./usuario.component.css */
      "./src/app/components/usuario/usuario.component.css")).default]
    })], UsuarioComponent);
    /***/
  },

  /***/
  "./src/app/componets/aprobarcitas/aprobarcitas.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/componets/aprobarcitas/aprobarcitas.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponetsAprobarcitasAprobarcitasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#seccion {\r\n    padding: 10% 15% 10% 15% !important;\r\n}\r\n\r\n/* .col {\r\n    display: flex !important;\r\n    align-items: center !important;\r\n    justify-content: center !important;\r\n    min-height: 40vh !important;\r\n} */\r\n\r\n.centrear {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\nh2 {\r\n    font-family: learning curve;\r\n    size: 50px;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\nh1 {\r\n    font-family: learning curve;\r\n    size: 50px;\r\n    color: white;\r\n    font-weight: bold;\r\n}\r\n\r\np {\r\n    font-weight: lighter;\r\n}\r\n\r\n.encabezado {\r\n    color: #2E2E2E;\r\n    text-align: center;\r\n}\r\n\r\n.tarjeta {\r\n    border: none;\r\n    background-color: transparent;\r\n}\r\n\r\nimg {\r\n    margin: 2% 0 2% 0 !important;\r\n}\r\n\r\np {\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZXRzL2Fwcm9iYXJjaXRhcy9hcHJvYmFyY2l0YXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTs7Ozs7R0FLRzs7QUFFSDtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZXRzL2Fwcm9iYXJjaXRhcy9hcHJvYmFyY2l0YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWNjaW9uIHtcclxuICAgIHBhZGRpbmc6IDEwJSAxNSUgMTAlIDE1JSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAuY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHZoICFpbXBvcnRhbnQ7XHJcbn0gKi9cclxuXHJcbi5jZW50cmVhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICBmb250LWZhbWlseTogbGVhcm5pbmcgY3VydmU7XHJcbiAgICBzaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBsZWFybmluZyBjdXJ2ZTtcclxuICAgIHNpemU6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxufVxyXG5cclxuLmVuY2FiZXphZG8ge1xyXG4gICAgY29sb3I6ICMyRTJFMkU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50YXJqZXRhIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgbWFyZ2luOiAyJSAwIDIlIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxucCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/componets/aprobarcitas/aprobarcitas.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/componets/aprobarcitas/aprobarcitas.component.ts ***!
    \******************************************************************/

  /*! exports provided: AprobarcitasComponent */

  /***/
  function srcAppComponetsAprobarcitasAprobarcitasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AprobarcitasComponent", function () {
      return AprobarcitasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AprobarcitasComponent =
    /*#__PURE__*/
    function () {
      function AprobarcitasComponent() {
        _classCallCheck(this, AprobarcitasComponent);
      }

      _createClass(AprobarcitasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AprobarcitasComponent;
    }();

    AprobarcitasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aprobarcitas',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./aprobarcitas.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componets/aprobarcitas/aprobarcitas.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./aprobarcitas.component.css */
      "./src/app/componets/aprobarcitas/aprobarcitas.component.css")).default]
    })], AprobarcitasComponent);
    /***/
  },

  /***/
  "./src/app/pipes/filtra-sangre.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/pipes/filtra-sangre.pipe.ts ***!
    \*********************************************/

  /*! exports provided: FiltraSangrePipe */

  /***/
  function srcAppPipesFiltraSangrePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FiltraSangrePipe", function () {
      return FiltraSangrePipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FiltraSangrePipe =
    /*#__PURE__*/
    function () {
      function FiltraSangrePipe() {
        _classCallCheck(this, FiltraSangrePipe);
      }

      _createClass(FiltraSangrePipe, [{
        key: "transform",
        value: function transform(value, args) {
          var resultado = [];

          if (value) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var sangre = _step.value;

                if (sangre.tipo_sangre == args) {
                  resultado.push(sangre);
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          return resultado;
        }
      }]);

      return FiltraSangrePipe;
    }();

    FiltraSangrePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'filtraSangre'
    })], FiltraSangrePipe);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(afsAuth) {
        _classCallCheck(this, AuthService);

        this.afsAuth = afsAuth;
      }

      _createClass(AuthService, [{
        key: "registerUser",
        value: function registerUser(email, pass) {
          var _this17 = this;

          return new Promise(function (resolve, reject) {
            _this17.afsAuth.auth.createUserWithEmailAndPassword(email, pass).then(function (userData) {
              return resolve(userData);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "loginEmailUser",
        value: function loginEmailUser(email, pass) {
          var _this18 = this;

          return new Promise(function (resolve, reject) {
            _this18.afsAuth.auth.signInWithEmailAndPassword(email, pass).then(function (userData) {
              return resolve(userData);
            }, function (err) {
              return reject(err);
            });
          });
        }
      }, {
        key: "loginGoogleUser",
        value: function loginGoogleUser() {
          return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider());
        }
      }, {
        key: "logoutUser",
        value: function logoutUser() {
          return this.afsAuth.auth.signOut();
        }
      }, {
        key: "isAuth",
        value: function isAuth() {
          return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) {
            return auth;
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/citas-hospital.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/citas-hospital.service.ts ***!
    \****************************************************/

  /*! exports provided: CitasHospitalService */

  /***/
  function srcAppServicesCitasHospitalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitasHospitalService", function () {
      return CitasHospitalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CitasHospitalService =
    /*#__PURE__*/
    function () {
      function CitasHospitalService(firebase) {
        _classCallCheck(this, CitasHospitalService);

        this.firebase = firebase;
        this.seleccionarCitasRegistro = {};
        this.registroCitasCollection = firebase.collection('CitasHospital');
        this.CitasRegistro = this.registroCitasCollection.valueChanges();
      }

      _createClass(CitasHospitalService, [{
        key: "obtenerCitasRegistro",
        value: function obtenerCitasRegistro() {
          return this.CitasRegistro = this.registroCitasCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
              var data = action.payload.doc.data();
              data.id = action.payload.doc.id;
              return data;
            });
          }));
        }
      }, {
        key: "agregarCitasRegistro",
        value: function agregarCitasRegistro(CitasRegistro) {
          this.registroCitasCollection.add(CitasRegistro);
        }
      }, {
        key: "actualizarCitasRegistro",
        value: function actualizarCitasRegistro(CitasRegistro) {
          var idCitasRegistro = CitasRegistro.id;
          console.log(idCitasRegistro);
          this.resgistroCitasDOC = this.firebase.doc("CitasHospital/".concat(idCitasRegistro));
          this.resgistroCitasDOC.update(CitasRegistro);
        }
      }, {
        key: "borrarCitasRegistro",
        value: function borrarCitasRegistro(idCitasRegistro) {
          this.resgistroCitasDOC = this.firebase.doc("CitasHospital/".concat(idCitasRegistro));
          this.resgistroCitasDOC.delete();
        }
      }]);

      return CitasHospitalService;
    }();

    CitasHospitalService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    CitasHospitalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CitasHospitalService);
    /***/
  },

  /***/
  "./src/app/services/citas.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/citas.service.ts ***!
    \*******************************************/

  /*! exports provided: CitasService */

  /***/
  function srcAppServicesCitasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CitasService", function () {
      return CitasService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CitasService =
    /*#__PURE__*/
    function () {
      function CitasService(firebase) {
        _classCallCheck(this, CitasService);

        this.firebase = firebase;
        this.seleccionarCitasRegistro = {};
        this.registroCitasCollection = firebase.collection('CitasPersonales');
        this.CitasRegistro = this.registroCitasCollection.valueChanges();
      }

      _createClass(CitasService, [{
        key: "obtenerCitasRegistro",
        value: function obtenerCitasRegistro() {
          return this.CitasRegistro = this.registroCitasCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
              var data = action.payload.doc.data();
              data.id = action.payload.doc.id;
              return data;
            });
          }));
        }
      }, {
        key: "agregarCitasRegistro",
        value: function agregarCitasRegistro(CitasRegistro) {
          this.registroCitasCollection.add(CitasRegistro);
        }
      }, {
        key: "actualizarCitasRegistro",
        value: function actualizarCitasRegistro(CitasRegistro) {
          var idCitasRegistro = CitasRegistro.id;
          console.log(idCitasRegistro);
          this.resgistroCitasDOC = this.firebase.doc("CitasPersonales/".concat(idCitasRegistro));
          this.resgistroCitasDOC.update(CitasRegistro);
        }
      }, {
        key: "borrarCitasRegistro",
        value: function borrarCitasRegistro(idCitasRegistro) {
          this.resgistroCitasDOC = this.firebase.doc("CitasPersonales/".concat(idCitasRegistro));
          this.resgistroCitasDOC.delete();
        }
      }]);

      return CitasService;
    }();

    CitasService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    CitasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CitasService);
    /***/
  },

  /***/
  "./src/app/services/data-api.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/data-api.service.ts ***!
    \**********************************************/

  /*! exports provided: DataApiService */

  /***/
  function srcAppServicesDataApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataApiService", function () {
      return DataApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var DataApiService =
    /*#__PURE__*/
    function () {
      function DataApiService(firebase) {
        _classCallCheck(this, DataApiService);

        this.firebase = firebase;
        this.seleccionarPersonaRegistro = {};
        this.registroPersonaCollection = firebase.collection('Usuario');
        this.PersonaRegistro = this.registroPersonaCollection.valueChanges();
      }

      _createClass(DataApiService, [{
        key: "obtenerPersonaRegistro",
        value: function obtenerPersonaRegistro() {
          return this.PersonaRegistro = this.registroPersonaCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
              var data = action.payload.doc.data();
              data.id = action.payload.doc.id;
              return data;
            });
          }));
        }
      }, {
        key: "agregarPersonaRegistro",
        value: function agregarPersonaRegistro(PersonaRegistro) {
          this.registroPersonaCollection.add(PersonaRegistro);
        }
      }, {
        key: "actualizarPersonaRegistro",
        value: function actualizarPersonaRegistro(PersonaRegistro) {
          var idPersonaRegistro = PersonaRegistro.id;
          console.log(idPersonaRegistro);
          this.resgistroPersonaDOC = this.firebase.doc("Usuario/".concat(idPersonaRegistro));
          this.resgistroPersonaDOC.update(PersonaRegistro);
        }
      }, {
        key: "borrarPersonaRegistro",
        value: function borrarPersonaRegistro(idPersonaRegistro) {
          this.resgistroPersonaDOC = this.firebase.doc("Usuario/".concat(idPersonaRegistro));
          this.resgistroPersonaDOC.delete();
        }
      }]);

      return DataApiService;
    }();

    DataApiService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    DataApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataApiService);
    /***/
  },

  /***/
  "./src/app/services/hospitales.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/hospitales.service.ts ***!
    \************************************************/

  /*! exports provided: HospitalesService */

  /***/
  function srcAppServicesHospitalesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalesService", function () {
      return HospitalesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var HospitalesService =
    /*#__PURE__*/
    function () {
      function HospitalesService(firebase) {
        _classCallCheck(this, HospitalesService);

        this.firebase = firebase;
        this.seleccionarHospitales = {};
        this.registroHospitalCollection = firebase.collection('Hospital');
        this.HospitalRegistro = this.registroHospitalCollection.valueChanges();
      }

      _createClass(HospitalesService, [{
        key: "obtenerHospitalRegistro",
        value: function obtenerHospitalRegistro() {
          return this.HospitalRegistro = this.registroHospitalCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
              var data = action.payload.doc.data();
              data.id = action.payload.doc.id;
              return data;
            });
          }));
        }
      }, {
        key: "agregarHospitalRegistro",
        value: function agregarHospitalRegistro(HospitalRegistro) {
          this.registroHospitalCollection.add(HospitalRegistro);
        }
      }, {
        key: "actualizarHospitalRegistro",
        value: function actualizarHospitalRegistro(HospitalRegistro) {
          var idHospitalRegistro = HospitalRegistro.id;
          console.log(idHospitalRegistro);
          this.registroHospitalDOC = this.firebase.doc("Hospital/".concat(idHospitalRegistro));
          this.registroHospitalDOC.update(HospitalRegistro);
        }
      }, {
        key: "borrarHospitalRegistro",
        value: function borrarHospitalRegistro(idHospitalRegistro) {
          this.registroHospitalDOC = this.firebase.doc("Hospital/".concat(idHospitalRegistro));
          this.registroHospitalDOC.delete();
        }
      }]);

      return HospitalesService;
    }();

    HospitalesService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    HospitalesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HospitalesService);
    /***/
  },

  /***/
  "./src/app/services/solicitud-organos.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/solicitud-organos.service.ts ***!
    \*******************************************************/

  /*! exports provided: SolicitudOrganosService */

  /***/
  function srcAppServicesSolicitudOrganosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudOrganosService", function () {
      return SolicitudOrganosService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SolicitudOrganosService =
    /*#__PURE__*/
    function () {
      function SolicitudOrganosService(firebase) {
        _classCallCheck(this, SolicitudOrganosService);

        this.firebase = firebase;
        this.seleccionarSolicitudOrganos = {};
        this.SolicitudORganosCollection = firebase.collection('SolicitudOrganos');
        this.SolicitudOrganos = this.SolicitudORganosCollection.valueChanges();
      }

      _createClass(SolicitudOrganosService, [{
        key: "obtenerSolicitudOrganos",
        value: function obtenerSolicitudOrganos() {
          return this.SolicitudOrganos = this.SolicitudORganosCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
              var data = action.payload.doc.data();
              data.id = action.payload.doc.id;
              return data;
            });
          }));
        }
      }, {
        key: "agregarSolicitudOrganos",
        value: function agregarSolicitudOrganos(SolicitudOrganos) {
          this.SolicitudORganosCollection.add(SolicitudOrganos);
        }
      }, {
        key: "actualizarSolicitudOrganos",
        value: function actualizarSolicitudOrganos(SolicitudOrganos) {
          var idSolicitudOrganos = SolicitudOrganos.id;
          console.log(idSolicitudOrganos);
          this.SolicitudOrganosDOC = this.firebase.doc("SolicitudOrganos/".concat(idSolicitudOrganos));
          this.SolicitudOrganosDOC.update(SolicitudOrganos);
        }
      }, {
        key: "borrarSolicitudOrganos",
        value: function borrarSolicitudOrganos(idSolicitudOrganos) {
          this.SolicitudOrganosDOC = this.firebase.doc("SolicitudOrganos/".concat(idSolicitudOrganos));
          this.SolicitudOrganosDOC.delete();
        }
      }]);

      return SolicitudOrganosService;
    }();

    SolicitudOrganosService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    SolicitudOrganosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SolicitudOrganosService);
    /***/
  },

  /***/
  "./src/app/services/solicitud-sangre.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/solicitud-sangre.service.ts ***!
    \******************************************************/

  /*! exports provided: SolicitudSangreService */

  /***/
  function srcAppServicesSolicitudSangreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudSangreService", function () {
      return SolicitudSangreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SolicitudSangreService =
    /*#__PURE__*/
    function () {
      function SolicitudSangreService(firebase) {
        _classCallCheck(this, SolicitudSangreService);

        this.firebase = firebase;
        this.seleccionarSolicitudSangre = {};
        this.SolicitudSangreCollection = firebase.collection('SolicitudSangre');
        this.solicitudSangre = this.SolicitudSangreCollection.valueChanges();
      }

      _createClass(SolicitudSangreService, [{
        key: "obtenersolicitudSangre",
        value: function obtenersolicitudSangre() {
          return this.solicitudSangre = this.SolicitudSangreCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
            return changes.map(function (action) {
              var data = action.payload.doc.data();
              data.id = action.payload.doc.id;
              return data;
            });
          }));
        }
      }, {
        key: "agregarsolicitudSangre",
        value: function agregarsolicitudSangre(solicitudSangre) {
          this.SolicitudSangreCollection.add(solicitudSangre);
        }
      }, {
        key: "actualizarsolicitudSangre",
        value: function actualizarsolicitudSangre(solicitudSangre) {
          var idsolicitudSangre = solicitudSangre.id;
          console.log(idsolicitudSangre);
          this.solicitudSangreDOC = this.firebase.doc("SolicitudSangre/".concat(idsolicitudSangre));
          this.solicitudSangreDOC.update(solicitudSangre);
        }
      }, {
        key: "borrarsolicitudSangre",
        value: function borrarsolicitudSangre(idsolicitudSangre) {
          this.solicitudSangreDOC = this.firebase.doc("SolicitudSangre/".concat(idsolicitudSangre));
          this.solicitudSangreDOC.delete();
        }
      }]);

      return SolicitudSangreService;
    }();

    SolicitudSangreService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    SolicitudSangreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SolicitudSangreService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebaseConfig: {
        apiKey: "AIzaSyADL9eItqcOC4-mqR3yoQXGA5CEpvpXV8Y",
        authDomain: "donarsangre-bf5c7.firebaseapp.com",
        databaseURL: "https://donarsangre-bf5c7.firebaseio.com",
        projectId: "donarsangre-bf5c7",
        storageBucket: "donarsangre-bf5c7.appspot.com",
        messagingSenderId: "686268730527",
        appId: "1:686268730527:web:41393d03448db45f77a6aa",
        measurementId: "G-4G22Y5575R"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\angular\proyecto integrador\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map