let hodnota = 1
let y = 0
basic.forever(function kostka() {
    let cislo: number;
    
    if (hodnota == 1) {
        cislo = randint(1, 6)
    } else {
        cislo = randint(1, 10)
    }
    
    if (y == 1) {
        if (input.isGesture(Gesture.Shake)) {
            y = 0
            if (cislo == 1) {
                basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            } else if (cislo == 2) {
                basic.showLeds(`
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                `)
            } else if (cislo == 3) {
                basic.showLeds(`
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . .
                `)
            } else if (cislo == 4) {
                basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                `)
            } else if (cislo == 5) {
                basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                `)
            } else if (cislo == 6) {
                basic.showLeds(`
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                `)
            } else if (cislo == 7) {
                basic.showLeds(`
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                . # . # .
                `)
            } else if (cislo == 8) {
                basic.showLeds(`
                # . . . #
                . # . # .
                . . . . .
                . # . # .
                # . . . #
                `)
            } else if (cislo == 9) {
                basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            } else if (cislo == 10) {
                basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                . . . . .
                `)
            }
            
            for (let i = 0; i < cislo; i++) {
                music.playTone(Note.D, music.beat(3))
            }
        }
        
    }
    
})
basic.forever(function strany() {
    
    if (input.buttonIsPressed(Button.B)) {
        hodnota *= -1
        basic.showString("strany")
        if (hodnota == 1) {
            basic.showNumber(6)
        } else {
            basic.showNumber(10)
        }
        
    }
    
})
basic.forever(function lock() {
    
    if (input.buttonIsPressed(Button.A)) {
        y = 1
    }
    
})
