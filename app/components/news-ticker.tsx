import { useEffect, useRef } from "react";

export default function NewsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tickerElement = tickerRef.current;
    if (!tickerElement) return;

    const scrollTicker = () => {
      // Scroll the ticker by 1 pixel
      tickerElement.scrollLeft += 1;

      // Reset the scroll position when it reaches halfway
      if (tickerElement.scrollLeft >= tickerElement.scrollWidth / 2) {
        tickerElement.scrollLeft = 0;
      }
    };

    // Use requestAnimationFrame for smoother animation
    let animationFrameId: number;
    const animate = () => {
      scrollTicker();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    // Cleanup function to stop the animation
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="mt-4 overflow-hidden bg-black py-4 text-white">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap"
        style={{ width: "100%", display: "flex" }}
      >
        {/* ✅ Duplicate content for smooth looping */}
        <div className="flex">
          <span className="inline-block pr-8">
            TSMC doubles Arizona investment to $100B amid Intel Ohio factory
            delays+++
          </span>
          <span className="inline-block pr-8">
            China's DeepSeek R1 AI surpasses ChatGPT in US app stores - NVDA
            shares drop 6.2%+++
          </span>
          <span className="inline-block pr-8">
            Pentagon awards Scale AI $450M contract for Thunderforge military
            planning system+++
          </span>
          <span className="inline-block pr-8">
            Valens Semiconductor unveils MIPI A-PHY chipsets for AI robotics at
            Embedded World+++
          </span>
          <span className="inline-block pr-8">
            SMCI leads S&P rally with 10.7% surge as US-Canada trade tensions
            ease+++
          </span>
          <span className="inline-block pr-8">
            Trump proposes 25% semiconductor tariffs - industry groups warn of
            price hikes+++
          </span>
          <span className="inline-block pr-8">
            Russia accelerates AI military R&D spending - claims battlefield
            advantage in Ukraine+++
          </span>
        </div>

        {/* 🔄 Duplicate content to allow smooth scrolling */}
      </div>
    </div>
  );
}
