describe('printToConsole', function() {
  it("is defined", function() {
    expect(printToConsole).not.toBeUndefined();
  });
  it("should return the destination, check in date and checkout date separated by pipes", function() {
    var result = printToConsole('Boston, MA', '12/3/2018', '12/6/2018');
    expect(result).toEqual("Boston, MA | 12/3/2018 | 12/6/2018");
  });
});

describe('alreadyListed', function() {
  it('is defined', function() {
    expect(alreadyListed).not.toBeUndefined();
  });
  it('should return true if the hotelId is already in the array', function() {
    var trueResult = alreadyListed(
      [
        {name: 'Mariott Marquis', price: '600', id: '1234'},
        {name: 'Mariott Courtyard', price: '400', id: '1223'}
      ], '1234');
    expect(trueResult).toEqual(true);
  });

  it('should return false if the hotelId is not already in the array', function() {
    var falseResult = alreadyListed(
      [
        {name: 'Mariott Marquis', price: '600', id: '1234'},
        {name: 'Mariott Courtyard', price: '400', id: '1223'}
      ], '4444');
    expect(falseResult).toEqual(false);
  });
});

describe('priceSort', function() {
  it("is defined", function() {
    expect(priceSort).not.toBeUndefined();
  });
  it('should return a sorted array by the price from low to high', function() {
    var result3 = priceSort([
      {name: 'Mariott Marquis', price: '600', id: '1234'},
      {name: 'Mariott Courtyard', price: '400', id: '1223'},
      {name: 'Holiday Inn', price: '200', id: '1226'},
      {name: 'DoubleTree', price: '450', id: '1225'}
    ])
    expect(result3[0].price).toEqual('200')
    expect(result3[0].name).toEqual('Holiday Inn')
    expect(result3[1].price).toEqual('400')
    expect(result3[1].name).toEqual('Mariott Courtyard')
    expect(result3[3].price).toEqual('600')
    expect(result3[3].name).toEqual('Mariott Marquis')
  });
});
