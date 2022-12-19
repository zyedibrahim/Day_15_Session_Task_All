
var data = [
    {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    },
    {
      "id": "7",
      "name": "Carolina White",
      "email": "Royal50@hotmail.com"
    },
    {
      "id": "8",
      "name": "Alfredo Conn",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Stan Shanahan",
      "email": "Lamar.McClure@hotmail.com"
    },
    {
      "id": "10",
      "name": "Marvin Fay",
      "email": "Osbaldo58@hotmail.com"
    },
    {
      "id": "11",
      "name": "Torrance Rau",
      "email": "Orin45@gmail.com"
    },
    {
      "id": "12",
      "name": "Harold Gutmann MD",
      "email": "Alyce.Stracke37@yahoo.com"
    },
    {
      "id": "13",
      "name": "Taryn Torphy",
      "email": "Dean_Breitenberg71@hotmail.com"
    },
    {
      "id": "14",
      "name": "Bryana Lang",
      "email": "Tatum.Ullrich@yahoo.com"
    },
    {
      "id": "15",
      "name": "Nyasia Green DDS",
      "email": "Dino83@gmail.com"
    },
    {
      "id": "16",
      "name": "Nasir Gerhold",
      "email": "Lilian_Bashirian8@hotmail.com"
    },
    {
      "id": "17",
      "name": "Raymundo Ritchie PhD",
      "email": "Antwan.Schoen15@yahoo.com"
    },
    {
      "id": "18",
      "name": "Delmer Marvin",
      "email": "Kiera62@yahoo.com"
    },
    {
      "id": "19",
      "name": "Rachel Wilkinson",
      "email": "Foster_Conroy@gmail.com"
    },
    {
      "id": "20",
      "name": "Gladys Howell",
      "email": "Constance.Labadie10@yahoo.com"
    },
    {
      "id": "21",
      "name": "Ciara Klocko",
      "email": "Harvey76@yahoo.com"
    },
    {
      "id": "22",
      "name": "Quentin O'Kon",
      "email": "Amely_Cummings2@yahoo.com"
    },
    
    {
      "id": "23",
      "name": "Ms. Gabriella Kunde",
      "email": "Lorenza_Cummerata@hotmail.com"
    },
    {
      "id": "24",
      "name": "Gerald Reilly",
      "email": "Lia_Konopelski@gmail.com"
    },
    {
      "id": "25",
      "name": "Brody Carter I",
      "email": "Colten.Wilderman90@hotmail.com"
    },
    {
      "id": "26",
      "name": "Alanis Klocko",
      "email": "Johathan.Champlin69@gmail.com"
    },
    {
      "id": "27",
      "name": "Caroline Miller",
      "email": "Delaney.Kozey74@gmail.com"
    },
    {
      "id": "28",
      "name": "Ms. Merritt McClure",
      "email": "Wendy.Zieme@gmail.com"
    },
    {
      "id": "29",
      "name": "Jovani Schoen",
      "email": "Norval_Zieme@hotmail.com"
    },
    {
      "id": "30",
      "name": "Berniece Bradtke",
      "email": "Okey.Fisher39@hotmail.com"
    }
]

function clickingdata (e){


    document.querySelector(".parent-data").innerHTML=" "
    var getnum = parseInt(e.getAttribute("for"))-1

    var obtaindata = data[getnum]

    var creating_div = document.createElement("div")
    creating_div.innerHTML =

    `<p for="${getnum}"> id : ${obtaindata.id}</p> 
    <p for="name"> Name : ${obtaindata.name}</p> 
    <p for="email"> Email : ${obtaindata.email}</p> `


document.querySelector(".parent-data").append(creating_div)









}



var next = document.querySelector(".btn-Next");

next.addEventListener("click" ,() => {

    var user_data = 27;
    var iter_val =(parseInt(user_data/5))*5
    var reduce = user_data % 5



for(var i = 1 ; i <=5 ;i++) {

    var takingval_for = document.querySelector(`.btn-${i}`)
var get_f = parseInt(takingval_for.getAttribute("for")) 




if(iter_val >= get_f)
{
var incresingattribute = get_f + 5
// console.log(get_f);

takingval_for.setAttribute("for", incresingattribute)

takingval_for.innerText = incresingattribute
}


}


// for (var i=0 ;i<get_f;i++){
//   if(incresingattribute > 17 ){
//   document.querySelector(`[for="${get_f}"]`).remove()
//   break;
// }
// }


// document.querySelector('[for="23"]').remove(),
// document.querySelector('[for="24"]').remove()
// document.querySelector('[for="25"]').remove()



// var nonevalue =[

// ]




} )

var previous = document.querySelector(".btn-Previous");

previous.addEventListener("click",() => {

    for(var i = 1 ; i <=5;i++) {
        var takingval_for = document.querySelector(`.btn-${i}`)

        var get_f = parseInt(takingval_for.getAttribute("for")) 
if(get_f > 5 ){

    
    var incresingattribute = get_f - 5
    
    takingval_for.setAttribute("for", incresingattribute)
    
    takingval_for.innerText = incresingattribute
    


}



    
    }
    




})













