basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.ringTone(262)
        basic.pause(1000)
    } else if (input.buttonIsPressed(Button.B)) {
        music.ringTone(349)
        basic.pause(1000)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
