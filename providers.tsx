"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { UIProvider } from "@/lib/UIProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  // Important: useState to avoid recreating on every render
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UIProvider>{children}</UIProvider>
    </QueryClientProvider>
  );
}
