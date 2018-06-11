import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-client',
  templateUrl: 'client.html'
})
export class Client {

  public firstName:string;
  public lastName:string;
  public email:string;
  client = {};


  saveClient(lastName,firstName, email ){

    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.client = {
      nom : this.lastName.toUpperCase(),
      prenom : this.firstName,
      email : this.email
    }
    console.log(email);
    this.clients.push(this.client);

  }
  clients :  AngularFireList<any>;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase  ) {
    this.clients = db.list('client');

  }


}
