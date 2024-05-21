const allSeats = document.getElementsByClassName('seat');
let sum = 0;

for (const seat of allSeats) {
    seat.addEventListener('click', function (e) {
        sum = sum + 1;
        if (sum > 4) {
            alert('Tickte Purchase Limit Exceeded');
            return
        }

        e.target.setAttribute('disabled', 'true');
        e.target.classList.remove("bg-slate-200")
        e.target.classList.add("bg-green-400")
        minusAvailableSeats();
        addSeatList(e.target.innerText);
        

        
    })
}