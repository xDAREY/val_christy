import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FloatingHearts } from '@/components/animations/FloatingHearts';

interface Page3Props {
  onNext: () => void;
}

export function Page3({ onNext }: Page3Props) {
  const [noClickCount, setNoClickCount] = useState(0);

  const getNoButtonText = () => {
    switch (noClickCount) {
      case 0:
        return 'No 🙃';
      case 1:
        return 'Hmm… are you sure?';
      case 2:
        return 'Be honest… you thought about it.';
      case 3:
        return 'Yes ❤️';
      default:
        return 'Yes ❤️';
    }
  };

  const handleNoClick = () => {
    if (noClickCount < 3) {
      setNoClickCount(noClickCount + 1);
    } else {
      onNext();
    }
  };

  return (
    <main className="w-full h-screen flex flex-col items-center justify-center page-fade-in relative">
      <FloatingHearts />

      <div className="relative z-10 max-w-lg px-6 text-center space-y-12">
        <div className="space-y-4">
          <p className="font-playfair text-2xl text-foreground">
            So Christianah…
          </p>
          <p className="font-playfair text-4xl md:text-5xl text-primary">
            Will you be my Valentine?
          </p>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            onClick={onNext}
            className="px-8 py-2 button-glow"
            size="lg"
          >
            Yes ❤️
          </Button>

          <Button
            onClick={handleNoClick}
            variant="outline"
            className={`px-8 py-2 transition-all ${
              noClickCount > 0 ? 'button-morph' : ''
            }`}
            size="lg"
          >
            {getNoButtonText()}
          </Button>
        </div>

        {noClickCount > 0 && (
          <p className="text-sm text-foreground/60 fade-in-slow">
            {noClickCount === 1 && "Come on, we both know you're thinking about it."}
            {noClickCount === 2 && "Third time's the charm, right?"}
            {noClickCount === 3 && "I'm glad we're finally on the same page."}
          </p>
        )}
      </div>
    </main>
  );
}
