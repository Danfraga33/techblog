import { useEffect, useRef } from "react";

export default function NewsTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tickerElement = tickerRef.current;
    if (!tickerElement) return;

    // Calculate the distance of a single pixel movement
    const tickerContent = tickerElement.firstElementChild as HTMLElement;
    if (!tickerContent) return;

    let position = 0;
    const scrollSpeed = 1;

    const animate = () => {
      // Move the position and create continuous scrolling effect
      position -= scrollSpeed;

      // Reset position when first item has scrolled out of view
      const firstItemWidth =
        (tickerContent.firstElementChild as HTMLElement)?.offsetWidth || 0;
      if (Math.abs(position) >= firstItemWidth) {
        // Move the first item to the end
        tickerContent.appendChild(tickerContent.firstElementChild as Node);
        position = 0;
      }

      // Apply the transform
      tickerContent.style.transform = `translateX(${position}px)`;

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // News items array for easy management
  const newsItems = [
    "TSMC doubles Arizona investment to $100B amid Intel Ohio factory delays+++",
    "China's DeepSeek R1 AI surpasses ChatGPT in US app stores - NVDA shares drop 6.2%+++",
    "Pentagon awards Scale AI $450M contract for Thunderforge military planning system+++",
    "Valens Semiconductor unveils MIPI A-PHY chipsets for AI robotics at Embedded World+++",
    "SMCI leads S&P rally with 10.7% surge as US-Canada trade tensions ease+++",
    "Trump proposes 25% semiconductor tariffs - industry groups warn of price hikes+++",
    "Russia accelerates AI military R&D spending - claims battlefield advantage in Ukraine+++",
  ];

  return (
    <div className="mt-4 overflow-hidden bg-black py-4 text-white">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap"
        style={{ width: "100%", display: "flex" }}
      >
        {/* ✅ Duplicate content for smooth looping */}
        <div className="flex whitespace-nowrap">
          {newsItems.map((item, index) => (
            <span key={index} className="inline-block px-4 text-lg">
              {item}
            </span>
          ))}
          {newsItems.slice(0, 5).map((item, index) => (
            <span key={`dup-${index}`} className="inline-block px-4 text-lg">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
