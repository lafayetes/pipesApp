import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {


  //i18n Select
  public name: string = 'Diego';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'Invite him',
    'female': 'Invite her',
  }

  changeClient(){
    this.name = 'Daniela';
    this.gender = 'female';
  }

  //i18nPlural

  public clients:string[] =['Diego','Daniela','Gonzalo','Fernando','Gianluca','Adam','Celis'];
  public clientsMap={
    '=0':"We don't have clients waiting.",
    '=1':'We have one client waiting',
    '=2':'We have two clients waiting',
    'other':'We have # clients waiting',
  }
  deleteClient(){
    this.clients.shift();
  }

  //JSON pipe & KeyValuePipe
  public person = {
    name: 'Diego',
    age: 36,
    address: 'La Paz, Bolivia'
  }


  //Async Pipe
  public myObservableTimer = interval(2000)
  .pipe(
    tap( value => console.log('tap:',value),
    )
  );

  public promiseValue = new Promise<string>((resolve, reject)=>{
    setTimeout(() => {
      resolve('Got data from promise.');
      console.log('Log from promise');

    }, 3500);
  })

}
