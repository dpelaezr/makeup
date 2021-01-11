import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  public getCategorias(){
    return this.http.get('http://makeup.test/makeup/public/api/admin/categorias');
  }

}
