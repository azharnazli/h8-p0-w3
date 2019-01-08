var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];

function dataHandling2(inp) {
  input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA Internasional Metro");
  var bulan = input[3].split("/");
  var newBulan = input[3].split("/");
  var newDate = input[3].split("/")
  var limitchar = input[1].slice(0, 14)
  switch (bulan[1]) {
    case "01":
      bulan[1] = "Januari";
      break;
    case "02":
      bulan[1] = "Febuari";
      break;
    case "03":
      bulan[1] = "Maret";
      break;
    case "04":
      bulan[1] = "April";
      break;
    case "05":
      bulan[1] = "Mei";
      break;
    case "06":
      bulan[1] = "Juni";
      break;
    case "07":
      bulan[1] = "Juli";
      break;
    case "08":
      bulan[1] = "Agustus";
      break;
    case "09":
      bulan[1] = "September";
      break;
    case "10":
      bulan[1] = "Oktober";
      break;
    case "11":
      bulan[1] = "November";
      break;
    case "12":
      bulan[1] = "Desember";
      break;
  }
  console.log(input)
  console.log(bulan[1]);
  newBulan.sort(function (a, b) {
    return b - a
  })
  console.log(newBulan);
  var newDate = input[3].split("/")
  console.log(newDate.join("-"))
  console.log(limitchar)
}

dataHandling2(input);