import Link from "next/link";

export default function CartPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-12">
      <p className="text-sm font-medium text-emerald-700">E2E hedef sayfası</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-950">Sepet</h1>
      <p className="mt-4 text-slate-600">
        İlk ürün sepete eklendi. Playwright bu sayfaya yönlenildiğini kontrol eder.
      </p>
      <Link className="mt-6 font-medium text-emerald-700 hover:text-emerald-800" href="/products">
        Ürünlere dön
      </Link>
    </main>
  );
}
