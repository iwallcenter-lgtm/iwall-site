"use client";

import { useState } from "react";

import type { Locale } from "@/lib/locales";
import { siteConfig } from "@/lib/site-config";
import { contactCopy } from "@/lib/storefront";
import type { SiteMessages } from "@/messages/schema";

type FormField = {
  name: string;
  label: string;
  type?: string;
};

type InquiryFormProps = {
  locale: Locale;
  messages: SiteMessages;
  fields: FormField[];
  submitLabel: string;
  requiredFields?: string[];
};

export function InquiryForm({ locale, messages, fields, submitLabel, requiredFields }: InquiryFormProps) {
  const [hasError, setHasError] = useState(false);
  const required = requiredFields ?? fields.map((field) => field.name);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = Object.fromEntries(fields.map((field) => [field.name, String(data.get(field.name) ?? "").trim()]));

    if (required.some((name) => !values[name])) {
      setHasError(true);
      return;
    }

    setHasError(false);
    const message = [
      `i-WALL · ${submitLabel}`,
      ...fields.filter((field) => values[field.name]).map((field) => `${field.label}: ${values[field.name]}`)
    ].join("\n");
    window.location.assign(`${siteConfig.company.whatsappUrl}?text=${encodeURIComponent(message)}`);
  }

  return (
    <form onSubmit={handleSubmit} aria-label={submitLabel} aria-describedby="inquiry-form-note" className="self-start rounded-2xl border border-pine/15 bg-white p-6 sm:p-8">
      <p id="inquiry-form-note" className="mb-6 text-sm leading-6 text-neutral-600">{contactCopy.formNote[locale]}</p>
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const isRequired = required.includes(field.name);
          const common = {
            name: field.name,
            required: isRequired,
            onChange: () => setHasError(false),
            className: "w-full rounded-xl border border-pine/20 bg-[#f7faf8] px-4 py-3 text-base text-pine-deep outline-none transition focus:border-pine focus:ring-1 focus:ring-pine"
          };
          return (
            <label key={field.name} className={field.name === "message" ? "sm:col-span-2" : undefined}>
              <span className="mb-2 block text-sm font-semibold text-pine-deep">
                {field.label}{!isRequired && <span className="font-normal text-neutral-500"> ({contactCopy.optional[locale]})</span>}
              </span>
              {field.name === "message" ? (
                <textarea {...common} rows={5} maxLength={3000} />
              ) : (
                <input {...common} type={field.type ?? (field.name === "phone" ? "tel" : "text")} maxLength={field.name === "email" ? 254 : 120}
                  autoComplete={field.name === "name" ? "name" : field.name === "phone" ? "tel" : field.name === "email" ? "email" : undefined} />
              )}
            </label>
          );
        })}
      </div>
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white transition hover:bg-pine-deep">
        {contactCopy.send[locale]}
      </button>
      {hasError && <p className="mt-4 text-sm text-red-600" role="alert">{messages.forms.validation}</p>}
    </form>
  );
}
