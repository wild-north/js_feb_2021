// рекурсивно вызываем setTimeout c задержкой в 1 сек. по достижении N секунд выводим 'boom';
// если успели сделать clearTimeout,
// останавливаем счетчик

// Первый вариант, НЕ работает с clearTimeout

function boom(n) {
        setTimeout(function timer(){
        console.log(n);
        if (n > 1){
            setTimeout(timer, 1000);
        }
        else{
            setTimeout(console.log('BOOM!'), 1000);
        }
        n--;
    }, 1000);
}

// второй вариант, полностью рабочий 
// чтобы остановить clearTimeout(stop)

let timer = () => console.log('BOOM!');
let boom_1 = (n) => stop = setTimeout(timer, n*1000);



