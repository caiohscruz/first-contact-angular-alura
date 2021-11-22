import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor!: number;
  destino!: string;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    let transferencia: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };
    this.service.adicionar(transferencia).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato')
      },
      (error) => {
        console.log(error);
      }
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = '';
  }
}
