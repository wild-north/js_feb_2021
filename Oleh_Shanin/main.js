function fromBeginningToEndy(size) {
    const arr = [];

    for (let i = 0; i < 100; i++) {
      
        if (i % 2 == 0) continue;

        arr[i] = i + 1;
    }

    return arr;
}

const arr = fromBeginningToEndy(100);