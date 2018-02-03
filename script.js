console.log( 'js' );

$( document ).ready( function(){
  $( '#clickyButton' ).on( 'click', function(){
    console.log( 'in clickyButton on click' );
    // capture user input
    // create an object with the user input
    var newEmployee = {
      firstName: $( '#firstIn' ).val(),
      lastName: $( '#lastIn' ).val(),
      employeID: $( '#idIn' ).val()
      jobTitle: $( '#titleIn' ).val(),
      annualSalary: $( '#salaryIn' ).val(),
    }
    // push that information into our list
    garage.push( newCar );
    // display what is in our list
    infoOut();
    // empty inputs
    $( '#firstIn' ).val( '' );
    $( '#lastIn' ).val( '' );
    $( '#idIn' ).val( '' );
    $( '#titleIn' ).val( '' );
    $( '#salaryIn' ).val( '' );
  });
