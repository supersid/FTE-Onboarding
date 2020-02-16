$(document).ready(function(){
    $("#myModal").modal('show');
});

$(document).ready(function () {
    //Attaching the change event of dropdown list
    $('#1952_Scheme').change(function () {
        //Grab the value from dropdownlist
        if (this.value != "yes") {
            //show the tr if value is others
            $('#row9').hide();
        } else {
            //Hide the tr if value is others
            $('#row9').show();
        }

    });
});

$(document).ready(function () {
    //Attaching the change event of dropdown list
    $('#1955_Scheme').change(function () {
        //Grab the value from dropdownlist
        if (this.value != "yes") {
            //show the tr if value is others
            $('#row9').hide();
        } else {
            //Hide the tr if value is others
            $('#row9').show();
        }

    });
});

$(document).ready(function () {
    //Attaching the change event of dropdown list
    $('#iw').change(function () {
        //Grab the value from dropdownlist
        if (this.value != "yes") {
            //show the tr if value is others
            $('#row11').hide();
        } else {
            //Hide the tr if value is others
            $('#row11').show();
        }

    });
});

// function printFunction() {
//     window.print();
//   }

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}