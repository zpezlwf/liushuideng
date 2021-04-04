basic.forever(function () {
    for (let b = 0; b <= 4; b++) {
        for (let a = 0; a <= 4; a++) {
            led.plot(a, b)
            basic.pause(500)
        }
    }
    basic.clearScreen()
    basic.pause(1000)
})
