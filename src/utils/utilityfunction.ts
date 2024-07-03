import {
  POMODORO,
  TIME_FOR_A_BREAK,
  TIME_TO_FOCUS,
} from "../constant";
export function formattimeInMinutes(time: number) {
  const minutes=Math.floor(time / (60 * 1000)) ;
  const seconds=Math.floor(time / 1000) % 60;
  return `${minutes <10 ? "0"+minutes : minutes} : ${seconds<10 ? "0"+seconds : seconds}`
}

export function updateTitle(time: number, mode: string) {
  const message = mode === POMODORO ? TIME_TO_FOCUS : TIME_FOR_A_BREAK;
  document.title = `${formattimeInMinutes(time)} - ${message}`;
}
