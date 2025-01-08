setInterval(()=>{
    let show=document.querySelector("#display");
let time=new Date()
show.innerHTML=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`


},1000)//1000 miliseconds=1 seconds
