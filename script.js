function neuerText() {
    document.getElementById('text').innerHTML = 'dasGehtJa!!'
}

function neuerText2() {
    document.getElementById('text').innerHTML = 'dasGehtJaAuchNoch!!'
}

function addIngredient(Menge, Name) {
    // let menge = Menge;
    // let name = Name;
    document.getElementById('table').innerHTML +=
        `<tr>
             <td> ${Menge} </td> 
             <td> ${Name} </td> 
        </tr>`;
}

function allesLaden() {
    let _Menge = document.getElementById('fieldMenge').value;
    let _Name = document.getElementById('fieldNAme').value;
    if (_Menge != '' && _Name != '') {
        addIngredient(_Menge, _Name);
    }

}

function add() {
    let _wert1 = +document.getElementById('Wert1').value;
    let _wert2 = +document.getElementById('Wert2').value;
    document.getElementById('ausgabe').innerHTML = `Das Ergebnis ist ${_wert1 + _wert2}`
}
let merker = 'a'

function changepic() {

    if (merker == 'a') {
        document.getElementById('pic').src = "img/youtube-3-48.png";
        merker = 'b'
    } else {
        document.getElementById('pic').src = "img/facebook-3-48.png";
        merker = 'a'
    }
}

function slideshow() {
    setTimeout(changepic, 3000);
    setTimeout(slideshow, 3000);
}

let toDos = ['Einkaufen', 'Putzen', 'Spülen'];

function showtodos() {
    document.getElementById('arrayDiv').innerHTML = ''
    for (let i = 0; i < toDos.length; i++) {

        document.getElementById('arrayDiv').innerHTML += `<li> ${toDos[i]} <a href="#" onclick="deltodos(${i})">X</a></li> <br>`;

    }

}

function filltodos() {
    toDos.push(document.getElementById('fillvalue').value);
    showtodos();
    document.getElementById('fillvalue').value = '';
}

function deltodos(position) {
    // let position = toDos.indexOf(document.getElementById('fillvalue').value);
    toDos.splice(position, 1);
    showtodos();
    document.getElementById('fillvalue').value = '';
}