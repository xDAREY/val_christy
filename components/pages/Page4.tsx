import { Button } from '@/components/ui/button';
import { Confetti } from '@/components/animations/Confetti';

interface Page4Props {
  onReset: () => void;
}

export function Page4({ onReset }: Page4Props) {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center page-fade-in relative bg-gradient-to-br from-primary/5 via-white to-secondary/5">
      <Confetti />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-lg px-6 text-center space-y-8">
        <div className="space-y-4">
          <p className="font-playfair text-4xl md:text-5xl text-foreground">
            Okay.
          </p>
          <p className="font-playfair text-3xl md:text-4xl text-primary">
            This year feels different.
          </p>
        </div>

        <p className="text-lg text-foreground/70 leading-relaxed">
          No confusion. No distance. Just intentional.
        </p>

        {/* <p className="text-sm text-foreground/60">
          Last February we matched. This February I'm asking properly.
        </p> */}

        <div className="pt-8">
          <Button
            onClick={onReset}
            variant="outline"
            className="text-sm"
          >
            Start Over
          </Button>
        </div>
      </div>
    </main>
  );
}
