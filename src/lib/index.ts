/**
 * Корневой файл библиотеки
 * Мы собираем его чтобы можно было использовать код в других проектах
 */

import UILib from './UILib';
import {
	isSelector,
	ensureElement,
	ensureAllElements,
	capitalizeFirst,
} from './utils/utils';
import PopUp, { PositionInterface } from './PopUp/PopUp';
import Tooltip from './PopUp/Tooltip';
import Modal from './PopUp/Modal';
import Dropdown from './PopUp/Dropdown';
import FormValidator from './FormValidator/FormValidator';
import Accordion from './ContentSwitcher/Accordion';
import ContentSwitcher from './ContentSwitcher/ContentSwitcher';
import Gallery from './ContentSwitcher/Gallery';
import Slider from './ContentSwitcher/Slider';
import Tabs from './ContentSwitcher/Tabs';
import AsyncDropdown from './Components/AsyncDropdown';
import PopUpNotification from './Components/Notification/PopUpNotification';
import NotificationElement from './Components/Notification/NotificationElement';
import PopUpSelectionError from './Components/PopUpSelectionError/PopUpSelectionError';
import Queue from './Components/Notification/Queue';
import Chat from './Components/Chat/Chat';

export {
	UILib,
	isSelector,
	ensureElement,
	ensureAllElements,
	capitalizeFirst,
	PopUp,
	Tooltip,
	Modal,
	Dropdown,
	FormValidator,
	Accordion,
	ContentSwitcher,
	Gallery,
	Slider,
	Tabs,
	AsyncDropdown,
	PopUpNotification,
	NotificationElement,
	PopUpSelectionError,
	Queue,
	Chat,
	PositionInterface,
};
