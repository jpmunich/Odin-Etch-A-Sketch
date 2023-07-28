 export default function createHeader() {
    const header = document.createElement('header');
    const headerText = document.createElement('h1');

    headerText.innerText = "Odin Etch-A-Sketch";

    header.appendChild(headerText);
    document.body.appendChild(header);
}