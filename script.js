const amountBill = document.getElementById('amountBill');
const people = document.getElementById('people');
const tipAmount = document.querySelectorAll('.amount')[0];
const tipPerPerson = document.querySelectorAll('.amount')[1];

const handleAmountBillChange = ev => {
	ev.target.value = formatInputNumbers(Number(ev.target.value));
};

amountBill.addEventListener('blur', handleAmountBillChange);

function calcTip(amount, persons, percent) {
	const tip = (amount * percent) / 100;
	let amountPerPerson = 0;
	if (tip > 0 && persons > 0) amountPerPerson = tip / persons;
	tipAmount.innerHTML = `<sup>$</sup>${formatNumbers(tip)}`;
	tipPerPerson.innerHTML = `<sup>$</sup>${formatNumbers(amountPerPerson)}`;
	return;
}

function formatInputNumbers(inputNumber) {
	return (Math.round(inputNumber * 100) / 100).toFixed(2);
}

function formatNumbers(myNumber) {
	const f = new Intl.NumberFormat('sp-es', {
		currency: 'USD',
		maximumFractionDigits: 2,
		minimumFractionDigits: 2,
	});
	return f.format(myNumber);
}

function clickValButton(tipPercentValue) {
	const percentButtons = document.querySelectorAll('.buttons__button');

	percentButtons.forEach(btn => {
		btn.classList.remove('buttons__button--selected');
		if (btn.value === tipPercentValue) {
			btn.classList.add('buttons__button--selected');
		}
	});
}

function handleClickCalculate() {
	const percentVal = document.querySelector('.buttons__button--selected').value;
	calcTip(amountBill.value, people.value, percentVal);
}
