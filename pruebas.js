let Filosofia = [
    "Mendoza0254, C MAR 15:00-17:00 C",
    "Merino0261, R MAR 13:00-15:00 C",
    "Merino0263, R MIE 13:00-15:00 C",
    "Mendoza0265, C JUE 15:00-17:00 C",
]

let Fisica = [
    "Galvez0204, G LUN 07:00-09:00 C JUE 07:00-09:00 C",
    "Gonzales0208, F LUN 13:00-15:00 C VIE 13:00-15:00 C",
    "Galvez0213, G LUN 09:00-11:00 C JUE 10:00-12:00 C",
    "Gonzales0218, F MIE 11:00-13:00 C VIE 15:00-17:00 C",
]

let Dibujo = [
    "Ramirez0221, V LUN 07:00-10:00 C",
    "Sicha0226, A MAR 07:00-10:00 C",
    "Sicha0231, A MIE 07:00-10:00 C",
    "Sicha0236, A MAR 10:00-13:00 C",
]

let LabFisica = [
    "Lab, 1 MAR 20:00-22:00 H",
    "Lab, 2 LUN 12:00-14:00 H",
    "Lab, 3 LUN 07:00-09:00 H",
    "Lab, 4 LUN 10:00-12:00 H", // 10:00-12:00 H"
    "Lab, 5 JUE 10:00-12:00 H", // 10:00-12:00 H"
    "Lab, 6 MIE 07:00-09:00 H",
    "Lab, 7 MIE 10:00-12:00 H", // 10:00-12:00 
    "Lab, 8 VIE 07:00-09:00 H",
    "Lab, 9 JUE 07:00-09:00 H",
    "Lab, 10 SAB 08:00-10:00 H",
    "Lab, 11 SAB 10:00-12:00 H",
    "Lab, 12 MIE 12:00-14:00 H",
    "Lab, 13 VIE 12:00-14:00 H",
    "Lab, 14 VIE 15:00-17:00 H",
    "Lab, 15 VIE 10:00-12:00 H",
    "Lab, 16 SAB 13:00-15:00 H",
    "Lab, 17 VIE 17:00-19:00 H",
    "Lab, 18 MIE 15:00-17:00 H",
    "Lab, 19 JUE 15:00-17:00 H",
    "Lab, 20 LUN 20:00-22:00 H",
    "Lab, 21 VIE 20:00-22:00 H",
    "Lab, 22 MIE 17:00-19:00 H",
    "Lab, 23 MIE 20:00-22:00 H",
    "Lab, 24 MAR 10:00-12:00 H",
    "Lab, 25 MAR 12:00-14:00 H"
];

let Calculo = [
    "Henostroza0201, J LUN 11:00-13:00 C MIE 11:00-13:00 C",
    "Henostroza0210, J MAR 11:00-13:00 C SAB 12:00-14:00 C"
]




const teacherFormatter = (teacher) => {
    let horas = [];
    const parts = teacher.split(/\s+/); // Dividir por uno o más espacios
    const profesor = parts[0] + ' ' + parts[1].replace(',', ''); // Nombre completo del profesor

    if (parts.length === 5) {
        // Caso de un solo día
        const day = parts[2];
        const timeRange = parts[3];
        horas = convertDayAndTime(day, timeRange);
    } else if (parts.length === 8) {
        // Caso de dos días
        const day1 = parts[2];
        const day2 = parts[5];
        const timeRange1 = parts[3];
        const timeRange2 = parts[6];
        horas = [...convertDayAndTime(day1, timeRange1), ...convertDayAndTime(day2, timeRange2)];
    } else {
        console.log("Formato no válido");
        return null;
    }

    return {
        profesor: profesor,
        horas: horas
    };
};

const convertDayAndTime = (day, timeRange) => {
    let start = parseInt(timeRange.substring(0, 2));
    let end = parseInt(timeRange.substring(6, 8));
    let dayOffset;

    switch (day) {
        case "LUN":
            dayOffset = -7;
            break;
        case "MAR":
            dayOffset = 8;
            break;
        case "MIE":
            dayOffset = 23;
            break;
        case "JUE":
            dayOffset = 38;
            break;
        case "VIE":
            dayOffset = 53;
            break;
        case "SAB":
            dayOffset = 68;
            break;
        default:
            console.log("Día no válido");
            return [];
    }

    return range(start + dayOffset, end + dayOffset);
};

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
        result.push(i);
    }
    return result;
}

let formattedFisica = Fisica.map(teacherFormatter);
let formattedFilosofia = Filosofia.map(teacherFormatter)
let formattedDibujo = Dibujo.map(teacherFormatter)
let formattedLabFisica = LabFisica.map(teacherFormatter)
let formattedCalculo = Calculo.map(teacherFormatter)





