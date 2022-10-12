/** start code for populating dropdown with users */
var userID = 0;
$(function() {
    $.ajax({
        url: "/api/owners",
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            res.forEach(r => {
                $('#users').append('<li><a class="dropdown-item" id="id">' + r.FirstName + ' ' + r.LastName + '</a></li>');
                $('#id').attr("id", r.OwnerID);
                $('#' + r.OwnerID).on("click", function() {
                    userID = r.OwnerID;
                    $("#emailDisplay").text(r.Email);
                    $("#fNameMail").text(r.FirstName);
                    $("#lNameMail").text(r.LastName);
                    updateAddressDisplay();
                });
            });
        }
    });
});

// updates email in database
function updateEmail () {
    $.ajax({
        url: "/api/changeEmail/" + userID + "/" + $('#email').val(),
        type: 'GET',
        dataType: 'json',
        success: function(res) {
            res.status;
        },
        fail: function() {
            console.log("email change failed");
        }
    });
}

// updates address in database
function updateAddress () {
    $.ajax({
        url: "/api/changeAddress/" + userID + "/" + $('#fname').val()  + "/" + $('#lname').val()  + "/" + $('#street').val() + "/" + $('#state option:selected').text() + "/" + $('#zip').val() + "/" + $('#country').val(),
        type: 'GET',
        dataType: 'json',
        success: function(res) {
            res.status;
        },
        fail: function() {
            console.log("address change failed");
        }
    });
}

// updates address that is displayed on webpage
function updateAddressDisplay () {
    $.ajax({
        url: "/api/address/" + userID,
        type: 'GET',
        dataType: 'json',
        success: function(res) {
            $("#streetMail").text(res[0].StreetAddressOne);
            $("#stateMail").text(res[0].State);
            $("#ZIPMail").text(res[0].Zip);
            $("#countryMail").text(res[0].Country);
        }
    });
}

// toggles between set email and form to change email
let emailButton = document.getElementById("emailEdit");
// submits form to change email
let emailSubmit = document.getElementById("emailSubmit");

// When email button is clicked
emailButton.addEventListener("click", ()=>{

    var emailInputToggle = document.getElementById("emailInput");

    // if email input is not visible, set visible and vice versa
    if (emailInputToggle.style.display === "none") {
        emailInputToggle.style.display = "block";
    } else {
        emailInputToggle.style.display = "none";
    }

    var emailToggle = document.getElementById("emailHere");

    // if email is not visible, set visible and vice versa
    if (emailToggle.style.display === "none") {
        emailToggle.style.display = "block";
    } else {
        emailToggle.style.display = "none";
    }

    // if email submit button is not visible, set visible and vice versa
    if (emailSubmit.style.display === "none") {
        emailSubmit.style.display = "block";
    } else {
        emailSubmit.style.display = "none";
    }

    // if email button says edit, change it to cancel and vice versa
    if (emailButton.innerText === "Edit") {
        emailButton.innerText = "Cancel";
    } else {
        emailButton.innerText = "Edit";
    }
})

// toggles between set address and form to change address
let mailButton = document.getElementById("mailButton");

// When mail button is clicked 
mailButton.addEventListener("click", ()=>{
    var mailAddressInput = document.getElementById("mailAddressInput");
 
    // if mail address input is not visible, set visible and vice versa
    if (mailAddressInput.style.display === "none")  {
        mailAddressInput.style.display = "block";
    } else {
        mailAddressInput.style.display = "none";
    }
    $('#fname').val($('#fNameMail').text());
    $('#lname').val($('#lNameMail').text());
    $('#street').val($('#streetMail').text());
    $('#state option:contains(' + $('#stateMail') + ')' ).attr('selected','selected');
    $('#zip').val($('#ZIPMail').text());
    $('#country').val($('#countryMail').text());
    
    var mailAddress = document.getElementById("mailAddress");

    // if mail address is not visible, set visible and vice versa
    if (mailAddress.style.display === "none")  {
        mailAddress.style.display = "block";
    } else {
        mailAddress.style.display = "none";
    }

    // if mail button says edit, change it to cancel and vice versa
    if (mailButton.innerText === "Edit") {
        mailButton.innerText = "Cancel";
    } else {
        mailButton.innerText = "Edit";
    }
})