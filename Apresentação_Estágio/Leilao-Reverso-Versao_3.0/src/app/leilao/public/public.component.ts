import { Component, OnInit } from '@angular/core';
import { PublicService } from './public.service';
import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute } from '@angular/router';
import { User} from '../login/User';
import { Logado} from '../login/Logado';

@Component({
    templateUrl: './public.component.html',
	styleUrls: [ 'public.component.css' ]
})
export class PublicComponent implements OnInit {
	usuario: String = 'fornecedor';
	login: String = 'no';
	user: User = new User('','','');
	estaLogado: Logado = new Logado('');

	constructor(
		private leilaoService: PublicService,
		private route: ActivatedRoute,
		private router: Router) {
		this.preencher();
		}
		
	ngOnInit() {}
	
	preencher(): void {
    this.user = new User('','','');
	this.estaLogado = new Logado('');
	}
	
	logar(){
		this.leilaoService.findUser(this.user.email, this.user.senha)
            .subscribe(
                user=> console.log(user),
                erro => console.log(erro));
				
		if(this.user != null){
			this.login = 'ok';
		}else{
			if(this.user.tipo=='cliente'){
				this.estaLogado.tipo='cliente';
				this.usuario='cliente';
			}else{
				this.estaLogado.tipo='fornecedor';
				this.usuario='fornecedor';
			}
		}

		this.leilaoService.logar(this.estaLogado.tipo).subscribe(
                estaLogado => console.log(estaLogado),
                erro => console.log(erro)
				);
		this.login = 'ok';
	}
			
}
