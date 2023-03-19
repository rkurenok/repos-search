import { addList } from "./addList.js";

async function getRepos(e) {
    e = e || window.event;
    let result;

    if (e.type == 'keydown' && e.key != 'Enter') return; // исключаем другие нажатия, кроме enter

    e.preventDefault();
    const inputValue = Object.fromEntries(new FormData(e.target.closest('.search-form')));

    if (inputValue.searchInput.trim() == "") {
        result = "Пустая строка";
        addList(result);
        return;
    }

    const response = await fetch(new URL(`https://api.github.com/search/repositories?q=${inputValue.searchInput}&per_page=10`));

    if (!response.ok) {
        result = 'Ошибка ' + response.status;
    }
    else {
        result = await response.json();

        if (result.items.length == 0) {
            result = "Ничего не найдено";
        }
    }

    addList(result);
}

export function addEventForm() {
    const form = document.querySelector('.search-form');

    ["submit", "keydown"].forEach((event) => {form.addEventListener(event, e => getRepos(e))})
}