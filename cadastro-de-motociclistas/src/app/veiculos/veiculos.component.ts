import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  imagen = "/assets/resources/images/moto.png";
  constructor() { }

  ngOnInit(): void {
  }

}
