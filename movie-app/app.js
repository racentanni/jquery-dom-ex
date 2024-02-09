$(document).ready(function () {
  $("#titleRatingForm").submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get values from form inputs
    let title = $("#titleInput").val();
    let rating = parseInt($("#ratingInput").val());

    // Validate inputs
    if (title.length < 2) {
      alert("Title must be at least 2 characters long.");
      return;
    }
    if (isNaN(rating) || rating < 0 || rating > 10) {
      alert("Rating must be a number between 0 and 10.");
      return;
    }

    // Append title and rating to the list
    $("#titleRatingList").append(
      '<div class="titleRatingItem" data-rating="' +
        rating +
        '">' +
        title +
        " - Rating: " +
        rating +
        '<button class="removeButton">Remove</button></div>'
    );

    // Clear form inputs
    $("#titleInput").val("");
    $("#ratingInput").val("");
  });

  // Remove title and rating when remove button is clicked
  $("#titleRatingList").on("click", ".removeButton", function () {
    $(this).parent(".titleRatingItem").remove();
  });

  // Sort by title (A-Z)
  $("#sortByTitleAsc").click(function () {
    var titles = $(".titleRatingItem").toArray();
    titles.sort(function (a, b) {
      let titleA = $(a).text().toUpperCase();
      let titleB = $(b).text().toUpperCase();
      return titleA.localeCompare(titleB);
    });
    $("#titleRatingList").empty().append(titles);
  });

  // Sort by title (Z-A)
  $("#sortByTitleDesc").click(function () {
    let titles = $(".titleRatingItem").toArray();
    titles.sort(function (a, b) {
      var titleA = $(a).text().toUpperCase();
      var titleB = $(b).text().toUpperCase();
      return titleB.localeCompare(titleA);
    });
    $("#titleRatingList").empty().append(titles);
  });

  // Sort by rating (Lowest to Highest)
  $("#sortByRatingAsc").click(function () {
    let items = $(".titleRatingItem").toArray();
    items.sort(function (a, b) {
      var ratingA = parseInt($(a).data("rating"));
      var ratingB = parseInt($(b).data("rating"));
      return ratingA - ratingB;
    });
    $("#titleRatingList").empty().append(items);
  });

  // Sort by rating (Highest to Lowest)
  $("#sortByRatingDesc").click(function () {
    let items = $(".titleRatingItem").toArray();
    items.sort(function (a, b) {
      let ratingA = parseInt($(a).data("rating"));
      let ratingB = parseInt($(b).data("rating"));
      return ratingB - ratingA;
    });
    $("#titleRatingList").empty().append(items);
  });
});
