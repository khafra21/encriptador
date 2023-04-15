const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById ("btnCopiar");

var txtBase = document.getElementById("txtBase");
var txtResultado = document.getElementById("txtResult");
var txtEstado = document.getElementById("txtEstado");

function encriptar(){

    let txt = txtBase.value.toLowerCase();

    if (txt == '') {
        alert("Escribe un texto para encriptar");
    }else{
        txt = limpiarCadena(txt);
        let txtEncriptado = txt.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        txtBase.value = "";
        txtResultado.value = txtEncriptado;
        alert("Texto Encriptado");
    }
}

function desencriptar(){
    console.log("-----------------Desencriptar");
    
    let txt = txtBase.value.toLowerCase();

    if (txt == '') {
        alert("Escribe un texto para encriptar");
    }else{
        txt = limpiarCadena(txt);
        let txtEncriptado = txt.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "ufat");
        txtBase.value = "";
        txtResultado.value = txtEncriptado;
        alert("Texto Desencriptado");
    }

}

function copiar(){

    console.log("-----------------Copiar");

    if(txtResultado.value == ""){
        alert("No hay texto para copiar");
    }else{
        navigator.clipboard.writeText (txtResultado.value);
    }
}

function limpiarCadena(txt){
    txt = txt.replace(/\./g, '').replace(/[0-9]+/g, '');
    return txt.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
}

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiar);