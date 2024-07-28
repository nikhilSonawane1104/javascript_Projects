const div = document.createElement('div');

div.className = 'main';

function addlanguage(lang) {
  const list = document.createElement('li');
  list.appendChild(document.createTextNode(lang));
  document.querySelector('.languages').appendChild(list);
}

addlanguage('Java');
addlanguage('golang');
addlanguage('cpp');
