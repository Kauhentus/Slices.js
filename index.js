class ArraySlice {
    constructor(array, start, end){
        this.array = array;
        this.start = start;
        this.end = end;

        return new Proxy(this, {
            get: function(obj, prop) {
                console.log(obj, "!");
                console.log(prop, "@");

                if(parseInt(prop) < obj.end - obj.start) return obj.array[obj.start + parseInt(prop)];
                if(prop == "length") return obj.end - obj.start;
                if(prop == "array") return obj.array;
                return null;
            }
        })
    }

    setAll(value){
        for(let i = this.start; i < this.end; i++){
            this.array[i] = value;
        }
    }
}

module.exports = ArraySlice;
const b = [1, 2, 3, 4, 5];
const a = new ArraySlice(b, 1, 4);
a[1];
console.log(a[2], a.length);
a.array[1] = 10;
console.log(b)