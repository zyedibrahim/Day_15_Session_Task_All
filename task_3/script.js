var output = document.querySelector('.display-output')

function display(num){
    output.value += num
}

function calculate(){
    try{
        output.value = eval(output.value)

    }
    catch(erro){
        alert("invalid output")
        output.value = ''
}

}

function Clear(){
    output.value = '';
}

function del(){
    output.value = output.value.slice(0,-1);

    
}
