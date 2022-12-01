import { VeiculoService } from './../service/veiculo/veiculo.service';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../service/localstorage/localstorage.service';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent implements OnInit {

  forVeiculo!: FormGroup

  veiculo= {
    tipoVeiculo: "moto",
    marca: "Yamaha",
    modelo: "ybr",
    placa: "MFJ5S64",
    emplac: "12/10/22",
    tipoComb: "gas"
  }

  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService, private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.forVeiculo= this.fb.group({
      veic: [null, [Validators.required]],
      marca:[null, [Validators.required]],
      modelo: [null, [Validators.required]],
      placa: [null, [Validators.required]],
      date: [null, [Validators.required]],
      comb: [null, [Validators.required]]
    })
    this.veiculoService.get()
    console.log(JSON.parse(this.veiculoService.get()))
  }

  onSubmit(){
    this.veiculoService.create(this.forVeiculo.value)
    console.log(JSON.parse(this.veiculoService.get()))
  }
}
