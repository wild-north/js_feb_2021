class Clock {
  getTimes() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    console.log(`${hours}:${minutes}:${seconds}`);
  }

  getAlarm(minutes) {
    let dataNow = new Date();
    let elseData = new Date();

    elseData.setMinutes(elseData.getMinutes() + minutes);
    let result = elseData - dataNow;

    if (result > 0) {
      setTimeout(function () {
        console.log("WAKE UP!");
      }, result);
    }
  }

  setTimer(minutes) {
    let arr = minutes.split(":");
    arr = arr.map(Number);
    let timeLater = new Date();

    timeLater.setMinutes(timeLater.getMinutes() + arr[0]);
    timeLater.setSeconds(timeLater.getSeconds() + arr[1]);

    setTimeout(function teak() {
      let timeNow = Date.now();

      if (timeLater > timeNow) {
        console.log(`${timeLater} - ${timeNow}`);
        setTimeout(teak, 1000);
      } else {
        console.log("WE DONE");
      }
    }, 1000);
  }
}

let clock = new Clock();