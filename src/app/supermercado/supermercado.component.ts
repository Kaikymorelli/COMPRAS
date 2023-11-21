import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {OnInit} from '@angular/core';
import { SessaoService } from './service/sessao.service';
import { Isessao } from './service/isessao';

@Component({
  selector: 'app-supermercado',
  templateUrl:'./supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  ngOnInit(): void { this.listar()}
  
  produtos: Isessao[] = [];

  constructor(private service:SessaoService){}

  listar(){
    this.service.listar().subscribe(dados => this.produtos = dados);
  }

  Comprar(){
    Swal.fire({
      title: "Voce deseja comprar esse Produto",
      showDenyButton: true,
      icon: "question",
      confirmButtonText: "sim",
      denyButtonText: `Cancelar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Produto adicionado ao carrinho", "Sucess");
      } else if (result.isDenied) {
        Swal.fire("Erro adiconar no carrinho ", "", "error");
      }
    });  }
}


