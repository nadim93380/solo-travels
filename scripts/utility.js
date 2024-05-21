// function for change data with id and value
function updateDataById(id, value) {
    const elementId = document.getElementById(id);
    let idText = elementId.innerText;
    idText = value;
    document.getElementById(id).innerText = idText;
}


// function for minus the available seats value

function minusAvailableSeats() {
    const availableSeatsText = document.getElementById('availableSeats').innerText;
    const updatedAvilableSeats = parseInt(availableSeatsText) - 1;
    updateDataById('availableSeats', updatedAvilableSeats);

}

// function for add seat list

function addSeatList(data) {
    const getlistField = document.getElementById('listField');
    const newLi = document.createElement('li');
    const newP = document.createElement('p')
    newP.innerText = data;
    newLi.innerHTML = `<p class="font-semibold">550</p>
    <p>Economy</p>`
    newLi.appendChild(newP);
    newLi.classList.add('flex', 'flex-row-reverse', 'justify-between', 'pt-3')

    document.getElementById('listField').appendChild(newLi);
}