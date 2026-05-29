import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp } from "@/lib/content";
import { ArticleStructuredData } from "@/components/structured-data";
import { RelatedArticles } from "@/components/related-articles";
import { getBlogAlternates } from "@/lib/blog-helpers";

export const metadata: Metadata = {
  title: "Por qué trabajo por proceso y no por sesiones sueltas | Ferran Moreno",
  description: "Una sesión cambia cómo te sientes hoy. Un proceso cambia cómo está organizado tu cuerpo. La diferencia importa.",
  alternates: getBlogAlternates("es", "por-que-trabajo-por-proceso"),
};

export default function ArticlePage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>
      <ArticleStructuredData
        title="Por qué trabajo por proceso y no por sesiones sueltas"
        description="Una sesión cambia cómo te sientes hoy. Un proceso cambia cómo está organizado tu cuerpo. La diferencia importa."
        slug="por-que-trabajo-por-proceso"
        date="2026-04-29"
        tag="Proceso"
        lang="es"
      />
      <header className="sticky top-0 z-30" style={{ borderBottom: "1px solid var(--border-subtle)", background: "var(--bg-main)" }}>
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-8 py-5">
          <Link href="/" className="leading-none">
            <div className="text-[17px] font-semibold tracking-[-0.01em]" style={{ color: "var(--text-main)" }}>Ferran Moreno</div>
            <div className="mt-[5px] text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              TRABAJO CORPORAL · REGULACIÓN · ENERGÍA
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" style={{ color: "var(--text-secondary)" }}>
            <Link href="/#como-trabajo" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Método</Link>
            <Link href="/#cases" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Casos</Link>
            <Link href="/#para-quien" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Para quién</Link>
            <Link href="/wall-of-trust" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Wall of trust</Link>
            <Link href="/historia" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Mi historia</Link>
            <Link href="/blog" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Blog</Link>
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">Contacto</a>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">EN</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[700px] px-6 py-24">
        <Link href="/blog" className="text-[11px] uppercase tracking-[0.15em] mb-12 inline-block transition hover:opacity-50" style={{ color: "var(--text-secondary)" }}>
          &larr; Blog
        </Link>

        <article>
          <span className="text-[10px] uppercase tracking-[0.15em] mb-4 block" style={{ color: "var(--text-secondary)" }}>
            Proceso
          </span>

          <h1 className="text-3xl font-semibold tracking-tight mb-10 leading-[1.15] lg:text-4xl">
            Por qué trabajo por proceso y no por sesiones sueltas
          </h1>

          <div className="space-y-6">
            <p className="text-[15px] leading-relaxed">
              Una sesión puede cambiar cómo te sientes hoy. Un proceso cambia cómo está organizado tu cuerpo. La diferencia importa.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que puede hacer una sesión
            </h2>

            <p className="text-[15px] leading-relaxed">
              En una sola sesión puedo regular el sistema nervioso, liberar una restricción, desplazar un patrón. Puedes salir sintiéndote diferente, más ligero, más organizado. Y eso tiene valor.
            </p>

            <p className="text-[15px] leading-relaxed">
              Pero el cuerpo tiene capas. Lo que aparece en la primera sesión es la capa superficial. La que el sistema muestra porque es la más accesible, la menos amenazante. Debajo hay más. Y para llegar ahí, el cuerpo necesita algo que una sesión suelta no puede dar: confianza.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Hubo una época en la que trabajé casi solo con sesiones sueltas
            </h2>

            <p className="text-[15px] leading-relaxed">
              A lo largo de veinte años te puedes imaginar que he trabajado de muchas maneras. Durante una etapa hacía sobre todo sesiones individuales porque viajaba seis meses al año por trabajo. Me llamaban de distintos países para participar en proyectos, centros que querían que fuera a su ciudad a ver a sus clientes, o personas que organizaban sesiones para su familia y sus amigos después de haber notado cambios ellas mismas.
            </p>

            <p className="text-[15px] leading-relaxed">
              En ese momento no podía comprometerme a seis meses. Veía a muchas personas una sola vez, y como mucho podíamos hacer dos o tres sesiones. Eso me obligó a desarrollar herramientas para producir cambios en una sola intervención.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que aprendí trabajando así
            </h2>

            <p className="text-[15px] leading-relaxed">
              Al principio de todo fui a un curso en el que Jean-Pierre Barral hizo un comentario que no olvidé: él no dejaba que sus clientes hablaran. La idea me fascinó. Cómo hacer una sesión usando únicamente tu percepción para entender los mensajes del cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Durante algunos años trabajé mucho desde ahí. Muchos amigos y clientes lo saben bien 😂. Aquello me obligó a afinar mi percepción de una forma radical. A escuchar sin apoyarme tanto en el relato. A entender que muchas veces lo que el cuerpo está pidiendo y lo que la persona cree que le pasa no son exactamente la misma cosa.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Lo que aparece en la sesión 3, 4, 5
            </h2>

            <p className="text-[15px] leading-relaxed">
              La reorganización real ocurre cuando el sistema confía lo suficiente como para mostrar lo que tiene debajo. Eso no pasa en la primera visita. Pasa en la tercera, en la cuarta, en la quinta, cuando el cuerpo ya sabe que no vas a forzar, que vas a escuchar, que el proceso tiene un ritmo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ahí es donde aparecen los patrones profundos. Las compensaciones antiguas. Las restricciones que llevan años organizando todo lo demás. Trabajar eso requiere tiempo, secuencia y una relación terapéutica que se construye sesión a sesión.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Ahora trabajo de otra manera
            </h2>

            <p className="text-[15px] leading-relaxed">
              Ahora no estoy en ese momento. Tampoco soy el mismo de entonces: más joven, más impulsivo y más centrado en producir un cambio fuerte en una sola visita. Con los años fui incorporando herramientas para trabajar sobre distintos sistemas: emociones, pensamientos, postura, movimiento, regulación del sistema nervioso y capas más profundas de la organización del cuerpo.
            </p>

            <p className="text-[15px] leading-relaxed">
              Muchas personas quieren explicarlo todo porque piensan que la solución está en lo que cuentan. Y eso está bien. Escríbeme a fmoreno.bodywork@gmail.com y explícamelo todo hasta el último detalle. Pero luego yo necesito hacer mi propia lectura y ver por mí mismo qué está pasando. La experiencia y las estadísticas de las sesiones me muestran otra cosa: la mayor parte de las veces la solución aparece en lugares que no te podías imaginar, y suele ser distinta de la idea inicial de la persona.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso era verdad entonces y lo sigue siendo ahora. La diferencia es que hoy me interesa menos producir un impacto puntual y más construir una reorganización que de verdad se quede.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              El compromiso cambia la calidad del trabajo
            </h2>

            <p className="text-[15px] leading-relaxed">
              El primer motivo también es personal. Tengo una familia, tres hijos pequeños y más de veinte años de experiencia. Trabajar por sesiones sueltas acaba muchas veces en conversaciones infructuosas, donde la persona espera charlas interminables para convencer a su mente de que tiene que hacer el trabajo, cuando precisamente esa mente es muchas veces parte del problema.
            </p>

            <p className="text-[15px] leading-relaxed">
              Eso forma parte del proceso en consulta. Yo no trabajo fuera de la consulta. El trabajo se hace dentro. Tú eliges si quieres confiar en el proceso o no. Si quieres trabajar conmigo, yo soy claro: el primer día puedes dudar. Después, hace falta comprometerse.
            </p>

            <p className="text-[15px] leading-relaxed">
              Mi trabajo es mi pasión. Me encanta descubrir dónde está una persona y crear cambios juntos. Pero si todo se convierte en marear la decisión de si quieres trabajar conmigo o no, yo pierdo el interés. Prefiero estar regando mis tomates tranquilamente que entrar en una discusión con alguien que quiere explicarme por qué no quiere trabajar conmigo.
            </p>

            <p className="text-[15px] leading-relaxed">
              En estos momentos me funciona mejor trabajar por bloques de seis meses por distintos motivos. Cuando la persona se compromete, la mente muchas veces se queda a un lado. Hace un leap of faith. Deja de cuestionar cada paso y se compromete al cien por cien con su cambio.
            </p>

            <p className="text-[15px] leading-relaxed">
              Sin ese marco, muchas veces aparecen conversaciones que no llevan a nada: por qué tengo que hacer más sesiones, si de verdad hace falta continuar, si con una no debería bastar. Y lo entiendo. Alguien que lleva años así sigue buscando, pero muchas veces ya busca sin esperanza real de poder cambiar. Y esa falta de esperanza imposibilita el cambio.
            </p>

            <p className="text-[15px] leading-relaxed">
              También hay una razón muy práctica. Si cada día puede ser la última sesión, no siempre voy a abrir el melón. No voy a entrar en capas profundas para dejar a la persona marcharse sin integrar. Es como llevar el coche al mecánico: si hay una reparación grande, tienes que dejar el coche varios días para que puedan desmontarlo y volver a montarlo bien. Con el cuerpo pasa algo parecido.
            </p>

            <p className="text-[15px] leading-relaxed">
              Ayer tenía una persona en primera sesión. Me explicaba que de repente todo cambió: se sentía más sereno, no había ansiedad, la tensión de su cuerpo había cambiado. Y entonces pudo ver algo que antes no veía: que una conversación con cierta persona al teléfono lo sacaba completamente de su eje y le hacía sentirse mal. Eso ya es una nueva perspectiva. Su cuerpo se siente bien y ahora puede identificar mejor qué le hace bien y qué no.
            </p>

            <p className="text-[15px] leading-relaxed">
              Lo que quieras hacer con lo que descubres es cosa tuya. Si decides quedarte o irte de esa situación no es asunto mío. Mi trabajo es que tu sistema esté lo bastante ordenado como para que puedas verlo con claridad.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              Es por cómo funciona este trabajo.
            </h2>

            <p className="text-[15px] leading-relaxed">
              Tu cuerpo necesita tiempo. Y yo necesito un marco claro para hacerlo bien.
            </p>

            <p className="text-[15px] leading-relaxed">
              Un proceso bien hecho produce cambios que son permanentes. El cuerpo no vuelve atrás porque la reorganización fue real, no superficial.
            </p>

            <h2 className="text-xl font-semibold tracking-tight mt-12 mb-4">
              La diferencia que importa
            </h2>

            <p className="text-[15px] leading-relaxed">
              Una buena sesión puede cambiar mucho. Puede darte claridad, abrir una puerta o ser el punto de inflexión que estabas buscando. Lo que pasa es que, si no hay proceso, ese cambio a veces queda enterrado otra vez bajo tus pensamientos, tus hábitos o la organización antigua del sistema.
            </p>

            <p className="text-[15px] leading-relaxed font-medium">
              Una buena reorganización es permanente. Y si solo pudiera hacer una sesión, entonces buscaríamos maximizarla.
            </p>
          </div>

          <div className="mt-20 pt-12" style={{ borderTop: "1px solid var(--border-subtle)" }}>
            <p className="text-[15px] leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Si quieres saber cómo es un proceso conmigo y qué puedes esperar, escríbeme.
            </p>
            <a
              href={contactWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[11px] uppercase tracking-[0.15em] font-medium transition hover:opacity-50"
              style={{ color: "var(--text-main)" }}
            >
              Escríbeme &rarr;
            </a>
          </div>

          <RelatedArticles slug="por-que-trabajo-por-proceso" lang="es" />
        </article>
      </main>
    </div>
  );
}
