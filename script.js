let birthday = document.getElementById("myDate");
let myDate = moment().format("YYYY-MM-DD");
let cas = document.getElementById("casCoChyba");
console.log(myDate);
function pocitadlo() {

    let hodnota =  birthday.value

    let datumNarodiek = moment(hodnota, "YYYY-MM-DD")
    /* DNESOK */
    let dnes = moment().startOf("day");
    let days = datumNarodiek.diff(dnes, "days");
    cas.innerText =days;
    console.log(days)
    
    let mesiac = datumNarodiek.format('MMMM'); 
    if (mesiac === "January") {
        console.log("ZIMA-January");
    } else if (mesiac === "February") {
        console.log("ZIMA-February");
    } else if (mesiac === "March") {
        console.log("JAR-March");
    } else if (mesiac === "April") {
        console.log("JAR-April");
    } else if (mesiac === "May") {
        console.log("JAR-May");
    } else if (mesiac === "June") {
        console.log("LETO-June");
    } else if (mesiac === "July") {
        console.log("LETO-July");
    } else if (mesiac === "August") {
        console.log("LETO-August");
    } else if (mesiac === "September") {
        console.log("JESEN-September");
    } else if (mesiac === "October") {
        console.log("JESEN-October");
    } else if (mesiac === "November") {
        console.log("JESEN-November");
    } else if (mesiac === "December") {
        console.log("ZIMA-December");
    }
};
pocitadlo()

