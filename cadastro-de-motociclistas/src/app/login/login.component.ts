import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from '../service/localstorage/localstorage.service'
//import { UsuarioCadastradoComponent } from '../usuario-cadastrado/usuario-cadastrado.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  forLogin!: FormGroup;

  private get passwordPattern() {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
  }
  constructor(private fb: FormBuilder, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.forLogin = this.fb.group({
      name: [null, [Validators.required]],
      password: [
        null,
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(this.passwordPattern),
        ],
      ],
    });
  }

  onSubmit() {
    console.log(`deu certo`, this.forLogin.value);
    const token= JSON.stringify(this.forLogin.value);
    const bcript= btoa(token);
    this.localStorageService.set(bcript, 'token')
  }


}
