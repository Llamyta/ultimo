import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtraSangre'
})
export class FiltraSangrePipe implements PipeTransform {

  transform(value: any, args: any): any {
    const resultado = [];

    if (value) {
      for (const sangre of value) {
        if (sangre.tipo_sangre == args) {
          resultado.push(sangre);
        }
      }
    }
    return resultado;
  }

}
