radio.setGroup(194)
basic.forever(function () {
    if (input.rotation(Rotation.Pitch) >= 45) {
        radio.sendNumber(2)
    } else if (input.rotation(Rotation.Pitch) <= -45) {
        radio.sendNumber(1)
    } else if (input.rotation(Rotation.Roll) >= 45) {
        radio.sendNumber(4)
    } else if (input.rotation(Rotation.Roll) <= -45) {
        radio.sendNumber(3)
    } else {
        radio.sendNumber(0)
    }
})
