import type { Metadata } from "next";
import Link from "next/link";
import { contactWhatsApp, contactWhatsAppDisplay } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mi historia",
  description:
    "A los 17 años una lesión de taekwondo me dejó sin poder funcionar durante siete años. Esta es la historia de cómo encontré otro camino.",
  alternates: {
    canonical: "/historia",
  },
};

const reserveHref = `https://wa.me/34679229744?text=Hola%20Ferran%2C`;

export default function HistoriaPage() {
  return (
    <div className="min-h-screen" style={{ background: "var(--bg-main)", color: "var(--text-main)" }}>

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
            <Link href="/historia" className="text-[11px] uppercase tracking-[0.08em]" style={{ color: "var(--text-main)", textDecoration: "underline", textUnderlineOffset: "4px" }}>Mi historia</Link>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <Link href="/en" className="text-[11px] uppercase tracking-[0.08em] transition hover:opacity-50">EN</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[660px] px-6 py-[100px]">

        <div className="mb-12">
          <div className="text-sm uppercase tracking-[0.25em]" style={{ color: "var(--text-secondary)" }}>Mi historia</div>
          <h1 className="mt-3 text-4xl font-semibold leading-[1.1] tracking-tight lg:text-5xl">
            Ferran Moreno
          </h1>
        </div>

        <div className="space-y-8 text-lg leading-8">

          <p>De pequeño quería ser médico. Me fascinaba entender cómo funciona el cuerpo. La naturaleza me apasionaba.</p>

          <p>Mi padre quería que estudiara empresariales. Estudié empresariales. Me licencié en ADE.</p>

          <p>Pero a los 17 años, una patada en una competición de taekwondo me dejó lesionado durante siete años. No podía levantar una garrafa de agua. El dolor era constante. La medicina no encontró solución. Me dijeron que tenía una pierna más corta que la otra, que el tejido roto había dejado una cicatriz permanente, que era psicosomático, que era neural. Me hicieron masajes, me manipularon, me prometieron resultados. Nada funcionó.</p>

          <p>Hasta que, siete años después, una sola sesión de osteopatía con Josep Castellà, en Sant Quirze del Vallès, lo resolvió en menos de quince minutos. Por primera vez me sentí alineado. El dolor desapareció.</p>

          <p className="font-medium">
            ¿Cómo podía existir una solución y haber estado atrapado tanto tiempo?
          </p>

          <p>A partir de ahí empecé a estudiar de verdad. Devoré libros de anatomía, puntos gatillo, meridianos, osteopatía y reflexología. Tuve la suerte de hacer prácticas con cadáveres en la Universidad de Medicina. En 2004 estudié quiromasaje en la Escuela Quirotema, donde también aprendí el Método Benjamin con Josep Ferrer, profesor de anatomía extraordinario. Entre 2005 y 2007 trabajé como aprendiz en la consulta de Josep Castellà y su hijo Jonathan. Durante el día trabajaba en Duravit y, al terminar, me iba a aprender con ellos.</p>

          <p>En 2006 me formé como profesor de Pilates con Leah Maidenbaum, profesora de Nueva York. Clases privadas, dos veces por semana, a las siete de la mañana. Fue otra puerta de entrada al cuerpo.</p>

          <p>Un día, Josep Ferrer me dijo que lo mejor en terapia manual se estudiaba en Alemania o en Estados Unidos y que se llamaba Rolfing. Era caro. Y hacía falta inglés.</p>

          <p>Un mes después aterrizaba en Agatharied para hacer mi primer curso: el Rolfing Spectrum Training, con Christoph Sommer y Herbert Battisti. Después de años viendo diagnósticos limitados, me encontré con un nivel completamente distinto: personas capaces de leer desequilibrios viscerales, neurales y fasciales observando el cuerpo y poniendo una mano en la cabeza. Con muy poco contacto podían liberar un nervio, restablecer un flujo arterial o devolver movilidad a un órgano. Para mí fue como pasar del baloncesto español a la NBA.</p>

          <p>
            Volví a Barcelona y le dije a una amiga:<br />
            <span className="font-medium">"Voy a dejar mi trabajo, voy a estudiar esto y voy a convertirme en uno de los mejores del mundo."</span>
          </p>

          <p>El 30 de septiembre de 2007 dejé mi puesto como Head of Training en Duravit España.</p>

          <p>Me mudé a Múnich para formarme en la Escuela Europea de Rolfing. El proceso no fue fácil. El nivel no era el que esperaba después de lo que había visto en Agatharied. Fue Ray McCall, en el último tercio del curso, quien me ayudó a sacar verdadero partido a la formación. Y Andrea Clusen, profesora de la escuela, que me dio una visión única del método. Paralelamente estudié en el Group of Munich todos los cursos que ofrecían: listening techniques, manipulación visceral, nervios, tórax, trabajo urogenital, nervios periféricos. Con Jean Pierre Barral, Alain Croibier, Didier Prat y Peter Schwind aprendí osteopatía visceral a otro nivel. Entre 2008 y 2012 hice todos los cursos que ofrecían.</p>

          <p>En 2011, en París, tuve una sesión con Hubert Godard, una referencia mundial en movimiento dentro del Rolfing. En Leipzig conocí a Kathrin Grobelnik, que organizó el curso donde aprendería SourcePoint Therapy con Ray McCall, Dona Thompson y Bob Schrei, una formación que terminaría dos años después en Santa Fe, Nuevo México. Esa manera de trabajar con la energía integró profundamente todo mi trabajo estructural. En 2013 me certifiqué como Advanced Practitioner.</p>

          <p>Ese mismo 2011, en el Rolfing Annual Meeting de Flims, Suiza —al que acudí como presidente de la Asociación Española de Rolfing— un retraso de avión me dejó cinco horas con Mónica Caspari, Advanced Rolfer. Cambié el billete de vuelta para poder asistir al taller de movimiento que enseñaba ese fin de semana. En esa misma conferencia, Alfred Stollenwerk me mostró su trabajo en osteopatía funcional y cambió mi manera de entender la recuperación de la funcionalidad articular.</p>

          <p>En agosto de 2011 trabajé en Kamalaya Koh Samui, en Tailandia. Fue trabajar en el paraíso con profesionales extraordinarios. Allí vi algo que me marcó: lo que en ciudad podía tardar semanas, en ese entorno ocurría en horas.</p>

          <p>En septiembre de ese mismo año invité a Rajesh Ramani a dar sesiones en Barcelona. Life coach y profesor espiritual, abrió para mí la puerta al trabajo con el niño interior y las emociones. Fue un lenguaje nuevo para integrar cuerpo y energía.</p>

          <p>Después de Kamalaya, viajé a Bangkok para trabajar con un cliente a punto de operarse de cadera. Resultó ser el Dr. Shuzabura Harada, uno de los mejores acupuntores japoneses que he conocido. Le hice tres sesiones. Al día siguiente él me trató a mí. Tenía un dolor en el cuádriceps que especialistas alemanes y franceses no habían podido resolver. Con tres movimientos de aguja, apenas sin contacto, desapareció. Le pedí aprender con él. En el verano de 2012 pasé un mes en su casa en Japón. Su trabajo con el ki, el diagnóstico por la lengua y los pulsos me dio un nuevo rumbo profesional.</p>

          <p>También en 2012 conocí el trabajo de Hino Akira Sensei en Valencia. Durante años me había sentido desconectado dentro de mi propio cuerpo, como partido por la mitad. La semana que trabajé con él cambió eso. Encontré una conexión que nunca me ha abandonado.</p>

          <p>Ese año también leí un artículo sobre Thich Nhat Hanh que me impactó tanto que dos meses después fui a Irlanda a conocerlo. Allí entré en contacto con el mindfulness y con una forma diferente de vivir al servicio de los demás.</p>

          <p>En esos años, el Dr. Riccardo Cassiani me presentó al Dr. Max Martin Rapkin, creador de la Rapkinesis. Durante seis años desafiamos ideas juntos. Me ayudó a superar lesiones y a encontrar herramientas para trabajar con la energía que no aparecen en ninguna escuela de Rolfing, fisioterapia u osteopatía.</p>

          <p>La vida me llevó también a Malasia, donde el Dr. C.D. Siby, médico ayurvédico, me mostró el alcance de su sistema: diagnóstico por pulso, procesos profundos de desintoxicación y resultados que me impresionaron profundamente. Y Vince Choo, coach excepcional, me devolvió las ganas de moverme y me abrió una forma nueva y divertida de entrenar.</p>

          <p>De vuelta en Barcelona conocí a Pacho Ayaso, psicólogo, bailarín y profesor de Pilates. Se convirtió en amigo y colaborador imprescindible durante años. Gracias a él entré en contacto con Kelly Starrett, Jill Miller, Gray Cook, Andreo Spina e Ido Portal. En 2012 nos certificamos juntos en MovNat en Madrid. En 2013 fuimos al Corset Training con el equipo de Ido Portal en Copenhague.</p>

          <p>En México conocí al Dr. Víctor Valpuesta, médico especialista en medicina interna, anestesiología y medicina funcional integrativa. Durante una década colaboramos con clientes y aprendí algo esencial: hasta dónde llega mi método, dónde la medicina es imprescindible y dónde, a veces, no lo es tanto como parece. También conocí a la Dra. Diana Morales, al Dr. Leslie S. Feinberg y a José Luis Gallardo, que me mostró el poder del trabajo con pares biomagnéticos.</p>

          <p>En septiembre de 2013 empecé el online training de Ido Portal. Mi cuerpo y mi manera de pensar cambiaron otra vez de forma radical.</p>

          <p>En noviembre de 2014 fui a Piacenza a un curso de Kit Laughlin — Stretch Therapy for Gymnastics Strength Training. Seis años siguiéndolo por internet antes de conocerlo en persona. Me ayudó a explorar el cuerpo a través de los estiramientos y su relación con los límites de la mente.</p>

          <p>Una lesión de muñeca haciendo muscle-ups durante el programa online de Ido Portal que no conseguía recuperar me llevó a buscar otra forma de entrenar. Encontré a Will Chung — ejercicios aparentemente sencillos pero profundamente efectivos, exactamente lo que necesitaba. Fui a Inglaterra a un curso de introducción y entrené online con él durante cuatro años.</p>

          <p>En paralelo empecé a hacer sesiones a animales: caballos, perros, algunos de competición. Ahí aprendí algo que ningún libro enseña. Sin historia mental. Sin placebo. Solo el cuerpo respondiendo.</p>

          <p>En febrero de 2014 conocí a Samuel Eduardo Minond. Su trabajo en radiestesia, cuerpo físico, espíritu y alma me ayudó a comprender dimensiones del trabajo espiritual que hasta entonces eran desconocidas para mí. Supe que no tenía que seguir buscando.</p>

          <p>Después del Covid, Alicia y yo fuimos a Sagàs, al restaurante dels Casals. Al día siguiente nos enseñaron la granja. Había un caballo cojo. Pedí permiso para hacerle una sesión. Se recuperó y le cambió el carácter. A partir de ahí empecé a trabajar con la dueña, Margaux, que un día nos dijo que había encontrado la casa perfecta para nosotros en Lluçà. Un año después nos mudamos.</p>

          <p className="font-medium">
            Hoy llevo más de veinte años trabajando con personas que han probado muchas cosas y siguen en el mismo punto.
          </p>

          <p>Vivo en Lluçà, Barcelona, con Alicia y nuestros tres hijos: Uriel, Ian y Naïm.</p>

        </div>

        <div className="mt-16 pt-12 text-center" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <p className="text-lg font-medium">Si esto te resuena, ya sabes por qué estás aquí.</p>
          <div className="mt-8">
            <a
              href={reserveHref}
              className="rounded-full px-10 py-4 text-sm font-medium text-white transition hover:opacity-85"
              style={{ background: "var(--text-main)" }}
            >
              Reservar primera sesión
            </a>
          </div>
        </div>

      </main>

      <footer style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--bg-soft)" }}>
        <div
          className="mx-auto flex max-w-[900px] flex-col gap-3 px-6 py-8 text-sm lg:flex-row lg:items-center lg:justify-between"
          style={{ color: "var(--text-secondary)" }}
        >
          <div>
            Reorganización estructural ·{" "}
            <a href="https://maps.app.goo.gl/2DvAv9DP6iZBDuXk6?g_st=ic" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">
              Lluçà (Barcelona)
            </a>
            {" "}· Online
          </div>
          <div>
            <a href={contactWhatsApp} target="_blank" rel="noopener noreferrer" className="hover:opacity-60">{contactWhatsAppDisplay}</a>
            {" "}·{" "}
            <a href="https://www.instagram.com/ferran__moreno_/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60">@ferran__moreno_</a>
          </div>
          <div>© 2026 Ferran Moreno</div>
        </div>
      </footer>
    </div>
  );
}
