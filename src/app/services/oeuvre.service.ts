import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OeuvreModel} from '../models/oeuvre.model';

@Injectable({
  providedIn: 'root'
})
export class OeuvreService {
  private url = 'http://localhost:3000/oeuvres';

  constructor(public http: HttpClient) {
  }

  getAll() {
    return this.http.get(this.url);
  }

  getById(id: number) {
    return this.http.get(this.url + '/' + id);
  }

  add(oeuvre: OeuvreModel) {
    return this.http.post<OeuvreModel>(this.url, oeuvre);
  }
  
  update(id: number, oeuvre: OeuvreModel) {
    return this.http.put<OeuvreModel>(this.url + '/' + id, oeuvre);
  }
}