const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
const targetEl = document.getElementById('targetWord');
const findBtn = document.getElementById('findBtn');

async function dictionary() {
    const response = await fetch(url);
    const data = await response.json();
    findBtn.addEventListener('click', function(ev) {
        
    });


    console.log(data);
}