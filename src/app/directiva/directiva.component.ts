import { Component } from "@angular/core";

@Component({
  selector: 'directiva-component',
  templateUrl : './directiva.component.html'

})
export class DirectivaComponent {


  listaCurso : string[] = ['TypeScript', 'Java', 'JavaScript'];

  isHabilitado: boolean = false;


    setHabilitar(): void  {
        this.isHabilitado = (this.isHabilitado == false) ?  true : false;
    }

}
