function createArray(size) {
    const arr = [];

    for (let i = 0; i < size; i++) {
        arr[i] = i + 1;
    }

    return arr;
}
 
    const Count = createArray(100);

        for (let i = 1; i < Count.length; i +=2) {
            console.log(Count[i]);
    }

    const ReverseCount = createArray(100);

    for (let i = ReverseCount.length - 1; i >= 0; i--) {
        if (ReverseCount[i] % 2 != 0)
            console.log(ReverseCount[i]);         
    }

    const index = createArray(10);

    function find(index, elementToFind, from = 0){
    for (let i = from; i < index.length; i++) {
        if(index[i] === elementToFind) { 
            return i;  
        } 
    }
    return -1
    }
    console.log(find(index, 9));