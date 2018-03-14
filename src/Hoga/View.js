const View = () => {
  // view
  const _welTableBody = $('.hoga-table-body');
  const _welPrice = $('.hoga-price');

  const _renderBuyingData = (data) => {
    // 매수가
    let sHtml = '<tr class=buying><td></td><td></td>'
              + '<td>{price}</td><td>{quantity}</td>' 
              + '</tr>';

    _welTableBody.prepend(_makeTemplate(sHtml, data));
  };

  const _renderSellingData = (data) => {
    // 매도가
    let sHtml = '<tr class=selling><td>{price}</td><td>{quantity}</td>'
              + '<td></td><td></td></tr>';

    _welTableBody.prepend(_makeTemplate(sHtml, data));
  };

  const _renderCurPrice = (data) => {
    // 현재가
    let welCurPrice = _welPrice.find('.cur');
    let sHtml = '<em class=curprice>{curPrice}</em>원';

    welCurPrice.html((_makeTemplate(sHtml, data)));
  };

  const _makeTemplate = (template, data) => {
    return template.replace(/{[^{}]+}/g, (key) => {
      return data[key.replace(/[{}]+/g, '')] || '';
    });
  };

  return {
    renderBuyingData: _renderBuyingData,
    renderSellingData: _renderSellingData,
    renderCurPrice: _renderCurPrice
  };
};

export default View;