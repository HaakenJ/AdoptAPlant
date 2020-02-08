$(document).ready(() => {
    $.get("/api/templog", data => {
        data.forEach(logObj => {
            let newRow = $("<tr>");
            Object.keys(logObj).forEach(dataKey => {
                let newData = $("<td>").text(logObj[dataKey]);
                newRow.append(newData);
            })
            $("#temp-table").append(newRow);
        });
    });

    $("#water-btn").on("click", () => {
        $.ajax({
            url: "/api/water",
            type: "PUT",
            success: res => {
                console.log(res);
            }
        });
    })
});
