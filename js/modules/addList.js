import { addError } from "./addError.js";
import { createList } from "./createList.js";
import { deleteElem } from "./deleteElem.js";

export function addList(repos) {
    const list = document.querySelector('.repo-list');
    const error = document.querySelector('.error');

    if (list) { 
        deleteElem(list); // удаляем существующий список
    }
    if (error) { 
        deleteElem(error); // удаляем существующие ошибки
    }

    if (typeof(repos) == 'string') { // если пришла строка - выводим ошибку
        addError(repos);
    }
    else if (typeof(repos) == 'object') {
        for (let repo of repos.items) { // добавляем новый список
            let li = createList();
            let repoName = li.querySelector('.repo-name');
            repoName.innerHTML = "<span>name:</span> " + repo.name;
            repoName.setAttribute('href', repo.html_url);
    
            li.querySelector('.repo-user').innerHTML = "<span>user:</span> " + repo.owner.login;
            li.querySelector('.repo-description').innerHTML = "<span>description:</span> " + repo.description;
            li.querySelector('.repo-lang').innerHTML = "<span>language:</span> " + repo.language;
        }
    }
}