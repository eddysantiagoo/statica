"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-7xl font-bold">Error</h1>
      <h2 className="mt-4 text-2xl font-semibold">Algo salió mal</h2>
      <p className="mt-2 text-muted-foreground">
        Ha ocurrido un error inesperado. Por favor, intenta nuevamente.
      </p>
      <Button onClick={() => reset()} className="mt-6">
        Intentar Nuevamente
      </Button>
    </div>
  );
}
