import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FloatingHearts } from '@/components/animations/FloatingHearts';

interface Page1Props {
  onNext: () => void;
}

export function Page1({ onNext }: Page1Props) {
  const [displayedTexts, setDisplayedTexts] = useState<string[]>([]);

  useEffect(() => {
    const texts = [
      'Christiana with the "H".',
      "It's February again.",
      'Funny how we met around this time last year.'
    ];

    let currentIndex = 0;
    const intervals: NodeJS.Timeout[] = [];

    const scheduleNext = (delay: number) => {
      const timeout = setTimeout(() => {
        if (currentIndex < texts.length) {
          setDisplayedTexts(prev => [...prev, texts[currentIndex]]);
          currentIndex++;
          if (currentIndex < texts.length) {
            scheduleNext(2000);
          }
        }
      }, delay);
      intervals.push(timeout as unknown as NodeJS.Timeout);
    };

    scheduleNext(500);

    return () => intervals.forEach(interval => clearTimeout(interval));
  }, []);

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center page-fade-in relative">
      <FloatingHearts />
      
      <div className="relative z-10 max-w-lg px-6 text-center space-y-8">
        {displayedTexts.map((text, idx) => (
          <p
            key={idx}
            className="font-playfair text-3xl md:text-4xl text-foreground fade-in-stagger"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            {text}
          </p>
        ))}
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <Button
          onClick={onNext}
          className="px-8 py-2 button-glow"
        >
          Continue
        </Button>
      </div>
    </main>
  );
}
