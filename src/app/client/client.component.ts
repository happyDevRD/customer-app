import { Component, OnInit } from "@angular/core";
import { Client } from "./client";
import { ClienteService } from "./cliente.service";



@Component({
  selector    : 'cliente-component',
  templateUrl : './client.component.html'

})

export class ClienteComponent {


  Client: Client[];


  constructor(private clienteService: ClienteService){}

  ngOnInit(){
    this.clienteService.getClients().subscribe(
      clients => this.Client = clients
    );
  }


}
