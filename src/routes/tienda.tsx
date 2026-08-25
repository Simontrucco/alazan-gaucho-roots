import { createFileRoute, Link } from "@tanstack/react-router";

import f3 from "@/assets/f3-estribo.jpg.asset.json";
import f4 from "@/assets/f4-botas.jpg.asset.json";
import f5 from "@/assets/f5-alpargata.jpg.asset.json";
import f6 from "@/assets/f6-mate.jpg.asset.json";
import f1 from "@/assets/f1-gaucho-lazo.jpg.asset.json";

export const SECCIONES = ["Talabartería", "Marroquinería", "Indumentaria", "Tradición"] as const;
export type Seccion = (typeof SECCIONES)[number];

export const Route = createFileRoute("/tienda")({
  validateSearch: (search: Record<string, unknown>): { seccion?: Seccion } => {
    const s = search["seccion"];
    return SECCIONES.includes(s as Seccion) ? { seccion: s as Seccion } : {};
  },
  head: () => ({
    meta: [
      { title: "Tienda Alazán — Cuero, aperos e indumentaria de campo" },
      {
        name: "description",
        content:
          "Comprá piezas de talabartería, marroquinería, indumentaria y tradición criolla. Cuero curtido al vegetal y alpaca labrada, con envíos a todo el país.",
      },
      { property: "og:title", content: "Tienda Alazán" },
      {
        property: "og:description",
        content:
          "Aperos, cintos, botas y mates hechos a mano. Envíos a toda la Argentina.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Tienda,
});

const productos: {
  nombre: string;
  precio: string;
  seccion: Seccion;
  img: string;
}[] = [
  { nombre: "Estribo criollo de alpaca", precio: "$142.000", seccion: "Talabartería", img: f3.url },
  { nombre: "Cabezada trenzada a tiento", precio: "$198.000", seccion: "Talabartería", img: f1.url },
  { nombre: "Bota de campo, cuero vaqueta", precio: "$236.000", seccion: "Marroquinería", img: f4.url },
  { nombre: "Cinto rastra con iniciales", precio: "$78.000", seccion: "Marroquinería", img: f4.url },
  { nombre: "Bombacha de campo grafa", precio: "$96.000", seccion: "Indumentaria", img: f5.url },
  { nombre: "Alpargata de lona reforzada", precio: "$34.000", seccion: "Indumentaria", img: f5.url },
  { nombre: "Mate calabaza con virola", precio: "$62.000", seccion: "Tradición", img: f6.url },
  { nombre: "Bombilla de alpaca labrada", precio: "$41.000", seccion: "Tradición", img: f6.url },
];

function Tienda() {
  const { seccion } = Route.useSearch();
  const lista = seccion ? productos.filter((p) => p.seccion === seccion) : productos;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-tinta px-6 py-8 text-arena md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Link to="/" className="font-display text-2xl tracking-[0.3em] text-arena">
            ALAZÁN
          </Link>
          <Link to="/" className="eyebrow shrink-0 text-arena/70 hover:text-arena">
            ← Volver
          </Link>
        </div>
      </header>

      <section className="px-6 py-14 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow text-cuero">Tienda</p>
          <h1 className="mt-4 font-display text-4xl text-primary md:text-6xl">
            {seccion ?? "Todas las piezas"}
          </h1>

          <div className="mt-10 flex flex-wrap gap-3 border-b border-border pb-6">
            <Link
              to="/tienda"
              className={`eyebrow border px-5 py-3 transition-colors ${
                seccion
                  ? "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  : "border-primary bg-primary text-primary-foreground"
              }`}
            >
              Todo
            </Link>
            {SECCIONES.map((s) => (
              <Link
                key={s}
                to="/tienda"
                search={{ seccion: s }}
                className={`eyebrow border px-5 py-3 transition-colors ${
                  seccion === s
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {s}
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {lista.map((p) => (
              <article key={p.nombre} className="group">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={p.nombre}
                    loading="lazy"
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <span className="eyebrow mt-4 block text-cuero">{p.seccion}</span>
                <h2 className="mt-1 text-lg text-primary">{p.nombre}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{p.precio}</p>
                <button className="eyebrow mt-4 w-full border border-primary px-5 py-3 text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                  Agregar
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
