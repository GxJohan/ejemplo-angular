import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  texto: string = '';
  numero: number = 0;

  constructor(private router: Router) {}

  enviar() {
    const numeroDuplicado = this.numero * 2;
    this.router.navigate(['/registro', this.texto, numeroDuplicado]);
  }
}
