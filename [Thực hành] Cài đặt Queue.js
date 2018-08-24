var Queue =function () {
    this.dataStore = [];

    this.enqueue = function (element) {
        return this.dataStore.push(element)
    };

    this.dequeue = function () {
        return this.dataStore.shift();
    };

    this.font = function () {
        return this.dataStore[0];
    };

    this.back = function () {
        return this.dataStore[this.dataStore.length-1];
    };

    this.toString = function () {
        var retStr = "";
        for (i = 0 ; i < this.dataStore.length ; i++) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    };

    this.empty = function () {
        if (this.dataStore.length == 0){
            return true;
        } else {
            return false;
        }
    };
};


var queue = new Queue();
queue.enqueue("Meredith");
queue.enqueue("Cynthia");
queue.enqueue("Jennifer");
document.write(queue.toString() + "<br>");
queue.dequeue();
document.write(queue.toString());
document.write("Front of queue: " + queue.font() + "<br>");
document.write("Back of queue: " + queue.back() + "<br>");