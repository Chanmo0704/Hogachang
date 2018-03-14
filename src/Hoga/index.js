import Controller from './Controller';
import Model from './Model';
import View from './View';
import './hoga.css';

const Hoga = () => {
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);
};

export default Hoga;