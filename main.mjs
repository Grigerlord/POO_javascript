// const natalia = {
//     name: "Natalia",
//     age: 20,
//     cursosAprobados: [
//         "Curso de HTML5",
//         "Curso de CSS3"
//     ],
//     aprobarCurso(nuevoCursito) {
//         this.cursosAprobados.push(nuevoCursito)
//     }
// }


// function Student(name, age, cursosAprobados) {
//     this.name = name
//     this.age = age
//     this.cursosAprobados = cursosAprobados
// }

// Student.prototype.aprobarCurso = function (nuevoCursito) {
//     this.cursosAprobados.push(nuevoCursito)
// }



// const juanita = new Student(
//     "juanita Alejandra",
//     15,
//     [
//         "Curso de ECMA",
//         "Curso de Figma"
//     ]
// )





// console.table(natalia);
// console.table(juanita);



// //Hacwer que natalia apruebe otro curso


// natalia.aprobarCurso('Curso de Asincronismo')



// //prototipos con la sintaxis de class

// class Student2 {
//     constructor({
//         name,
//         cursosAprobados = [],
//         age,
//         email,
//     }){
//         this.name = name
//         this.age = age
//         this.cursosAprobados = cursosAprobados
//     }

//     aprobarCurso(nuevoCursito) {
//         this.cursosAprobados.push(nuevoCursito)
//     }
// }


// const miguelito = new Student2({
//     name: 'Miguel',
//     age: 28,
//     email: 'miguelitoplatzi.com'
// })

// miguelito.aprobarCurso('Curso de Nada')


// console.table(miguelito)




//ESTA FORMA DE TRABAJAR NO ES MUY BUENA
// const griger = {
//     name: 'griger ratia',
//     userName: 'grigerlord',
//     points: 9329,
//     socialMedia: {
//         twitter: '@griger',
//         instagram: '@grigerluis',
//         facebook: undefined
//     },
//     cursosAprobados: [
//         'Curso de HTML',
//         'Curso de CSS',
//         'Curso de JS'
//     ],
//     escuelasDeAprendizaje: [
//         {
//             name: 'Escuela de Desarrollo Web',
//             cursos: [
//                 'Curso de HTML',
//                 'Curso de CSS',
//                 'Curso de JS',
//                 'Curso de React.js'
//             ]
//         },

//         {
//             name: 'Escuela de JavaScript',
//             cursos: [
//                 'Curso de Cosures',
//                 'Curso de Scopes',
//                 'Curso de Asincronismo',
//                 'Curso Prof. JS'
//             ]
//         }
//     ]
// }



// const frank = {
//     name: 'frnk albert',
//     userName: 'Frank Amundaray',
//     points: 7000,
//     socialMedia: {
//         twitter: '@frank',
//         instagram: '@frankalbert',
//         facebook: undefined
//     },
//     cursosAprobados: [
//         'Curso de Administración del tiempo',
//         'Curso de Administración del tiempo',
//         'Curso de Págame Mucho'
//     ],
//     escuelasDeAprendizaje: [
//         {
//             name: 'Escuela de Marketing Digital',
//             cursos: [
//                 'Curso de Administración del tiempo',
//                 'Curso de Administración del tiempo',
//                 'Curso de Planificar Mucho',
//                 'Curso de Diseño Gráfico'
//             ]
//         },

//         {
//             name: 'Escuela de Social Media',
//             cursos: [
//                 'Curso de Echar Carro',
//                 'Curso de Mandar a Hacer',
//                 'Curso de Págame Mucho',
//                 'Curso de Renuncio No Puedo'
//             ]
//         }
//     ]
// }



function videoPlay(id) {
    const urlSecreta = "https://secreto" + id
    console.log('Se esta reproduciendo desde la URL' + urlSecreta)
}

function videoStop(id) {
    const urlSecreta = "https://secreto" + id
    console.log('Pausamo la URL' + urlSecreta)
}



export class PlatziClase{
    constructor({
        name,
        videoID,
    }) {
        this.name = name
        this.videoID = videoID
    }

    reproducir(){
        videoPlay(this.videoID)
    }
    pausar(){
        videoStop(this.videoID)
    }
}




















//CLASES____________________________________________





