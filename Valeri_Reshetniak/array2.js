function findIndex(array, elementToFind){
    for(i = 0; i < array.length; i++){
        if( array[i] === elementToFind){
            return(i);  
        }    
    }
  return(-1);
}