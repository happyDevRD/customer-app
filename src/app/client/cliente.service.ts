import { Injectable } from '@angular/core';
// import { CLIENTS } from "./clients.json";
import { Client } from './client';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint: string = "http://localhost:8080/api/clientes";
  constructor( private http: HttpClient) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]> (this.urlEndpoint).pipe(
      map( response => response as Client[]  )
    );

  }
}
