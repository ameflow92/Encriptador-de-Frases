var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var texto = document.querySelector("#textoFrase");
var copiar = document.querySelector("#copiar");
texto.focus();
function mostrar(imprimir)
{
    var textoEncriptado  = imprimir;
    document.getElementById("textoResultado").value=imprimir;
}
function encriptadora()
{
    var frase = texto.value;
    if (frase == "")
    {
        alert("Ingrese un texto invalido");
    }
    else
    {
        frase = frase.replace(/e/gim,"enter");
        frase = frase.replace(/i/gim,"imes");
        frase = frase.replace(/a/gim,"ai");
        frase = frase.replace(/o/gim,"ober");
        frase = frase.replace(/u/gim,"ufat");
        document.getElementById("textoFrase").style.display="none";
        document.getElementById("encriptar").style.display="none";
        document.getElementById("desencriptar").style.display="none";
        document.getElementById("textoResultado").style.display="inline";
        document.getElementById("copiar").style.display="inline";
        mostrar(frase);
    }
}
function desencriptadora()
{
    var frase = texto.value;
    if (frase == "")
    {
        alert("Ingrese un texto valido")
    }
    else
    {
        frase = frase.replace(/enter/gim,"e");
        frase = frase.replace(/imes/gim,"i");
        frase = frase.replace(/ai/gim,"a");
        frase = frase.replace(/ober/gim,"o");
        frase = frase.replace(/ufat/gim,"u");
        document.getElementById("textoFrase").style.display="none";
        document.getElementById("encriptar").style.display="none";
        document.getElementById("desencriptar").style.display="none";
        document.getElementById("textoResultado").style.display="inline";
        document.getElementById("copiar").style.display="inline";
        mostrar(frase);
    }
}
function copia()
{
    var textocopiado = document.getElementById("textoResultado");
    textocopiado.select();
    document.execCommand("copy");
    document.getElementById("copiar").style.display="none";
    document.getElementById("textoResultado").style.display="none";
    document.getElementById("textoFrase").style.display="inline";
    document.getElementById("encriptar").style.display="inline";
    document.getElementById("desencriptar").style.display="inline";
    document.getElementById("textoFrase").value="";
    document.getElementById("textoResultado").value="";
    texto.focus();
}
encriptar.onclick = encriptadora;
desencriptar.onclick = desencriptadora;
copiar.onclick = copia;