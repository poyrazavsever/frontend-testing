"use client";

import { FormEvent, useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-slate-950">Bültene Katıl</h2>
      <form className="mt-4 flex flex-col gap-3 sm:flex-row" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="newsletter-email">
          E-posta
        </label>
        <input
          id="newsletter-email"
          className="min-h-11 flex-1 rounded-md border border-slate-300 px-3 text-slate-950 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="poyraz@example.com"
          type="email"
          value={email}
        />
        <button
          className="min-h-11 rounded-md bg-emerald-600 px-4 font-medium text-white hover:bg-emerald-700"
          type="submit"
        >
          Kaydol
        </button>
      </form>
      {isSubmitted ? (
        <p className="mt-3 text-sm font-medium text-emerald-700">
          Başarılı! {email} bültene kaydedildi.
        </p>
      ) : null}
    </section>
  );
}
