import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const partnerLogos = Object.values(
  import.meta.glob("@/assets/partners/*.{png,jpg,jpeg,webp}", {
    eager: true,
    import: "default",
  })
) as string[];

const Partners3DSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying || isHovered || partnerLogos.length === 0) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % partnerLogos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered]);

  const getVisibleLogos = useCallback(() => {
    const logos = [];
    for (let i = -3; i <= 3; i++) {
      const index =
        (currentIndex + i + partnerLogos.length) % partnerLogos.length;
      logos.push({ index, position: i, logo: partnerLogos[index] });
    }
    return logos;
  }, [currentIndex]);

  const getCardStyles = (position: number) => {
    const abs = Math.abs(position);

    return {
      x: position * 160,
      scale: position === 0 ? 1.15 : 1 - abs * 0.12,
      rotateY: position * -20,
      opacity: position === 0 ? 1 : 1 - abs * 0.25,
      zIndex: 10 - abs,
    };
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + partnerLogos.length) % partnerLogos.length
    );
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % partnerLogos.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const groupCount = 7;
  const groupSize = Math.ceil(partnerLogos.length / groupCount);
  const currentGroup = Math.floor(currentIndex / groupSize);

  if (!partnerLogos.length) return null;

  return (
    <div
      className="relative w-full py-20 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 blur-3xl" />
      </div>

      <div
        className="relative h-[320px] flex items-center justify-center max-w-6xl mx-auto"
        style={{ perspective: "1200px" }}
      >
        <button
          onClick={handlePrev}
          className="absolute left-4 z-30 bg-gradient-to-r from-accent to-primary p-4 rounded-full shadow-lg"
        >
          <ArrowRight className="text-white w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 z-30 bg-gradient-to-r from-primary to-accent p-4 rounded-full shadow-lg"
        >
          <ArrowLeft className="text-white w-6 h-6" />
        </button>

        <div
          className="relative w-full flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <AnimatePresence>
            {getVisibleLogos().map(({ index, position, logo }) => {
              const styles = getCardStyles(position);
              const isCenter = position === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={styles}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 260, damping: 25 }}
                  className="absolute cursor-pointer"
                >
                  <div
                    className={`relative rounded-3xl p-6 bg-white shadow-xl border-2 ${
                      isCenter ? "border-accent" : "border-transparent"
                    }`}
                  >
                    {isCenter && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-accent to-primary p-2 rounded-full shadow-lg">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                    )}

                    <img
                      src={logo}
                      alt={`شريك ${index + 1}`}
                      className={`object-contain mx-auto ${
                        isCenter
                          ? "w-36 h-36"
                          : "w-24 h-24 opacity-70"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* النقاط */}
      {/* <div className="flex justify-center mt-8 gap-3">
        {Array.from({ length: groupCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i * groupSize)}
            className={`h-3 rounded-full transition-all ${
              currentGroup === i
                ? "w-10 bg-gradient-to-r from-accent to-primary"
                : "w-3 bg-gray-300"
            }`}
          />
        ))}
      </div> */}

      {/* عدد الشركاء */}
      {/* <div className="mt-10 text-center">
        <span className="text-muted-foreground">أكثر من </span>
        <span className="text-accent font-bold text-xl mx-1">
          {partnerLogos.length}
        </span>
        <span className="text-muted-foreground"> شريك نجاح</span>
      </div> */}
    </div>
  );
};

export default Partners3DSlider;
