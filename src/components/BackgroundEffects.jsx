import { useEffect } from "react";

const particles = [
  { left: "8%", top: "16%", size: "0.45rem", delay: "0s", duration: "11s" },
  { left: "18%", top: "72%", size: "0.35rem", delay: "1.6s", duration: "13s" },
  { left: "26%", top: "34%", size: "0.55rem", delay: "0.8s", duration: "15s" },
  { left: "34%", top: "58%", size: "0.4rem", delay: "2.2s", duration: "12s" },
  { left: "42%", top: "22%", size: "0.6rem", delay: "1.1s", duration: "16s" },
  { left: "49%", top: "82%", size: "0.3rem", delay: "3.1s", duration: "10s" },
  { left: "56%", top: "44%", size: "0.5rem", delay: "1.8s", duration: "14s" },
  { left: "63%", top: "14%", size: "0.38rem", delay: "0.4s", duration: "12.5s" },
  { left: "71%", top: "68%", size: "0.62rem", delay: "2.8s", duration: "17s" },
  { left: "78%", top: "28%", size: "0.34rem", delay: "1.3s", duration: "11.5s" },
  { left: "86%", top: "52%", size: "0.48rem", delay: "2.1s", duration: "13.5s" },
  { left: "92%", top: "78%", size: "0.42rem", delay: "0.9s", duration: "15.5s" },
];

const BackgroundEffects = () => {
  useEffect(() => {
    const root = document.documentElement;
    let frameId = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let leadX = targetX;
    let leadY = targetY;
    let midX = targetX;
    let midY = targetY;
    let tailX = targetX;
    let tailY = targetY;
    let driftX = targetX;
    let driftY = targetY;

    const syncVariables = () => {
      leadX += (targetX - leadX) * 0.16;
      leadY += (targetY - leadY) * 0.16;
      midX += (leadX - midX) * 0.1;
      midY += (leadY - midY) * 0.1;
      tailX += (midX - tailX) * 0.075;
      tailY += (midY - tailY) * 0.075;
      driftX += (tailX - driftX) * 0.05;
      driftY += (tailY - driftY) * 0.05;

      root.style.setProperty("--cursor-x", `${leadX}px`);
      root.style.setProperty("--cursor-y", `${leadY}px`);
      root.style.setProperty("--cursor-x-mid", `${midX}px`);
      root.style.setProperty("--cursor-y-mid", `${midY}px`);
      root.style.setProperty("--cursor-x-tail", `${tailX}px`);
      root.style.setProperty("--cursor-y-tail", `${tailY}px`);
      root.style.setProperty("--cursor-x-drift", `${driftX}px`);
      root.style.setProperty("--cursor-y-drift", `${driftY}px`);

      frameId = window.requestAnimationFrame(syncVariables);
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    frameId = window.requestAnimationFrame(syncVariables);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="liquid-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 28 -12
              "
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_30%),radial-gradient(circle_at_80%_18%,_rgba(252,255,51,0.07),_transparent_20%),linear-gradient(180deg,_rgba(11,14,20,0.92)_0%,_rgba(6,8,13,0.98)_100%)]" />
      <div className="absolute left-[-10rem] top-[18%] h-80 w-80 rounded-full bg-cyan-400/8 blur-3xl" />
      <div className="absolute right-[-12rem] top-[42%] h-96 w-96 rounded-full bg-lime-300/7 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-[18%] h-72 w-72 rounded-full bg-sky-400/8 blur-3xl" />
      <div className="absolute inset-0">
        {particles.map((particle, index) => (
          <span
            key={`${particle.left}-${particle.top}-${index}`}
            className="ambient-particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
      <div className="liquid-glow-group">
        <div className="cursor-blob cursor-blob-primary" />
        <div className="cursor-blob cursor-blob-secondary" />
        <div className="cursor-blob cursor-blob-tertiary" />
        <div className="cursor-blob cursor-blob-quaternary" />
        <div className="cursor-blob cursor-blob-ripple" />
        <div className="cursor-blob cursor-blob-aura" />
      </div>
    </div>
  );
};

export default BackgroundEffects;
