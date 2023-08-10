import { useState } from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "./components/ui/label";
import { useVisibility } from "./context/visibility-context";

const dummyPlayers = [
  {
    id: 1,
    name: "Thoo",
  },
  {
    id: 2,
    name: "Chino",
  },
  {
    id: 3,
    name: "Hoax",
  },
  {
    id: 4,
    name: "d0tt3d",
  },
  {
    id: 5,
    name: "Steen",
  },
];

function PlayerComboBox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? dummyPlayers.find((player) => player.name === value)?.name
            : "Select player..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0">
        <div>
          {dummyPlayers.map((player) => (
            <div
              key={player.id}
              className={cn(
                "flex items-center justify-between px-4 py-2 cursor-pointer",
                value === player.name
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-gray-100"
              )}
              onClick={() => {
                setValue(player.name);
                setOpen(false);
              }}
            >
              <span>{`[${player.id}] ${player.name}`}</span>
              {value === player.name && <Check className="h-4 w-4" />}
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default function App() {
  const { hide } = useVisibility();

  return (
    <div className="w-96 bg-background rounded border flex flex-col p-5 gap-5">
      <h1 className="text-center text-2xl font-bold pb-5">Create Gang</h1>
      <div className="space-y-6">
        <div className="flex flex-col gap-y-2">
          <Label>Name</Label>
          <Input placeholder="Bratva" />
        </div>

        <div className="flex flex-col gap-y-2">
          <Label>Leader</Label>
          <PlayerComboBox />
        </div>
      </div>
      <Button onClick={() => hide()}>Create Gang</Button>
    </div>
  );
}
