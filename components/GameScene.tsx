import Link from "next/link";

type GameSceneProps = {
  eyebrow: string;
  imageAlt: string;
  imagePosition?: string;
  imageSrc: string;
  subtitle: string;
  title: string;
};

export function GameScene({
  eyebrow,
  imageAlt,
  imagePosition = "center",
  imageSrc,
  subtitle,
  title,
}: GameSceneProps) {
  return (
    <main className="scene-page">
      <img
        alt=""
        aria-hidden="true"
        className="scene-backdrop"
        src={imageSrc}
        style={{ objectPosition: imagePosition }}
      />
      <div className="scene-shade" />

      <img
        alt={imageAlt}
        className="scene-photo"
        src={imageSrc}
        style={{ objectPosition: imagePosition }}
      />

      <Link className="scene-back-link" href="/">
        Back
      </Link>

      <section className="scene-copy">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-orange-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-[clamp(3rem,9vw,7rem)] uppercase leading-[0.84] tracking-0">
          {title}
        </h1>
        <p className="mt-4 max-w-[34rem] text-sm leading-6 text-white/72 sm:text-base">
          {subtitle}
        </p>
      </section>
    </main>
  );
}
