export default function ExpoTalentoContact() {
  return (
    <section
    className="relative isolate overflow-hidden pt-10 md:pt-16 pb-32"
    style={{ background: "#FFFFFF" }}>
      <div className="page-bg-grid" />
      <div className="max-w-7xl mx-auto sm:px-16 px-4">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 lg:flex-row lg:gap-24">

          {/* Columna izquierda */}
          <div className="flex flex-1 flex-col gap-10">
            <div>
              <h1 className="mb-4 text-4xl font-medium tracking-tight md:text-5xl text-navy">
                ¿Tienes dudas o <span className="text-primary">consultas</span>?
              </h1>
              <p className="text-muted-foreground">
                ¿Necesitás contactar con alguien del equipo de Prohabla? Escribenos y con gusto te ayudamos.
              </p>
            </div>
          </div>

          {/* Columna derecha — formulario */}
          <div className="flex flex-1 flex-col gap-8">
            <iframe
              src="https://crm.goxt.io/widget/form/formulario-de-contactos"
              width="100%"
              height="1000"
              style={{ border: "none", borderRadius: "16px" }}
              title="Formulario de Contacto - Prohabla Website"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
