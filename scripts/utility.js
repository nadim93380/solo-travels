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

// function for add ticket price to total price
function updateTotalPriceById() {
    const totalPriceField = document.getElementById('totalPrice');
    const totalPriceText = totalPriceField.innerText;
    const totalPrice = parseInt(totalPriceText);
    const newTotalPrice = totalPrice + 550;
    document.getElementById('totalPrice').innerText = newTotalPrice;

}

// function for add ticket price to grand price

function updateGrandPriceById() {
    const granPriceField = document.getElementById('grandPrice');
    const grandPrice = parseInt(granPriceField.innerText);

    const totalPriceField = document.getElementById('totalPrice');
    const totalPriceText = totalPriceField.innerText;
    const totalPrice = parseInt(totalPriceText);

    document.getElementById('grandPrice').innerText = totalPrice;

}

// function for coupon code

document.getElementById('CouponBtn').addEventListener('click', function (e) {
    e.target.setAttribute('disabled', 'true');
    e.target.classList.remove("bg-green-400")
    e.target.classList.add("bg-gray-400");
    const couponField = document.getElementById('codeField');
    const couponCode = couponField.value;

    if (couponCode === 'NEW15') {
        console.log('15% discount');
        const granPriceField = document.getElementById('grandPrice');
        const grandPrice = parseInt(granPriceField.innerText);
        const discount = grandPrice * 0.15;
        document.getElementById('discount').innerText = discount;
        const newGrandPrice = grandPrice - discount;

        document.getElementById('grandPrice').innerText = newGrandPrice;
        
    }
    else if (couponCode === 'COUPLE20') {
        console.log("20% off");
        const granPriceField = document.getElementById('grandPrice');
        const grandPrice = parseInt(granPriceField.innerText);
        const discount = grandPrice * 0.2;
        document.getElementById('discount').innerText = discount;
        const newGrandPrice = grandPrice - discount;

        document.getElementById('grandPrice').innerText = newGrandPrice;
    } else {
        alert('Wrong Coupon Code');
        const couponBtn = document.getElementById('CouponBtn');
        couponBtn.removeAttribute('disabled');
        couponBtn.classList.add('bg-green-400');
    }
})

// function for enable button by ID name

function enableBtnById(id) {
    const targetId = document.getElementById(id);
    targetId.removeAttribute('disabled');
    
}
