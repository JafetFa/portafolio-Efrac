import { FadeUp } from "@/components/motion";

const techs = [
  "AWS",
  "Next.js",
  "TypeScript",
  "Docker",
  "PostgreSQL",
  "OpenAI",
];

export function TrustBar() {
  return (
    <section className="py-10 border-b border-border bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Tecnologías con las que construyo
          </p>
        </FadeUp>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {techs.map((t, i) => (
            <FadeUp key={t} delay={0.05 * i}>
              <span className="font-display text-lg md:text-xl font-semibold text-foreground/60 hover:text-foreground transition-colors cursor-default">
                {t}
              </span>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}