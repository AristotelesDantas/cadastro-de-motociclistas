import { LocalStorageService } from './../localstorage/localstorage.service';
import { Injectable } from '@angular/core';
export interface Veiculo {
  tipoVeiculo: string;
  marca: string;
  modelo: string;
  placa: string;
  emplac: string;
  tipoComb: string;
  id?: number;
}

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  constructor(private localStorageService: LocalStorageService){}

  veiculoList: Veiculo[] = [
    {
      tipoVeiculo: 'moto',
      marca: 'Yamaha',
      modelo: 'ybr',
      placa: 'MFJ5S64',
      emplac: '12/10/22',
      tipoComb: 'gas',
      id: 1,
    },
    {
      tipoVeiculo: 'moto',
      marca: 'Yamaha',
      modelo: 'ybr',
      placa: 'MFJ5S64',
      emplac: '12/10/22',
      tipoComb: 'gas',
      id: 2,
    },
  ];
  create(user: Veiculo) {
    const id = this.veiculoList[this.veiculoList.length - 1].id || 0;
    this.veiculoList.push({ ...user, id: id + 1 });
    this.localStorageService.save(this.veiculoList, 'veiculoList')
  }
  get() {
    return this.localStorageService.buscar('veiculoList');
  }
  update(veiculo: Veiculo) {
    const veiculos= this.get()
    veiculos[veiculos.findIndex((v: any) => veiculo.id === v.id)] = veiculo;
    this.localStorageService.save(veiculos, 'veiculoList')
  }
  remove(user: Veiculo) {
    const veiculos= this.get()
    const index = this.veiculoList.findIndex((u) => user.id === u.id);
    if (index >= 0) {
      veiculos.splice(index, 1);
      this.localStorageService.save(veiculos, 'veiculoList')
    }
  }
  findByName(placa: string) {
    const veiculos= this.get()
    const veiculo = veiculos.find((v: any) => placa === v.placa);
    return veiculo;
  }
}
