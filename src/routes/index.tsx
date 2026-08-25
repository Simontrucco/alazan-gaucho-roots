import { createFileRoute, Link } from "@tanstack/react-router";

import type { Seccion } from "./tienda";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alazán — Talabartería y marroquinería del campo argentino" },
      {
        name: "description",
        content:
          "Alazán: talabartería, marroquinería, indumentaria y tradición. Cuero noble, oficio gaucho y piezas hechas para durar generaciones.",
      },
      { property: "og:title", content: "Alazán — Oficio del campo argentino" },
      {
        property: "og:description",
        content:
          "Talabartería, marroquinería, indumentaria y tradición. Piezas de cuero noble hechas a mano en Argentina.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const secciones: { nombre: Seccion; codigo: string }[] = [
  { nombre: "Talabartería", codigo: "01" },
  { nombre: "Marroquinería", codigo: "02" },
  { nombre: "Indumentaria", codigo: "03" },
  { nombre: "Tradición", codigo: "04" },
];

const duos: {
  nombre: Seccion;
  img: string;
  alt: string;
  detalle: string;
  tono: string;
}[][] = [
  [
    {
      nombre: "Talabartería",
      img: "/Talabarteria1.jfif",
      alt: "Estribo de alpaca y cuero sobre pelaje de caballo",
      detalle: "Cabezadas, riendas, bastos y estribos armados de a uno.",
      tono: "bg-bordo",
    },
    {
      nombre: "Marroquinería",
      img: "/Marroquineria1.jfif",
      alt: "Botas de cuero marrón en el estribo",
      detalle: "Cintos, rastras, botas y cuchilleros en vaqueta curtida.",
      tono: "bg-cuero",
    },
  ],
  [
    {
      nombre: "Indumentaria",
      img: "/Indumentaria1.jfif",
      alt: "Bombacha de campo y alpargata roja en el estribo",
      detalle: "Bombachas, alpargatas, fajas y camisas de trabajo.",
      tono: "bg-tinta",
    },
    {
      nombre: "Tradición",
      img: "/Tradicion1.jpg",
      alt: "Paisano cebando un mate en la penumbra del galpón",
      detalle: "Mates, bombillas, pavas y piezas de ronda criolla.",
      tono: "bg-bordo",
    },
  ],
];

const cuidados = [
  {
    t: "Limpieza",
    d: "Paño apenas húmedo y jabón neutro. Nunca detergentes ni alcohol: abren el poro del cuero.",
  },
  {
    t: "Nutrición",
    d: "Grasa de potro o cera natural cada tres meses. Poca cantidad, en capas finas, con la mano.",
  },
  {
    t: "Secado",
    d: "Siempre a la sombra y lejos de la estufa. El calor directo endurece y quiebra la fibra.",
  },
  {
    t: "Guardado",
    d: "En bolsa de tela, con la pieza armada y sin doblar. La suela pide aire, no plástico.",
  },
  {
    t: "Alpaca",
    d: "Bruñir en seco con paño de algodón. El brillo se hace de uso, no de químicos.",
  },
  {
    t: "Mates",
    d: "Curado con yerba y agua tibia. Secar boca abajo y jamás dejarlos al sol.",
  },
];

