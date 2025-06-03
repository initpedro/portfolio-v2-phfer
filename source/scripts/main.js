import { hoverChangeDescription } from "./chandescription.js"
import { frontComponent } from "./front.js"
import { backComponent } from "./back.js"
import { dadosComponent } from "./dados.js"
import { othersComponent } from "./others.js"

document.addEventListener("DOMContentLoaded", function () {
  const elements = [
    [".others", othersComponent()],
    [".dados", dadosComponent()],
    [".back", backComponent()],
    [".front", frontComponent()],
  ]

  elements.forEach(([selector, text]) => {
    const el = document.querySelector(selector)
    if (el) {
      hoverChangeDescription(selector, text)
    } else {
      console.warn(`Elemento ${selector} não encontrado no DOM.`)
    }
  })
})

const buttons = document.querySelectorAll("#habilidades button")

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active")) // Remove de todos
    button.classList.add("active") // Adiciona no clicado
  })
})

///////// Adicionado

window.addEventListener("load", () => {
  window.scrollTo(0, 0)
  const btnTopo = document.getElementById("btn-voltar-topo")
  document.body.classList.add("loaded")

  // Animação de texto digitando
  new Typed(".multiText", {
    strings: ["[>_]", "},"],
    loop: true,
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 900,
  })

  const secoes = Array.from(document.querySelectorAll("section"))
  let indiceAtual = 0

  function aplicarScrollReveal() {
    const sr = ScrollReveal({
      origin: "top",
      // distance: "50px",
      duration: 1200,
      reset: true, // garante que o efeito reapareça ao trocar ou rolar seção
    })

    sr.reveal(".intervalCardReveal", { interval: 200 })
    sr.reveal(".delaySmallReveal", { delay: 200 })
    sr.reveal(".delayMediumReveal", { delay: 300 })
    sr.reveal(".delayLargeReveal", { delay: 400 })
    sr.reveal(".delayExtraBigReveal", { delay: 600 })
  }

  function mostrarSecao(indice) {
    if (indice < 0 || indice >= secoes.length || indice === indiceAtual) return

    const novaSecao = secoes[indice]

    if (!isMobile) {
      const direcaoEntrada = indice > indiceAtual ? "from-bottom" : "from-top"
      const direcaoSaida = indice > indiceAtual ? "exit-top" : "exit-bottom"
      const secaoAtual = secoes[indiceAtual]

      secoes.forEach((secao) =>
        secao.classList.remove(
          "from-top",
          "from-bottom",
          "exit-top",
          "exit-bottom",
          "animate",
          "ativa"
        )
      )

      secaoAtual.classList.add(direcaoSaida, "animate")
      novaSecao.classList.add(direcaoEntrada, "ativa")

      requestAnimationFrame(() => {
        novaSecao.classList.add("animate")
        aplicarScrollReveal()

        novaSecao.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      })
    } else {
      // No mobile, só faz o scroll e aplica animação à seção clicada
      novaSecao.classList.add("ativa", "animate")

      novaSecao.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }

    indiceAtual = indice

    // Mostrar ou ocultar o botão "voltar ao topo"
    if (indice === 0) {
      btnTopo.classList.remove("show")
    } else {
      btnTopo.classList.add("show")
    }
  }

  function mostrarSecaoPorId(id) {
    const index = secoes.findIndex((secao) => secao.id === id)
    if (index !== -1) {
      mostrarSecao(index)
    }
  }

  // Disponível globalmente
  window.mostrarSecaoPorId = mostrarSecaoPorId

  // Mostra a primeira seção
  mostrarSecao(0)

  // Aplica o ScrollReveal logo ao carregar
  aplicarScrollReveal()

  // Scroll com mouse (somente desktop)
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

  if (isMobile) {
    // Em dispositivos móveis, todas as seções já aparecem ativas e animadas
    secoes.forEach((secao) => {
      secao.classList.add("from-bottom", "ativa", "animate")
    })

    aplicarScrollReveal() // Caso queira manter o efeito de revelação
  } else {
    // Scroll controlado (desktop)
    let scrollTimeout = null

    window.addEventListener("wheel", (e) => {
      if (e.ctrlKey) return
      if (scrollTimeout) return

      const margem = 20
      const secaoAtual = secoes[indiceAtual]
      const secaoTop = secaoAtual.offsetTop
      const secaoHeight = secaoAtual.offsetHeight
      const scrollPos = window.scrollY || window.pageYOffset
      const windowHeight = window.innerHeight
      const baseSecao = secaoTop + secaoHeight

      if (e.deltaY > 0 && indiceAtual < secoes.length - 1) {
        if (scrollPos + windowHeight >= baseSecao - margem) {
          mostrarSecao(indiceAtual + 1)
        }
      } else if (e.deltaY < 0 && indiceAtual > 0) {
        if (scrollPos <= secaoTop + margem) {
          mostrarSecao(indiceAtual - 1)
        }
      }

      scrollTimeout = setTimeout(() => {
        scrollTimeout = null
      }, 800)
    })

    mostrarSecao(0)
  }

  // Configurar altura inicial
  window.addEventListener("load", () => {
    const texto = document.getElementById("texto-habilidades")
    texto.style.height = "0px"
  })

  const carousel = document.getElementById("carousel")
  const track = carousel.querySelector(".carousel-track")

  let isDown = false
  let startX
  let scrollLeft

  carousel.addEventListener("mousedown", (e) => {
    isDown = true
    startX = e.pageX - carousel.offsetLeft
    scrollLeft = track.scrollLeft
  })

  carousel.addEventListener("mouseleave", () => {
    isDown = false
  })

  carousel.addEventListener("mouseup", () => {
    isDown = false
  })

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return
    e.preventDefault()
    const x = e.pageX - carousel.offsetLeft
    const walk = (x - startX) * 1 // Aumente o multiplicador para mais velocidade
    track.scrollLeft = scrollLeft - walk
  })

  // Fecha o menu mobile ao clicar em um item
  document.querySelectorAll(".menu button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const menuToggle = document.getElementById("menu-toggle")
      if (menuToggle) menuToggle.checked = false
    })
  })
  // Pronto
})
