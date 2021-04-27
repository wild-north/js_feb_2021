document.addEventListener('DOMContentLoaded', render);

const text = {
    header: 'This is the file for your home tasks',
    list: [
        'Please, write your JavaScript code in <strong>main.js</strong>',
        'Please, write your CSS code in <strong>styles.css</strong>',
        'Please, write your HTML right here in <strong>index.html</strong>'
    ]
};

function render() {
    const main = document.createElement('main');
    const h2 = document.createElement('h2');
    h2.textContent = text.header;

    const ul = text.list.reduce((ul, text) => {
        const li = document.createElement('li');

        li.innerHTML = text;
        ul.append(li);

        return ul;
    }, document.createElement('ul'));

    main.append(h2);
    main.append(ul);
    document.body.append(main);
}

class Clock {
    getTime() {
        let time = new Date();
        console.log(time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds());
    }
    setAlarm(alarmTime) {
        let i = Date.now();
        let j = new Date();
        let alarm = alarmTime.split(':');
        j.setHours(alarm[0], alarm[1]);
        let timeDelta = j.getTime() - i;
        if ( timeDelta < 300000) {
            setTimeout(alert, timeDelta, "ALARM CLOCK!")     
        }
        else {
            console.log('Too long time')
        }
    } 
    setTimer(minutes) {
        
        let i = Date.now();  
        let timer = +(minutes.split(':')[0] * 60) + +(minutes.split(':')[1]);
        let time = i + (+timer * 1000);
        let timeDelta = time - i;
        setTimeout(function timing() {
            if (timeDelta === 0) {
                return console.log('timer finish!')
            }
            else {
            let m = Math.floor((timeDelta % (1000 * 60 * 60)) / (1000 * 60));
            let s = Math.floor((timeDelta % (1000 * 60)) / 1000);
            console.log(m + ':' + ((s< 10) ? '0' + s.toString() : s.toString()));
            setTimeout(timing, 1000);
            }
            timeDelta = timeDelta- 1000;
        }, 1000);  
    }
}

    const clock = new Clock();

