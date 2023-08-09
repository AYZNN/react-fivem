import { VisibilityProvider } from "@/context/visibility-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <VisibilityProvider>
      <div className="grid w-full h-full place-items-center">{children}</div>
    </VisibilityProvider>
  );
}
