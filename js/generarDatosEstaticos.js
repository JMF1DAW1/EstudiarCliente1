import * as gesPres from "./gestionPresupuesto.js";
import * as gesPresWeb from "./gestionPresupuestoWeb.js";

gesPres.actualizarPresupuesto(1500);

gesPresWeb.mostrarDatoEnId("presupuesto", gesPres.mostrarPresupuesto());

let g1 = new gesPres.CrearGasto("Compra carne", 23.44);
let g2 = new gesPres.CrearGasto("Compra fruta y verdura", 14.25);

gesPres.anyadirGasto(g1);
gesPres.anyadirGasto(g2);

gesPresWeb.mostrarDatoEnId("gastos-totales", gesPres.calcularTotalGastos());

gesPresWeb.mostrarDatoEnId("balance-total", gesPres.calcularBalance());

let gastos = gesPres.listarGastos();

for (let g of gastos)
{
    gesPresWeb.mostrarGastoWeb("listado-gastos-completo",g);
}