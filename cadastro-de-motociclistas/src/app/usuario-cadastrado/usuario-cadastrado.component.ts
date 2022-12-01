import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-cadastrado',
  templateUrl: './usuario-cadastrado.component.html',
  styleUrls: ['./usuario-cadastrado.component.css']
})
export class UsuarioCadastradoComponent {

  usuario= {
    nome:"Drakula",
      senha: 123456,
    nome1:"Perveso",
      senha1: 654321
  }
}
