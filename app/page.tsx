import Link from "next/link";
import { Newsletter } from "@/src/components/Newsletter";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-6 py-12">
      <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="text-sm font-medium text-emerald-700">
            Frontend Testing Demo
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-normal text-slate-950">
            Frontendte Test Yazmak
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Unit, integration ve E2E test seviyelerini sade bir Next.js projesi
            üzerinden anlatmak için hazırlanmış örnek uygulama.
          </p>
          <Link
            className="mt-6 inline-flex min-h-11 items-center rounded-md bg-slate-950 px-5 font-medium text-white hover:bg-slate-800"
            href="/products"
          >
            Ürünleri Gör
          </Link>
        </div>

        <Newsletter />
      </section>
    </main>
  );
}
