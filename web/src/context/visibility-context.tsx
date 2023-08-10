import { createContext, useContext, useEffect, useState } from "react";

import DebugOverlay from "@/components/debug-overlay";

import useNuiEvent from "@/hooks/useNuiEvent";

import { cn, isBrowser } from "@/lib/utils";
import { fetchNui } from "@/lib/nui";

const exitKeys = ["Backspace", "Escape"];

type VisiblityContextValue = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  hide: () => void;
};

const Context = createContext<VisiblityContextValue>({
  visible: false,
  setVisible: (_) => {},
  hide: () => {},
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

  function hide() {
    if (!isBrowser()) {
      fetchNui("hide");
    } else {
      setVisible(false);
    }
  }

  useNuiEvent<boolean>("setVisible", setVisible);

  useEffect(() => {
    if (visible) return;

    function exitHandler(event: KeyboardEvent) {
      if (!exitKeys.includes(event.code)) return;
      hide();
    }

    window.addEventListener("keydown", exitHandler);
    return () => window.removeEventListener("keydown", exitHandler);
  }, []);

  return (
    <Context.Provider
      value={{
        setVisible,
        visible,
        hide: hide,
      }}
    >
      <>
        <DebugOverlay />
        <div className={cn("w-full h-full", visible ? "visible" : "hidden")}>
          {children}
        </div>
      </>
    </Context.Provider>
  );
}

export function useVisibility() {
  return useContext(Context);
}
