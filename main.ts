let x = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(x)
})
