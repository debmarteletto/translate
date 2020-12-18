import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { Frases } from '../painel/frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent{

  public instrucao: string ='Translate'
  public frases: Frase[] = Frases 
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase 
  public progresso: number = 0

  public tentativas = 3
  
  constructor() { 
      this.atualizaRodada()      
      //console.log(this.frases)
  }

   //por padão o typescript entende que é public
  public atualizaResposta(resposta: Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value);
    //console.log(this.resposta)
  }

  public verificarResposta(): void{
     //verificar se a resposta esta correta
    if(this.rodadaFrase.frasePTBr == this.resposta)
    {    
        //trocar a pergunta da rodada ao incrementar
        this.rodada++
        // incrementar progresso
        this.progresso = this.progresso + (100 / this.frases.length)
        
        //verificar vitória
        if(this.rodada === 4){
          alert('Congratulation, you won!')
        }
        
        //atualiza rodada
        this.atualizaRodada()
        //this.rodadaFrase = this.frases[this.rodata]
    }else{
        //detrementar tentativas
        this.tentativas--
        if(this.tentativas === -1)
        {
          alert('Finish!')
        }
    }
    console.log('Verificar resposta', this.resposta)
  }

  public atualizaRodada(): void{
      this.rodadaFrase = this.frases[this.rodada]

      //limpar variável resposta
      this.resposta = ''
  }

}
