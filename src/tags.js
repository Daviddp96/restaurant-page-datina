function createHeading(headingLevel,text) {
    if (headingLevel > 6 || headingLevel < 1 || !Number.isInteger(headingLevel)) {
        console.log('Invalid heading level');
        return;
    }
    const heading = document.createElement(`h${headingLevel}`);
    heading.textContent = text;
    return heading;
}

function createParagraph(text) {
    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = text;
    return paragraphElement;
}

function createListItem(text) {
    const listItemElement = document.createElement('li');
    listItemElement.innerHTML = text;
    return listItemElement;
}

export { createHeading, createParagraph, createListItem };