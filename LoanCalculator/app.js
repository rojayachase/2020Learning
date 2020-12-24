//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
    //hide results
    document.getElementById('results').style.display = 'none';

    //show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);


e.preventDefault();
}); //'calulate clickable'


//calculate Results
function calculateResults(){
    //UI variables
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');


    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 /12 ;
    const calculatedPayments = parseFloat(years.value) * 12; 


    //compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal *x*calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2)

        //hide results
        document.getElementById('results').style.display = 'block';

         //hide loader
        document.getElementById('loading').style.display = 'none';
    }   else {
        showError('Please enter your numbers');

    }
  //  e.preventDefault(); //stops the form from populating then erasing 
}
//show error
function showError(error){
    //hide results
        document.getElementById('results').style.display = 'none';
        
        //hide loader
        document.getElementById('loading').style.display = 'none';
    //create a div
    const errorDiv = document.createElement('div');

    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //add class
    errorDiv.className = 'alert alert-danger';

    //create text node and append to div
    errorDiv.appendChild(document.createTextNode(error)); 

    //insert error about heading
    card.insertBefore(errorDiv, heading); //the parrent, the div you want to enter, what you want to enter before 

    //clear error after 3 seconds
    setTimeout(clearError, 3000);
}

//Clear error
function clearError(){
    document.querySelector('.alert').remove();
}