const faqs = [
  {
    q: "¿Hacen piezas a medida?",
    a: "Sí. Aperos completos, rastras con iniciales y mates grabados. El plazo va de 15 a 45 días según la pieza.",
  },
  {
    q: "¿Envían a todo el país?",
    a: "Enviamos a toda la Argentina por transporte y correo. Envío sin cargo a partir de cierto monto.",
  },
  {
    q: "¿Qué cueros usan?",
    a: "Vaqueta y suela curtidas al vegetal, carpincho y crudo trenzado a tiento. Herrajes de alpaca labrada.",
  },
  {
    q: "¿Puedo cambiar una pieza?",
    a: "Tenés 30 días para cambios en piezas de línea sin uso. Los encargos a medida no tienen cambio.",
  },
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* Portada */}
      <section className="relative grid min-h-screen grid-rows-[auto_1fr_auto]">
        <img
          src="/CaballosPortada.jpg"
          alt="Tropilla de caballos corriendo en el campo"
          className="absolute inset-0 h-full w-full object-cover object-[center_60%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-tinta/70 via-tinta/25 to-tinta/80" />

        <header className="relative z-10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-6 md:flex md:justify-between md:px-12">
          <span className="eyebrow text-arena/80">Est. Argentina</span>
          <nav className="hidden gap-8 md:flex">
            {secciones.map((s) => (
              <Link
                key={s.nombre}
                to="/tienda"
                search={{ seccion: s.nombre }}
                className="eyebrow relative text-arena/85 transition-colors hover:text-arena after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-arena after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
              >
                {s.nombre}
              </Link>
            ))}
          </nav>
          <Link to="/tienda" className="eyebrow shrink-0 text-arena/90 hover:text-arena">
            Tienda →
          </Link>
        </header>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
          <p className="eyebrow animate-fade-in text-arena/70">Talabartería criolla</p>
          <h1 className="mt-4 font-display text-6xl leading-none tracking-[0.22em] text-arena sm:text-8xl md:text-[10rem]">
            {"ALAZÁN".split("").map((l, i) => (
              <span
                key={i}
                className="inline-block animate-fade-in"
                style={{ animationDelay: `${i * 90}ms`, animationFillMode: "backwards" }}
              >
                {l}
              </span>
            ))}
          </h1>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-arena/80">
            Cuero, oficio y campo argentino. Piezas hechas de a una, para durar generaciones.
          </p>
          <Link
            to="/tienda"
            className="eyebrow mt-10 border border-arena/60 px-8 py-4 text-arena transition-all duration-500 hover:bg-arena hover:text-tinta hover:tracking-[0.4em]"
          >
            Entrar a la tienda
          </Link>
        </div>

        <div className="relative z-10 pb-8 text-center">
          <span className="eyebrow text-arena/50">↓ Las secciones</span>
        </div>
      </section>

      {/* 2 — Secciones */}
      <section id="secciones" className="border-b border-border bg-arena">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
          {secciones.map((s) => (
            <Link
              key={s.nombre}
              to="/tienda"
              search={{ seccion: s.nombre }}
              className="group relative overflow-hidden border-r border-b border-border px-6 py-14 text-center last:border-r-0 md:border-b-0"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-bordo transition-transform duration-500 group-hover:scale-y-100" />
              <span className="eyebrow relative block text-muted-foreground transition-colors group-hover:text-arena/60">
                {s.codigo}
              </span>
              <span className="relative mt-3 block font-display text-2xl text-primary transition-colors group-hover:text-arena md:text-3xl">
                {s.nombre}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3 — Historia de la marca */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative">
            <div className="absolute -inset-3 border border-cuero/40 md:-inset-5" />
            <img
              src="/GauchoBajoPortada.jpg"
              alt="Gaucho revoleando el lazo a caballo"
              loading="lazy"
              className="relative aspect-4/5 w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
          <div>
            <p className="eyebrow text-cuero">Historia de la marca</p>
            <h2 className="mt-5 text-3xl leading-tight text-primary md:text-5xl">
              Empezamos con una lonja, un cuchillo y la costumbre de no entregar nada a medias.
            </h2>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Alazán nació en un galpón del interior, arreglando aperos para la
              gente del pago. Con los años el taller creció, pero el modo de
              trabajar quedó igual: cuero curtido al vegetal, trenzado a tiento una sola persona por pieza, desde el corte hasta el último remache.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Le pusimos el nombre del pelo de caballo que más miramos al amanecer. Nos gusta pensar que cada cinto, cada mate y cada bota sale con algo de ese campo adentro.
            </p>
            <Link
              to="/tienda"
              className="eyebrow mt-9 inline-block border-b border-primary pb-1 text-primary transition-all hover:tracking-[0.4em]"
            >
              Ver la tienda
            </Link>
          </div>
        </div>
      </section>

      {/* 4 — Tira */}
      <div className="py-8 md:py-14">
        <section
          role="img"
          aria-label="Vacunos colorados comiendo en el campo"
          className="h-[180px] w-full bg-cover bg-center md:h-[260px]"
          style={{ backgroundImage: `url('/VacaTira1.jpg')` }}
        />
      </div>

      {/* 5 y 6 — Duos */}
      <div className="relative mx-auto max-w-4xl px-6 py-12 md:py-20">
        {/* Ilustración de fondo Izquierda */}
        <div className="pointer-events-none absolute -left-16 top-1/4 -z-10 -translate-y-1/2 md:-left-32">
          <svg
            aria-hidden="true"
            className="h-64 w-64 text-cuero/40 md:h-80 md:w-80"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="100" cy="100" r="45" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="30" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
              <line
                key={angle}
                x1="100"
                y1="100"
                x2={100 + 70 * Math.cos((angle * Math.PI) / 180)}
                y2={100 + 70 * Math.sin((angle * Math.PI) / 180)}
                strokeWidth="1.2"
              />
            ))}
          </svg>
        </div>

        {/* Ilustración de fondo Derecha */}
        <div className="pointer-events-none absolute -right-16 bottom-1/4 -z-10 translate-y-1/2 md:-right-32">
          <svg
            aria-hidden="true"
            className="h-64 w-64 text-cuero/40 md:h-80 md:w-80"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="52" strokeDasharray="5 3" />
            <polygon points="100,45 118,82 155,100 118,118 100,155 82,118 45,100 82,82" strokeWidth="1.2" />
          </svg>
        </div>

        {/* Lista de Duos */}
        <div className="space-y-6 md:space-y-8">
          {duos.map((par, idx) => (
            <section key={idx} className="grid gap-6 md:grid-cols-2 md:gap-8">
              {par.map((c) => (
                <Link
                  key={c.nombre}
                  to="/tienda"
                  search={{ seccion: c.nombre }}
                  className="group relative block overflow-hidden rounded-lg border border-cuero/25 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-cuero/60 hover:shadow-md"
                >
                  <img
                    src={c.img}
                    alt={c.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tinta/85 via-tinta/10 to-transparent" />
                  <div
                    className={`absolute inset-x-0 bottom-0 origin-bottom scale-y-0 opacity-90 transition-transform duration-500 group-hover:scale-y-100 ${c.tono} h-1.5`}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <h3 className="font-display text-2xl text-arena md:text-3xl">
                      {c.nombre}
                    </h3>
                    <p className="mt-1.5 max-w-xs text-xs text-arena/75 md:text-sm">{c.detalle}</p>
                    <span className="eyebrow mt-3 inline-block text-arena/60 transition-all group-hover:tracking-[0.45em] group-hover:text-arena">
                      Comprar →
                    </span>
                  </div>
                </Link>
              ))}
            </section>
          ))}
        </div>
      </div>

      {/* 7 — Guía de cuidados */}
      <section className="bg-tinta px-6 py-20 text-arena md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-3 border-b border-arena/20 pb-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-3xl text-arena md:text-5xl">
              Guía de cuidados
            </h2>
            <p className="eyebrow text-arena/50">El cuero vive: hay que atenderlo</p>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {cuidados.map((c, i) => (
              <div
                key={c.t}
                className="group border-t border-arena/20 pt-5 transition-colors hover:border-cuero"
              >
                <span className="eyebrow text-cuero">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-2xl text-arena">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-arena/70">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Tira finita */}
      <div className="py-8 md:py-14">
        <section
          role="img"
          aria-label="Jinetes al atardecer llevando la bandera argentina"
          className="h-[180px] w-full bg-cover bg-center md:h-[260px]"
          style={{ backgroundImage: `url('/BanderaTira2.jpg')` }}
        />
      </div>

      {/* Preguntas frecuentes y redes */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <div>
            <h2 className="font-display text-3xl text-primary md:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Si falta algo, escribinos: contestamos nosotros, no un robot.
            </p>
          </div>
          <div>
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group border-b border-border py-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 text-lg text-primary">
                  {f.q}
                  <span className="text-cuero transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 animate-fade-in text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre / redes */}
      <footer className="bg-bordo px-6 py-16 text-arena md:px-12">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-display text-4xl tracking-[0.3em] md:text-5xl">ALAZÁN</p>
          <p className="eyebrow mt-4 text-arena/60">
            Talabartería · Marroquinería · Indumentaria · Tradición
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { n: "Instagram", h: "https://instagram.com" },
              { n: "WhatsApp", h: "https://wa.me/5491100000000" },
              { n: "Facebook", h: "https://facebook.com" },
              { n: "hola@alazan.com.ar", h: "mailto:hola@alazan.com.ar" },
            ].map((r) => (
              <a
                key={r.n}
                href={r.h}
                target="_blank"
                rel="noreferrer"
                className="eyebrow text-arena/80 transition-all hover:tracking-[0.4em] hover:text-arena"
              >
                {r.n}
              </a>
            ))}
          </div>
          <p className="mt-10 text-xs text-arena/50">
            Buenos Aires, Argentina · Envíos a todo el país
          </p>
        </div>
      </footer>
    </div>
  );
}
