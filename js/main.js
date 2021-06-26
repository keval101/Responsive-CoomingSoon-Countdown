const countdown = document.querySelector('.countdown');

const launchDate = new Date('Jan 1, 2022 13:00:00').getTime();

//Update Every Second
const intvl =  setInterval(()=>{
    //get today date
    const now = new Date().getTime();

    //Distance from now to the launch data
    const distance =launchDate - now;

    //Time Calculation
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const mins = Math.floor(distance % (1000 * 60 * 60 ) / (1000 * 60));
    const secs = Math.floor(distance % (1000 * 60 ) / (1000));

    //Display Time
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Miniutes</span></div>
        <div>${secs}<span>Seconds</span></div>
    `;


    //if launch date passed
    if( distance < 0){
        //stop countdown
        clearInterval(intvl);
        //style and output
        countdown.style.fontSize = '60px';
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched !'
        
        const h1 = document.querySelector('h1');
        h1.style.display = 'none'
        
    }
},1000)