import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-black/5 bg-fog py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </Container>
    </section>
  );
}
