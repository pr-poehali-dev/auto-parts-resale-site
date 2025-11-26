import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const products = [
  {
    id: 1,
    name: 'Тормозной диск передний',
    brand: 'Brembo',
    price: 4500,
    image: 'https://cdn.poehali.dev/projects/9b45b4bd-00ce-48d7-b2a7-04cc65a7ad64/files/b2fa35bb-302f-4cff-879f-7247b1d969b1.jpg',
    category: 'Тормозная система',
    inStock: true,
  },
  {
    id: 2,
    name: 'Масляный фильтр',
    brand: 'Mann Filter',
    price: 850,
    image: 'https://cdn.poehali.dev/projects/9b45b4bd-00ce-48d7-b2a7-04cc65a7ad64/files/2dec63c2-b7e0-486f-889f-883e282a4729.jpg',
    category: 'Фильтры',
    inStock: true,
  },
  {
    id: 3,
    name: 'Фара передняя правая',
    brand: 'Hella',
    price: 12500,
    image: 'https://cdn.poehali.dev/projects/9b45b4bd-00ce-48d7-b2a7-04cc65a7ad64/files/d42a52be-2481-4112-9a81-c447a7d4a948.jpg',
    category: 'Освещение',
    inStock: true,
  },
  {
    id: 4,
    name: 'Тормозной диск задний',
    brand: 'ATE',
    price: 3800,
    image: 'https://cdn.poehali.dev/projects/9b45b4bd-00ce-48d7-b2a7-04cc65a7ad64/files/b2fa35bb-302f-4cff-879f-7247b1d969b1.jpg',
    category: 'Тормозная система',
    inStock: false,
  },
  {
    id: 5,
    name: 'Воздушный фильтр',
    brand: 'Bosch',
    price: 650,
    image: 'https://cdn.poehali.dev/projects/9b45b4bd-00ce-48d7-b2a7-04cc65a7ad64/files/2dec63c2-b7e0-486f-889f-883e282a4729.jpg',
    category: 'Фильтры',
    inStock: true,
  },
  {
    id: 6,
    name: 'Фара передняя левая',
    brand: 'Valeo',
    price: 11900,
    image: 'https://cdn.poehali.dev/projects/9b45b4bd-00ce-48d7-b2a7-04cc65a7ad64/files/d42a52be-2481-4112-9a81-c447a7d4a948.jpg',
    category: 'Освещение',
    inStock: true,
  },
];

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addToCart } = useCart();
  const { toast } = useToast();

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    toast({
      title: 'Добавлено в корзину',
      description: product.name,
    });
  };

  return (
    <section id="catalog" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Каталог запчастей</h2>
          <p className="text-muted-foreground text-lg">Широкий ассортимент оригинальных и аналоговых запчастей</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-[250px]">
              <SelectValue placeholder="Все категории" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все категории</SelectItem>
              <SelectItem value="Тормозная система">Тормозная система</SelectItem>
              <SelectItem value="Фильтры">Фильтры</SelectItem>
              <SelectItem value="Освещение">Освещение</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all animate-fade-in"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="relative overflow-hidden bg-gray-50">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
                {!product.inStock && (
                  <Badge className="absolute top-4 right-4 bg-red-500">Под заказ</Badge>
                )}
                {product.inStock && (
                  <Badge className="absolute top-4 right-4 bg-green-500">В наличии</Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-1">{product.brand}</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price.toLocaleString()} ₽</span>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  className="w-full" 
                  variant={product.inStock ? 'default' : 'outline'}
                  onClick={() => product.inStock && handleAddToCart(product)}
                  disabled={!product.inStock}
                >
                  <Icon name="ShoppingCart" className="mr-2 h-4 w-4" />
                  {product.inStock ? 'В корзину' : 'Уточнить наличие'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}