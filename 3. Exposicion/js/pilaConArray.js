class PilaConArray{
    constructor(){
        this.pila = [];
    }

    push(elemento){
        this.pila.push(elemento);
        return this.pila;
    }

    pop(){
        return this.pila.pop();
    }

    peek(){
        return this.pila[this.pila.length - 1];
    }

    isEmpty(){
        return this.pila.length === 0;
    }

    size(){
        return this.stack.length;
    }

    print(){
        return this.pila;
    }
}

let pilaEjemplo2 = new PilaConArray();
pilaEjemplo2.push(0);
pilaEjemplo2.push(1);
pilaEjemplo2.push(2);
pilaEjemplo2.push(3);
pilaEjemplo2.push(4);
pilaEjemplo2.pop();

function example2(){
    
    
    console.log(pilaEjemplo2.print());
}