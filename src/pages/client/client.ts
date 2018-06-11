import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-client',
  templateUrl: 'client.html'
})
export class Client {

  private firstName:string;
  private lastName:string;
  client = {};


  saveClient(lastName,firstName ){

    this.lastName = lastName;
    this.firstName = firstName;
    this.client = {
      nom : this.lastName.toUpperCase(),
      prenom : this.firstName
    }
    this.clients.push(this.client);

  }
  clients :  AngularFireList<any>;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase  ) {
    this.clients = db.list('client');

  }


}
