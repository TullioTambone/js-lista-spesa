let spesa = [
    'latte',
    'birra',
    'pane',
    'banana',
    'pancetta',
]


let i = 0;
const mioUl = document.getElementById('sonoIo');

while( i < spesa.length ){

    let listaItem = document.createElement('li');
    listaItem.innerHTML = `${spesa[i]}`
    mioUl.append(listaItem);

    i++;
}