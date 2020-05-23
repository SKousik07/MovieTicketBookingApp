import { Injectable } from '@angular/core';
import {Cardint} from '../service/cardint';
import { AngularFirestore ,AngularFirestoreCollection,AngularFirestoreDocument} from "@angular/fire/firestore";
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards: Observable<Cardint []>
  cardCollection : AngularFirestoreCollection<Cardint>;
  cardDoc: AngularFirestoreDocument<Cardint>;
  constructor(public afs: AngularFirestore) {
    // this.cards= this.afs.collection('cards').valueChanges();
    this.cardCollection = this.afs.collection('cards');

    this.cards = this.cardCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Cardint;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
   }
  
 getcards(){
   return this.cards;
 }
 updatecard(card: Cardint, reserved: string[]){
  this.cardDoc = this.afs.doc(`cards/${card.id}`);
  this.cardDoc.update({Registered: reserved});
}

}
