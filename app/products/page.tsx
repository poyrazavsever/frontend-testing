import Link from "next/link";

const products = [
  { id: 1, name: "Test Odaklı Klavye", price: "₺1.200,00" },
  { id: 2, name: "Hızlı Debug Mouse", price: "₺500,00" },
  { id: 3, name: "Temiz Kod Defteri", price: "₺180,00" },
];

export default function ProductsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col gap-8 px-6 py-12">
      <div>
        <p className="text-sm font-medium text-emerald-700">Demo mağaza</p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">Ürünler</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {products.map((product, index) => (
          <article
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            key={product.id}
          >
            <h2 className="text-lg font-semibold text-slate-950">{product.name}</h2>
            <p className="mt-2 text-slate-600">{product.price}</p>
            {index === 0 ? (
              <Link
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-slate-950 px-4 font-medium text-white hover:bg-slate-800"
                href="/cart"
                role="button"
              >
                Sepete Ekle
              </Link>
            ) : (
              <button
                className="mt-4 min-h-11 w-full rounded-md bg-slate-950 px-4 font-medium text-white hover:bg-slate-800"
                type="button"
              >
                İncele
              </button>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
