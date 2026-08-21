Feature: Ecommerce validations
   
   Scenario: Placing the order
       Given Login to Ecommerce application with "annukm97@gmail.com" and "Annu@123"
       When  Add "ZARA COAT 3" to the cart
       Then  Verify "ZARA COAT 4" is displayed in the cart 
       When  Enter valid detalis "India" and "annukm97@gmail.com" and place the order
       Then  verfiy order is present in the OrderHistory




    