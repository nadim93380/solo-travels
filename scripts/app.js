const allSeats = document.getElementsByClassName('seat');
let sum = 0;

for (const seat of allSeats) {
    seat.addEventListener('click', function (e) {
        sum = sum + 1;
        updateDataById('selectedTicket', sum);
        if (sum === 4) {
            const couponBtn = document.getElementById('CouponBtn');
            couponBtn.removeAttribute('disabled');
            couponBtn.classList.add('bg-green-400');
        }
        if (sum > 4) {
            alert('Tickte Purchase Limit Exceeded');
            return;
        }

        e.target.setAttribute('disabled', 'true');
        e.target.classList.remove("bg-slate-200");
        e.target.classList.add("bg-green-400");
        minusAvailableSeats();


        addSeatList(e.target.innerText);
        updateTotalPriceById();
        updateGrandPriceById();



        document.getElementById('mainBody').addEventListener('keyup', function () {
            const numField = document.getElementById('numberField');
            const numText = numField.value;
            if (typeof (parseInt(numText)) === 'number' && numText.length === 11) {
                enableBtnById('nextBtn');
                const amountTobePaid = document.getElementById('grandPrice').innerText;
                console.log(amountTobePaid);
                document.getElementById('paidField').innerText = amountTobePaid;
            }
            
        })

    
    })
}
        