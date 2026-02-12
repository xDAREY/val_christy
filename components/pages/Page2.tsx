import { Button } from '@/components/ui/button';
import { FloatingHearts } from '@/components/animations/FloatingHearts';

interface Page2Props {
  onNext: () => void;
}

export function Page2({ onNext }: Page2Props) {
  return (
    <main className="w-full min-h-screen max-h-screen flex flex-col items-center justify-start page-fade-in relative overflow-y-auto">
      <FloatingHearts />

      <div className="relative z-10 max-w-2xl px-6 py-12 space-y-6 my-auto">
        <div className="glassmorphism p-8 space-y-6">
          <div className="space-y-2">
            <h2 className="font-playfair text-2xl text-foreground">
              Our Story
            </h2>
            <p className="text-sm text-foreground/60">
              A year unfolded differently than expected
            </p>
          </div>

          <div className="space-y-4 text-foreground/80 leading-relaxed">
            <p>
              We matched on Bumble last February. It started light. Easy. Just two people talking without pressure and seeing where it could go.
            </p>

            <p>
              Around May, we decided to take it more seriously. We tried. But over time, I started feeling like the effort was uneven. It felt like one person wanted it a little more than the other, and I have always believed that if something is going to work, the energy has to meet in the middle.
            </p>

            <p>
              So I took a step back. Not out of anger, but out of self respect. I needed to see whether what we were building had equal weight on both sides. When things stayed the same, I accepted it for what it was and let it breathe.
            </p>

            <p>
              This January, I reached out again. I had relocated closer, and I realized distance might have been carrying more blame than it deserved. Sometimes it is easy to call something long distance when the real gap is emotional availability.
            </p>

            <p>
              The late night conversations are not the same now. You are building something new with baking, finding joy in creating something tangible. I respect that. Growth looks different on everyone.
            </p>
            <p>
              But even with the shifts, I still see the girl who made me laugh, who challenged my perspective, who made February mean something unexpected last year.
            </p>

            <p className="pt-4 font-playfair text-lg">
              I do not want confusion this year.
            </p>
          </div>

          <div className="pt-4">
            <Button
              onClick={onNext}
              className="w-full"
            >
              So here's me being clear →
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}