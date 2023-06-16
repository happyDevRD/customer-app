import { Component } from '@angular/core';
import { Client } from './client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {

  public cliente : Client = new Client();
  public titulo  : string = "Crear Cliente";

  constructor(){}

  public create(): void{
    console.log("clicked!");
    console.log(this.cliente);

  }

}
