class NodeClass {

    constructor(valor) {
        this.valor = valor;
        this.next = null;
    }
}

class PilaConLista{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value){
        let newNode = new NodeClass(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }

    pop(){
        if (!this.head) return undefined;
        let nodoVisitado = this.head;
        let nuevaColaLista = nodoVisitado;
        while (nodoVisitado.next) {
            nuevaColaLista = nodoVisitado;
            nodoVisitado = nodoVisitado.next;
        }
        this.tail = nuevaColaLista;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return nodoVisitado;
    }

    peek(){
        if(!this.head){
            return undefined;
        }
        return this.tail;
    }

    isEmpty(){
        return this.length === 0;
    }

    size(){
        return this.length;
    }

    print() {
        let arregloNodos = [];
        let nodoVisitado = this.head;
        while (nodoVisitado) {
            arregloNodos.push(nodoVisitado.valor);
            nodoVisitado = nodoVisitado.next;
        }
        return arregloNodos;
    }
}

let pilaEjemplo = new PilaConLista();
pilaEjemplo.push(0);
pilaEjemplo.push(1);
pilaEjemplo.push(2);
pilaEjemplo.push(3);
pilaEjemplo.push(4);
pilaEjemplo.pop();

function example1(){
    console.log(pilaEjemplo.print());
}
