class Pila{
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
        console.log(this.pila);
    }
}

let pilaEjemplo = new Pila();

pilaEjemplo.push(0);
pilaEjemplo.push(1);
pilaEjemplo.push(2);
pilaEjemplo.push(3);
pilaEjemplo.push(4);

pilaEjemplo.print();

pilaEjemplo.pop();
pilaEjemplo.print();