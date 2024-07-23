var cantidad = prompt("¿Cuántos colaboradores desea registrar?")

var colaboradores = []


for (var index = 0; index < cantidad; index++) {
    var rut = prompt("Ingrese el RUT del colaborador "+ index)
    var nombre = prompt("Ingrese el nombre del colaborador "+ index)
    var salarioHora = prompt("Ingrese el salario por hora del colaborador "+ index)
    var cantidadHoras = prompt("Ingrese la cantidad de horas trabajadas del colaborador "+ index)

    colaboradores[index] = {
        rut: rut,
        nombre: nombre,
        salario_hora: salarioHora,
        cantidad_horas: cantidadHoras
    }
}

console.log(colaboradores);