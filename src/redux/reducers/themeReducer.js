import produce from "immer";

import {
  APP_RED,
  SPACE_MONO,
  KUMBH_SANS,
  ROBOTO_SLAB,
  SET_COLOR,
  SET_FONT,
  SET_LONG_BREAK,
  SET_POMODORO,
  SET_SHORT_BREAK,
  LONG_BREAK,
  POMODORO,
  SHORT_BREAK,
  SET_SELECTION,
  SET_TIME_SETTINGS,
  RUN_TIMER,
} from "../../constants";

import { convertMinsToMs } from "../../utils";

const INITIAL_STATE = {
  pomodoro: 25,
  short_break: 5,
  long_break: 15,
  font: KUMBH_SANS,
  color: APP_RED,
  selection: POMODORO,
  currentTimer: convertMinsToMs(25),
  timerRunning: false,
  timerComplete: false,
};

export const themeReducer = produce((draft = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_COLOR:
      draft["color"] = action.payload.color;
      break;
    case SET_FONT:
      draft["font"] = action.payload.font;
      break;
    case SET_SELECTION:
      draft["selection"] = action.payload.selection;
      draft["currentTimer"] = convertMinsToMs(Number(draft[draft.selection]));
      break;
    case SET_TIME_SETTINGS:
      const { pomodoro, short_break, long_break } = action.payload;
      Object.keys(action.payload).forEach((key) => {
        draft[key] = Number(action.payload[key]);
        if (key === draft["selection"]) {
          draft["currentTimer"] = convertMinsToMs(Number(draft[key]));
        }
      });
      break;
    case RUN_TIMER:
      draft["timerRunning"] = action.payload.timerRunning;
      break;

    default:
      return draft;
  }
});
