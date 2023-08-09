import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function App() {
  return (
    <div className="w-96 bg-background rounded border flex flex-col p-5 gap-5">
      <div className="space-y-2">
        <Input placeholder="Je Moeder..." />
        <Input placeholder="Je Vader..." />
        <Input placeholder="Je Zus..." />
        <Input placeholder="Je Broer..." />
        <Input placeholder="Je Nicht..." />
        <Input placeholder="Je Neef..." />
      </div>
      <Button>Submit Porn Clip</Button>
    </div>
  );
}
