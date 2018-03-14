const Controller = (model, view) => {
  const _socket = io();
  const _welDocument = $(document);

  const _init = () => {
    _attachEvent();
    _hogaEventController();

    _socket.emit('start');
  };

  const _attachEvent = () => {
    _welDocument.on('changedContractor', _changedContractor);
  };

  const _hogaEventController = () => {
    _socket.on('receive', (data) => {
      const type = data.type;

      if(type === 'B') {
        // 매수가(Buying)
        model.setBuyingData(data, (hogaData, nContractor, nCurPrice) => {
          view.renderBuyingData(hogaData);
        });
      } else {
        // 매도가(sell)
        model.setSellingData(data, (hogaData, nContractor, nCurPrice) => {
          view.renderSellingData(hogaData);
        });
      }
    });

    _socket.on('finish', (data) => {
      _socket.disconnect();
      _welDocument.off();
    });
  };

  const _changedContractor = (event, arg) => {
    model.setCurPrice(arg, (nCurPrice) => {
      view.renderCurPrice({curPrice: nCurPrice});
    });
  };

  _init();
};

export default Controller;
