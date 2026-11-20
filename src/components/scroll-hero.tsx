"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { heroSlides } from "@/lib/site-data";

export function ScrollHero() {
  const wrapperRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const lastScrollStepRef = useRef(0);
  const pauseTicksRef = useRef(0);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!wrapperRef.current || !stageRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const distance = Math.max(1, rect.height - stageRef.current.offsetHeight);
      const nextProgress = Math.max(0, Math.min(1, -rect.top / distance));
      const step = Math.min(heroSlides.length - 1, Math.floor(nextProgress * heroSlides.length));
      setProgress(nextProgress);
      if (step !== lastScrollStepRef.current) {
        lastScrollStepRef.current = step;
        pauseTicksRef.current = 1;
        setActive(step);
      }
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (document.hidden || !wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      if (pauseTicksRef.current > 0) {
        pauseTicksRef.current -= 1;
        return;
      }
      setActive((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const selectSlide = (index: number) => {
    pauseTicksRef.current = 1;
    setActive(index);
  };

  const slide = heroSlides[active];

  return (
    <section className="scroll-hero" ref={wrapperRef} aria-label="Discover SPC International through rotating images and scroll stories">
      <div className="hero-stage" ref={stageRef}>
        <div className="hero-photo-stack" aria-hidden="true">
          {/* {heroSlides.map((item, index) => <div key={item.image} className={index === active ? "hero-photo active" : "hero-photo"}><Image src={item.image} alt="" fill sizes="100vw" priority={index === 0} loading={index === 0 ? undefined : "eager"} /></div>)} */}
        {heroSlides.map((item, index) => <div key={item.image} className={index === active ? "hero-photo active" : "hero-photo"}><Image src={item.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1200px) 100vw, 1920px" quality={90} priority={index === 0} loading={index === 0 ? undefined : "eager"} /></div>)}
        </div>
        <div className="hero-shade" />
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="site-container hero-content">
          <div key={active} className="hero-copy">
            <p className="hero-eyebrow"><span className="hero-eyebrow-line" /> {slide.eyebrow}</p>
            <h1>{slide.firstLine}<br /><span>{slide.secondLine}</span></h1>
            <p className="hero-description">{slide.description}</p>
            <div className="hero-actions"><Link href="/opportunities" className="button button-orange">Explore opportunities <ArrowUpRight size={18} /></Link><Link href="/contact?type=employer" className="hero-text-link">For employers <MoveUpRight size={16} /></Link></div>
          </div>
          <div className="hero-side-note" aria-hidden="true"><span className="hero-side-line" /> PEOPLE FIRST. POSSIBILITIES EVERYWHERE.</div>
        </div>
        <div className="site-container hero-bottom">
          <div className="hero-scroll-hint"><span className="hero-scroll-icon"><ArrowDown size={17} /></span><span>SCROLL OR STAY A WHILE<br /><small>Four stories, one purpose</small></span></div>
          <div className="hero-slide-nav" aria-label="Hero images">
            {heroSlides.map((item, index) => <button key={item.label} type="button" className={active === index ? "hero-slide-button active" : "hero-slide-button"} onClick={() => selectSlide(index)} aria-label={`Show slide ${index + 1}: ${item.label}`} aria-current={active === index ? "true" : undefined}><span className="hero-slide-num">0{index + 1}</span><span className="hero-slide-track"><span /></span><span className="hero-slide-label">{item.label}</span></button>)}
          </div>
          <div className="hero-counter"><strong>0{active + 1}</strong><span> / 0{heroSlides.length}</span></div>
        </div>
        <div className="hero-progress-edge" style={{ transform: `scaleY(${Math.max(0.02, progress)})` }} aria-hidden="true" />
      </div>
    </section>
  );
}
