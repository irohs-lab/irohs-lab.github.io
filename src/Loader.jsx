import { useEffect, useRef, useState } from "react";

export default function Loader({ onComplete }) {
  const canvasRef = useRef(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const W = 320, H = 320;
    const BLUE = "#2563c4";
    const BLUE_LIGHT = "rgba(37,99,196,0.12)";
    const BLUE_MID = "rgba(37,99,196,0.35)";

    const layers = [
      [{ x: 160, y: 60 }],
      [{ x: 90, y: 130 }, { x: 160, y: 130 }, { x: 230, y: 130 }],
      [{ x: 60, y: 200 }, { x: 120, y: 200 }, { x: 200, y: 200 }, { x: 260, y: 200 }],
      [{ x: 120, y: 265 }, { x: 200, y: 265 }],
    ];

    const allNodes = layers.flat();
    const connections = [];
    for (let i = 0; i < layers.length - 1; i++) {
      for (let a of layers[i]) {
        for (let b of layers[i + 1]) {
          connections.push({ a, b });
        }
      }
    }

    const totalDuration = 2200;
    const start = performance.now();
    let raf;

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function draw(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / totalDuration, 1);

      ctx.clearRect(0, 0, W, H);

      const connProgress = Math.min(progress / 0.6, 1);
      connections.forEach((c, i) => {
        const delay = i / connections.length * 0.5;
        const p = easeOut(Math.max(0, Math.min((connProgress - delay) / 0.5, 1)));
        if (p <= 0) return;
        const x = c.a.x + (c.b.x - c.a.x) * p;
        const y = c.a.y + (c.b.y - c.a.y) * p;
        ctx.beginPath();
        ctx.moveTo(c.a.x, c.a.y);
        ctx.lineTo(x, y);
        ctx.strokeStyle = BLUE_MID;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      const nodeProgress = Math.min((progress - 0.1) / 0.7, 1);
      allNodes.forEach((n, i) => {
        const delay = i / allNodes.length * 0.4;
        const p = easeOut(Math.max(0, Math.min((nodeProgress - delay) / 0.5, 1)));
        if (p <= 0) return;
        const r = 8 * p;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r + 4, 0, Math.PI * 2);
        ctx.fillStyle = BLUE_LIGHT;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = "#f8f7f3";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = BLUE;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        if (p > 0.8) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, 3 * p, 0, Math.PI * 2);
          ctx.fillStyle = BLUE;
          ctx.fill();
        }
      });

      if (progress < 1) {
        raf = requestAnimationFrame(draw);
      } else {
        setTimeout(() => {
          setHidden(true);
          onComplete?.();
        }, 600);
      }
    }

    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (hidden) return null;

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: "#f8f7f3",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexDirection: "column",
      zIndex: 9999,
      transition: "opacity 0.8s ease",
    }}>
      <canvas ref={canvasRef} width={320} height={320} />
      <p style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: "1.1rem",
        color: "#2563c4",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginTop: "1rem",
        animation: "fadeIn 0.6s ease 1.2s both",
      }}>
        IROHS · lab
      </p>
      <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>
    </div>
  );
}