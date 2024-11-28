import React, { createContext, useContext, useState } from "react";
interface Dish {
  title: string;
  image: string;
  // table?: number;
}

interface DishContextType {
  selectedDishes: Dish[];
  addDish: (dish: Dish) => void;
  clearDishes: () => void;
}

const DishContext = createContext<DishContextType | undefined>(undefined);

export const DishProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedDishes, setSelectedDishes] = useState<Dish[]>([]);

  const addDish = (dish: Dish) => {
    setSelectedDishes((prev) => [...prev, dish]);

    // setSelectedDishes((prev) => {
    //   const newState = [...prev];
    //   newState[table] = [...newState[table], dish];
    //   return newState;
    // });
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
