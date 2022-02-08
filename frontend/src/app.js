import './style.css';
import 'animate.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import { crearHTML } from './js/UI';
import { init } from './js/cargarTexto';
import { modal } from './js/modals';
import { initPopUp } from './js/popUps';

crearHTML();
init();
modal();
initPopUp();
