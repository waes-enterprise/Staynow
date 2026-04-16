"use client"

import { useToast } from "@hooks/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 flex flex-col gap-2">
      {toasts.map(({ id, title, description }) => (
        <div key={id} className="bg-white border rounded shadow p-4 min-w-[200px]">
          {title && <div className="font-semibold">{title}</div>}
          {description && <div className="text-sm text-gray-500">{description}</div>}
        </div>
      ))}
    </div>
  )
}
