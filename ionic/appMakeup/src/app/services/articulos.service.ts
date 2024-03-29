import { Storage } from '@ionic/storage';
import { CuentasService } from './cuentas.service';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from './../../environments/environment';
import { MsnApiArticulos, IArticulo, MsnApiEditara, MsnApiAgregara } from './../interfaces/ArticulosInterface';


const URL = environment.url;

@Injectable({
  providedIn: 'root'
})

export class ArticulosService {
  
  public token: string = null;
  public articulo: IArticulo;
  public respuesta: MsnApiArticulos;

  constructor(private http: HttpClient, 
              private cService: CuentasService,
              private storage: Storage) { }

  async getArticulos(): Promise<MsnApiArticulos>{
    const ruta = `${ URL }/api/admin/articulos`;
    return new Promise ( resolve => {
      this.http.get<MsnApiArticulos>(ruta)
        .subscribe ( respuesta => {
          resolve( respuesta );
        })
    })
  }

  async showArticulos(articuloid): Promise<MsnApiArticulos>{
    console.log('Articuloid =', articuloid);
    const ruta = `${ URL }/api/admin/articulos/${articuloid}`;
    return new Promise ( resolve => {
      this.http.get<MsnApiArticulos>(ruta)
      .subscribe (respuesta => {
        resolve(respuesta);
      });
    })
  }

  public buscarArticulos( articulos: string) {
    return this.http.get(`http://rosepowder.online/index.php/api/admin/articulos`)
  }

  agregara (articulo: IArticulo): Promise<MsnApiAgregara>{
    console.log(articulo);
  
    const ruta = `${ URL }/api/agregara`;
    const data = articulo;
    console.log (ruta, data);
  
    return new Promise ( resolve => {
      this.http.post<MsnApiAgregara>(ruta, data)
        .subscribe (respuesta => {
          if (respuesta.status == 'success'){
            resolve(respuesta)
          }else{
            this.token = null;
            this.storage.clear();
            resolve (respuesta);
        }
      });
  });
  } 

  async borrar(articuloid): Promise<MsnApiArticulos>{
    const ruta = `${ URL }/api/articulos/${articuloid}/remove`;
    console.log(ruta);
    return new Promise ( resolve => {
      this.http.get<MsnApiArticulos>(ruta)
      .subscribe(data => {
        console.log(data);
        resolve(data);
      });
  });
}

async actualizar(articuloid, nombre_articulo: string, descripcion: string, categoriaid: string, marcaid: string, precio: number, logo: string): Promise<MsnApiArticulos>{
  const ruta =  `${ URL }/api/admin/${articuloid}/actualizar`;
  const data = { nombre_articulo, descripcion, categoriaid, marcaid, precio, logo};
  console.log(ruta);
  return new Promise ( resolve => {
    this.http.put<MsnApiArticulos>(ruta,data)
    .subscribe(data => {
      console.log(data);
      resolve(data);        
    });
});
}
}
