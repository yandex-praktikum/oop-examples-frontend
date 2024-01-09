import '../../../scss/index.scss';

import PopUpSelectionError from '../../../lib/Components/PopUpSelectionError/PopUpSelectionError';

const container = document.querySelector(
	'.container_text_error'
) as HTMLElement;
const popUp = document.querySelector('#popupSelectionError') as HTMLElement;
const body = document.body;
const popUpSelectionText = new PopUpSelectionError(container);
popUpSelectionText.init(body, popUp);
