export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export function calculateSubtotal(items: CartItem[]) {
  return items.reduce((total, item) => {
    if (item.price < 0 || item.quantity < 0) {
      throw new Error("Price and quantity cannot be negative.");
    }

    return total + item.price * item.quantity;
  }, 0);
}

export function addVat(amount: number, vatRate = 0.2) {
  if (amount < 0) {
    throw new Error("Amount cannot be negative.");
  }

  if (vatRate < 0) {
    throw new Error("VAT rate cannot be negative.");
  }

  return amount + amount * vatRate;
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
  }).format(amount);
}
