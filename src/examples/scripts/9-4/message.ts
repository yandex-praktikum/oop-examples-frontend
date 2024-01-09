import '../../../scss/index.scss';

import Window from '../../../lib/Components/Chat/Window';

const header = document.querySelector('.title') as HTMLElement;
const containerMessages = document.querySelector(
	'.container__messages'
) as HTMLElement;
const form = document.querySelector('#sendMessage') as HTMLFormElement;
const window = new Window(header, containerMessages, form);
