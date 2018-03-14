import Model from '../Model';

describe('Model Test', () => {
  describe('매수 데이터 저장 ', () => {
    const model = Model();

    beforeEach(() => {
      model.setBuyingData({
        type: 'B',
        price: 100,
        quantity: 100,
      }, function() {});
    });
  
    afterEach(() => {
      model.setBuyingData({}, () =>{});
    });
    
    it('setBuyingData', () => {
      const oBuyingData = model.getBuyingData();

      expect(oBuyingData).toEqual({
        type: 'B',
        price: 100,
        quantity: 100,
      });
    });
  });
  
  describe('매도 데이터 저장', () => {
    const model = Model();

    beforeEach(() => {
      model.setSellingData({
        type: 'S',
        price: 100,
        quantity: 100,
      }, function() {});
    });
  
    afterEach(() => {
      model.setSellingData({}, 
        function() {}
      );
    });
    
    it('getSellingData', () => {
      const oSellingData = model.getSellingData();

      expect(oSellingData).toEqual({
        type: 'S',
        price: 100,
        quantity: 100,
      });
    });
  });

  describe('매도가격과 매수가격이 같을 때, 체결가 가격을 업데이트 한다.', () => {
    const model = Model();

    beforeEach(() => {
      model.setSellingData({
        type: 'S',
        price: 100,
        quantity: 100,
      }, function() {});

      model.setBuyingData({
        type: 'B',
        price: 100,
        quantity: 50,
      }, function() {});
    });
  
    afterEach(() => {
      model.setBuyingData({}, 
        function() {}
      );

      model.setSellingData({}, 
        function() {}
      );
    });
    
    it('getContractor', () => {
      const nContractor = model.getContractor();
      expect(nContractor).toEqual(100);
    });
  });

  describe('현재가를 업데이트 하는 이벤트가 발생한다.', () => {
    const model = Model();
    const _welDocument = $(document);
    let nCurrent = 0;

    beforeEach(() => {
      _welDocument.on('changedContractor', function(event, args) {
        nCurrent = args;
      });

      model.setSellingData({
        type: 'S',
        price: 100,
        quantity: 100,
      }, function() {});

      model.setBuyingData({
        type: 'B',
        price: 100,
        quantity: 50,
      }, function() {});
    });
  
    afterEach(() => {
      model.setBuyingData({}, 
        function() {}
      );

      model.setSellingData({}, 
        function() {}
      );
    });
    
    it('getContractor', () => {
      expect(nCurrent).toEqual(100);
    });
  });
});