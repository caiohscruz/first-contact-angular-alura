import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor!: number;
  destino!: string;

  constructor(private service: TransferenciaService) { }

  transferir() {
    let transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(transferencia);
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino='';
  }
}
