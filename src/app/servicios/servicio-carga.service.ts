import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from "../modelos/products";

@Injectable({
  providedIn: 'root'
})

export class ServicioCargaService {

  productsCollection;
  productDoc;
  products: Observable<Product[]>;
  constructor (public db: AngularFirestore) {

     this.products = this.db.collection('menu').valueChanges();
    }

    getMenu(){
      return this.products;
    }


  }
