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
              We matched on Bumble last February. It started simple. Just two people talking, laughing, figuring each other out without pressure.
            </p>

            <p>
              Around May, we tried to take it more seriously. And I meant it. But over time, I started feeling like the effort was uneven. It felt like one person was leaning in more than the other, and I have always believed that something real requires both people choosing it fully.
            </p>

            <p>
              So I stepped back. Not out of pride. Not out of anger. Just out of self respect. I needed to see if what we had would naturally meet me halfway. When it did not shift, I accepted it quietly.
            </p>

            <p>
              In January, I reached out again. I had relocated closer, and I realized maybe distance had been carrying more blame than it deserved. Sometimes it is easy to call something long distance when what we are really testing is consistency.
            </p>

            <p>
              The late night talks are not what they used to be. You are building something new with baking, finding joy in creating something tangible. I see that. I respect it.
            </p>

            <p>
              There is something small I have come to understand about myself. The little things matter to me. A random picture. A short video. Something unprompted that says, “I thought of you.” It may seem small, but to me it is connection. It is effort. It is reassurance.
            </p>

            <p>
              When those moments are missing, it does not make me angry. It just makes me aware. I am not asking for grand gestures. I am asking for intentional ones. I believe the smallest actions often carry the loudest meaning.
            </p>

            <p>
              And even with all the shifts, I still see the girl who makes conversations interesting. The one I still genuinely enjoy.
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