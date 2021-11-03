hodnota = 1
y = 0

def kostka():
    global hodnota, y
    if hodnota == 1:
        cislo = randint(1, 6)
    else:
        cislo = randint(1, 10)
    if y == 1:
        if input.is_gesture(Gesture.SHAKE):
            y = 0
            if cislo == 1:
                basic.show_leds("""
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                """)
            elif cislo == 2:
                basic.show_leds("""
                . . . . .
                . # . . .
                . . . . .
                . . . # .
                . . . . .
                """)
            elif cislo == 3:
                basic.show_leds("""
                . . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . .
                """)
            elif cislo == 4:
                basic.show_leds("""
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                """)
            elif cislo == 5:
                basic.show_leds("""
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
                """)
            elif cislo == 6:
                basic.show_leds("""
                . # . # .
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                """)
            elif cislo == 7:
                basic.show_leds("""
                . # . # .
                . . . . .
                . # # # .
                . . . . .
                . # . # .
                """)
            elif cislo == 8:
                basic.show_leds("""
                # . . . #
                . # . # .
                . . . . .
                . # . # .
                # . . . #
                """)
            elif cislo == 9:
                basic.show_leds("""
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                """)
            elif cislo == 10:
                basic.show_leds("""
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                . . . . .
                """)
            for i in range(cislo):
                music.play_tone(Note.D, music.beat(3))
basic.forever(kostka)

def strany():
    global hodnota
    if input.button_is_pressed(Button.B):
        hodnota *= -1
        basic.show_string("strany")
        if hodnota == 1:
            basic.show_number(6)
        else:
            basic.show_number(10)
basic.forever(strany)

def lock():
    global y
    if input.button_is_pressed(Button.A):
        y = 1
basic.forever(lock)