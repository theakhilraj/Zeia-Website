import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useProducts } from "@/contexts/ProductsContext";

const SearchDialog = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { products } = useProducts();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((isOpen) => !isOpen);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProducts = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) return [];

    return products
      .filter((product) =>
        [product.name, product.category, product.collection]
          .join(" ")
          .toLowerCase()
          .includes(trimmedQuery)
      )
      .slice(0, 6);
  }, [products, query]);

  const handleSelect = (productId: number) => {
    setOpen(false);
    setShowResults(false);
    setQuery("");
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <div ref={searchContainerRef} className="relative hidden md:block">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          placeholder="Search for products, brands and more"
          className="h-10 w-[300px] rounded bg-muted pl-11 pr-4 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground focus:bg-background focus:ring-2 focus:ring-ring lg:w-[380px]"
          aria-label="Search products"
        />

        {showResults && query.trim() && (
          <div className="absolute top-12 z-[100] w-full rounded-md border bg-background p-2 shadow-lg">
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => handleSelect(product.id)}
                  className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left transition-colors hover:bg-muted"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-10 w-10 rounded object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium leading-none">{product.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      ₹{product.price.toLocaleString()}
                    </p>
                  </div>
                </button>
              ))
            ) : (
              <p className="px-2 py-3 text-sm text-muted-foreground">
                No matching products found.
              </p>
            )}
          </div>
        )}
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="relative md:hidden"
      >
        <Search className="h-5 w-5" />
        <span className="sr-only">Search products</span>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search products..." />
        <CommandList>
          <CommandEmpty>No products found.</CommandEmpty>
          <CommandGroup heading="Products">
            {products.map((product) => (
              <CommandItem
                key={product.id}
                value={product.name}
                onSelect={() => handleSelect(product.id)}
                className="cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-10 w-10 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ₹{product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchDialog;
