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
class Comentario{
    constructor({
        contenido,
        nombreEstudiante,
        cargoEstudiante = 'estudiante'
    }){
        this.contenido = contenido
        this.nombreEstudiante = nombreEstudiante
        this.cargoEstudiante = cargoEstudiante
        this.likes = 0
    }

    publicar(){
        console.log(this.nombreEstudiante + ' (' + this.cargoEstudiante + ')')
        console.log(this.likes + ' likes')
        console.log(this.contenido)
    }
}




















function videoPlay(id) {
    const urlSecreta = "https://secreto" + id
    console.log('Se esta reproduciendo desde la URL' + urlSecreta)
}

function videoStop(id) {
    const urlSecreta = "https://secreto" + id
    console.log('Pausamo la URL' + urlSecreta)
}



class PlatziClase{
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
        listaDeClases = [],
        esGratis = false,
        lang = 'Spanish'
    }) {
        this._name = name
        this.listaDeClases = listaDeClases
        this.esGratis = esGratis
        this.lang = lang
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
    esGratis: true,
    lang: 'English'
})
const cursoEscribirMucho = new Curso({
    name: 'Curso de Escribir Mucho',
    esGratis: false,
    lang: 'English'
})
const cursoPlanificarMucho = new Curso({
    name: 'Curso de Planificar Mucho',
    esGratis: true,
    lang: 'English'
})
const cursoRenuncioNoPuedo = new Curso({
    name: 'Curso de Renuncio No Puedo',
    esGratis: false,
    lang: 'Spanish'
})
const cursoEcharCarro = new Curso({
    name: 'Curso de Echar Carro',
    esGratis: true,
    lang: 'Spanish'
})
const cursoMandaHacer = new Curso({
    name: 'Curso de Mandar A Hacer',
    esGratis: true,
    lang: 'Spanish'
})
const cursoPagameMucho = new Curso({
    name: 'Curso de Pagame Mucho',
    esGratis: true,
    lang: 'Spanish'
})
const cursoHTML = new Curso({
    name: 'Curso de HTML',
    esGratis: true,
    lang: 'English'
})
const cursoCSS = new Curso({
    name: 'Curso de CSS',
    esGratis: false,
    lang: 'English'
})
const cursoJS = new Curso({
    name: 'Curso de JS',
    esGratis: false,
    lang: 'English'
})
const cursoPHP = new Curso({
    name: 'Curso de PHP',
    esGratis: false,
    lang: 'English'
})
const cursoClosureScope = new Curso({
    name: 'Curso de Closure y Scope',
    esGratis: false,
    lang: 'English'
})
const cursoAsincronismo = new Curso({
    name: 'Curso de Asincronismo',
    esGratis: false,
    lang: 'Spanish'
})
const cursoECMAScript = new Curso({
    name: 'Curso de ECMAScript',
    esGratis: false,
    lang: 'Spanish'
})
const cursoJavascriptProfesional = new Curso({
    name: 'Curso de Javascript Profesional',
    esGratis: false,
    lang: 'Spanish'
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

    publicarComentario(contenidoDelComentario){
        const comentario = new Comentario({
            contenido: contenidoDelComentario,
            nombreEstudiante: this.name
        })

        comentario.publicar()
    }
}

class EstudianteLibre extends Student{
    constructor(propis) {
        super(propis)
    }

    aprobarCurso(nuevoCurso){
        if(nuevoCurso.esGratis){
            this.cursosAprobados.push(nuevoCurso)
        } else{
            console.warn('Lo sentimos, ' + this.name + ', solo puedes tomar cursos Gratis.')
        }
    }
}

class EstudianteBasico extends Student{
    constructor(propis) {
        super(propis)
    }

    aprobarCurso(nuevoCurso){
        if(nuevoCurso.lang !== 'english'){
            this.cursosAprobados.push(nuevoCurso)
        } else{
            console.warn('Lo sentimos, ' + this.name + ', solo puedes tomar cursos en English.')
        }
    }

}

class EstudianteExperto extends Student{
    constructor(propis) {
        super(propis)
    }

    aprobarCurso(nuevoCurso){
            this.cursosAprobados.push(nuevoCurso)
    }

}

class EstudianteProfesor extends Student{
    constructor(propis) {
        super(propis)
    }

    aprobarCurso(nuevoCurso){
            this.cursosAprobados.push(nuevoCurso)
    }

    publicarComentario(contenidoDelComentario){
        const comentario = new Comentario({
            contenido: contenidoDelComentario,
            nombreEstudiante: this.name,
            cargoEstudiante: 'Profesor'
        })

        comentario.publicar()
    }

}





const griger = new EstudianteExperto({
    name: 'Griger Ratia',
    username: 'Grigerlord',
    email: 'grigerratia@gmail.com',
    instagram: '@grigerratia',
    rutasDeAprendizaje: [
        escuelaDesarrolloWeb,
        escuelaJavascript
    ]
})

const frank = new EstudianteLibre({
    name: 'Frank Amundaray',
    username: 'Sir. Frankenstein',
    email: 'frank_albert@gmail.com',
    twitter: '@frank_amundaray',
    rutasDeAprendizaje: [
        escuelaMarketingDigital,
        escuelaSocialMedia
    ]
})

const cesar = new EstudianteBasico({
    name: 'Cesar Amundaray',
    username: 'Cesareo',
    email: 'cesar_luis@gmail.com',
    twitter: '@cesar_amundaray',
    rutasDeAprendizaje: [
        escuelaMarketingDigital,
        escuelaDesarrolloWeb
    ]
})

const freddy = new EstudianteProfesor({
    name: 'Freddy Vega',
    username: 'Freddier',
    email: 'jhon_freddy@gmail.com',
    facebook: '@freddy_vega',
    rutasDeAprendizaje: [
        escuelaMarketingDigital,
        escuelaDesarrolloWeb,
        escuelaJavascript,
        escuelaSocialMedia
    ],
})


console.table(frank)
console.table(griger)
console.table(cesar)
console.table(freddy)

