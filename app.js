var calculate = document.getElementById('calculate');
calculate.addEventListener('click', (event) => {
    event.preventDefault();
    var amount = Math.round(parseInt(document.getElementById('amt').value));
    console.log(amount);
    var people = parseInt(document.getElementById('people').value);
    var percentageSet = document.getElementsByName('percentage');
    var selectedValue;
    var finalTip;
    for (i = 0; i < percentageSet.length; i++) {
        if (percentageSet[i].checked) {
            selectedValue = percentageSet[i].value;
        }
    }
    finalTip = (amount * (selectedValue / 100)) / people;
    console.log(finalTip);
    document.getElementById('tip-amount').innerHTML = `Your Tip is $${finalTip} per person.`
    document.getElementById('modal').style.display = 'block';
})
document.getElementById('close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('tip').reset();
})