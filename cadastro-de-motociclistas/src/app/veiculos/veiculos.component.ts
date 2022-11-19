import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {
  @Output() veiculo= {
    tipoVeiculo: "moto",
    marca: "sgh",
    modelo: "ybr",
    placa: "fghj",
    emplac: "12/10/22",
    tipoComb: "gas"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
