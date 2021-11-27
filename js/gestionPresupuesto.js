let presupuesto = 0;
let gastos = [];
let idGasto = 0;

function actualizarPresupuesto(presupuestoActualizado)
{
    let presupuestoAux = presupuestoActualizado;

    if(presupuestoAux >= 0)
    {
        presupuesto = presupuestoAux;
    }
    else
    {
        presupuestoAux = -1
    }

    return presupuestoAux
        
}

function mostrarPresupuesto()
{
    let x = presupuesto;
    return `Tu presupuesto actual es de ${x} €`;
}

function anyadirGasto(gastoAnyadido)
{
    gastoAnyadido.id = idGasto;
    idGasto++;
    gastos.push(gastoAnyadido);
}

function CrearGasto(descripcion, valor)
{
    this.descripcion = descripcion;

    if (valor >=0)
    {
        this.valor = valor;
    }
    else
    {
        this.valor = 0;
    }

    this.mostrarGasto = function()
    {
        let gasto = (`Gasto correspondiente a ${this.descripcion} con valor: ${this.valor} .`);
        return gasto;
    }

    this.actualizarPresupuesto = function (actualizarDescripcion)
    {
        this.descripcion = actualizarDescripcion;
    }

    this.actualizarValor = function (actualizarValor)
    {
        if(actualizarValor > 0)
        {
            this.valor = actualizarValor;
        }
    }
}

function calcularTotalGastos()
{
    let totalGastos = 0;

    for (let i=0; i < gastos.length; i++)
    {
        totalGastos = totalGastos + gastos[i].valor;
    }

    return totalGastos;
}

function calcularBalance()
{
    let balance;

    balance = presupuesto - calcularTotalGastos();

    return balance;
}

function listarGastos()
{
    return gastos;
}

export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    anyadirGasto,
    calcularTotalGastos,
    calcularBalance,
    listarGastos
}