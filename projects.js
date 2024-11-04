let soloEntryList = document.querySelector("#solo-project-entries")
let teamEntryList = document.querySelector("#team-project-entries")

const appendEntry = (entryList, title, description, imgLink, altText) => {
    let entry = document.createElement("div")
    entry.className = "entry"

    let entryTitle = document.createElement("h3")
    entryTitle.className = "entry-title"
    entryTitle.textContent = title

    let entryContentDiv = document.createElement("div")
    entryContentDiv.className = "entry-content"

    let imageDiv = document.createElement("div")
    imageDiv.className = "entry-image-container"

    let entryImage = document.createElement("img")
    entryImage.className = "entry-image"
    entryImage.src = imgLink
    entryImage.alt = altText

    let descDiv = document.createElement("div")
    descDiv.className = "entry-desc-container"

    let entryDescription = document.createElement("div")
    entryDescription.className = "entry-description"
    entryDescription.innerHTML = description

    // entry.onmousedown = (event) => {
    //     if (event.button === 1) {
    //         return false
    //     }
    // }

    // entry.addEventListener("mouseup", (event) => {
    //     if (event.button === 0) {
    //         window.location.href = destinationLink
    //     } 
    //     else if (event.button === 1) {
    //         window.open(destinationLink, '_blank')
    //         return false
    //     }
        
    //     event.preventDefault()
    // })
    
    imageDiv.appendChild(entryImage)
    descDiv.appendChild(entryDescription)

    entryContentDiv.appendChild(descDiv)
    entryContentDiv.appendChild(imageDiv)

    entry.appendChild(entryTitle)
    entry.appendChild(entryContentDiv)
    entryList.appendChild(entry)
}

appendEntry(
    teamEntryList,
    "G-PIES",
    `
    <p>
        GPU-Parallelized Irradiation Environment Simulator (G-PIES) was the main product of the first 6 months of my senior 
        capstone project at Oregon State University. It was made with 12 other people including a material science advisor,
        and my main job was converting our mathematical models into code that could be simulated.
    </p>
    <p>
        Radiation introduces microscopic defects into materials that are exposed to it. These defects evolve over time, and
        simulating this evolution are an open problem in materials science. The goal of the project was to attempt 
        using GPU acceleration to make an existing simulation model fast enough to be viable.
    </p>
    <p>
        It sounded like a good plan at the beginning, but we eventually realized that the instability of the equations that
        govern radiation degradation, at least in all the models we looked at, could not be addressed with any amount of GPU
        acceleration.
    </p>
    <p>
        Our simulation was written in C++ and used CUDA to compute a single timestep about 7x faster than with just the CPU. 
        However, the real bottleneck was the number of timesteps we had to run, which the GPU could not help to reduce. The remainder 
        of the project was spent exploring numerical methods and building tools to help the next  generation of students who work on this problem.
    </p>
    `,
    "assets/gpies.png",
    "G-PIES"
)

appendEntry(
    teamEntryList,
    "Steam News App",
    `
    <p>
        This was the final project of my Mobile App Development class at OSU, which I worked on with 3 of
        my classmates.
    </p>
    <p>
        Our goal going in was to make an Android app that's useful enough that we might be willing to 
        keep it on our phones after the project ended.
    </p>
    <p>
        You log into Steam, and you're given a list of games you own on your "Profile" page. You can
        mark any number of these games as "starred", and any recent news articles for starred games
        will appear on the "News" page.
    </p>
    <p>
        We used JetpackCompose to create the UI, which I found was very similar to React.
    </p>
    `,
    "assets/steamnews.png",
    "Steam News App",
    "",
)

appendEntry(
    teamEntryList,
    "BattleCasters",
    `
    <p>
        This is a turn-based online multiplayer fighting game. When you enter the game, you're
        placed into a match with another player where you have to attack your opponent with a
        variety of spells represented by cards.
    </p>
    <p>
        I interned with the BattleCasters team for about 2 years. I worked across the stack, but
        the areas I would frequently revisit were the backend game logic, the UI, and the 
        client graphical effects.
    </p>
    `,
    "assets/battlecasters.png",
    "BattleCasters",
    "",
)

appendEntry(
    teamEntryList,
    "Solar System Simulation",
    `
    <p>
        A realistic solar system orbital simulation.
    </p>
    <p>
        The original purpose of this was just to check what would happen if a black hole
        wandered into the solar system. This was the final project of a physics class. 
        The rough answer is, the black hole would likely have to be unusually big and unusually slow to 
        have a noticeable effect.
    </p>
    <p>
        The orbits of the planets and their moons are queried at runtime from the JPL Horizons API.
        The simulation itself is surprisingly stable under large time steps considering we just used
        the Euler method.
    </p>
    <a href="https://github.com/DylanSOldham/Solar-Sim">Github Repository</a>

    `,
    "assets/solarsim.png",
    "Solar System Simulation",
)

// appendEntry(
//     soloEntryList,
//     "6502 Emulator",
//     "assets/6502emu.png",
//     "6502 Emulator",
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

appendEntry(
    soloEntryList,
    "PDE Solver Generator",
    `
    <p>
        A PDE solver I created to help with my senior capstone project.
    </p>
    <p>
        You write out the equations in a custom syntax designed to be accessible
        to people with a maths background. It gets translated into C++ code which is
        built into an executable solver.
    </p>
    <a href="https://github.com/DylanSOldham/SolverGenerator">Github Repository</a>
    `,
    "assets/pdesolver.png",
    "PDE Solver Generator",
)

appendEntry(
    soloEntryList,
    "Online Fighting Game Prototype",
    `
    <p>
        A real-time online multiplayer fighting game prototype.
    </p> 
    <p>
        Each player has only a few actions they can take. They can move, dash, or attack.
        You attack other players until their health is reduced to 0 and they are eliminated.
        If your health falls to 0, you will be eliminated and respawn a short time later.
    </p>
    <p>
        I made this to try and understand the challenges of syncronizing a 
        game's state between clients and a server. I took the simplest approach I could
        think of, which was to treat each client as a dumb display that does nothing more
        than send player input to the server and displays the server response to the player.
        This adds some input latency, but it makes it simple to decouble the network code
        from the game logic.
    </p>
    
    <a href="https://github.com/DylanSOldham/multiplayer-demo">Github Repository</a>
    `,
    "assets/onlinemultiplayerdemo.png",
    "Online Multiplayer Fighting Game Demo",
    "https://github.com/DylanSOldham/multiplayer-demo",
)

// appendEntry(
//     soloEntryList,
//     "CryLang Programming Language",
//     "assets/placeholder.png",
//     "CryLang",
//     "",
// )

// appendEntry(
//     soloEntryList,
//     "TETRIS Clone",
//     `
//     <p>
//     </p>
//     <a href="https://dylansoldham.github.io/js-tetris">Play Game</a>
//     `,
//     "assets/tetris.png",
//     "Tetris",
//     "https://dylansoldham.github.io/js-tetris"
// )

// appendEntry(
//     soloEntryList,
//     "Conway's Game of Life",
//     "assets/conway.png",
//     "Conway's Game of Life",
//     "https://dylansoldham.github.io/Conways-Game-Of-Life/client/index.html"
// )