const checkCourses = (course1, course2, course3, course4, course5) => {
    const resultados = [];

    // Iterar por cada combinación de profesores en los cursos
    course1.forEach((course1Item, index1) => {
        course2.forEach((course2Item, index2) => {
            course3.forEach((course3Item, index3) => {
                course4.forEach((course4Item, index4) => {
                    course5.forEach((course5Item, index5) => {

                        // Crear un array con todas las horas de los cinco cursos
                        const allHoras = [
                            ...course1Item.horas,
                            ...course2Item.horas,
                            ...course3Item.horas,
                            ...course4Item.horas,
                            ...course5Item.horas
                        ];

                        // Verificar si hay duplicados en allHoras
                        const uniqueHoras = new Set(allHoras);
                        if (uniqueHoras.size === allHoras.length) {
                            // Si no hay duplicados, agregar la combinación a resultados
                            resultados.push({
                                nombre: `Horario ${index1 + 1}-${index2 + 1}-${index3 + 1}-${index4 + 1}-${index5 + 1}`,
                                horas: [...uniqueHoras],
                                profesores: [
                                    course1Item.profesor, 
                                    course2Item.profesor, 
                                    course3Item.profesor, 
                                    course4Item.profesor, 
                                    course5Item.profesor
                                ]
                            });
                        }
                    });
                });
            });
        });
    });

    return resultados;
};

const posibles = checkCourses(formattedFilosofia, formattedDibujo, formattedFisica, formattedCalculo, formattedLabFisica);
console.log(posibles);





// TODO BIEN SECTOR----------------------------------------


// Example of schedules data generated by the generateSchedule() function.
// It is and array with objects that contains the individual schedules, with the hours that will take place, the teaches and a name. 
/* const resultados = [
   {
        nombre: "horario_1",
        horas: [4, 5, 8, 9],
        profesores: ["Merino1", "Sicha2"]
    }, 
    {
        nombre: "horario_2",
        horas: [27, 14, 15, 0],
        profesores: ["Ramirez1", "Sicha2"]
    }
]; */



// This piece of code is the responsible to render the possible schedules from the date generated from the generateSchedule()
// This function does the following:
// 1. Goes through each object in the results array (each schedule generated).
//  1.1. Printes the name and teachers from the schedule.
//  1.2. Declares the schedule template that later will be modified.
//  1.3. Goes through each number in the array(each one represents an hour of class in a specified time => 7 to 8 in the morning is represented by 0, and so on. )
//      1.3.1. An index is created, this index is the residual of the number and the hours per day. This is usuful as the index reprensents an hour in the "horario" array.
//      1.3.2. Now we know the time, but dont know the day, then this will be specified by the integer part of the number divided by 14, as the days have 14 hours.
//             Depending on the result, it will change the string in the array which we selected with the index.
// 1.4. All loops are executed and the schedules are printed. 

const graficadora = (resultados) => {
    resultados.forEach(resultado => {
        console.log(`Horario: ${resultado.nombre}`);
        console.log(`Profesores: ${resultado.profesores.join(", ")}`);
        
        let horario = [
            "07:00|         |         |         |         |         |         |",
            "08:00|         |         |         |         |         |         |",
            "09:00|         |         |         |         |         |         |",
            "10:00|         |         |         |         |         |         |",
            "11:00|         |         |         |         |         |         |",
            "12:00|         |         |         |         |         |         |",
            "13:00|         |         |         |         |         |         |",
            "14:00|         |         |         |         |         |         |",
            "15:00|         |         |         |         |         |         |",
            "16:00|         |         |         |         |         |         |",
            "17:00|         |         |         |         |         |         |",
            "18:00|         |         |         |         |         |         |",
            "19:00|         |         |         |         |         |         |",      
            "20:00|         |         |         |         |         |         |",   
            "21:00|         |         |         |         |         |         |",  
           ];

        resultado.horas.forEach(hora => {
            const index = hora % 15; 

            if (index >= 0 && index < horario.length) {
                let day = Math.floor(hora / 15);
                switch (day) {
                    case 0: horario[index] = horario[index].substring(0, 8) + 'X' + horario[index].substring(9); break;
                    case 1: horario[index] = horario[index].substring(0, 17) + 'X' + horario[index].substring(18); break;
                    case 2: horario[index] = horario[index].substring(0, 26) + 'X' + horario[index].substring(27); break;
                    case 3: horario[index] = horario[index].substring(0, 37) + 'X' + horario[index].substring(38); break;
                    case 4: horario[index] = horario[index].substring(0, 46) + 'X' + horario[index].substring(47); break;
                    case 5: horario[index] = horario[index].substring(0, 61) + 'X' + horario[index].substring(62); break;
                }
            }
        });

        console.log(`    |   LUN   |   MAR   |   MIE   |   JUE   |   VIE   |   SAB   |`);
        console.log(`---------------------------------------------------------------`);
        horario.forEach(line => console.log(line));
    });
}

graficadora(posibles);

