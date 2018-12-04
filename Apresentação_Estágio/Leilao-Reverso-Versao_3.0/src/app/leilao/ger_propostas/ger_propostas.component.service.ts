import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ListaPropostas } from './ListaPropostas';


@Injectable()
export class GerPropostasService {
	private headers = null;
    private options = null;


    constructor(private http: Http) { 
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers }); 
    }
	
	
	allPropostas(): Observable<any[]> {
        return this.http.get('http://localhost:3000/listaDePropostas')
            .map(response => response.json());
    }

	find(id:number): Observable<ListaPropostas> {
        return this.http.get('http://localhost:3000/listaDePropostas/' + id)
            .map(response => response.json());
    }

    delete(id: number) {
        return this.http.delete('http://localhost:3000/listaDePropostas/' + id, this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
}