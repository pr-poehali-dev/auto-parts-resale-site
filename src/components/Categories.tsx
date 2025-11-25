import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const categories = [
  { name: 'Тормозная система', icon: 'Disc3', color: 'bg-red-100 text-red-600' },
  { name: 'Двигатель', icon: 'Cog', color: 'bg-blue-100 text-blue-600' },
  { name: 'Подвеска', icon: 'Construction', color: 'bg-green-100 text-green-600' },
  { name: 'Электрика', icon: 'Zap', color: 'bg-yellow-100 text-yellow-600' },
  { name: 'Фильтры', icon: 'Wind', color: 'bg-purple-100 text-purple-600' },
  { name: 'Освещение', icon: 'Lightbulb', color: 'bg-orange-100 text-orange-600' },
  { name: 'Кузов', icon: 'Box', color: 'bg-indigo-100 text-indigo-600' },
  { name: 'Масла и жидкости', icon: 'Droplet', color: 'bg-cyan-100 text-cyan-600' },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные категории</h2>
          <p className="text-muted-foreground text-lg">Выберите нужную категорию запчастей</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Card 
              key={category.name}
              className="group cursor-pointer transition-all hover:shadow-lg hover:scale-105 animate-fade-in border-2 hover:border-primary"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className={`${category.color} rounded-full p-4 mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={category.icon as any} className="h-8 w-8" />
                </div>
                <h3 className="font-semibold">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
