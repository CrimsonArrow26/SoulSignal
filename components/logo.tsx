"use client"
import { cn } from "@/lib/utils"

type Props = {
  withText?: boolean
  size?: number
  className?: string
}

export function Logo({ withText = true, size = 28, className }: Props) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src="/logo.png"
        alt="SoulSignal logo"
        width={size}
        height={size}
        className="h-7 w-7 md:h-8 md:w-8 select-none"
      />
      {withText && <span className="font-display text-[#5d5970] text-lg md:text-xl tracking-wide">SoulSignal</span>}
    </div>
  )
}
