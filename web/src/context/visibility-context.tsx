import { createContext, useContext, useState } from "react";

type VisiblityContextValue = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const Context = createContext<VisiblityContextValue>({
  visible: false,
  setVisible: (_) => {},
});

export function VisibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <Context.Provider
      value={{
        setVisible,
        visible,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useVisibility() {
  return useContext(Context);
}
