import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-consulta-veiculo',
  templateUrl: './consulta-veiculo.component.html',
  styleUrls: ['./consulta-veiculo.component.css']
})
export class ConsultaVeiculoComponent implements OnInit {

  forConsPlaca: FormControl = new FormControl(null);

  constructor() { }

  ngOnInit(): void {
    console.log(this.forConsPlaca.value)
  }

  consultar(){
    console.log(this.forConsPlaca.value)
  }

}
