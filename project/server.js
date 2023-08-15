
 // Write updated data to DOM elements
 document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
 document.getElementById('content').innerHTML = allData.feel;
 document.getElementById("date").innerHTML =allData.date;
    const express= require('express')// include express 
    const app= express();
    // Create new entry for JS Object Endpoint
    projectData["temp"] = data.temp;
    projectData["feel"] = data.feeling;
    projectData["date"] = data.date;
   
    // Send response to Endpoint
    response.send(projectData);
   
//date manage 
function dateManage(dateArg) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    // console.log(year+" "+date+" "+day+" "+month);
    return `${date} ${month} (${day}) , ${year}`
}
// instance of the app
app.use(cors()); 

// function for the dynamic background change  according to weather status
function changeBg(status) {
    if (status === 'cold') {
        document.body.style.backgroundImage = 'url(img/cold.jpg)';
    }
    
    else if (status === 'sun') {
        document.body.style.backgroundImage = 'url(img/sun.jpg)';
    } 
    else {
        document.body.style.backgroundImage = 'url(img/bg.jpg)';
    }
}

//making a function for the classname of icon
function getIconClass(classarg) {
    if (classarg === 'Rain') {
        return 'fas fa-cloud-showers-heavy';
    } else if (classarg === 'cold') {
        return 'fas fa-cold';
    
    } else if (classarg === 'Sun') {
        return 'fas fa-sun';
    
    } else if (classarg === 'Thunderstorm' || classarg === 'Drizzle') {
        return 'fas fa-thunderstorm';
    } else {
        return 'fas fa-cold-sun';
    }
}

function reset() {
    let input = document.getElementById('input-box');
    input.value = "";
}

// funtion to add zero if hour and minute less than 10
function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
