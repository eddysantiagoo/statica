import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Página No Encontrada</h2>
      <p className="mt-2 text-muted-foreground">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Volver al Inicio</Link>
      </Button>
    </div>
  );
}
