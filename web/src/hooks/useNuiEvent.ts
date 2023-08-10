import { useEffect } from "react";

type NuiMessage<T = any> = {
  action: string;
  data: T;
};

type NuiHandler<T> = (data: T) => void;

export default function useNuiEvent<T = any>(
  action: string,
  handler: NuiHandler<T>
) {
  function messageListener(event: MessageEvent<NuiMessage<T>>) {
    const { action: eventAction, data } = event.data;
    console.log(JSON.stringify(event.data));
    if (eventAction.toLocaleLowerCase() === action.toLocaleLowerCase()) {
      handler(data);
    }
  }

  useEffect(() => {
    window.addEventListener("message", messageListener);
    return () => window.removeEventListener("message", messageListener);
  });
}
