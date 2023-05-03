const myModule = (()=>{

    'use strict'

    //área y perimetro del cuadrado
    const valueResult = document.getElementById('result');

    const btnPerimSquare = document.querySelector('#btnPerimSquare'),
          btnAreaSquare = document.querySelector('#btnAreaSquare'),
          btnPerimTriangle = document.querySelector('#btnPerimTriangle'),
          btnAreatriangle = document.querySelector('#btnAreaTriangle'),
          btnDiameCircle = document.querySelector('#btnDiameCircle'),
          btnPerimCircle = document.querySelector('#btnPerimCircle'),
          btnAreaCircle = document.querySelector('#btnAreaCircle');


    const perimSquare = (side) => side*4;
    const areaSquare = (side) => side*side;

    const perimTriangle =(side1,side2,side3) => side1+side2+side3;
    const areaTriangle = (base,altura) => (base*altura)/2;

    const diametroCircle = (radio) => radio*2;
    const perimetroCircle = (radio) => (radio*2)*3.1416;
    const areaCircle = (radio) => (radio*radio)*3.1416;

    //Cuadrado

    btnPerimSquare.addEventListener('click', ()=>{
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);

        const result = `El perimetro del cuadrado es: ${perimSquare(value)}cm`;
        valueResult.innerText = result;
    });
        
    

    btnAreaSquare.addEventListener('click',()=>{
        let inputSide = document.getElementById('inputSide');
        let value = Number(inputSide.value);

        const result = `El Área del cuadrado es: ${areaSquare(value)}cm2`;
        valueResult.innerText = result;

    });
        
    


    //Triangulo

    btnPerimTriangle.addEventListener('click',()=>{
        let inputSide1 = document.getElementById('side1');
        let value1 = Number(inputSide1.value);

        let inputSide2 = document.getElementById('side2');
        let value2 = Number(inputSide2.value);

        let inputSide3 = document.getElementById('side3');
        let value3 = Number(inputSide3.value);

        const result = `El perimetro del triangulo es: ${perimTriangle(value1,value2,value3)}cm`;
        valueResult.innerText = result;
    });
        

    

    btnAreatriangle.addEventListener('click', ()=>{
        let inputBase = document.getElementById('base');
        let base = Number(inputBase.value);

        let inputAltura = document.getElementById('altura');
        let altura = Number(inputAltura.value);

        const result = `El Área del triangulo es: ${areaTriangle(base,altura)}cm2`;
        valueResult.innerText = result;

    });
        
        
    

    //circulo 

    btnDiameCircle.addEventListener('click',()=>{
        let inputRadio = document.getElementById('radio');
        let radio = Number(inputRadio.value);

        const result = `El diametro del circulo es ${diametroCircle(radio)}cm`;
        valueResult.innerText = result;
    });
        
    

    btnPerimCircle.addEventListener('click', ()=>{
        let inputRadio = document.getElementById('radio');
        let radio = Number(inputRadio.value);

        const result = `El perimetro del circulo es ${perimetroCircle(radio)}cm`;
        valueResult.innerText = result;
    });
        
    

    btnAreaCircle.addEventListener('click',()=>{
        let inputRadio = document.getElementById('radio');
        let radio = Number(inputRadio.value);

        const result = `El Área del circulo es ${areaCircle(radio)}cm2`;
        valueResult.innerText = result;
    });
        
    

    /**return  {
        cpq : calculatePerimSquare, 
        caq  : calculateAreaSquare
    };*/

})();



