let entryList = document.querySelector("#prototype-entries");

const appendEntry = (title, imgLink, altText, destinationLink) => {
    let entry = document.createElement("div");
    entry.className = "entry";

    let entryTitle = document.createElement("h3");
    entryTitle.className = "entry-title";
    entryTitle.textContent = title;

    let entryImage = document.createElement("img");
    entryImage.className = "entry-image";
    entryImage.src = imgLink;
    entryImage.alt = altText;

    entry.onmousedown = (event) => {
        if (event.button === 1) {
            return false;
        }
    }

    entry.addEventListener("mouseup", (event) => {
        if (event.button === 0) {
            window.location.href = destinationLink;
        } 
        else if (event.button === 1) {
            window.open(destinationLink, '_blank');
            return false;
        }
        
        event.preventDefault();
    });

    entry.appendChild(entryTitle);
    entry.appendChild(entryImage);
    entryList.appendChild(entry);

    console.log(entryList);
}

appendEntry(
    "TETRIS Clone",
    "assets/tetris.png",
    "Tetris",
    "https://dylansoldham.github.io/js-tetris"
);

appendEntry(
    "Conway's Game of Life",
    "assets/conway.png",
    "Conway's Game of Life",
    "https://dylansoldham.github.io/Conways-Game-Of-Life/client/index.html"
);

appendEntry(
    "Chess With More Dimensions",
    "assets/chesswithmoredimensions.png",
    "A chessboard with some extra board squares floating around. All squares have various colored lines connecting them.",
    "https://dylansoldham.github.io/ChessButWithMoreDimensions/"
);