console.log("JS loaded.");

$(document).ready(function () {
  console.log("Populating data");
  const data = {
    coverImage: details.data.coverFileUrl,
    project: details.data.coverName,
    owned_by: details.data.ownerName,
    sale_ends_at: details.data.projectIndividualNfts[1].nftAuction.expiry,
    current_price: nft.data.nftDetails.price,
    units_available: nft.data.nftDetails.qty,
    shortDescription: nft.data.projectDetails.description.shortDescription,
    longDescription: nft.data.projectDetails.description.longDescription,
  };
  console.log("Data : ", data);

  populateData(data);
});

function formatDate(date) {
  const dateNo = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return `${dateNo} ${month}, ${year} at ${hours}:${minutes}${ampm}, GMT +5:30`;
}

function populateData(data) {
  $(".image-view img").attr("src", data.coverImage);
  $(".project_name_value").html(data.project);
  $(".owner_name_value").html(data.owned_by);

  const dateTime = new Date(data.sale_ends_at);
  $(".sales_details__heading").html("Sale ends on " + formatDate(dateTime));
  $(".price_text").html("$" + data.current_price);
  $(".stock_text").html(data.units_available);

  $("#description .section__heading").html("Description");

  $("#paragraph_title_description").html(data.shortDescription);
  $("#paragraph_content_description").html(data.longDescription);
  console.log("dateTime : ", dateTime);
  console.log("Data populated");
}
