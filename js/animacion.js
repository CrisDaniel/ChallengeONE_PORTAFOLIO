
new TypeIt("#presentacion_nombre", {
    speed: 50,
    waitUntilVisible: true,
  })
    .type("Hpla,", { delay: 300 })
    .move(-3)
    .delete(1)
    .type("o")
    .move(null, { to: "END" })
    .type(" mi nomm")
    .pause(300)
    .delete(2)
    .type("mbre es VRIST")
    .move(-4)
    .delete(1)
    .type("C")
    .move(null, { to: "END" })
    .type("IAN DANIEL")
    /*.pause(500)
    .break({ delay: 500 })
    .break({ delay: 500 })
    .type("<em>- Will Rogers</em>")*/
    .go();