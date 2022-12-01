import { User, UserService } from './../service/user/user.service';

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-consulta-nome',
  templateUrl: './consulta-nome.component.html',
  styleUrls: ['./consulta-nome.component.css'],
})
export class ConsultaNomeComponent implements OnInit {
  forConsulta: FormControl = new FormControl(null);

  constructor(private user: UserService) {}

  ngOnInit(): void {
    console.log(this.forConsulta.value);
    console.log(this.user.get());
  }

  consultar() {
    const user = this.user.findByName(this.forConsulta.value);
    console.log(user);
  }
}
