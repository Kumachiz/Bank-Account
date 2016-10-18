
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Balance(transaction, balance) {
  this.transaction = transaction;
  this.balance = balance;
  this.newBalance = [''];

}
Balance.prototype.depositMath = function() {
  if(transaction === deposit) {
    return newBalance += balance + this.newBalance;
  }
}

Balance.prototype.depositMath = function() {
  if(transaction === withdrawal) {
    return newBalance -= balance + this.newBalance;
  }
}

$(document).ready(function() {
  $("#create-account form").submit(function(event) {
    var firstName = $("input#first-name").val();
    var lastName =  $("input#last-name").val();
    var initDeposit = parseInt($("#initial-deposit").val());

    var newUser = new User(firstName, lastName);

    $(".full-user-name").append("" + newUser.fullName() + "");

    event.preventDefault();
  });



  $("#account form").submit(function(event) {
    var moneyInOut = $("input:radio[name=inlineRadio]:checked").val();
    var moneyInOutAmount = parseInt($("#money-in-out").val());

    var newBalance = new Balance(moneyInOut, moneyInOutAmount)

    $(".account-balance").append("" + newBalance.Balance() + "");

    event.preventDefault();
  });
});
