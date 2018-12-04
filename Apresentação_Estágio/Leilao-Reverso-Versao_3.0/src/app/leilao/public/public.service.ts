import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { ListaPropostas } from '../ger_propostas/ListaPropostas';
import { Logado} from '../login/Logado';

@Injectable()
export class PublicService {
	private headers = null;
    private options = null;


    constructor(private http: Http) { 
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers }); 
    }
	
	findUser(email:string,senha:string): Observable<any[]> {
        return this.http.get('http://localhost:3000/usersLogin?email=' + email +'usersLogin?senha=senha+')
            .map(response => response.json());
    }
	logar(tipo: string) {
        const logado = { tipo: tipo};
        return this.http.put('http://localhost:3000/quemEstaLogado', JSON.stringify(logado), this.options)
            .map(response => response.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Erro ao conectar ao servidor.'));
    }
	verLogin(): Observable<Logado> {
        return this.http.get('http://localhost:3000/quemEstaLogado').map(response => response.json());
    }
}
