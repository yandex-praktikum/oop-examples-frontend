import '../../../scss/index.scss';

import Chat from '../../../lib/Components/Chat/Chat';

const form = document.querySelector('#login') as HTMLFormElement;

const chat = new Chat({
	nameFile: 'message.html',
	widthWindow: 400,
	heightWindow: 500,
	form: form,
});
