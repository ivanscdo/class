$(function() {
    $("#submit-button").on("click", function(event) {
        event.preventDefault();
        $("#delete-button").show();
        

        console.log("user clicked!")

        var newUser = {
            email: $("#email-input").val().trim(),
            password: $("#password-input").val().trim(),
            // test: $("#test-input").val().trim()
        };

        console.log(newUser);

        $.post("/api/test", newUser).then(function(data) {
            console.log(data);
        });


        $.get("/api/test", function(data) {
            console.log("$.get data:")
            console.log(data);
            var newUserDiv = $("<div id='newUserDiv' data-id='"+ data[0].id + "'> </div>");
            newUserDiv.attr("id");

            newUserDiv.append("<p>Email:" + data[0].email + "</p>");
            newUserDiv.append("<p>Password:" + data[0].password + "</p>");
            // newUserDiv.append("<button id='delete-button' data-id='"+ data[0].id + "'>Delete</button>")
            $("#existing-users").append(newUserDiv);
        });

        // $.ajax("/api/test", {
        //     type: "POST", 
        //     data: newUser
        // }).then(
        //     function() {
        //         console.log("created new user");
        //         // location.reload();
        //     }
        // );

    // END OF: $(".submit-button").on("submit", function(event) {
    });

    $("#delete-button").on("click", function(event) {
        event.preventDefault();
        console.log("inside delete button!")

        var delete_user = {
            id: $("#newUserDiv").attr("data-id")
        }

        console.log(delete_user);

        $.post("/api/delete", delete_user).then(function(result) {
            console.log(result);
            // location.reload();
        });



        // $.ajax({
        //     me
        // })
    });

// END OF: $(function() {
});