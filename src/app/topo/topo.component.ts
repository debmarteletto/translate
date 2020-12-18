//representa a classe
//primeira coisa é importar os componentes que estão no node_modules
import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core'

//para que a classe seja entendida como um componente pelo angula é necessário 
//Metadados
@Component({
    //seletor por padrão é baseado em rotolo
    selector:'app-topo', 
    // passando como um atribulo/propriedade
    //selector:'[app-topo]', 
    // podemos fazer a definição do seletor como uma classe
    //selector:'.app-topo', 
    //template ou view é o recurso visual do componente
    templateUrl: './topo.component.html',
    //template: '<p>Débora</p>'
    //crases ´´ template: `<p>Débora</p>`
    //styles in line quando precisarmos quebrar a linha podemos usar ``
    //styles: ['.exemplo { color: red } ']
    //styles: [` .exemplo { 
    //     color: red } `]
    //styleUrls: ['./topo.component.css, podemos colocar virgula e adinonar mais de um arquilo de estilo']
    styleUrls: ['./topo.component.css']
})

//CAMEL
export class TopoComponent{
    public titulo: string = 'Learning English'
}