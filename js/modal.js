const modal = window.document.querySelector("#modal-create-music")

const openModal = () => modal.classList.add("active")

const cancelModal = () => modal.classList.remove("active")

const createMusic = () => {
    const musicName = window.document.querySelector("#music-name").value
    const artist = window.document.querySelector("#artist").value
    const album = window.document.querySelector("#album").value
    const stars = window.document.querySelector("#stars").value

    // const url = "https://etec24-3dc8c-default-rtdb.firebaseio.com/musicas.json"

    const url = "https://etec-c8a17-default-rtdb.firebaseio.com/music.json"

    const options = {
        method: "POST",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'content-type': 'application/json;charset=utf-8',
        },
        body: `{
            "faixa": "${musicName}",
            "cantor": "${artist}",
            "estrelas": "${stars}",
            "album": "${album}"
        }`
    }

    fetch(url,options)
        .then(response => response.json())
            .then(data => location.reload())
}