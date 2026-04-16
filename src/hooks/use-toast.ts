import { useState } from "react";

type Toast = { id: number; title?: string; description?: string };

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toast = ({ title, description }: { title?: string; description?: string }) => {
    setToasts((prev) => [...prev, { id: Date.now(), title, description }]);
  };
  return { toast, toasts };
}
