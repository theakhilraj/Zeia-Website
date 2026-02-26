import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product, fetchProductsFromSheet } from "@/data/products";

interface ProductsContextType {
    products: Product[];
    isLoading: boolean;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: React.ReactNode }) => {
    const { data, isLoading } = useQuery({
        queryKey: ["products-sheet"],
        queryFn: fetchProductsFromSheet,
        staleTime: 60_000,
    });

    return (
        <ProductsContext.Provider
            value={{
                products: data || [],
                isLoading,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductsProvider");
    }

    return context;
};
