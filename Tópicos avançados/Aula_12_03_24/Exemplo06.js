function calcularIMC(peso,altura){
    imc = peso / (altura ** 2);
    return imc;
     
}

function classificarIMC(argIMC){
    if(argIMC < 18.5){
        console.log("Abaixo do peso");
    }

    else if(argIMC < 25){
        console.log("Peso normal");
    }

    else if(argIMC < 30){
        console.log("Sobrepeso");
    }

    else if(argIMC < 35){
        console.log("Obesidade I");
    }

    else if(argIMC < 40){
        console.log("Obesidade II");
    }

    else if (argIMC > 40){
        console.log("Obesidade III");
    }
}

retornoIMC = calcularIMC(80,1.68);
console.log(retornoIMC);  
classificarIMC(retornoIMC);
