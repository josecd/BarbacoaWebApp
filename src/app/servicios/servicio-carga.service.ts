import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../modelos/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServicioCargaService {

  // productsCollection;
  // productDoc;
  // products: Observable<Product[]>; //http
  cargando = true;
  productos: Product[] = [];
  productosFiltrado: Product[] = [];
   dato=[];

  constructor(private db: AngularFirestore, private http: HttpClient) {

    //  this.products = this.db.collection('menu').valueChanges();
      this.cargarProductos();

    }

    // getMenu(){
    //   return this.products;
    // }

    private cargarProductos() {
      return new Promise((resolve, reject) => {
        // this.http.get('https://angular-html-2dd19.firebaseio.com/productos_idx.json')
         this.db.collection('menu').valueChanges()
      .subscribe((resp: Product[]) => {
        this.productos = resp;
        let x=0;
        //lo hiso angel.
        while(x<6){
          this.dato.push(this.productos[x]);
          x++;

        }     
        
        
        this.cargando = false;
        resolve();
          });
      });
    }



  }
