import { searchForm } from "./createList.js";

export function addError(text) {
    const span = document.createElement('span');
    span.classList.add('error');
    span.innerHTML = text;

    searchForm.after(span);
}