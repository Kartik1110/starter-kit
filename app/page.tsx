import { button as buttonStyles } from "@nextui-org/theme";
import { Link } from "@nextui-org/link";
import { title, subtitle } from "@/components/primitives";
import Card from "@/components/card";
import { SITE_CONFIG } from "@/config/site";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 overflow-y-hidden">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Build and monetize &nbsp;</h1>
        <h1 className={title()}>your&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>twitter&nbsp;</h1>
        <br />
        <h1 className={title()}>
          audience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          {SITE_CONFIG.text.subtitle}
        </h2>
      </div>
      <div className="flex gap-3">
        <Link
          isExternal
          href={SITE_CONFIG.links.docs}
          className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
        >
          Get Started
        </Link>
      </div>

      <div>
        <Card />
      </div>

    </section>
  );
}
