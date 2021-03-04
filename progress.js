function addArr() {

    myChapters.forEach((item) => {

        let newChapter = document.createElement('li');
        newChapter.innerText = item;

        chapterBlock.append(newChapter);
    });
} /* повторяющаяся функция */

let myChapters = [
    'Глава 1',
    'Глава 2',
    'Глава 3',
];

let chapterBlock = document.querySelector('.myChapters');

addArr();

const buttonAddChapter = document.querySelector('.addChapter');

buttonAddChapter.addEventListener('click', addChapter);

function addChapter () {
    chapterBlock.innerHTML = null;

    let textChapter = document.querySelector('.inputText').value;

    myChapters.push(textChapter);

    addArr();

    document.querySelector('.inputText').value = '';
}

const buttonCleanText = document.querySelector('.cleanText');

buttonCleanText.addEventListener('click', cleanText);

function cleanText() {
    document.querySelector('.inputText').value = '';
}

