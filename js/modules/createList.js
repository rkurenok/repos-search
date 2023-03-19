export const searchForm = document.querySelector('div.search');

export function createList() {
    let ul = document.querySelector('ul.repo-list');

    if (!ul) {
        ul = document.createElement('ul');
        ul.classList.add('repo-list');
    }

    const liRepo = document.createElement('li');
    liRepo.classList.add('repo');
    ul.append(liRepo);

    const divContent = document.createElement('div');
    divContent.classList.add('repo-content');
    liRepo.append(divContent);

    const repoName = document.createElement('a');
    repoName.classList.add('repo-name');
    repoName.setAttribute("target", "_blank");
    divContent.append(repoName);

    const spanUser = document.createElement('span');
    spanUser.classList.add('repo-user');
    divContent.append(spanUser);

    const spanDesc = document.createElement('span');
    spanDesc.classList.add('repo-description');
    divContent.append(spanDesc);

    const spanLang = document.createElement('span');
    spanLang.classList.add('repo-lang');
    divContent.append(spanLang);

    searchForm.after(ul);

    return liRepo;
}