import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ImageGallery from "./Gallery";
import imagesData from "../../general/jsons/tables/tables.json";

describe("ImageGallery Component", () => {
  it("renderiza correctamente las imagenes", () => {
    render(
      <MemoryRouter>
        <ImageGallery />
      </MemoryRouter>
    );

    // Verifica que todas las imágenes se rendericen
    const imageElements = screen.getAllByAltText("logout"); // Obtiene todas las imágenes con el alt "logout"

    // Asegúrate de que el número de imágenes coincida con los datos
    expect(imageElements).toHaveLength(imagesData.tables.length);

    // Verifica cada imagen individualmente
    imagesData.tables.forEach((table, index) => {
      const imageElement = imageElements[index];
      expect(imageElement).toHaveAttribute("src", table.url); // Verifica que la URL sea correcta
    });
  });
});