class Clase{
    constructor({
        name,
        duracion,
    }) {
        this.name = name
        this.duracion = duracion
    }
}

const queEsHTML = new Clase({
    name: 'Que es HTML',
    duracion: 3 + ' Horas',
})



























//CURSOS_____________________________________________
class Curso {
    constructor({
        name,
        listaDeClases = []
    }) {
        this._name = name
        this.listaDeClases = listaDeClases
    }

    get name() {
        return this._name
    }
    set name(nuevoName){
        if (nuevoName != this._name) {
            console.error('Imposible Reasignar')
        }else{
            this._name = nuevoName
        }
    }

}

const cursoAdministracionDelTiempo = new Curso({
    name: 'Curso de Administración del tiempo',
})
const cursoEscribirMucho = new Curso({
    name: 'Curso de EscrinirMucho',
})
const cursoPlanificarMucho = new Curso({
    name: 'Curso de Planificar Mucho',
})
const cursoRenuncioNoPuedo = new Curso({
    name: 'Curso de Renuncio No Puedo',
})
const cursoEcharCarro = new Curso({
    name: 'Curso de Echar Carro',
})
const cursoMandaHacer = new Curso({
    name: 'Curso de Mandar A Hacer',
})
const cursoPagameMucho = new Curso({
    name: 'Curso de Pagame Mucho',
})
const cursoHTML = new Curso({
    name: 'Curso de HTML',
})
const cursoCSS = new Curso({
    name: 'Curso de CSS',
})
const cursoJS = new Curso({
    name: 'Curso de JS',
})
const cursoPHP = new Curso({
    name: 'Curso de PHP',
})
const cursoClosureScope = new Curso({
    name: 'Curso de Closure y Scope',
})
const cursoAsincronismo = new Curso({
    name: 'Curso de Asincronismo',
})
const cursoECMAScript = new Curso({
    name: 'Curso de ECMAScript',
})
const cursoJavascriptProfesional = new Curso({
    name: 'Curso de Javascript Profesional',
})











//RUTAS DE APRENDIZAJE___________________________________

class RutasDeAprendizaje{
    constructor({
        name,
        listaDeCursos = []
    }){
        this.name = name
        this.listaDeCursos = listaDeCursos
    }
}

const escuelaMarketingDigital = new RutasDeAprendizaje({
    name: 'Escuela de Marketing Digital',
    listaDeCursos: [
        cursoAdministracionDelTiempo,
        cursoEscribirMucho,
        cursoPlanificarMucho,
        cursoPagameMucho,
        cursoRenuncioNoPuedo
    ]
})

const escuelaSocialMedia = new RutasDeAprendizaje({
    name: 'Escuela de Social Media',
    listaDeCursos: [
        cursoEcharCarro,
        cursoMandaHacer,
        cursoPagameMucho,
        cursoRenuncioNoPuedo
    ]
})

const escuelaDesarrolloWeb = new RutasDeAprendizaje({
    name: 'Escuela de Desarrollo Web',
    listaDeCursos: [
        cursoHTML,
        cursoCSS,
        cursoJS,
        cursoPHP
    ]
})

const escuelaJavascript = new RutasDeAprendizaje({
    name: 'Escuela de Javascript',
    listaDeCursos: [
        cursoClosureScope,
        cursoAsincronismo,
        cursoECMAScript,
        cursoJavascriptProfesional
    ]
})





















//ESTUDIANTES________________________________________________

class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        cursosAprobados = [],
        rutasDeAprendizaje = []
    }) {
        this.name = name
        this.email = email
        this.username = username
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.cursosAprobados = cursosAprobados
        this.rutasDeAprendizaje = rutasDeAprendizaje
    }
}

const griger = new Student({
    neme: 'Griger Ratia',
    username: 'Grigerlord',
    email: 'grigerratia@gmail.com',
    instagram: '@grigerratia',
    rutasDeAprendizaje: [
        escuelaDesarrolloWeb,
        escuelaJavascript
    ]
})

const frank = new Student({
    neme: 'Frank Amundaray',
    username: 'Sir. Frankenstein',
    email: 'frank_albert@gmail.com',
    twitter: '@frank_amundaray',
    rutasDeAprendizaje: [
        escuelaMarketingDigital,
        escuelaSocialMedia
    ]
})


console.table(frank)
console.table(griger)

