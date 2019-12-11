var Calculadora = (function () {
    function Calculadora() {
            this.display = "0";
            this.num1 = 0;
            this.operation = ""; //inicializando com status "default"
        }

    Calculadora.prototype.limparTela = function () {
            this.display = "0";
            document.getElementById("display").value = this.display;
    };
    Calculadora.prototype.Pressionou = function(num)
    {
        if ( this.display != "0")
        {
            this.display = (String(this.display) + String(num));
            document.getElementById("display").value = this.display;//se n for 0 continua a escrever
        }
        else{
            this.display = num;
            document.getElementById("display").value = this.display;//se for 0 substitui
        }
    };
    Calculadora.prototype.soma = function()
    {
        var num = document.getElementById("display").value;//salva o valor da tela em num
        this.num1 = Number(num);//armazena na classe para num1
        this.operation = "mais";//salva o operador
        this.limparTela(); //limpa a tela
    };

    Calculadora.prototype.sub = function()
    {
        var num = document.getElementById("display").value;//salva o valor da tela em num
        this.num1 = Number(num);//armazena na classe para num1
        this.operation = "menos";//salva o operador
        this.limparTela(); //limpa a tela
    };
    
    Calculadora.prototype.mult = function()
    {
        var num = document.getElementById("display").value;//salva o valor da tela em num
        this.num1 = Number(num);//armazena na classe para num1
        this.operation = "vezes";//salva o operador
        this.limparTela(); //limpa a tela
    };
    
    Calculadora.prototype.div = function()
    {
        var num = document.getElementById("display").value;//salva o valor da tela em num
        this.num1 = Number(num);//armazena na classe para num1
        this.operation = "dividido";//salva o operador
        this.limparTela(); //limpa a tela
    };
    Calculadora.prototype.igual = function () {
        var num = document.getElementById("display").value;//salva o valor da tela 
        if (this.operation === "mais") {//le operaçao
            var total = Number(num) + Number(this.num1);//executa
            document.getElementById("display").value = String(total);//escreve na tela
        }
        else if (this.operation === "menos") {
            var total = Number(num) - Number(this.num1);
            document.getElementById("display").value = String(-total);
        }
        else if (this.operation === "vezes") {
            var total = Number(num) * Number(this.num1);
            document.getElementById("display").value = String(total);
        }
        else if (this.operation === "dividido") {
            var total = Number(this.num1) / Number(num);
            document.getElementById("display").value = String(total);
        }
        this.operation = "";//zera a operaçao
    };
return Calculadora;
}());
var calc = new Calculadora;