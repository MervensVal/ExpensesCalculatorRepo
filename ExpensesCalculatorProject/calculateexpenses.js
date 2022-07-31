function calculateTotalExpenses()
{
    var goalNum;
    var moneyLeftoverPercent;
    var goallist = document.querySelectorAll('[name="goal"]');
    var monthlyIncome = parseInt(document.getElementById('monthlyincome').value);
    var homeMonthly = parseInt(document.getElementById('rent-home').value);
    var carMonthly = parseInt(document.getElementById('car').value);
    var lightMonthly = parseInt(document.getElementById('light').value);
    var waterMonthly = parseInt(document.getElementById('water').value);
    var gasMonthly = parseInt(document.getElementById('gas').value) * 52.1 / 12;
    var groceriesMonthly = parseInt(document.getElementById('groceries').value) * 52.1 / 12;
    var insuranceMonthly = parseInt(document.getElementById('insurance').value);
    var internettvMonthly = parseInt(document.getElementById('internet-tv').value);
    var funMonthly = parseInt(document.getElementById('fun').value) * 52.1 / 12;

    var monthlyExpenses = homeMonthly+carMonthly+lightMonthly+waterMonthly+gasMonthly+groceriesMonthly+insuranceMonthly+internettvMonthly+funMonthly; 
    var moneyLeftover = monthlyIncome - monthlyExpenses;
    moneyLeftoverPercent = (moneyLeftover/monthlyIncome);

    for(var i = 0; i < goallist.length; i++){
        if (goallist[i].checked){
            goalNum = parseInt(goallist[i].value);
            console.log(goalNum);
        }
    }

    if(moneyLeftoverPercent >= (goalNum/100)){
        document.getElementById('results-message').innerHTML="Congrats you have acheived your goal. You saved:";
        document.getElementById('results-message').style.color="green";
        document.getElementById('results-percentage').innerHTML = (Math.floor(moneyLeftoverPercent * 100));
    }
    else{
        document.getElementById('results-message').innerHTML = "Sorry you did not acheived your goal. You saved only:";
        document.getElementById('results-message').style.color="red";
        document.getElementById('results-percentage').innerHTML = (Math.floor(moneyLeftoverPercent * 100));
    }
    document.getElementById('results-range').value = (Math.floor(moneyLeftoverPercent * 100));
    event.preventDefault();
    return false;
}