function findIndex(array, elementToFind){
    let temp = 0;
    for(i = 0; i < array.length; i++){
        if( i === elementToFind){
            console.log(array.indexOf(i));
            temp = null;
            break;
        }
        else {
            continue;
        }
    }
    if( temp !== null){
        console.log(-1)
    }
}