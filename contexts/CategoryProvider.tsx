import { createContext, useReducer } from "react";
import { Category } from "@/types";
import uuid from "react-native-uuid";

const CATEGORIES: Category[] = [
  {
    id: uuid.v4().toString(),
    name: "Grocery",
    color: "#03fc5a",
    icon: "cart-shopping",
  },
  {
    id: uuid.v4().toString(),
    name: "Food",
    color: "#fc035a",
    icon: "utensils",
  },
  {
    id: uuid.v4().toString(),
    name: "House Payment",
    color: "#fcba03",
    icon: "house",
  },
  {
    id: uuid.v4().toString(),
    name: "Pet",
    color: "#2858f7",
    icon: "dog",
  },
  {
    id: uuid.v4().toString(),
    name: "Medicine",
    color: "#a62b83",
    icon: "capsules",
  },
];

type CategoryContextType = [Category[]];
export const CategoryContext = createContext<CategoryContextType>([[]]);

type CategoryProviderProps = {
  children?: React.ReactNode;
};
export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  // const [categories, updateCategories] = useReducer()

  return (
    <CategoryContext.Provider value={[CATEGORIES]}>
      {children}
    </CategoryContext.Provider>
  );
};
