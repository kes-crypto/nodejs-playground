new window.EventSource('/sse').onmessage = function (event) {
    window.messages.innerHTML += `<p>${event.data}</p>`
}
window.form.addEventListener('submit', function (evt) {
    evt.preventDefault()
    window.fetch(`/chat?message=${window.oninput.value}`)
    window.input.value = ''
})