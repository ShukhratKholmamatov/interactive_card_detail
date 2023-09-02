
function showInfo(){

    let name = document.getElementById('holder_name').value;
    let card_number = document.getElementById('card_number').value;
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let cvc = document.getElementById('cvc').value;

    document.getElementById('show_name').innerHTML = name;
    document.getElementById('show_number').innerHTML = card_number;
    document.getElementById('show_month').innerHTML = month;
    document.getElementById('show_year').innerHTML = year;
    document.getElementById('show_cvc').innerHTML = cvc;

}