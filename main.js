

           //https://api.dictionaryapi.dev/api/v2/entries/en/


const findBtn = document.getElementById('findBtn');

async function dictionary() {
    
    let word = document.getElementById('targetWord').value;

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    
    
    const defText = document.getElementById('definition');

    defText.innerHTML = word;

    

    const response = await fetch(url);
    const data = await response.json();
    console.log(data[0].meanings[0].definitions[0].definition);
    try{
        defText.innerHTML = data[0].meanings[0].definitions[0].definition;
    }
    catch{
        console.log('error..')
    }
}


 findBtn.addEventListener('click', dictionary);

