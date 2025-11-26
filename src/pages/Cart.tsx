import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      setOrderPlaced(false);
    }, 3000);
  };

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <Icon name="ShoppingCart" size={64} className="mx-auto text-gray-300 mb-4" />
            <h1 className="text-2xl font-bold mb-4">Корзина пуста</h1>
            <p className="text-gray-600 mb-8">Добавьте товары из каталога</p>
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90">
                Перейти в каталог
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <Icon name="CheckCircle" size={64} className="mx-auto text-green-500 mb-4" />
            <h1 className="text-2xl font-bold mb-4">Заказ оформлен!</h1>
            <p className="text-gray-600 mb-8">Мы свяжемся с вами в ближайшее время</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Корзина</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div key={item.id} className="bg-white rounded-lg p-4 flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    {item.article && (
                      <p className="text-sm text-gray-500 mb-2">Артикул: {item.article}</p>
                    )}
                    <p className="text-primary font-bold">{item.price.toLocaleString('ru-RU')} ₽</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <Icon name="X" size={20} />
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                      >
                        -
                      </button>
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                        className="w-16 text-center"
                        min="1"
                      />
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Итого</h2>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Товаров:</span>
                    <span>{items.reduce((sum, item) => sum + item.quantity, 0)} шт</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold">
                    <span>Сумма:</span>
                    <span className="text-primary">{totalPrice.toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="w-full bg-primary hover:bg-primary/90 mb-2"
                >
                  Оформить заказ
                </Button>
                <Link to="/">
                  <Button variant="outline" className="w-full">
                    Продолжить покупки
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
