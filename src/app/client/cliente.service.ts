import { Injectable } from '@angular/core';
import { CLIENTS } from "./clients.json";
import { Client } from './client';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  getClients(): Observable<Client[]> {
    return of(CLIENTS);

  }
}
