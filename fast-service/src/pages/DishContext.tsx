import React, { createContext, useContext, useState } from "react";
interface Dish {
  title: string;
  image: string;
}

interface DishContextType {
  selectedDishes: Dish[];
  addDish: (dish: Dish) => void;
  clearDishes: () => void; // Nueva función para limpiar la lista
}

const DishContext = createContext<DishContextType | undefined>(undefined);

export const DishProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedDishes, setSelectedDishes] = useState<Dish[]>([]);

  const addDish = (dish: Dish) => {
    setSelectedDishes((prev) => [...prev, dish]);
  };

  const clearDishes = () => {
    setSelectedDishes([]);
  };

  return (
    <DishContext.Provider value={{ selectedDishes, addDish, clearDishes }}>
      {children}
    </DishContext.Provider>
  );
};

export const useDishContext = () => {
  const context = useContext(DishContext);
  if (!context) {
    throw new Error("useDishContext must be used within a DishProvider");
  }
  return context;
};
