"use client"
import { cn } from "@/lib/utils"

type Props = {
  withText?: boolean
  size?: number
  textSize?: number
  className?: string
}

export function Logo({ withText = true, size = 28, textSize, className }: Props) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img
        src="/logo.png"
        alt="SoulSignal logo"
        width={size}
        height={size}
        className="select-none"
        style={{ width: size, height: size }}
      />
      {withText && <span className="font-display font-bold text-[#5d5970] tracking-wide" style={{ fontSize: textSize || '1.5rem' }}>SoulSignal</span>}
    </div>
  )
}
