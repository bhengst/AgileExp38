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
                    $("#userName").text(r.FirstName);
                });
            });
        }
    });
});