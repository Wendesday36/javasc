window.addEventListener("load",init)
function init(){
    console.log("haii")
   // const VALAMI = "halii"
    elagazas()
}
function elagazas(){
    var cucc = 8
    console.log(cucc+ " béka")
    if (cucc > 10){
        console.log("kevés béka")
    }
    else if (cucc < 10 && cucc > 5){
        console.log("elég béka")
    }
    else{
        console.log("túl sok béka!")
    }
    var nap = Math.floor(Math.random()*7)+1
    switch(nap){
        case 1:
            console.log("hétfő");
        break;
        case 2:
            console.log("kedd");
        break;
        case 3:
            console.log("szerda");
        break;
        case 4:
            console.log("csütörtök");
        break;
        case 5:
            console.log("péntek");
        break;
        case 6:
             console.log("szombat");
        break;
        case 7:
            console.log("vasárnap");
        default:
            console.log("nincs ilyen nap")
    }

}
