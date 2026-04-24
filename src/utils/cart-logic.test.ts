import { describe, expect, it } from "vitest";
import { addVat, calculateSubtotal, formatPrice } from "./cart-logic";

// Unit testler saf sepet fonksiyonlarının normal ve uç durumlarda doğru çalıştığını kontrol eder.
describe("cart logic", () => {
  it("calculates the subtotal for multiple cart items", () => {
    const items = [
      { name: "Klavye", price: 1200, quantity: 1 },
      { name: "Mouse", price: 500, quantity: 2 },
    ];

    expect(calculateSubtotal(items)).toBe(2200);
  });

  it("returns zero for an empty cart", () => {
    expect(calculateSubtotal([])).toBe(0);
  });

  it("ignores items with zero quantity", () => {
    const items = [{ name: "Monitor", price: 7000, quantity: 0 }];

    expect(calculateSubtotal(items)).toBe(0);
  });

  it("throws an error for negative price or quantity", () => {
    expect(() =>
      calculateSubtotal([{ name: "Hatalı ürün", price: -100, quantity: 1 }]),
    ).toThrow("Price and quantity cannot be negative.");
  });

  it("adds the default 20 percent VAT", () => {
    expect(addVat(1000)).toBe(1200);
  });

  it("adds a custom VAT rate", () => {
    expect(addVat(1000, 0.1)).toBe(1100);
  });

  it("throws an error for negative amount or VAT rate", () => {
    expect(() => addVat(-1)).toThrow("Amount cannot be negative.");
    expect(() => addVat(100, -0.1)).toThrow("VAT rate cannot be negative.");
  });

  it("formats prices in Turkish Lira", () => {
    expect(formatPrice(1250)).toBe("₺1.250,00");
  });
});
