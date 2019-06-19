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

   productos1: Product[] = [];
   productosFiltrado1: Product[] = [];
    dato1=[];

  constructor(private db: AngularFirestore, private http: HttpClient) {

    //  this.products = this.db.collection('menu').valueChanges();
      this.cargarProductos();
      this.cargarProductosBebidas();

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
        this.cargando = false;
        resolve();
          });
      });
    }

    private cargarProductosBebidas() {
      return new Promise((resolve, reject) => {
        // this.http.get('https://angular-html-2dd19.firebaseio.com/productos_idx.json')
         this.db.collection('menuBebidas').valueChanges()
      .subscribe((resp: Product[]) => {
        this.productos1 = resp;
        let x=0;
        //lo hiso angel.
        while(x<6){
          this.dato1.push(this.productos1[x]);
          x++;
          console.log(this.productos1);
          
        }
        
        this.cargando = false;
        resolve();
          });
      });
    }



  }
