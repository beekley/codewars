describe("Solution", function(){
  it("should allow strings with digits between 0 and 255", function(){
    Test.assertEquals(isValidIP('1.2.3.4'), true, "Should pass for single digits");
    Test.assertEquals(isValidIP('255.254.253.252'), true, "Should pass for three digits");
  });
  it("should not allow strings with digits between under 0", function(){
    Test.assertEquals(isValidIP('-1.2.3.4'), false, "Should fail for single digits");
    Test.assertEquals(isValidIP('255.-254.253.252'), false, "Should fail for three digits");
  });
  it("should not allow strings with digits between above 255", function(){
    Test.assertEquals(isValidIP('-1.2.3.4'), false, "Should fail for single digits");
    Test.assertEquals(isValidIP('255.254.253.256'), false, "Should fail for three digits");
  });
});