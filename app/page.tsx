"use client"

import type React from "react"
import { Heart, Shuffle, EyeOff } from "lucide-react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import { Logo } from "@/components/logo"

const MOBILE_APP_URL = process.env.NEXT_PUBLIC_MOBILE_APP_URL || "https://example.com/app"
const DOWNLOAD_URL = process.env.NEXT_PUBLIC_APP_DOWNLOAD_URL || MOBILE_APP_URL

function useReveal(ref: React.RefObject<HTMLElement>, options?: { y?: number; duration?: number; delay?: number }) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return

    const y = options?.y ?? 24
    const duration = options?.duration ?? 0.7
    const delay = options?.delay ?? 0

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(entry.target, { opacity: 0, y }, { opacity: 1, y: 0, duration, ease: "power2.out", delay })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options?.y, options?.duration, options?.delay])
}

function Navbar() {
  return (
    <header
      className="w-full sticky top-0 z-50 backdrop-blur-lg border-b border-[#fcd0c8]/60 shadow-[0_8px_24px_rgba(93,89,112,0.06)] bg-transparent"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2" aria-label="SoulSignal Home">
          <Logo withText size={40} />
        </a>
        <nav className="hidden md:flex items-center gap-16">
          <a 
            className="text-sm text-[#5d5970]/80 hover:text-[#5d5970] transition-colors cursor-pointer" 
            href="#features"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            Features
          </a>
          <a 
            className="text-sm text-[#5d5970]/80 hover:text-[#5d5970] transition-colors cursor-pointer" 
            href="#stories"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("stories")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            Stories
          </a>
          <a
            className="text-sm text-[#5d5970]/80 hover:text-[#5d5970] transition-colors cursor-pointer"
            href="#app"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("app")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            App
          </a>
        </nav>
        <div className="flex items-center">
          <div className="relative">
            <button
              className="h-9 px-4 rounded-lg bg-[#fcd0c8] text-[#5d5970] hover:bg-[#fcd0c8]/90 shadow-sm border border-gray-300 backdrop-blur-md cursor-pointer hover:outline hover:outline-2 hover:outline-gray-400 hover:outline-offset-2 transition-all duration-50 ease-out"
              onClick={() => window.location.assign(MOBILE_APP_URL)}
              aria-label="Get started on SoulSignal"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced) return
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
    tl.fromTo(titleRef.current, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 })
      .fromTo(subRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
      .fromTo(ctaRef.current, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.25")
      .fromTo(imgRef.current, { scale: 0.96, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 }, "-=0.15")
    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section ref={rootRef} className="w-full" aria-label="Hero">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1
            ref={titleRef}
            className="font-display text-pretty text-4xl md:text-5xl font-extrabold tracking-tight text-[#5d5970]"
          >
            Find real connections that feel easy
          </h1>
          <p ref={subRef} className="text-[#5d5970]/80 leading-relaxed max-w-prose">
            Meet people who match your vibe. Simple profiles, meaningful chats, and zero pressure. Love should be
            effortless—start here.
          </p>

          <div ref={ctaRef} className="mt-4">
            <button
              className="h-11 px-5 rounded-lg bg-[#fcd0c8] text-[#5d5970] hover:bg-[#fcd0c8]/90 shadow-sm border border-white/40 backdrop-blur-md hover:scale-105 hover:shadow-lg/20 transition-all duration-100 cursor-pointer"
              onClick={() => window.location.assign(MOBILE_APP_URL)}
              aria-label="Open SoulSignal mobile web app"
            >
              Get started
            </button>
          </div>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              <img src="/diverse-user-avatars.png" alt="" className="h-8 w-8 rounded-full border border-white" />
              <img src="/diverse-user-avatars.png" alt="" className="h-8 w-8 rounded-full border border-white" />
              <img src="/diverse-user-avatars.png" alt="" className="h-8 w-8 rounded-full border border-white" />
            </div>
            <p className="text-sm text-[#5d5970]/70">10,000+ already on the list</p>
          </div>
        </div>

        <div ref={imgRef} className="relative">
          <div className="rounded-xl border border-white/40 bg-white/60 backdrop-blur-md p-4 md:p-6 shadow-[0_8px_24px_rgba(93,89,112,0.08)]">
            <img
              src="/couple-app-ui.png"
              alt="Preview of matching profiles and chat UI"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef as React.RefObject<HTMLElement>)

  const features = [
    {
      title: "Smart Matches",
      desc: "Quality over quantity. See people who actually fit your style and interests.",
      Icon: Heart,
    },
    {
      title: "Chat Roulette",
      desc: "Spin to meet someone compatible in seconds—frictionless, fun, and serendipitous chats.",
      Icon: Shuffle,
    },
    {
      title: "Mystery Mode",
      desc: "Hide photos and connect on vibe first—reveal looks only when you both choose to.",
      Icon: EyeOff,
    },
  ]

  return (
    <section id="features" ref={sectionRef} aria-label="Features">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-18">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#5d5970]">Designed for real chemistry</h2>
          <p className="text-[#5d5970]/80 leading-relaxed">
            No games, no noise. Just thoughtful tools to help you find your person.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map(({ title, desc, Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-white/40 bg-white/60 backdrop-blur-md p-5 flex flex-col gap-3 shadow-sm hover:scale-105 hover:shadow-lg/20 transition-all duration-250"
            >
              <div
                className="h-10 w-10 flex items-center justify-center rounded-full bg-[#fcd0c8] text-[#5d5970]"
                aria-hidden="true"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-[#5d5970]">{title}</h3>
              <p className="text-sm text-[#5d5970]/80 leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Stories() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef as React.RefObject<HTMLElement>)

  const stories = [
    {
      name: "Aarav & Siya",
      quote: "We matched on a rainy Sunday and talked for hours. Three months later, we moved in together.",
      img: "/indian-couple-1.png",
    },
    {
      name: "Rahul & Priya",
      quote: "It felt easy from day one—no pressure, just good conversation that flowed.",
      img: "/indian-couple-2.png",
    },
  ]

  return (
    <section id="stories" ref={sectionRef} aria-label="Success stories" className="group">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-18 relative">

        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 md:mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[#5d5970]">Stories from SoulSignal</h2>
          <p className="text-[#5d5970]/80 leading-relaxed">
            Real people, real connections. Here are a couple of favorites from our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {stories.map((s) => (
            <article
              key={s.name}
              className="group/card rounded-xl border border-white/40 bg-white/60 backdrop-blur-md p-6 md:p-8 shadow-[0_8px_24px_rgba(93,89,112,0.08)] relative overflow-hidden"
              data-animate="story-card"
            >
              <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none">

                <div className="absolute bottom-6 right-6 text-pink-300 animate-bounce" style={{animationDelay: '0.3s'}}>💕</div>
                <div className="absolute bottom-4 left-4 text-red-300 animate-pulse" style={{animationDelay: '0.6s'}}>💌💝</div>
              </div>
              
              <figure className="flex items-start gap-4 relative z-10">
                <img
                  src={s.img || "/placeholder.svg?height=80&width=80&query=indian%20couple%20portrait"}
                  alt={`${s.name} smiling together`}
                  className="h-16 w-16 md:h-20 md:w-20 rounded-full border border-white/40"
                />
                <div className="space-y-2">
                  <blockquote className="text-[#5d5970] leading-relaxed">“{s.quote}”</blockquote>
                  <figcaption className="text-sm text-[#5d5970]/70">— {s.name}</figcaption>
                </div>
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AppDownload() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef as React.RefObject<HTMLElement>, { y: 24 })

  return (
    <section id="app" ref={sectionRef} aria-label="Download the app">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="rounded-2xl border border-white/40 backdrop-blur-md p-6 md:p-10 shadow-[0_8px_24px_rgba(93,89,112,0.08)] bg-[rgba(251,216,209,1)]">
          <div className="grid md:grid-cols-[1fr_auto] items-center gap-8">
            <div className="space-y-3">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[#5d5970]">Get the SoulSignal app</h3>
              <p className="text-[#5d5970]/80 leading-relaxed">
                Scan the QR with your phone camera to open the app, or tap download.
              </p>
              <div className="pt-2">
                <Button
                  className="h-11 px-5 rounded-lg bg-[#fcd0c8] text-[#5d5970] hover:bg-[#FFFFFF]/90 shadow-sm border border-white/40 backdrop-blur-md bg-[rgba(250,235,232,1)]"
                  onClick={() => window.location.assign(DOWNLOAD_URL)}
                  aria-label="Download the SoulSignal app"
                >
                  Download the app
                </Button>
              </div>
            </div>
            <div className="justify-self-center">
              <div className="rounded-xl border border-white/40 bg-white/80 p-3 shadow-sm">
                <img
                  src="/qr-code.png"
                  alt="QR code to open the SoulSignal app download"
                  className="h-40 w-40 md:h-48 md:w-48"
                />
              </div>
              <p className="text-xs text-[#5d5970]/60 text-center mt-2">Scan with your phone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  const sectionRef = useRef<HTMLElement>(null)
  useReveal(sectionRef as React.RefObject<HTMLElement>, { y: 30 })

  return <section id="join" ref={sectionRef} aria-label="Call to action"></section>
}

function Footer() {
  return (
    <footer className="w-full bg-transparent border-t border-[#fcd0c8]/60" aria-label="Footer">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#5d5970]/70">© {new Date().getFullYear()} SoulSignal. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-[#5d5970]/70 hover:text-[#5d5970]">
            Privacy
          </a>
          <a href="#" className="text-sm text-[#5d5970]/70 hover:text-[#5d5970]">
            Terms
          </a>
          <a href="#" className="text-sm text-[#5d5970]/70 hover:text-[#5d5970]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main
      className={cn("min-h-[100svh] font-sans")}
      style={{
        backgroundColor: "#faeae8",
        color: "#5d5970",
      }}
    >
      <Navbar />
      <Hero />
      <Features />
      <Stories />
      <AppDownload />
      <CTA />
      <Footer />
    </main>
  )
}
