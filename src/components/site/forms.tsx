"use client";

import { useState } from "react";

import type { SiteMessages } from "@/messages/schema";

type FormField = {
  name: string;
  label: string;
  type?: string;
};

type InquiryFormProps = {
  messages: SiteMessages;
  fields: FormField[];
  submitLabel: string;
};

const defaultRows = 5;

export function InquiryForm({ messages, fields, submitLabel }: InquiryFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleChange(name: string, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const invalid = fields.some((field) => !(values[field.name] ?? "").trim());

    if (invalid) {
      setStatus("error");
      return;
    }

    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-panel sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) =>
          field.name === "message" ? (
            <label key={field.name} className="sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-neutral-700">{field.label}</span>
              <textarea
                rows={defaultRows}
                className="w-full rounded-3xl border border-black/10 bg-fog px-4 py-3 text-sm text-ink outline-none transition focus:border-black/30"
                value={values[field.name] ?? ""}
                onChange={(event) => handleChange(field.name, event.target.value)}
              />
            </label>
          ) : (
            <label key={field.name}>
              <span className="mb-2 block text-sm font-medium text-neutral-700">{field.label}</span>
              <input
                type={field.type ?? "text"}
                className="w-full rounded-full border border-black/10 bg-fog px-4 py-3 text-sm text-ink outline-none transition focus:border-black/30"
                value={values[field.name] ?? ""}
                onChange={(event) => handleChange(field.name, event.target.value)}
              />
            </label>
          )
        )}
      </div>
      <button type="submit" className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
        {submitLabel}
      </button>
      {status === "error" ? <p className="mt-4 text-sm text-red-600">{messages.forms.validation}</p> : null}
      {status === "success" ? <p className="mt-4 text-sm text-emerald-700">{messages.forms.success}</p> : null}
    </form>
  );
}
