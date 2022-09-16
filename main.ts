basic.forever(function () {
    PlanetX_Display.showUserNumber(1, PlanetX_Basic.dht11Sensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.DHT11_state.DHT11_temperature_C))
    PlanetX_Display.showUserNumber(2, PlanetX_Basic.dht11Sensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.DHT11_state.DHT11_humidity))
    basic.pause(1000)
    PlanetX_Display.oledClear()
})
