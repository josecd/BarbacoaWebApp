import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  getAvatars(){
      return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey){
    return this.db.collection('menu').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('menu').doc(userKey).set(value);
  }

  deleteUser(userKey){
    return this.db.collection('menu').doc(userKey).delete();
  }

  getUsers(){
    return this.db.collection('menu').snapshotChanges();
  }

  searchUsers(searchValue){
    return this.db.collection('menu',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchUsersByAge(value){
    return this.db.collection('menu',ref => ref.orderBy('precio').startAt(value)).snapshotChanges();
  }

  createUser(value){
    return this.db.collection('menu').add({
      nombre: value.name,
      nameToSearch: value.name.toLowerCase(),
      precio: parseInt(value.precio),
      gramo: parseInt(value.gramo),
      banderaTabla: parseInt(value.banderaTabla),
      espeChef: parseInt(value.espeChef),
      espeCasa:parseInt(value.espeCasa),
  
    });
  }

  getBebida(userKey){
    return this.db.collection('menuBebidas').doc(userKey).snapshotChanges();
  }

  updateBebida(userKey, value){
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('menuBebidas').doc(userKey).set(value);
  }

  deleteBebida(userKey){
    return this.db.collection('menuBebidas').doc(userKey).delete();
  }

  getBebidas(){
    return this.db.collection('menuBebidas').snapshotChanges();
  }

  searchBebidas(searchValue){
    return this.db.collection('menuBebidas',ref => ref.where('nameToSearch', '>=', searchValue)
      .where('nameToSearch', '<=', searchValue + '\uf8ff'))
      .snapshotChanges()
  }

  searchBebidasByAge(value){
    return this.db.collection('menuBebidas',ref => ref.orderBy('precio').startAt(value)).snapshotChanges();
  }

  createBebidas(value, avatar){
    return this.db.collection('menuBebidas').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      precio: parseInt(value.precio),
      banderaTabla: parseInt(value.banderaTabla),
      avatar: avatar
    });
  }
}
