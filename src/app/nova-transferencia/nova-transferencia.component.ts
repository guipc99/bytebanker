import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private router : Router) {}

  ngOnInit(): void {}

  transferir() {
    console.log('Foi solicitada uma nova transferência!');

    const valorEmitir = { valor: this.valor, destino: this.destino };

   this.service.adicionar(valorEmitir).subscribe(resultado =>{
     alert("Transferência realizada com sucesso!")
     this.limparCampos();
     this.router.navigate(['extrato'])
   },
   (error) => console.error(error))

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
