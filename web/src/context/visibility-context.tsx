import { createContext, useContext, useEffect, useState } from "react";

import useNuiEvent from "@/hooks/useNuiEvent";

import { cn, isBrowser } from "@/lib/utils";
import { fetchNui } from "@/lib/nui";

const exitKeys = ["Backspace", "Escape"];

type VisiblityContextValue = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const Context = createContext<VisiblityContextValue>({
  visible: false,
  setVisible: (_) => {},
});

function getInitialVisibility() {
  return isBrowser();
}

export function VisibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(getInitialVisibility());

  useNuiEvent<boolean>("setVisible", setVisible);

  useEffect(() => {
    if (visible) return;

    function exitHandler(event: KeyboardEvent) {
      if (!exitKeys.includes(event.code)) return;

      if (!isBrowser()) {
        fetchNui("hide");
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("keydown", exitHandler);
    return () => window.removeEventListener("keydown", exitHandler);
  }, []);

  return (
    <Context.Provider
      value={{
        setVisible,
        visible,
      }}
    >
      <div className={cn("w-full h-full", visible ? "visible" : "hidden")}>
        {children}
      </div>
    </Context.Provider>
  );
}

export function useVisibility() {
  return useContext(Context);
}
