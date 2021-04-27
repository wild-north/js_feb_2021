class Clock{
    getTimes(){
        let time = new Date();
        let a = time.getHours();
        let b = time.getMinutes();
        let c = time.getSeconds();
    
            console.log(`${a}:${b}:${b}`);
            
        }

    getAlarm(){
        let dataNow = new Date();
        let elseData = new Date();
        let result = elseData - dataNow;

        elseData.setHours(dataNow.getHours() );
        elseData.setMinutes(dataNow.getMinutes() + 5);
        elseData.setSeconds(dataNow.getSeconds() );

            if(result > 0){
                setTimeout(function(){
                    console.log("WAKE UP!")
             },result);

          }
        return elseData;
        }
        
    setTimer(minutes){
        let arr = minutes.split(':');
        arr = arr.map(Number);
        let timeLater = new Date();

        timeLater.setMinutes(timeLater.getMinutes() + arr[0]);
        timeLater.setSeconds(timeLater.getSeconds() + arr[1]);

            setTimeout(function teak(){
                let timeNow = Date.now();

                if(timeLater > timeNow){
                    console.log(`${timeLater} - ${timeNow}`);
                        setTimeout(teak, 1000);
                }else {
                    console.log("WE DONE");
                    }

            },1000);

        }
        
    };



let clock = new Clock();


