
function mostrarDatoEnId(idElemento, valor)
{
    document.getElementById(idElemento).innerHTML = valor;
}

function mostrarGastoWeb(idElemento, gasto)
{
    let div = document.createElement('div');
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');

    div.className = "gasto";   
    div1.className = "gasto-descripcion";
    div2.className = "gasto-valor";

    div1.append(gasto.descripcion);
    div2.append(gasto.valor);

    div.append(div1);
    div.append(div2);

    let contenido = document.getElementById(idElemento);
    contenido.append(div);
}

export {
    mostrarDatoEnId, 
    mostrarGastoWeb,
}