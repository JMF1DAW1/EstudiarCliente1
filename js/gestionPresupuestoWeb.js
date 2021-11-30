import * as gesPres from "./gestionPresupuesto.js";

function mostrarDatoEnId(idElemento, valor)
{
    document.getElementById(idElemento).innerHTML = valor;
}

function mostrarGastoWeb(idElemento, gasto)
{
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');    

    div.className = "gasto";   
    div1.className = "gasto-descripcion";
    div2.className = "gasto-valor";
    div3.className = "gasto-fecha";
    div4.className = "gasto-etiquetas";
    
    div1.append(gasto.descripcion);
    div2.append(gasto.valor);
    div3.append(gasto.fecha);
    div4.append(gasto.etiquetas);

    div.append(div1);
    div.append(div2);
    div.append(div3);
    div.append(div4);

    let contenido = document.getElementById(idElemento);
    contenido.append(div);
}

function nuevoGastoWeb()
{
    let descripcionGastoNuevo = prompt("Introduce la descripción");
    let valorGastoNuevo = prompt("Introduce el gasto");
    let fechaGastoNuevo = prompt("Introduce la fecha");
    let etiquetasGastoNuevo = prompt("Introduce la etiqueta");

    valorGastoNuevo = parseFloat(valorGastoNuevo);

    let etiquetasSeparadasSplit = etiquetasGastoNuevo.split(',');

    let gastoNuevo = new gesPres.CrearGasto(descripcionGastoNuevo, valorGastoNuevo, fechaGastoNuevo, etiquetasSeparadasSplit);

    gesPres.anyadirGasto(gastoNuevo);

    repintar();
}

let butAnyadirGasto = document.getElementById("anyadirgasto");
butAnyadirGasto.addEventListener('click', nuevoGastoWeb);

function nuevoGastoWebFormulario() 
{
    this.handleEvent = function(e)
    {   
    let plantillaFormulario = document.getElementById("formulario-template").content.cloneNode(true);;
    var formulario = plantillaFormulario.querySelector("form");

    let manEnvio1 = new manejadorEnvioForm();
    formulario.addEventListener("submit", manEnvio1);

    let manBorrar1 = new manejadorCancelForm();
    let botonCancelar = formulario.querySelector("button.cancelar");
    botonCancelar.addEventListener("click", manBorrar1);

    document.getElementById("anyadirgasto-formulario").disabled = true;

    document.getElementById("controlesprincipales").append(formulario);
    }
}

let nuevoForm = new nuevoGastoWebFormulario();
let butNuevoGastoForm = document.getElementById("anyadirgasto-formulario");
butNuevoGastoForm.addEventListener("click", nuevoForm);

function manejadorEnvioForm()
{
    this.handleEvent = function (e) 
    {
        e.preventDefault();

        let form = e.currentTarget;

        let desc = form.elements.descripcion.value;
        let valor = form.elements.valor.value;
        let fecha = form.elements.fecha.value;
        let etiqueta = form.elements.etiquetas.value;

        valor = parseFloat(valor);

        let etiquetasSeparadasSplit = etiqueta.split(',');

        let gastoNuevo = new gesPres.CrearGasto(desc, valor, fecha, etiquetasSeparadasSplit);

        gesPres.anyadirGasto(gastoNuevo);

        repintar();

        document.getElementById("anyadirgasto-formulario").disabled = false;
    }
}

function repintar()
{
    mostrarDatoEnId("presupuesto", gesPres.mostrarPresupuesto());

    mostrarDatoEnId("gastos-totales", gesPres.calcularTotalGastos());

    mostrarDatoEnId("balance-total", gesPres.calcularBalance());

    document.getElementById("listado-gastos-completo").innerHTML = "";

    let gastos = gesPres.listarGastos();

    for (let g of gastos) {
        mostrarGastoWeb("listado-gastos-completo", g);
    }
}

function manejadorCancelForm()
{
    this.handleEvent = function (e)
    {
        e.target.form.remove();  
        document.getElementById("anyadirgasto-formulario").disabled = "";
        repintar();   
    }
}

export {
    mostrarDatoEnId, 
    mostrarGastoWeb,
}