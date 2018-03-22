
$(document).ready(function(){
  // alert("hi");

  $("#oldEnough").change(function() {
    var age = parseInt($("#oldEnough").val());
    if (age === 1) {
      $('#voteAge').show();
      $('#underAge').hide();
    } else {
      $('#underAge').show();
      $('#voteAge').hide();
    }
  });

});
  //var age = parseInt(prompt("Enter your age"));

//   if (age >= 18) {
//     $('#voteAge').show();
//     alert(hi)
//   }
//   else /*if (age < 18) */{
//     $('#underAge').show();
//   // else
//   //   document.write(nothing here);
//
//   }
// });
