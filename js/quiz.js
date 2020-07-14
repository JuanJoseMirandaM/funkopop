function prg01(value){
    document.getElementById('resp01').style.display = 'block';
    if (value == 1) {
        document.getElementById('resp01_dialog').innerHTML = '¡Correcto!'
    }else{
        document.getElementById('resp01_dialog').innerHTML = '¡Incorrecto!'  
    }
    document.getElementById('btn01_01').setAttribute("class", "btn btn-danger btn-lg btn-block")  
    document.getElementById('btn01_02').setAttribute("class", "btn btn-success btn-lg btn-block")  
    document.getElementById('btn01_03').setAttribute("class", "btn btn-danger btn-lg btn-block")  
    document.getElementById('btn01_01').setAttribute("disabled", "true")
    document.getElementById('btn01_02').setAttribute("disabled", "true")
    document.getElementById('btn01_03').setAttribute("disabled", "true")
}

function prg02(value){
    document.getElementById('resp02').style.display = 'block';
    if (value == 1) {
        document.getElementById('resp02_dialog').innerHTML = '¡Correcto!'
    }else{
        document.getElementById('resp02_dialog').innerHTML = '¡Incorrecto!'  
    }
    document.getElementById('btn02_01').setAttribute("class", "btn btn-danger btn-lg btn-block")  
    document.getElementById('btn02_02').setAttribute("class", "btn btn-success btn-lg btn-block")  
    document.getElementById('btn02_03').setAttribute("class", "btn btn-danger btn-lg btn-block")  
    document.getElementById('btn02_01').setAttribute("disabled", "true")
    document.getElementById('btn02_02').setAttribute("disabled", "true")
    document.getElementById('btn02_03').setAttribute("disabled", "true")
}

function prg03(value){
    document.getElementById('resp03').style.display = 'block';
    if (value == 1) {
        document.getElementById('resp03_dialog').innerHTML = '¡Correcto!'
    }else{
        document.getElementById('resp03_dialog').innerHTML = '¡Incorrecto!'  
    }
    document.getElementById('btn03_01').setAttribute("class", "btn btn-danger btn-lg btn-block")  
    document.getElementById('btn03_02').setAttribute("class", "btn btn-success btn-lg btn-block")  
    document.getElementById('btn03_03').setAttribute("class", "btn btn-danger btn-lg btn-block")  
    document.getElementById('btn03_01').setAttribute("disabled", "true")
    document.getElementById('btn03_02').setAttribute("disabled", "true")
    document.getElementById('btn03_03').setAttribute("disabled", "true")
}

function prg04(value){
    document.getElementById('resp04').style.display = 'block';
    if (value == 1) {
        document.getElementById('resp04_dialog').innerHTML = '¡Correcto!'
    }else{
        document.getElementById('resp04_dialog').innerHTML = '¡Incorrecto!'  
    }
    document.getElementById('btn04_01').setAttribute("class", "btn btn-danger btn-lg btn-block")  
    document.getElementById('btn04_02').setAttribute("class", "btn btn-success btn-lg btn-block")  
    document.getElementById('btn04_03').setAttribute("class", "btn btn-danger btn-lg btn-block")  
    document.getElementById('btn04_01').setAttribute("disabled", "true")
    document.getElementById('btn04_02').setAttribute("disabled", "true")
    document.getElementById('btn04_03').setAttribute("disabled", "true")
}