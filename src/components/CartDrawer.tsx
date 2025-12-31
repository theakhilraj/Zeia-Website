import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

const CartDrawer = () => {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, totalItems } = useCart();
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    closeCart();
  };

  const handleCheckout = () => {
    // Build WhatsApp message with cart details
    const orderDetails = items.map((item) => 
      `• ${item.name} (Size: ${item.size}) x${item.quantity} - ₹${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const message = `🛒 *New Order from ZIEA*\n\n*Order Details:*\n${orderDetails}\n\n*Subtotal:* ₹${subtotal.toLocaleString()}\n\nPlease confirm my order.`;
    
    const whatsappUrl = `https://wa.me/918301027765?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    closeCart();
  };

  const handleViewProduct = (id: number) => {
    closeCart();
    navigate(`/product/${id}`);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-foreground/40 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-background z-50 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5" />
              <h2 className="font-display text-xl font-medium">Your Cart</h2>
              <span className="text-sm text-muted-foreground">({totalItems} items)</span>
            </div>
            <Button variant="ghost" size="icon" onClick={closeCart}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
                <p className="text-lg font-medium mb-2">Your cart is empty</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Add some beautiful pieces to get started
                </p>
                <Button variant="accent" onClick={handleContinueShopping}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-4 pb-6 border-b border-border last:border-0 animate-fade-in"
                  >
                    {/* Product Image */}
                    <button
                      onClick={() => handleViewProduct(item.id)}
                      className="w-24 h-28 bg-secondary rounded-lg overflow-hidden flex-shrink-0 group"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <button
                          onClick={() => handleViewProduct(item.id)}
                          className="font-medium hover:text-accent transition-colors text-left"
                        >
                          {item.name}
                        </button>
                        <p className="text-sm text-muted-foreground mt-1">Size: {item.size}</p>
                        <p className="text-sm font-medium mt-1">₹{item.price.toLocaleString()}</p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3 border border-border rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                            className="p-2 hover:bg-secondary transition-colors rounded-l-lg"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                            className="p-2 hover:bg-secondary transition-colors rounded-r-lg"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeItem(item.id, item.size)}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-xl font-medium">₹{subtotal.toLocaleString()}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping and taxes calculated at checkout
              </p>
              <div className="grid gap-3">
                <Button variant="accent" size="lg" className="w-full" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={handleContinueShopping}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
