import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta-aspirantado',
  templateUrl: './consulta-aspirantado.component.html',
  styleUrls: ['./consulta-aspirantado.component.css']
})
export class ConsultaAspirantadoComponent implements OnInit {

  forConsAsp: FormControl = new FormControl(null);

  constructor() { }

  ngOnInit(): void {
    console.log(this.forConsAsp.value)
  }

  consultar(){
    console.log(this.forConsAsp)
    alert('deu certo')
  }

}
