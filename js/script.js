function calculateTotal() {
    var tvPrice = parseFloat(document.getElementById("tvPrice").value);
    var internetPrice = parseFloat(document.getElementById("internetPrice").value);
    var increase = parseFloat(document.getElementById("increase").value);
    var promotion = parseFloat(document.getElementById("promotion").value);
    var discountType = document.getElementById("discountType").value;
    var additionalCharges = parseFloat(document.getElementById("additionalCharges").value);
    var convergentDiscount = parseFloat(document.getElementById("convergentDiscount").value);
  
    var tvPriceWithIncrease = tvPrice + (tvPrice * (increase / 100));
    var internetPriceWithIncrease = internetPrice + (internetPrice * (increase / 100));
  
    var promotionAmount = 0;
    if (!isNaN(promotion)) {
      if (discountType === "percentage") {
        promotionAmount = internetPriceWithIncrease * (promotion / 100);
      } else if (discountType === "amount") {
        promotionAmount = promotion;
      }
    }
  
    var total = (tvPriceWithIncrease + internetPriceWithIncrease - promotionAmount) + additionalCharges;
    
    total -= convergentDiscount;
  
    document.getElementById("total").value = total.toFixed(2);
  }

  function resetCalculator() {
    document.getElementById("tvPrice").value = 0;
    document.getElementById("internetPrice").value = 0;
    document.getElementById("increase").value = 0;
    document.getElementById("promotion").value = 0;
    document.getElementById("discountType").value = "percentage";
    document.getElementById("additionalCharges").value = 0;
    document.getElementById("convergentDiscount").value = 0;
    document.getElementById("total").value = "";
  }