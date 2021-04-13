class Queue {

    constructor (size) {

        this.queue = new Array(size);
        this.queue.forEach(i => {
            i = null;
        });
        this.begin = 0;
        this.end = 0;
    }

    addElement (newElement) {
        if(!this.queue[this.begin]){
            this.queue[this.begin] = newElement;
        }else{
            if(this.end+1 === this.begin || (this.end+1 === this.queue.length && this.begin === 0)){
                return undefined;
            }else{
                if(this.end === this.queue.length-1){
                    this.queue[0] = newElement;
                    this.end = 0;
                }else{
                    this.queue[this.end+1] = newElement;
                    this.end++;
                }
            }
        }
        return this.queue;
    }

    removeElement () {
        //Revisar que no este vacio
        if(!this.queue[this.begin]){
            return undefined;
        }

        //Verificar si hay solo una posicion
        if(this.begin === this.end){
            this.queue[this.begin] = null;
            return this.queue;
        }else{
            this.queue[this.begin] = null;
        }

        //Aumentar this.begin en uno o mandarlo al inicio
        if(this.begin === this.queue.length-1){
            this.begin = 0;
        }else{
            this.begin++;
        }
        return this.queue;
    }

    getElement () {
        return this.queue[this.begin];
    }

    sizeQueue () {
        let size = 0;
        this.queue.forEach(element => {
            if(element !== null){
                size++;
            }
        });
        return size;
    }

    emptyQueue () {
        let empty = true;
        this.queue.forEach(element => {
            if(element !== null){
                empty = false;
            }
        });
        return empty;
    }

    printQueue () {
        let arrayAux = [];
        if(this.begin === this.end && this.queue[this.begin] !== null){
            arrayAux.push(this.queue[this.begin]);
        }else{
            let index = this.begin;
            while(index !== this.end){
                arrayAux.push(this.queue[index]);
                if(index === this.queue.length - 1){
                    index = 0;
                    if( 0 === this.end){
                        arrayAux.push(this.queue[index]);
                    }
                }else{
                    if( index+1 === this.end){
                        arrayAux.push(this.queue[index+1]);
                    }
                    index++;
                }
            }
        }
        return arrayAux;
    }

}

let theQueue = new Queue(5);
theQueue.addElement("A");
theQueue.addElement("B");
theQueue.addElement("C");
theQueue.addElement("D");
theQueue.addElement("E");
theQueue.removeElement();
theQueue.removeElement();
theQueue.removeElement();
theQueue.removeElement();
theQueue.addElement("F");
theQueue.addElement("G");


function example3(){
    console.log(theQueue);
    console.log(theQueue.printQueue());
    console.log(theQueue.sizeQueue());
}
