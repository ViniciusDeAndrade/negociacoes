class NegociacaoService{

  constructor(){
    this._http = new HttpService();
  }

  obterNegociacoesDaSemana(){
    return new Promise((resolve, reject) => {

      this._http.get('negociacoes/semana')
        .then(negociacoes => {
          resolve(negociacoes.map(objeto =>
            new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
        })
        .catch(err => {
          console.log(err);
          reject('não foi possivel obter as negociacoes da semana');
        })
    });

  }

  obterNegociacoesDaSemanaAnterior(){
    return new Promise((resolve, reject) => {

      this._http.get('negociacoes/anterior')
        .then(negociacoes => {
          resolve(negociacoes.map(objeto =>
            new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        })
        .catch(err => {
          console.log(err);
          reject('não foi possivel obter as negociacoes da semana anterior');
        })
    });
  }


  obterNegociacoesDaSemanaRetrasada(){
    return new Promise((resolve, reject) => {

      this._http.get('negociacoes/retrasada')
        .then(negociacoes => {
          resolve(negociacoes.map(objeto =>
            new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
        })
        .catch(err => {
          console.log(err);
          reject('não foi possivel obter as negociacoes da semana retrasada')
        })
    });

  }


}
