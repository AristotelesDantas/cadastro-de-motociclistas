import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VeiculosComponent } from './../veiculos/veiculos.component';
import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../service/localstorage/localstorage.service';


@Component({
  selector: 'app-efetivo',
  templateUrl: './efetivo.component.html',
  styleUrls: ['./efetivo.component.css']
})
export class EfetivoComponent implements OnInit {

  @Input() veiculo!: VeiculosComponent;

  forCadastro!: FormGroup

  private get namePattern(){
    return /[A-Z][a-z].*/
  }

  @Input() cadastro= {
    id: `1`,
    nomeBatismo: `Fulano`,
    nomeReal: `José`,
    aspirantado: `12/10/2022`,
    fechamentoColete: `12/10/2024`,
    tipoVeiculo: "",
    marca: "",
    modelo: "",
    placa: "",
    emplac: "",
    tipoComb: ""
  }

  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService) { }
  title = `Efetivo`;

  ngOnInit(): void {
    this.forCadastro= this.fb.group({
      nameBatismo:[null, [Validators.required, Validators.pattern(this.namePattern)]],
      nameReal: [null, [Validators.required, Validators.pattern(this.namePattern)]],
      dateAsp: [null],
      dateFechamento: [null]

    })
    console.log(this.forCadastro)
  }

  onSubmit(){
    console.log(this.forCadastro.value)
    alert()
    const efetivo= JSON.stringify(this.forCadastro.value);
    const bcript= btoa(efetivo);
    this.localStorageService.set(bcript, 'efetivo')
  }

  cadastroEfetivo(){
    //console.log(this.cadastro.nomeReal)
    alert(this.cadastro.tipoVeiculo)
    //alert(this.cadastro.nomeBatismo)
    //alert(this.veiculo)
    //alert(`Cadastrado`)
  }

}
