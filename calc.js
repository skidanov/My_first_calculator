let a = '' //first number
let b = '' //second number
let sing = '' //operation sing
let finish = false

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const actions = ['-', '+', 'X', '/']

//Screen
const out = document.querySelector('.calc-screen p')

function clearAll() {
    a = '' //first nuber and result
    b = '' //second number
    sing = '' //sing
    finish = false
    out.textContent = 0
}

document.querySelector('.ac').onclick = clearAll

document.querySelector('.buttons').onclick = (event) => {
    //нажата кнопка
    if (!event.target.classList.contains('btn')) return
    //нажата кнопка AC
    if (event.target.classList.contains('ac')) return

    out.textContent = ''
    //получаю нажатую кнопку
    const key = event.target.textContent

    //усли нажата кнопка 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sing === '') {
            a += key
            out.textContent = a
        } else if (a !== '' && b !== '' && finish) {
            b = key
            finish = false
            out.textContent = b
        } else {
            b += key
            out.textContent = b
            console.log(b)
        }
    }

    //усли нажата клавиша + - * /
    if (actions.includes(key)) {
        sing = key
        out.textContent = sing
        console.log(a, b, sing)
        return
    }

    //нажата =
    if (key === '=') {
        if (b === '') b = a
        switch (sing) {
            case '+':
                a = +a + +b
                break
            case '-':
                a -= b
                break
            case 'X':
                a *= b
                break
            case '/':
                if (b === '0') {
                    clearAll()
                    return
                }
                a /= b
                break
        }
        finish = true
        out.textContent = a
    }
}
