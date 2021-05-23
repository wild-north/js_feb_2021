import { url } from './data';
import { renderData } from './function';

const makeCall = () => fetch(url);

makeCall()
  .then((response) => response.json())
  .then((data) => renderData(data))
  .catch((err) => console.warn(err));
