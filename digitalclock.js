function timefunc(){
    let date=new Date;
    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    let session="AM";
    
    if(hr==0){
        hr=12;
    }
    if(hr>12){
        hr=hr-12;
        session="PM";
    }
    if(sec<10){
        sec="0"+sec;
    }
    if(min<10){
        min="0"+min;
    }
    if(hr<10){
        hr='0'+hr;
    }
    let t=hr+" : "+min+" : "+sec+'&nbsp '+session;
    document.getElementById('time').innerHTML=t;
    setTimeout(timefunc,1000);
} 
timefunc();

function datefunc(){
    let date=new Date;
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dy=days[date.getDay()];
    let day=date.getDate();
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let mon=months[date.getMonth()];
    let year=date.getFullYear();
    let d=dy+'<br>'+day+" &nbsp"+mon+" &nbsp"+year;
    document.getElementById('date').innerHTML=d;
}
datefunc();