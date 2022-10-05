import renderComponent from "./Button.js";
import {default as renderCalendar} from "./Calendar/CalendarOneMonth.js"

export const render = renderComponent;

renderCalendar("calendar", 9, 2022);