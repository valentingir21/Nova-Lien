"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2, "Nom requis"),
  phone: z.string().regex(/^(?:\+33|0)[1-9](?:\d{8})$/, "Numéro de téléphone invalide"),
  email: z.string().email("Email invalide"),
  address: z.string().min(5, "Adresse requise"),
  dogName: z.string().optional(),
  dogBreed: z.string().optional(),
  dogAge: z.string().optional(),
  dogSex: z.enum(["male", "female"]).optional(),
  dogNeutered: z.boolean().optional(),
  servicesInterest: z.array(z.enum(["chiot", "pre-adoption", "reeducation", "renforcement-lien", "autre"])).min(1, "Sélectionnez au moins un service"),
  description: z.string().min(30, "Décrivez votre situation en au moins 30 caractères"),
  availability: z.array(z.object({
    date: z.string().min(1, "Date requise"),
    timeOfDay: z.enum(["morning", "afternoon", "evening"]),
    timeRange: z.string().optional(),
  })).min(5, "Indiquez au moins 5 créneaux"),
  rgpdConsent: z.literal(true, { error: "Vous devez accepter la politique de confidentialité" }),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  { value: "chiot", label: "Éducation chiot" },
  { value: "pre-adoption", label: "Pré-adoption" },
  { value: "reeducation", label: "Rééducation comportementale" },
  { value: "renforcement-lien", label: "Renforcement du lien" },
  { value: "autre", label: "Autre / Je ne sais pas encore" },
];

const timeOptions = [
  { value: "morning", label: "Matin" },
  { value: "afternoon", label: "Après-midi" },
  { value: "evening", label: "Soir" },
];

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  border: "1px solid #e8e4d4",
  borderRadius: 12,
  fontFamily: "var(--font-manrope), system-ui, sans-serif",
  fontSize: 15,
  color: "#1c2018",
  background: "#ffffff",
  outline: "none",
  boxSizing: "border-box" as const,
};

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-manrope), system-ui, sans-serif",
  fontSize: 13,
  fontWeight: 600,
  color: "#4a4f3f",
  marginBottom: 6,
  letterSpacing: "0.01em",
};

const errorStyle = {
  fontFamily: "var(--font-manrope), system-ui, sans-serif",
  fontSize: 12,
  color: "#b55c3a",
  marginTop: 4,
};

const sectionTitleStyle = {
  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
  fontWeight: 600,
  fontSize: 20,
  color: "#1c2018",
  margin: "0 0 20px",
};

