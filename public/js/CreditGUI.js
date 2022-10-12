$("button").onclick = function () {
    location.href = "/";
}
var userID = 0;
$(function () {
    $.ajax({
        url: "/api/owners",
        type: 'GET',
        dataType: 'json', // added data type
        success: function (res) {
            res.forEach(r => {
                $('#users').append('<li><a class="dropdown-item" id="id">' + r.FirstName + ' ' + r.LastName + '</a></li>');
                $('#id').attr("id", r.OwnerID);
                $('#' + r.OwnerID).on("click", function () {
                    userID = r.OwnerID;
                    updateTable();
                });
            });
        }
    });
});
function updateTable() {
    $.ajax({
        url: "/api/credits/" + userID,
        type: 'GET',
        datatype: 'json',
        success: function (res) {
            $('#userCR tbody').empty();
            $('#userBR tbody').empty();
            var WM = 0;
            var WMA = 0;
            var WTS = 0;
            res.forEach(r => {
                if (r.IsActive == 1) {
                    $('#userCR tbody').append('<tr><td>' + getID(r.CTypeID) + '</td>' + '<td>' + r.Amount + '</td>' + '<td>' + r.ExperationDate.substring(0,10) + '</td></tr>')

                }
                else {
                    if (r.CTypeID == 1) WMA += r.Amount;
                    if (r.CTypeID == 2) WM += r.Amount;
                    if (r.CTypeID == 3) WTS += r.Amount;
                }


            }
            )
            $('#userBR tbody').append('<tr><td>' + 'WM+A' + '</td>' + '<td>' + WMA + '</td>' + '</tr>')
            $('#userBR tbody').append('<tr><td>' + 'WM' + '</td>' + '<td>' + WM + '</td>' +'</tr>')
            $('#userBR tbody').append('<tr><td>' + 'WTS' + '</td>' + '<td>' + WTS + '</td>' + '</tr>')
        }

    }
    )
}
function getID(num) {
    if (num == 1) return "WM+A"
    if (num == 2) return "WM"
    if (num == 3) return "WTS"
}