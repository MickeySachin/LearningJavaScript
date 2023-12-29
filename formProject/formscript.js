

// func to validate user input field
function validateUserField(){
    let userField = document.getElementById('userid').value;
    if ( userField == ''){
        document.getElementById('userSpanid').innerHTML = '*';
        return 0;
    }
    else{
        document.getElementById('userSpanid').innerHTML = '';
        return 1;
    }
}

// func to validate user input field
function validatePassField(){
    let passField = document.getElementById('passid').value;
    if( passField == ''){
        document.getElementById('passSpanid').innerHTML = '*';
        return 0;
    }
    else{
        document.getElementById('passSpanid').innerHTML = '';
        document.getElementById('btnid').style.display = 'block';
        document.getElementById('tempbtn').style.display = 'none';
        return 1;
    }
}

// binding funcs to eventlisteners
document.getElementById('userid').addEventListener(click, validateUserField());
document.getElementById('passid').addEventListener(onclick, validatePassField());


function onSubmitBtn(){
    // document.getElementById('btnid').style.margin = '0.6pc 1.9pc 0pc -1.9pc';
    if (validateUserField() == 0 || validatePassField() == 0){
        alert("Enter required fields!!!")

    }
    else{
        alert("Submitted Successfully!!!")
        document.getElementById('userid').value = '';
        document.getElementById('passid').value = '';
        document.getElementById('btnid').style.display = 'none';
        document.getElementById('tempbtn').style.display = 'block';
    }
}
document.getElementById('btnid').addEventListener(onclick, onSubmitBtn());

function elemHighlight(obj){
    obj.style.border = '3px solid black';
    obj.style.borderRadius = '9px';
}
function elemDeHighlight(obj){
    obj.style.border = 'none';
    obj.style.borderRadius = '0px';
}











