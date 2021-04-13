class Queue {

    constructor (size) {

        this.queue = new Array(size);
        for (let i = 0; i < size; i++) {
            this.queue[i] = null;
            
        }
        this.begin = 0;
        this.end = 0;
        this.size = size;

    }

    addElement (newElement) {
        if(!this.queue[this.begin]){
            this.queue[0] = newElement;
        }else{
            if(this.end+1 === this.begin || (this.end+1 === this.size && this.begin === 0)){
                return undefined;
            }else{
                if(this.end === this.size-1){
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
        if(!this.queue[this.begin]){
            return undefined;
        }
        if(this.begin === this.end){
            this.queue[this.begin] = null;
            return this.queue;
        }else{
            this.queue[this.begin] = null;
        }
        if(this.begin === this.size-1){
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
                if(index === this.size - 1){
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
}
