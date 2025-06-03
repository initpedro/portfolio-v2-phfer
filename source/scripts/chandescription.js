export function hoverChangeDescription(nameCard, text) {
  const changeDescription = document.querySelector(".changeDescription")
  const element = document.querySelector(nameCard)

  if (!changeDescription || !element) return

  let ativo = false

  element.addEventListener("click", () => {
    if (!ativo) {
      changeDescription.innerHTML = text
      ativo = true
    } else {
      changeDescription.innerHTML = `*clique nos botões para visualizar*`
      ativo = false
    }
  })
}
