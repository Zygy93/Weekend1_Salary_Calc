var info = [];
$( document ).ready( function(){
  $( '#button' ).on( 'click', function(){
    // capture user input
    // create an object with the user input
    var newEmployee = {
      firstName: $( '#firstIn' ).val(),
      lastName: $( '#lastIn' ).val(),
      employeID: $( '#idIn' ).val(),
      jobTitle: $( '#titleIn' ).val(),
      annualSalary: $( '#salaryIn' ).val(),
    };
    // push that information into our list
    info.push( newEmployee );
    // display what is in our list
      displayInfo();
      displayMonthlyTotal();
    // empty inputs
    $( '#firstIn' ).val( '' );
    $( '#lastIn' ).val( '' );
    $( '#idIn' ).val( '' );
    $( '#titleIn' ).val( '' );
    $( '#salaryIn' ).val( '' );
  });
  $( '#infoOut' ).on( 'click', '.takeOutButton',function(){
    console.log( 'in takeOutButton on click', $( this ).data( 'id' ) );
    var employeeID = $( this ).data( 'id' );
    var companyEmployee = info.splice( employeeID, 1 );
    $( '#firstIn' ).val( companyEmployee[ 0 ].firstName );
    $( '#lastIn' ).val( companyEmployee[ 0 ].lastName );
    $( '#idIn' ).val( companyEmployee[ 0 ].employeID );
    $( '#titleIn' ).val( companyEmployee[ 0 ].jobTitle );
    $( '#salaryIn' ).val( companyEmployee[ 0 ].annualSalary );
    displayInfo();
    displayMonthlyTotal();
  });
}); //end doc ready
function monthlyCost(){
  var upkeep = [];
for(var i=0; i<info.length; i++){
upkeep.push(parseInt(info[ i ].annualSalary));
}
return upkeep;
}//end salary array
function averageMonth(cost){
var totalCost = 0;
for ( var i = 0; i < cost.length; i++ ){
    totalCost += cost[i];
}
costPerMonth = (totalCost/12);
return costPerMonth;
}
function displayMonthlyTotal(){
var monthCost = $( '#monthlyCost' );
    monthCost.empty();
var costToAppend = '<li>';
    costToAppend += ('$' + averageMonth(monthlyCost(info)));
    costToAppend += '</li>';
    monthCost.append( costToAppend );
}
function displayInfo(){
  console.log( 'in infoDisplay' );
  // target output element by ID
  var output = $( '#infoOut' );
  // empty output element
  output.empty();
  //loop
  for( var i=0; i<info.length ; i++ ){
    // append each em into output element
    var outputString = '<li>';
    outputString += info[ i ].firstName + ' ';
    outputString += info[ i ].lastName + ' ';
    outputString += info[ i ].employeID + ' ';
    outputString += info[ i ].jobTitle + ' ';
    outputString += info[ i ].annualSalary;
    //outputString += info[ i ].upkeepIn;
    outputString += ' <button class="takeOutButton" data-id="' + i + '">YOU ARE FIRED!</button></li>';
    output.append( outputString );
}
}
