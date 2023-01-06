import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public image:string="https://www.tec.ac.cr/hoyeneltec/sites/default/files/styles/colorbox/public/media/img/main/diseno-de-fondo-de-pulgares-arriba_1294-60.jpg";
  public titulo:string="Curso de angular con interpolacion";
  constructor() {}

  ngOnInit() : void{

  }
}
