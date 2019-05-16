var addBurger = () => {
  var data = $("form").serializeArray();
  $.post("/api/burger", data).then(res => {
    var row = $("<tr>")
      .attr("data-id", res.insertId)
      .html(
        `<td>${
          data[0].value
        }</td><td><button class='btn btn-outline-danger btn-sm devour'>Devour It!</button></td><td></td>`
      );
    $("#burgers tbody").append(row);
    $("#burger_name").val("");
  });
};

var devourBurger = btn => {
  var row = $(btn.target)
    .parent()
    .parent();
  var id = $(row).data("id");
  var name = $(`tr[data-id=${id}]`)
    .children()
    .first()
    .text();
  var data = {
    id: id,
    devoured: 1
  };

  $.ajax({
    url: `/api/burger/${id}`,
    method: "PUT",
    data: data
  }).then(res => {
    $(row).html(`<td></td><td></td><td>${name}</td>`);
  });
};

$(document).ready(() => {
  $("form").submit(e => {
    e.preventDefault();
    addBurger();
  });
  $(document).on("click", ".devour", e => {
    devourBurger(e);
  });
});
