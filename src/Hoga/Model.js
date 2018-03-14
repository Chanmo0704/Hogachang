const Model = () => {
  // model
  let _oSelling = {type:'S', price:0, quantity: 0};
  let _oBuying = {type:'B', price:0, quantity: 0};
  let _nContractor = 0;
  let _nCurPrice = 0;

  const _welDocument = $(document);

  const _setBuyingData = (data, callBack)  => {
    $.extend(_oBuying, data);
    _setContractor(data.type);
    callBack(_oBuying, _nContractor);
  };

  const _getBuyingData = () => {
    return _oBuying;
  };

  const _setSellingData = (data, callBack) => {
    $.extend(_oSelling, data);
    _setContractor(data.type);
    callBack(_oSelling, _nContractor);
  };

  const _getSellingData = () => {
    return _oSelling;
  };

  const _setContractor = (type) => {
    let nBuying = _oBuying.price;
    let nSelling = _oSelling.price;
    
    if(nBuying > nSelling) {
      // 매도 > 매수
      _nContractor = '';
    } else if(nBuying < nSelling) {
      // 매도 < 매수
      _nContractor;
    } else if(nBuying === nSelling) {
      // 매도 == 매수
      _nContractor = (type === 'B') ? nBuying : nSelling;
      _changedContractor();
    }
  };

  const _changedContractor = () => {
    _welDocument.trigger('changedContractor', [_nContractor]);
  };

  const _getContractor = () => {
    return _nContractor;
  };

  const _setCurPrice = (nContractor, callBack) => {
    _nCurPrice = nContractor;
    callBack(_nCurPrice);
  };

  const _getCurPrice = () => {
    return _nCurPrice;
  };

  return {
    setBuyingData: _setBuyingData,
    getBuyingData: _getBuyingData, // test
    setSellingData: _setSellingData,
    getSellingData: _getSellingData, // test
    getContractor: _getContractor, // test
    setCurPrice: _setCurPrice
  };
};

export default Model;