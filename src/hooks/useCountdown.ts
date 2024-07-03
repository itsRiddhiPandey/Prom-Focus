import { useCallback, useEffect, useRef, useState } from "react";
interface Props {
  onStart: () => void;
  minutes: number;
  onComplete: () => void;
  onStop?: () => void;
}
export default function useCountdown({ onStart, minutes, onComplete, onStop }: Props) {
  const timerId
    = useRef<ReturnType<typeof setInterval> | undefined | number>(undefined);
  const time = minutes * 60 * 1000;
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTime] = useState(time);
  const [ticking, setTicking] = useState(false);
  const clear = () => {
    clearInterval(timerId.current);
    timerId.current = undefined;
  };
  const tick = useCallback(() => {
    if (timeLeft > 0) {
      setTime(timeLeft - 1000);
      setProgress((count) => count + 1);
    }
    if (timeLeft <= 1) {
      setTicking(false);
      clear();
      onComplete?.();
    }
  }, [onComplete, timeLeft]);

  useEffect(() => {
    if (ticking) {
      timerId.current = setInterval(tick, 1000);
    } else {
      clear();
    }
    return clear;
  }, [tick, ticking]);

  useEffect(() => {
    setTime(time);
  }, [time]);

  const start = useCallback(() => {
    setTicking(true);
    onStart?.();
  }, [onStart]);

  const stop = useCallback(() => {
    setTicking(false);
    onStop?.();
  }, [onStop]);
  const reset = useCallback(() => {
    setTicking(false);
    setProgress(0);
    onStop?.();
  }, [onStop]);

  return {
    start,
    stop,
    reset,
    ticking,
    timeLeft,
    progress: (progress / time) * 100000,
  };
}
