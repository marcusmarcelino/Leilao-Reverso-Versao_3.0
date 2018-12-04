import { Component, OnInit } from '@angular/core';
import { ListarProdutosService } from './lista.component.service';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosEmFalta } from './ProdutosEmFalta';
import { Logado} from '../login/Logado';
import { User} from '../login/User';


@Component({
    templateUrl: 'lista.component.html',
	styleUrls: [ 'lista.component.css' ]
})
export class ListaComponent implements OnInit {
	lista:ProdutosEmFalta[];
    constructor(
		private listaService: ListarProdutosService,
		private route: ActivatedRoute,
		private router: Router) {
		
		this.listaService.all().
            subscribe(lista => this.lista = lista);
		
		}
	
    ngOnInit() {  }

    altorizar() {
        this.router.navigate(['']);
    }
}