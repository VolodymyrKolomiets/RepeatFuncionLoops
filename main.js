
//Crea una función multiplicacion que espere dos parámetros a y b y que devuelva la multiplicación de los mismos.

function multiply(a, b) {
    return a * b
}
console.log(multiply(15, 3))

//Crea un programa que pida al usuario su edad y, dependiendo de la misma, muestre por consola uno de los siguientes mensajes: "Eres menor de edad", "Eres mayor de edad" o "Eres un adulto mayor". Debes utilizar un condicional if/else.

function edges(edge) {
    if (typeof edge === "number") {
        if (edge < 18) {
            return "Eres menor de edad"
        } else if (edge >= 18 && edge <= 65) {
            return "Eres mayor de edad"
        } else {
            return "Eres un adulto mayor"
        }
    }
}

console.log(edges(33))

//Crea la función sumaTresNumeros que reciba tres números como argumento y devuelva la suma de los mismos. Si alguno de los argumentos no es un número, debe devolver el string "Debo ser ejecutada con números".

function addThreeNum(a, b, c) {
    if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
        return a + b + c
    } else {
        return "Debo ser ejecutada con números"
    }
}
console.log(addThreeNum(15, "d", 17))



//Crea la función primerosTresCaracteres que reciba un string como argumento y devuelva los tres primeros caracteres del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de tres caracteres, debe devolver el string completo.

function threeFirstCharters(strng) {

    if (typeof strng === "string" && strng.length < 3) {
        return strng
    } else if (typeof strng === "string" && strng.length >= 3) {
        return strng.substring(0, 3)
    } else {
        return "Debo ser ejecutada con un string"
    }


}

console.log(threeFirstCharters('hgasjfhgsfj'))

//Crea la función getPrecioMostrarIVA para que devuelva una cadena de texto con formato precio con dos decimales y con el IVA ya incluido. Para 2 debería devolver 2.42 € (suponiendo un IVA del 21%). Si la función no recibe un número debería devolver devolver 'no es un formato correcto'.


function getIvaPrice(price) {
    if (typeof price === 'number') {
        let x = (price / 100) * 21 + price
        return x.toFixed(2) + '€'
    } else {
        return 'no es un formato correcto'
    }

}

console.log(getIvaPrice(8))


//Crea la función penultimoCaracter que reciba un string como argumento y devuelva el penúltimo carácter del mismo. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string". Si el string tiene menos de dos caracteres, debe devolver el primer carácter.

function penumCaract(caract) {
    if (typeof caract === 'string') {
        if (caract.length > 2) {
            return caract.slice(-2, -1)
        } else {
            return caract.substring(caract.length[0])
        }
    } else {
        return "Debo ser ejecutada con un string"
    }

}
console.log(penumCaract('jsfdfsfgd'))

//Crea la función cuentaVocales que reciba un string como argumento y devuelva el número de vocales que contiene. Si el argumento no es un string, debe devolver el string "Debo ser ejecutada con un string".

function countVocals(word) {

    if (typeof word == 'string') {
        const vocales = "aáeéiíoóuú"
        let numVocals = 0
        for (let vocal of word) {
            if (vocales.includes(vocal.toLowerCase())) {
                numVocals++
            }
        }
        return numVocals
    } else {
        return "Debo ser ejecutada con un string"
    }
}

console.log(countVocals('Hola como estas'))


//Crea la función potencia que acepte como argumento dos números y devuelva el resultado de elevar el primer número a la potencia del segundo número.

function potention(x, y) {
    return x ** y
}
console.log(potention(4, 4))


/*Investiga que es el DOM js, y haz lo siguiente:
Crea un botón en tu archivo HTML
Llama a ese botón en tu archivo js y muestralo por consola
Crea una función que cuando se ejecute muestre un alert que diga “Hola”
Investiga qué es addEventListener. Implementa que cuando el usuario haga “click” en el botón se ejecute la función que habías creado.*/



let butt = document.getElementById('but')

const clkk = () => {
    alert('Hola')
}

butt.addEventListener('click', clkk)


//Crea un bucle que muestre por consola los números del 2 al 10 inclusive multiplicados por 3. Utiliza el bucle for.

for (i = 2; i <= 10; i++) {
    b = i * 3
    console.log(b)
}

//Crea un bucle que muestre por consola la siguiente secuencia de números: 1, 2, 4, 7, 11, 16, 22. Utiliza el bucle for.

n = 1

for (i = 0; i <= 6; i++) {
    n += i
    console.log(n)
}

//Utiliza la siguiente array para resolver los próximos ejercicios:
let estudiantes = [
    {
        nombre: "Juan",
        edad: 20,
        calificacion: 7.5,
    },
    {
        nombre: "Maria",
        edad: 22,
        calificacion: 9.0,
    },
    {
        nombre: "Pedro",
        edad: 19,
        calificacion: 8.0,
    },
    {
        nombre: "Luis",
        edad: 21,
        calificacion: 6.5,
    },
    {
        nombre: "Ana",
        edad: 18,
        calificacion: 8.5,
    },
    {
        nombre: "Sofia",
        edad: 20,
        calificacion: 7.0,
    },
];

//Crea un bucle que muestre por consola los nombres de todos los estudiantes de la array.Utiliza el bucle for of.



for (const itr of estudiantes) {
    
    console.log(itr.nombre)
}

//Crea un bucle que muestre por consola la edad de todos los estudiantes mayores de 20 años.Utiliza el bucle for of.

for (const itr of estudiantes) {
    if (itr.edad > 20) {
    n = itr
    console.log(n.edad)
    }
}

//Crea un bucle que muestre por consola el promedio de las calificaciones de los estudiantes.Utiliza el bucle for of y la propiedad length para calcular el promedio.

let claa = 0

for (const ite of estudiantes) {
    claa += ite.calificacion
}
claa = claa/estudiantes.length

console.log(claa)

///////////////////////////////////////

let cl = 0

function score(a) {
    for (const ite of estudiantes) {
        cl += ite.calificacion
    }
    return cl = cl/estudiantes.length
}

console.log(score())
