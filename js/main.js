const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const btnCopiar = document.getElementById ("btnCopiar");
const btnLimpiar = document.getElementById ("btnLimpiar");

var txtBase = document.getElementById("txtBase");
var txtResultado = document.getElementById("txtResult");
var txtEstado = document.getElementById("txtEstado");
var munieco = document.getElementById("munieco");

function encriptar(){

    let txt = txtBase.value;
    animar();

    if (txt == '') {
        txtEstado.innerHTML = "Escribe un texto para <strong>encriptar</strong>";
    }else{
        quitarMunieco();
        let txtEncriptado = txt.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        txtResultado.value = txtEncriptado;
        txtEstado.innerHTML = "Se <strong>encripto</strong> el texto";
        btnCopiar.disabled = false;
        btnLimpiar.disabled = false;
    }
    
}

function desencriptar(){
    
    let txt = txtBase.value;
    animar();

    if (txt == '') {
        txtEstado.innerHTML = "Escribe un texto para <strong>desencriptar</strong>";
    }else{
        quitarMunieco();
        let txtEncriptado = txt.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "ufat");
        txtResultado.value = txtEncriptado;
        txtEstado.innerHTML = "Se <strong>desencripto</strong> el texto";
        btnCopiar.disabled = false;
        btnLimpiar.disabled = false;
    }

}

function copiar(){

    animar();

    if(txtResultado.value == ""){
        txtEstado.innerHTML = "No hay <strong>texto</strong> para copiar";
    }else{
        navigator.clipboard.writeText (txtResultado.value);
        txtEstado.innerHTML = "Texto <strong>copiado</strong>";
    }

}

function limpiarCadena(txt) {
    let txtLimpio = txt.value.toLowerCase();
    txtLimpio = txtLimpio.replace(/\./g, '').replace(/[0-9]+/g, '');
    txt.value = txtLimpio.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
}

function reset() {
    txtBase.value = '';
    txtResultado.value = '';
    btnCopiar.disabled = true;
    btnLimpiar.disabled = true;
    munieco.classList.remove("oculto");
    txtResultado.classList.add("oculto");
    btnCopiar.classList.add("oculto");
    txtEstado.innerHTML = "Ingresa el texto para encriptar o desencriptar";
}

function quitarMunieco(){
    munieco.classList.add("oculto");
    txtResultado.classList.remove("oculto");
    btnCopiar.classList.remove("oculto");
}

function animar(){
    txtEstado.classList.add("animacion");
    setTimeout(() => {  
        txtEstado.classList.remove("animacion"); 
    }, 2000);
}

btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiar);
btnLimpiar.addEventListener("click", reset);