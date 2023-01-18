const amount = document.getElementById('amountBill');
const people = document.getElementById('people');
const tipAmount = document.querySelectorAll('.amount')[0];
const tipPerPerson = document.querySelectorAll('.amount')[1];

handleAmountBillChange = ev => {
	console.log(ev.target);
};

amount.addEventListener('onchange', handleAmountBillChange);

function calcTip(amount, persons, percent) {
	const tip = (amount * percent) / 100;
	const amountPerPerson = tip / persons;
	tipAmount.innerHTML = `<sup>$</sup>${formatNumbers(tip)}`;
	tipPerPerson.innerHTML = `<sup>$</sup>${formatNumbers(amountPerPerson)}`;
	return;
}

function formatNumbers(myNumber) {
	const f = new Intl.NumberFormat('en-us', {
		currency: 'USD',
		maximumFractionDigits: 2,
		minimumFractionDigits: 2,
	});
	return f.format(myNumber);
}

function clickValButton(obj) {
	console.log(obj);
	console.log(amount);
	console.log(tipAmount.innerHTML);
	console.log(tipPerPerson);
}

calcTip(1000, 3, 5);
