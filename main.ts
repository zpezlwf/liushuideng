basic.forever(function () {
    for (let a = 0; a <= 4; a++) {
        led.plot(a, 0)
        basic.pause(1000)
    }
    basic.clearScreen()
    basic.pause(1000)
})
