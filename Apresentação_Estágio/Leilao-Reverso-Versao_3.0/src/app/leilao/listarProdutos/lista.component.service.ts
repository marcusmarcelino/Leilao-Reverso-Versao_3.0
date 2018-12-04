import { Injectable } from '@angular/core';
import { Http, RequestOptions,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Logado} from '../login/Logado';


@Injectable()
export class ListarProdutosService {
	private headers = null;
    private options = null;


    constructor(private http: Http) { 
        this.headers = new Headers({'Content-Type': 'application/json'});
        this.options = new RequestOptions({ headers: this.headers }); 
    }
	
	all(): Observable<any[]> {
        return this.http.get('http://localhost:3000/listaDeFaltas')
            .map(response => response.json());
    }

    findUser(email:string,senha:string): Observable<any[]> {
        return this.http.get('http://localhost:3000/usersLogin?email=' + email +'usersLogin?senha=senha+')
            .map(response => response.json());
    }
    verLogin(): Observable<Logado> {
        return this.http.get('http://localhost:3000/quemEstaLogado').map(response => response.json());
    }
}