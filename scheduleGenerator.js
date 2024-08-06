/* Mendoza, C	MAR 15:00-17:00 C
Merino, R	MAR 13:00-15:00 C
Merino, R	MIE 13:00-15:00 C
Mendoza, C	JUE 15:00-17:00 C
Galvez, G	LUN 07:00-09:00 C JUE 07:00-09:00 C
Gonzales, F	LUN 13:00-15:00 C VIE 13:00-15:00 C
Galvez, G	LUN 09:00-11:00 C JUE 10:00-12:00 C
Gonzales, F	MIE 11:00-13:00 C VIE 15:00-17:00 C
Ramirez, V	LUN 07:00-10:00 C
Sicha, A	MAR 07:00-10:00 C
Sicha, A	MIE 07:00-10:00 C
Sicha, A	MAR 10:00-13:00 C
Henostroza, J	LUN 11:00-13:00 C MIE 11:00-13:00 C
Henostroza, J	MAR 11:00-13:00 C SAB 12:00-14:00 C  */
const fisica = [
    {
        profesor: "Mendoza Turno 1",
        horario: [39, 41]
    },
    {
        profesor: "Mendoza Turno 2",
        horario: [37, 49]
    }
];

const calculo = [
    {
        profesor: "Sicha 1",
        horario: [7, 10] 
    }/* ,
    {
        profesor: "Sicha 2",
        horario: [37, 49]
    } */

];

const mensajeError = () => console.log("Se cruzan los horarios");

const mensajeBien = () => console.log("Está bien");

let horas = []

const loopPrincipal = (curso1, curso2) => {
    let conflicto = false;
    

    for (let contador = 0; contador < curso1.length; contador++) {
        const rango1 = curso1[contador].horario;
        const profe1 = curso1[contador].profesor

        for (let contador2 = 0; contador2 < curso2.length; contador2++) {
            const rango2 = curso2[contador2].horario;
            const profe2 = curso2[contador2].profesor

            if (rango1[0] >= rango2[1] || rango1[1] <= rango2[0]) {
                console.log("Los cursos: ", profe1, profe2, "coinciden.")
                range(rango1[0], rango1[1])
                range(rango2[0], rango2[0])
            }
        }

        if (conflicto) {
            break;
        }
    }

    if (!conflicto) {
        mensajeBien();
    }
};

loopPrincipal(fisica, calculo);
console.log(horas)



function range(start, end) {
    const result = [];
    for (let i = start; i < end ; i++) {
        horas.push(i);
    }
}
