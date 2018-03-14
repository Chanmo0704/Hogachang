import View from '../View';

describe('View', () => {
  describe('매수 데이터를 화면에 표시한다.', ()=> {
    // describe("Buying", () => {
    let el;

    beforeEach(() => {
      el = '<tbody class=hoga-table-body></tbody>';
      $('body').append(el);
    });

    afterEach(() => {
      $('.hoga-table-body').remove();
    });

    it('renderBuyingData', () => {
      const view = View();

      view.renderBuyingData({
        price: 100,
        quantity: 100
      });

      expect($('.buying').length).toEqual(1);
    });
  });

  describe('매도 데이터를 화면에 표시한다.', ()=> {
    let el;

    beforeEach(() => {
      el = '<tbody class=hoga-table-body></tbody>';
      $('body').append(el);
    });

    afterEach(() => {
      $('.hoga-table-body').remove();
    });

    it('renderBuyingData', () => {
      const view = View();

      view.renderSellingData({
        price: 100,
        quantity: 100
      });

      expect($('.selling').length).toEqual(1);
    });
  });

  describe('현재가를 화면에 표시한다.', ()=> {
    let el;

    beforeEach(() => {
      el = '<div class=hoga-price><span class=cur></span></div>';
      $('body').append(el);
    });

    afterEach(() => {
      $('.cur').remove();
    });

    it('renderCurPrice', () => {
      const view = View();

      view.renderCurPrice({
        curPrice: 100
      });

      expect($('.curprice').length).toEqual(1);
    });
  });
});
