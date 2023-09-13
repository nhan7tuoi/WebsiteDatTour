// get city
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var result = JSON.parse(xhr.responseText); // Chuyển đổi JSON thành JavaScript object
    renderCity(result);
  }
};

xhr.send();
function renderCity(data) {
    const startCitySelect = document.getElementById("start-city");
    const startCitySelect1 = document.getElementById("start-city1");
    const destinationCitySelect = document.getElementById("destination-city");

    // Lặp qua dữ liệu JSON và thêm các tùy chọn vào các select box
    for (const city of data) {
        const option = document.createElement("option");
        option.text = city.Name; // Tên tỉnh/thành phố
        option.value = city.Id; // Mã của tỉnh/thành phố
        startCitySelect.appendChild(option);
        destinationCitySelect.appendChild(option.cloneNode(true));
        startCitySelect1.appendChild(option.cloneNode(true));
    }
}
