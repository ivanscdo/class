$("#name-submit").on("click", function(){
    // $("input [type='text']").on("click", function(){
      event.preventDefault();

      let database = firebase.database();

      // var userName = $("#name-input").val().trim()
      // console.log(userName);

      let val = $("#name-input").val().trim()
      console.log(val);

      database.ref("message").set(val);
      // ref is either a single value, or holder, holds place, when reference later, use ref to get it, kinda like id, key and object, think of ref as key that will get values out of later
      // setting that key equivalent to 

      // firebase giant JSON, that can be used as database

      database.ref("message").on("value", function(snapshot) {

          let data = snapshot.val()

          $("h1").text(data)
      });

  // END OF: $("#name-submit").on("click", function(){
  });