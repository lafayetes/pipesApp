import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string =  'Nicolas';
  public nameUpper: string =  'NICOLAS';
  public fullName: string =  'NiCOlAs lA FAyE';
  public actualDate: Date = new Date();
}
