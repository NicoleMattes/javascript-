class CalcContoller {

    constructor(){
        this._displayCalc = "0";
        this._currentDate;
        this.initialize();
        
    } 

initialize(){

    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#data");
    let timeEl = document.querySelector("#hora");

    displayCalcEl.innerHTML = "44";
    dateEl.innerHTML = "12/12/12";
    timeEl.innerHTML = "00:00";

}



// como a propriedade displayCalc é privada ela precisa do get para ser acesssada 

    get displayCalc(){
        return this._displayCalc;
}

    set displayCalc(valor){
        this._displayCalc = valor;
}

    get dataAtual(){
        return this._currentDate;
}

    set dataAtual(valor){
        return this._currentDate;
    }

}