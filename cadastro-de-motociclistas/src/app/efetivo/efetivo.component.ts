import { VeiculosComponent } from './../veiculos/veiculos.component';
import { Component, Input, OnInit } from '@angular/core';
//import { VeiculosComponent } from './veiculos/veiculos.component';
@Component({
  selector: 'app-efetivo',
  templateUrl: './efetivo.component.html',
  styleUrls: ['./efetivo.component.css']
})
export class EfetivoComponent implements OnInit {

  veic= new VeiculosComponent;

  @Input() cadastro= {
    id: `1`,
    nomeBatismo: ``,
    nomeReal: `Jose`,
    aspirantado: `12/10/2022`,
    fechamentoColete: `12/10/2024`,
    tipoVeiculo: "moto",
    marca: "sgh",
    modelo: "ybr",
    placa: "fghj",
    emplac: "12/10/22",
    tipoComb: "gas"
  }

 // @Input() veic:

  constructor() { }
  title = `Efetivo`;

  ngOnInit(): void {
  }

  cadastroEfetivo(){
    //console.log(this.cadastro.nomeReal)
    alert(this.cadastro.tipoVeiculo)
    //alert(this.cadastro.nomeBatismo)
    //alert(this.veiculo)
    //alert(`Cadastrado`)
  }

}
