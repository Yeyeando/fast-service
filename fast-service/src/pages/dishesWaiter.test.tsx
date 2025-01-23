import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import DishesWaiter from "./DishesWaiter";
import { DishProvider } from "./DishContext";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: () => ({
      id: "1",
      table: "1",
    }),
  };
});

describe("DishesWaiter component", () => {
  it("muestra los ingredientes del plato al hacer clic en un plato de una categoría", async () => {
    const mockCategoriesData = {
      categories: [
        {
          id: 1,
          title: "Pasta",
          category: [
            {
              name: "Spaghetti",
              url: "/img/spaghetti.jpg",
              ingredients: [1, 2],
            },
            {
              name: "Lasagna",
              url: "/img/lasagna.jpg",
              ingredients: [3, 4],
            },
          ],
        },
      ],
    };

    vi.mock(
      "../components/general/jsons/categories/categories.json",
      () => mockCategoriesData
    );

    render(
      <MemoryRouter initialEntries={["/DishesWaiter/1/1"]}>
        <DishProvider>
          <DishesWaiter />
        </DishProvider>
      </MemoryRouter>
    );

    // Verificar que los platos de la categoría "Pasta" se muestran
    expect(screen.getByText("Spaghetti")).toBeInTheDocument();
    expect(screen.getByText("Lasagna")).toBeInTheDocument();

    // Hacer clic en el plato "Spaghetti"
    fireEvent.click(screen.getByText("Spaghetti"));

    // Esperar a que se renderice el panel de ingredientes
    await waitFor(() => {
      expect(screen.getByText("Ingredients")).toBeInTheDocument(); // Verifica que el panel de ingredientes se mostró
      expect(screen.getByText("1")).toBeInTheDocument(); // Verificar que el ingrediente 1 se está mostrando
      expect(screen.getByText("2")).toBeInTheDocument(); // Verificar que el ingrediente 2 se está mostrando
    });
  });

  it("muestra un mensaje si no hay platos en la categoría", () => {
    // Mock para una categoría vacía
    const emptyCategory = {
      categories: [
        {
          id: 2,
          title: "EmptyCategory",
          category: [],
        },
      ],
    };

    vi.mock(
      "../components/general/jsons/categories/categories.json",
      () => emptyCategory
    );

    vi.mock("react-router-dom", async () => {
      const actual = await vi.importActual("react-router-dom");
      return {
        ...actual,
        useParams: () => ({
          id: "2",
          table: "1",
        }),
      };
    });

    render(
      <MemoryRouter initialEntries={["/DishesWaiter/2/1"]}>
        <DishProvider>
          <DishesWaiter />
        </DishProvider>
      </MemoryRouter>
    );

    // Verificar que se muestra el mensaje de "No hay platos disponibles"
    expect(
      screen.getByText("No hay platos disponibles para esta categoría.")
    ).toBeInTheDocument();
  });
});
