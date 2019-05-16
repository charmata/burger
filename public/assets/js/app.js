var addBurger = () => {
  var data = $("form").serializeArray();
  console.log(data);
  $.post("/api/burger", data).then(res => {
    var row = $("<tr>").html(
      `<td>${
        data[0].value
      }</td><td><button class='btn btn-outline-danger btn-sm devour'>Devour It!</button></td><td></td>`
    );
    $("#burgers tbody").append(row);
    $("#burger_name").val("");
  });
};

$(document).ready(() => {
  $("form").submit(e => {
    e.preventDefault();
    addBurger();
  });
});
