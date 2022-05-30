class CalcContoller {

    constructor(){
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
        
    } 

initialize(){

    this._displayCalcEl.innerHTML = this._displayCalc;
    this._dateEl.innerHTML = "12/12/12";
    this._timeEl.innerHTML = "00:00";

}



// como a propriedade displayCalc é privada ela precisa do get para ser acesssada 

    get displayCalc(){
        console.log(this._displayCalc)
        return this._displayCalc.innerHTML;
}

    set displayCalc(valor){
        console.log(valor)
        this._displayCalc = valor;
}

    get dataAtual(){
        return this._currentDate;
}

    set dataAtual(valor){
        return this._currentDate;
    }

}