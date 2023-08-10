import { useVisibility } from "@/context/visibility-context";

import { Button } from "@/components/ui/button";

import { isBrowser } from "@/lib/utils";

export default function DebugOverlay() {
  if (!isBrowser()) return null;

  const { visible, setVisible } = useVisibility();

  return (
    <div className="absolute left-2 top-2">
      <div className="p-5 border rounded space-y-5 text-left">
        <h1 className="font-bold text-lg">Debug Overlay</h1>

        <div className="w-44 space-y-5">
          <div className="flex flex-col text-left">
            <p>Visible: {visible.toString()}</p>
          </div>

          <div className="flex flex-col gap-y-2">
            <Button onClick={() => setVisible(true)}>Show NUI</Button>
            <Button onClick={() => setVisible(false)}>Hide NUI</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
