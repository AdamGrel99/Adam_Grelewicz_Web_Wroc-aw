document.addEventListener("DOMContentLoaded", () => {
  const orderItemsSummaryDiv = document.getElementById("items-summary");
  const orderTotalDiv = document.getElementById("order-total");

  const orderItems = JSON.parse(localStorage.getItem("orderItems"));
  const orderTotal = JSON.parse(localStorage.getItem("orderTotal"));

  if (orderItems && orderItems.length > 0) {
    orderItems.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("summary-item");
      itemDiv.innerHTML = `
                  ${item.name} - Ilość: ${item.count}
              `;
      orderItemsSummaryDiv.appendChild(itemDiv);
    });
  } else {
    orderItemsSummaryDiv.textContent = "Brak przedmiotów w zamówieniu.";
  }

  if (orderTotal !== null) {
    orderTotalDiv.innerHTML = `Łączny koszt: ${orderTotal.toFixed(2)} zł`;
  } else {
    orderTotalDiv.textContent = "Nie można pobrać łącznego kosztu.";

  localStorage.removeItem("orderSummaryItems");
  localStorage.removeItem("orderSummaryTotal");
  }
});