import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit {
  textoRecibido: string = '';
  numeroDuplicado: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.textoRecibido = params['texto'];
      this.numeroDuplicado = +params['numero'];
    });
  }
}
