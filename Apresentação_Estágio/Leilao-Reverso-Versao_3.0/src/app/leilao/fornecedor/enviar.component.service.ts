import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EnviarComponentService {
	private headers = null;
    private options = null;


    constructor(private http: Http) { 
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers }); 
    }
	
	save(nomeFornecedor: string, valor: string, empresa: string, cnpj: string, email: string) {
        const proposta = { nomeFornecedor: nomeFornecedor, valor: valor, empresa:empresa, cnpj:cnpj, email:email };
        return this.http.post('http://localhost:3000/listaDePropostas', JSON.stringify(proposta), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
	
	update(id: number, nomeFornecedor: string, valor: string, empresa: string, cnpj: string, email: string) {
        const proposta = { id: id, nomeFornecedor: nomeFornecedor, valor: valor, empresa:empresa, cnpj:cnpj, email:email };
        return this.http.put('http://localhost:3000/listaDePropostas/' + id, JSON.stringify(proposta), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
}