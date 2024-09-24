let soloEntryList = document.querySelector("#solo-project-entries")
let teamEntryList = document.querySelector("#team-project-entries")

const appendEntry = (entryList, title, imgLink, altText, destinationLink) => {
    let entry = document.createElement("div")
    entry.className = "entry"

    let entryTitle = document.createElement("h3")
    entryTitle.className = "entry-title"
    entryTitle.textContent = title

    let entryImage = document.createElement("img")
    entryImage.className = "entry-image"
    entryImage.src = imgLink
    entryImage.alt = altText

    entry.onmousedown = (event) => {
        if (event.button === 1) {
            return false
        }
    }

    entry.addEventListener("mouseup", (event) => {
        if (event.button === 0) {
            window.location.href = destinationLink
        } 
        else if (event.button === 1) {
            window.open(destinationLink, '_blank')
            return false
        }
        
        event.preventDefault()
    })

    entry.appendChild(entryTitle)
    entry.appendChild(entryImage)
    entryList.appendChild(entry)
}

// appendEntry(
//     teamEntryList,
//     "G-PIES",
//     "assets/gpies.png",
//     "G-PIES",
//     "",
// )

// appendEntry(
//     teamEntryList,
//     "Steam News App",
//     "assets/steamnews.png",
//     "Steam News App",
//     "",
// )

// appendEntry(
//     teamEntryList,
//     "BattleCasters",
//     "assets/battlecasters.png",
//     "BattleCasters",
//     "",
// )

appendEntry(
    teamEntryList,
    "Solar System Simulation",
    "assets/solarsim.png",
    "Solar System Simulation",
    "https://github.com/DylanSOldham/Solar-Sim",
)

// appendEntry(
//     soloEntryList,
//     "NES Emulator",
//     "assets/placeholder.png",
//     "NES Emulator",
//     "",
// )

// appendEntry(
//     soloEntryList,
//     "Numerical Weather Simulation",
//     "assets/numericalweather.png",
//     "Numerical Weather Simulation",
//     "",
// )

// appendEntry(
//     soloEntryList,
//     "Famine Application Framework",
//     "assets/famine.jpg",
//     "Famine Application Framework",
//     "",
// )

// appendEntry(
//     soloEntryList,
//     "PDE Solver Generator",
//     "assets/pdesolver.png",
//     "PDE Solver Generator",
//     "",
// )

// appendEntry(
//     soloEntryList,
//     "Online Fighting Game Demo",
//     "assets/onlinemultiplayerdemo.png",
//     "Online Multiplayer Fighting Game Demo",
//     "",
// )

// appendEntry(
//     soloEntryList,
//     "CryLang Programming Language",
//     "assets/placeholder.png",
//     "CryLang",
//     "",
// )

appendEntry(
    soloEntryList,
    "TETRIS Clone",
    "assets/tetris.png",
    "Tetris",
    "https://dylansoldham.github.io/js-tetris"
)

appendEntry(
    soloEntryList,
    "Conway's Game of Life",
    "assets/conway.png",
    "Conway's Game of Life",
    "https://dylansoldham.github.io/Conways-Game-Of-Life/client/index.html"
)