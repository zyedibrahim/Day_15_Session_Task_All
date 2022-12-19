var form_submition = document.querySelector('#form_submition')

form_submition.addEventListener("submit",(event)=>{
    event.preventDefault();

var firstname =  document.querySelector('[placeholder="firstname"]')
var lastname =  document.querySelector('[placeholder="lastname"]')
var address =  document.querySelector('[placeholder="address"]')
var pincode =  document.querySelector('[placeholder="pincode"]')
var state =  document.querySelector('[placeholder="state"]')
var country =  document.querySelector('[placeholder="country"]')
var gender = document.querySelector('[name="gender"]')
var food = document.querySelector('[name="food"]')



var data =[firstname,lastname,gender,food,address,pincode,state,country]
var count_check = 0;
for( var count of data){
    if(count.value){
        count_check++
    }
}
console.log(count_check)
var create_tr = document.createElement("tr")

if(count_check >= 5 ){
    

    document.querySelector('.table').style.display= "block"

    

    for( var i =0 ;i<data.length ;i++){

var create_td = document.createElement("td") 
create_td.innerText = data[i].value
create_tr.append(create_td)    
    
}
}

else{
    
alert("Please Fil The Forms ")

}


document.querySelector("tbody").append(create_tr)

for(var fil of data){
 fil.value=""

}

// if(firstname !== "" && lastname !== "" && address !== "" && pincode !== "" && state !== "" && country !== ""){



// }

// else{

// }








    
})



// if(firstname !== "" && gender !== "" && food !== ""  ){

    // var firstnamedata = document.querySelector(".firstnamedata")
    // firstnamedata.innerText = firstname.value
    //  console.log(firstname)
   
    //  var lastnamedata = document.querySelector(".lastnamedata")
    // lastnamedata.innerText = lastname.value
    //  console.log(lastname)


     
   
    //  var addressdata = document.querySelector(".addressdata")
    // addressdata.innerText = address.value
    //  console.log(address)

     
   
    //  var pincodedata = document.querySelector(".pincodedata")
    // pincodedata.innerText = pincode.value
    //  console.log(pincode)


   
    //  var statedata = document.querySelector(".statedata")
    // statedata.innerText = state.value
    //  console.log(state)


   
    //  var countrydata = document.querySelector(".countrydata")
    // countrydata.innerText = country.value
    //  console.log(country)







    //  var genderdata= document.querySelector(".genderdata")
    //  genderdata.innerText = gender.value
    //  console.log(gender)

    //    var fooddata = document.querySelector(".fooddata")
    //    fooddata.innerText = food.value
    //    console.log(food)

