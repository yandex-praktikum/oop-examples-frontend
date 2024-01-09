import '../../../scss/index.scss';

import AsyncDropdown from '../../../lib/Components/AsyncDropdown';

const words = ['teer', 'abc', 'good', 'list', 'After'];

const trigger = document.querySelector('.async') as HTMLInputElement;
const search = document.querySelector('.search') as HTMLElement;

const asyncDropdown = new AsyncDropdown(words);
asyncDropdown.init(trigger, search);
