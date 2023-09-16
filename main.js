import './style.css'
import { headerElement } from './src/components/header'
import { mainElement } from './src/components/mainElement'

document.querySelector('#app').innerHTML = `
  ${ headerElement }
  ${ mainElement }
`;
