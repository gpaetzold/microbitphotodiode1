let sensor = 0
basic.showIcon(IconNames.Happy)
let tm = TM1637.create(
DigitalPin.P2,
DigitalPin.P3,
7,
4
)
basic.forever(function () {
    sensor = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(sensor)
    tm.on()
    tm.showNumber(sensor)
})
