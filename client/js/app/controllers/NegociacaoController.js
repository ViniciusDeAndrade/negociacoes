class NegociacaoController{

  constructor(){
    let $ = document.querySelector.bind(document);
    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

    this._listaNegociacoes = new Bind(new ListaNegociacoes(),
        new NegociacoesView($('#negociacoesView')),
        'adiciona', 'esvazia');

    this._mensagem = new Bind(new Mensagem(),
      new MensagemView($('#mensagemView')),
      'texto');

  }

  adiciona(event) {

    event.preventDefault();
    this._listaNegociacoes.adiciona(this._criaNegociacao());

    this._mensagem.texto = 'Negociação adicionada com sucesso';
    this._limpaForm();
  }

  importarNegociacoes(){
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'negociacoes/semana');

    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4){
        if(xhr.status == 200){
          console.log('obtendo os dados do servidor.');
        }else{
          console.log('não foi possível obter as negociações do servidor');
        }
      }
    };
    xhr.send();
  }

  apaga(){
      this._listaNegociacoes.esvazia();
      this._mensagem.texto = 'negociações apagadas com sucesso';

  }
  _criaNegociacao(){
    return new Negociacao(
        DateHelper.textoParaData(this._inputData.value),
        this._inputQuantidade.value,
        this._inputValor.value
    );
  }

  _limpaForm(){
    this._inputData.value = '';
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;
    this._inputData.focus();
  }
}