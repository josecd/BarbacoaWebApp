import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}


  getUser(userKey){
    return this.db.collection('contacto').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('contacto').doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('contacto').doc(userKey).delete();
  }

  getUsers(){
    return this.db.collection('contacto').snapshotChanges();
  }

  searchUsers(searchValue){
    return this.db.collection('contacto',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value){
    return this.db.collection('contacto',ref => ref.orderBy('precio').startAt(value)).snapshotChanges();
  }

  createUser(value){
    return this.db.collection('contacto').add({
      nombre: value.nombre,
      nameToSearch: value.nombre.toLowerCase(),
      correo: value.correo,
      tema: value.tema,
      numero: value.numero,
      mensaje: value.mensaje
    });
  }
}