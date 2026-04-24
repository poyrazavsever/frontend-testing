import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Newsletter } from "./Newsletter";

// Integration testler form, state ve DOM çıktısının birlikte çalıştığını gösterir.
describe("Newsletter", () => {
  it("lets the user type an email address", async () => {
    const user = userEvent.setup();
    render(<Newsletter />);

    const input = screen.getByLabelText("E-posta");
    await user.type(input, "poyraz@example.com");

    expect(input).toHaveValue("poyraz@example.com");
  });

  it("shows a success message after submit", async () => {
    const user = userEvent.setup();
    render(<Newsletter />);

    await user.type(screen.getByLabelText("E-posta"), "poyraz@example.com");
    await user.click(screen.getByRole("button", { name: "Kaydol" }));

    expect(screen.getByText(/Başarılı!/)).toBeInTheDocument();
    expect(screen.getByText(/poyraz@example.com/)).toBeInTheDocument();
  });
});
