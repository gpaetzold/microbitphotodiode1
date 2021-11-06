let sensor = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    sensor = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(sensor)
})
