import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';

import { HomeLeilaoComponent } from '../home/home-leilao.component';
import { RegrasComponent } from '../regulamento/regras.component';
import { PropostasComponent } from '../ger_propostas/propostas.component';
import { StatusComponent } from '../relatorio/status.component';
import { EnviarArquivoComponent } from '../fornecedor/enviar-arquivo.component';
import { PublicService } from '../public/public.service'
import { DetalhesComponent } from '../ger_propostas/detalhes.component';
import { ListaComponent } from '../listarProdutos/lista.component';

import { ListarProdutosService } from '../listarProdutos/lista.component.service';
import { GerPropostasService } from '../ger_propostas/ger_propostas.component.service';
import { EnviarComponentService } from '../fornecedor/enviar.component.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PublicRoutingModule,

    ],
    declarations: [
        PublicComponent,
        HomeLeilaoComponent,
		RegrasComponent,
		PropostasComponent,
		StatusComponent,
		EnviarArquivoComponent,
		DetalhesComponent,
		ListaComponent
    ],
    providers: [
		PublicService,
        ListarProdutosService,
        GerPropostasService,
        EnviarComponentService
    ]
})
export class PublicModule { }