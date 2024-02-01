const countdown = () => {
    const endDate = new Date("Feb 08, 2024 12:50:59").getTime();
    console.log(endDate);
    const now = new Date().getTime();
    console.log(now);

    const difference = endDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    let timedays = Math.floor(difference / days);
    let timehours = Math.floor((difference % days) /hours);
    let timeminutes = Math.floor((difference % hours)/minutes);
    let timeseconds = Math.floor((difference % minutes)/seconds);

    timedays = timedays < 10 ? "0" + timedays : timedays;
    timehours = timehours < 10 ? "0" + timehours : timehours;
    timeminutes = timeminutes < 10 ? "0" + timeminutes : timeminutes;
    timeseconds = timeseconds < 10 ? "0" + timeseconds : timeseconds;

    document.getElementById("days").innerHTML = timedays;
    document.getElementById("hours").innerHTML = timehours;
    document.getElementById("minutes").innerHTML = timeminutes;
    document.getElementById("seconds").innerHTML = timeseconds;

}

setInterval(countdown, 1000)