const situationGuide = [
  "Combien êtes-vous dans le foyer (humain + animaux) ?",
  "Quel(s) comportement(s) vous pose problème, et depuis quand ?",
  "Qu'est-ce que vous aimeriez voir changer ?",
  "Ce qui vous pèse au quotidien ?",
  "Est-ce votre premier chien ?",
  "Des changements récents dans votre vie ? (Déménagement, séparation, deuil, travail, ...)",
  "Y a-t-il des situations que vous évitez à cause de la/les problématiques ?",
  "Avez-vous déjà fait appel à un éducateur canin précédemment ?",
  "N'hésitez pas à ajouter tout ce qui vous semble important.",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      servicesInterest: [],
      availability: [
        { date: "", timeOfDay: "morning", timeRange: "" },
        { date: "", timeOfDay: "morning", timeRange: "" },
        { date: "", timeOfDay: "morning", timeRange: "" },
        { date: "", timeOfDay: "morning", timeRange: "" },
        { date: "", timeOfDay: "morning", timeRange: "" },
      ],
      dogNeutered: false,
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "availability" });
  const servicesWatch = watch("servicesInterest");

  const toggleService = (val: string) => {
    const current = servicesWatch || [];
    const typed = val as FormData["servicesInterest"][number];
    if (current.includes(typed)) {
      setValue("servicesInterest", current.filter((s) => s !== typed));
    } else {
      setValue("servicesInterest", [...current, typed]);
    }
  };

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section style={{ padding: "80px 56px", background: "#fbfaf4" }}>
        <div
          style={{
            maxWidth: 640,
            margin: "0 auto",
            background: "#8f9e63",
            borderRadius: 28,
            padding: "56px 48px",
            textAlign: "center",
            color: "#fbfaf4",
          }}
        >
          <div style={{ fontSize: 48, marginBottom: 16 }}>🐾</div>
          <h2
            style={{
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: 32,
              margin: "0 0 16px",
            }}
          >
            Message envoyé !
          </h2>
          <p
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 17,
              lineHeight: 1.65,
              opacity: 0.95,
              margin: 0,
            }}
          >
            Merci pour votre message. Amandine vous répondra dans les meilleurs délais,
            généralement sous 48h.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: "80px 56px", background: "#fbfaf4" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div
            style={{
              display: "inline-flex",
              gap: 10,
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: 999,
              background: "#dde2ce",
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "#4a4f3f",
              marginBottom: 16,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 99, background: "#8f9e63", flexShrink: 0 }} />
            Formulaire de contact
          </div>
          <h2
            style={{
              fontFamily: "var(--font-quicksand), system-ui, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: 1.05,
              color: "#1c2018",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Parlez-moi de vous
            <br />
            <span style={{ color: "#6b7a44", fontFamily: "var(--font-lora), Georgia, serif", fontStyle: "italic", fontWeight: 500 }}>
              et de votre chien.
            </span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontSize: 15,
              lineHeight: 1.65,
              color: "#7a7f6b",
              marginTop: 12,
              fontStyle: "italic",
            }}
          >
            Je vous recontacte dans les 48h pour convenir ensemble d&apos;un rendez-vous.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

            {/* Section 1 — Vos coordonnées */}
            <div style={{ background: "#ffffff", border: "1px solid #e8e4d4", borderRadius: 24, padding: "32px 36px" }}>
              <p style={sectionTitleStyle}>Vos coordonnées</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label style={labelStyle}>Nom et prénom *</label>
                  <input {...register("fullName")} placeholder="Marie Dupont" style={inputStyle} />
                  {errors.fullName && <p style={errorStyle}>{errors.fullName.message}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Téléphone *</label>
                  <input {...register("phone")} placeholder="06 12 34 56 78" style={inputStyle} />
                  {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input {...register("email")} type="email" placeholder="marie@example.com" style={inputStyle} />
                  {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
                </div>
                <div>
                  <label style={labelStyle}>Adresse *</label>
                  <input {...register("address")} placeholder="12 rue des Lilas, 21000 Dijon" style={inputStyle} />
                  {errors.address && <p style={errorStyle}>{errors.address.message}</p>}
                </div>
              </div>
            </div>

            {/* Section 2 — Votre chien */}
            <div style={{ background: "#ffffff", border: "1px solid #e8e4d4", borderRadius: 24, padding: "32px 36px" }}>
              <p style={sectionTitleStyle}>Votre chien</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label style={labelStyle}>Nom du chien</label>
                  <input {...register("dogName")} placeholder="Rex" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Race</label>
                  <input {...register("dogBreed")} placeholder="Berger Australien" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Âge</label>
                  <input {...register("dogAge")} placeholder="2 ans" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Sexe</label>
                  <select {...register("dogSex")} style={inputStyle}>
                    <option value="">— Sélectionner —</option>
                    <option value="male">Mâle</option>
                    <option value="female">Femelle</option>
                  </select>
                </div>
              </div>
              <div style={{ marginTop: 20 }}>
                <label style={{ ...labelStyle, display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
                  <input {...register("dogNeutered")} type="checkbox" style={{ width: 18, height: 18, accentColor: "#8f9e63" }} />
                  Stérilisé(e)
                </label>
              </div>
            </div>

            {/* Section 3 — Objet de la demande */}
            <div style={{ background: "#ffffff", border: "1px solid #e8e4d4", borderRadius: 24, padding: "32px 36px" }}>
              <p style={sectionTitleStyle}>Ce qui vous amène *</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
                {serviceOptions.map((s) => {
                  const active = (servicesWatch || []).includes(s.value as FormData["servicesInterest"][number]);
                  return (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => toggleService(s.value)}
                      style={{
                        padding: "10px 18px",
                        borderRadius: 999,
                        border: active ? "2px solid #8f9e63" : "1px solid #e8e4d4",
                        background: active ? "#dde2ce" : "#ffffff",
                        color: active ? "#4a5c2e" : "#4a4f3f",
                        fontFamily: "var(--font-manrope), system-ui, sans-serif",
                        fontSize: 14,
                        fontWeight: active ? 600 : 400,
                        cursor: "pointer",
                        transition: "all 0.15s",
                      }}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
              {errors.servicesInterest && <p style={errorStyle}>{errors.servicesInterest.message}</p>}

              <div>
                <label style={labelStyle}>Décrivez votre situation *</label>
                {/* Guide visible au-dessus */}
                <div
                  style={{
                    background: "#f7f2e3",
                    border: "1px solid #e8e4d4",
                    borderRadius: 12,
                    padding: "16px 20px",
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#6b7a44",
                      marginBottom: 10,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Décrivez-moi la situation, même imparfaitement — il n&apos;y a pas de mauvaise façon de raconter.
                    Quelques pistes pour vous guider :
                  </div>
                  <ul
                    style={{
                      fontFamily: "var(--font-manrope), system-ui, sans-serif",
                      fontSize: 13,
                      lineHeight: 1.7,
                      color: "#4a4f3f",
                      margin: 0,
                      paddingLeft: 18,
                    }}
                  >
                    {situationGuide.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>
                <textarea
                  {...register("description")}
                  rows={6}
                  placeholder="Racontez votre situation ici…"
                  style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                />
                {errors.description && <p style={errorStyle}>{errors.description.message}</p>}
              </div>
            </div>

            {/* Section 4 — Disponibilités */}
            <div style={{ background: "#ffffff", border: "1px solid #e8e4d4", borderRadius: 24, padding: "32px 36px" }}>
              <p style={sectionTitleStyle}>Vos disponibilités *</p>
              <p style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif", fontSize: 14, color: "#7a7f6b", marginTop: -10, marginBottom: 20 }}>
                Indiquez 5 créneaux minimum préférentiels (non contractuels). Vous pouvez en ajouter davantage.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {fields.map((field, i) => (
                  <div key={field.id} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr auto", gap: 12, alignItems: "end" }}>
                    <div>
                      {i === 0 && <label style={labelStyle}>Date souhaitée</label>}
                      <input
                        {...register(`availability.${i}.date`)}
                        type="date"
                        style={inputStyle}
                      />
                      {errors.availability?.[i]?.date && (
                        <p style={errorStyle}>{errors.availability[i]?.date?.message}</p>
                      )}
                    </div>
                    <div>
                      {i === 0 && <label style={labelStyle}>Moment</label>}
                      <select {...register(`availability.${i}.timeOfDay`)} style={inputStyle}>
                        {timeOptions.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      {i === 0 && <label style={labelStyle}>Tranche horaire</label>}
                      <input
                        {...register(`availability.${i}.timeRange`)}
                        placeholder="ex. 9h-11h"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      {i === 0 && <div style={{ height: 25 }} />}
                      {fields.length > 5 && (
                        <button
                          type="button"
                          onClick={() => remove(i)}
                          style={{
                            padding: "12px 14px",
                            borderRadius: 10,
                            border: "1px solid #e8e4d4",
                            background: "#ffffff",
                            color: "#b55c3a",
                            cursor: "pointer",
                            fontSize: 16,
                            lineHeight: 1,
                          }}
                        >
                          ×
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={() => append({ date: "", timeOfDay: "morning", timeRange: "" })}
                style={{
                  marginTop: 12,
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: "1px dashed #c8c4b4",
                  background: "transparent",
                  color: "#6b7a44",
                  fontFamily: "var(--font-manrope), system-ui, sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                + Ajouter un créneau
              </button>
              {errors.availability && !Array.isArray(errors.availability) && (
                <p style={errorStyle}>{errors.availability.message}</p>
              )}
            </div>

            {/* RGPD + Submit */}
            <div>
              <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer" }}>
                <input
                  {...register("rgpdConsent")}
                  type="checkbox"
                  style={{ width: 18, height: 18, marginTop: 2, flexShrink: 0, accentColor: "#8f9e63" }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 13,
                    color: "#4a4f3f",
                    lineHeight: 1.6,
                  }}
                >
                  J&apos;accepte que mes données soient utilisées par Nova Lien dans le cadre de ma demande de contact,
                  conformément à la{" "}
                  <a href="/confidentialite" style={{ color: "#6b7a44", textDecoration: "underline" }}>
                    politique de confidentialité
                  </a>
                  . *
                </span>
              </label>
              {errors.rgpdConsent && <p style={errorStyle}>{errors.rgpdConsent.message}</p>}

              {status === "error" && (
                <div
                  style={{
                    marginTop: 16,
                    padding: "14px 18px",
                    borderRadius: 12,
                    background: "#fff0ec",
                    border: "1px solid #f5c4b4",
                    fontFamily: "var(--font-manrope), system-ui, sans-serif",
                    fontSize: 14,
                    color: "#b55c3a",
                  }}
                >
                  Une erreur est survenue. Veuillez réessayer ou me contacter directement par téléphone.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  marginTop: 24,
                  padding: "16px 40px",
                  borderRadius: 999,
                  border: "none",
                  background: status === "loading" ? "#aab87a" : "#8f9e63",
                  color: "#fbfaf4",
                  fontFamily: "var(--font-quicksand), system-ui, sans-serif",
                  fontSize: 17,
                  fontWeight: 600,
                  cursor: status === "loading" ? "not-allowed" : "pointer",
                  letterSpacing: "0.01em",
                  transition: "background 0.2s",
                }}
              >
                {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande →"}
              </button>
            </div>

          </div>
        </form>
      </div>
    </section>
  );
}
