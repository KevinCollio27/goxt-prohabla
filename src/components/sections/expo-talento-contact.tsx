"use client";

import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import dynamic from "next/dynamic";
import { isValidPhoneNumber } from "react-phone-number-input";
import { LoaderIcon, CheckCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Field, FieldGroup, FieldLabel, FieldError } from "@/components/ui/field";

const PhoneInput = dynamic(
  () => import("@/components/ui/phone-input").then((m) => ({ default: m.PhoneInput })),
  {
    ssr: false,
    loading: () => <div className="h-10 w-full rounded-md border border-input bg-background animate-pulse" />,
  },
);

const schema = z.object({
  name:      z.string().min(2, "Nombre requerido"),
  email:     z.string().email("Correo inválido"),
  phone:     z.string().refine((v) => v.length > 0 && isValidPhoneNumber(v), "Teléfono inválido"),
  linkedin:  z.string().optional(),
  attending: z.boolean(),
});

type FormData = z.infer<typeof schema>;

export default function ExpoTalentoContact() {
  const [submitted, setSubmitted] = useState(false);
  const hasSubmitted = useRef(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "+506", linkedin: "", attending: true },
  });

  const onSubmit = async (data: FormData) => {
    if (hasSubmitted.current) return;
    hasSubmitted.current = true;

    // Mock: aún no hay backend conectado, solo simulamos el envío.
    console.log("Confirmación ExpoTalento (mock):", data);
    await new Promise((resolve) => setTimeout(resolve, 600));

    setSubmitted(true);
    form.reset();
  };

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
                Confirma tu Asistencia a ExpoTalento 2026
              </h1>
              <p className="text-muted-foreground">
                Confirmá tu asistencia. Miércoles 29 de julio, 9:00 am – 3:00 pm, UTN Alajuela.
              </p>
            </div>
          </div>

          {/* Columna derecha — formulario */}
          <div className="flex-1">
            {submitted ? (
              <div className="flex flex-col gap-6 rounded-xl bg-white border border-border p-8 md:p-10 h-full justify-center items-center text-center">
                <CheckCircleIcon className="size-12 text-green-500" />
                <div>
                  <h2 className="text-xl font-semibold text-navy mb-2">¡Listo! Confirmamos tu asistencia.</h2>
                  <p className="text-sm text-muted-foreground">
                    Nos vemos el 29 de julio en la UTN Alajuela.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="text-muted-foreground"
                  onClick={() => setSubmitted(false)}
                >
                  Volver al formulario
                </Button>
              </div>
            ) : (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-6 rounded-xl bg-white border border-border p-8 md:p-10"
              >
                <div>
                  <h2 className="text-xl font-semibold text-navy">
                    Formulario de Confirmación asistencia a ExpoTalento 2026
                  </h2>
                  <p className="text-sm text-muted-foreground">Completa tus datos para confirmar tu lugar</p>
                </div>

                <FieldGroup>
                  <Controller
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor="name">
                          Nombre completo <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id="name"
                          aria-invalid={fieldState.invalid}
                          placeholder="Ej: Juan Pérez"
                        />
                        <FieldError errors={[fieldState.error]} />
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel htmlFor="email">
                          Correo electrónico <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id="email"
                          type="email"
                          aria-invalid={fieldState.invalid}
                          placeholder="Ej: juan@correo.com"
                        />
                        <FieldError errors={[fieldState.error]} />
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="phone"
                    render={({ field, fieldState }) => (
                      <Field>
                        <FieldLabel>
                          Teléfono <span className="text-destructive">*</span>
                        </FieldLabel>
                        <PhoneInput
                          international
                          defaultCountry="CR"
                          value={field.value}
                          onChange={(val) => field.onChange(val || "")}
                          invalid={fieldState.invalid}
                        />
                        <FieldError errors={[fieldState.error]} />
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <Field>
                        <FieldLabel htmlFor="linkedin">LinkedIn</FieldLabel>
                        <Input
                          {...field}
                          id="linkedin"
                          placeholder="linkedin.com/in/tu-perfil"
                        />
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="attending"
                    render={({ field }) => (
                      <Field orientation="horizontal">
                        <FieldLabel htmlFor="attending">¿Planeas asistir al evento?</FieldLabel>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{field.value ? "Sí" : "No"}</span>
                          <Switch
                            id="attending"
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </div>
                      </Field>
                    )}
                  />

                  <Button
                    size="lg"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <LoaderIcon className="mr-2 size-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Confirmar asistencia"
                    )}
                  </Button>
                </FieldGroup>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
