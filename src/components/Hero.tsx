import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjcgNS4zNzMtMTIgMTItMTJzMTIgNS4zNzMgMTIgMTItNS4zNzMgMTItMTIgMTItMTItNS4zNzMtMTItMTJ6bTAtMjRjLTYuNjI3IDAtMTIgNS4zNzMtMTIgMTJzNS4zNzMgMTIgMTIgMTIgMTItNS4zNzMgMTItMTItNS4zNzMtMTItMTItMTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container relative py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Оригинальные запчасти для вашего автомобиля
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Быстрый подбор и доставка автозапчастей. Гарантия качества на все товары.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="Search" className="mr-2 h-5 w-5" />
                Подобрать запчасти
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Связаться с нами
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-white/80">Товаров в наличии</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-white/80">Прием заявок</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">2 дня</div>
                <div className="text-sm text-white/80">Средняя доставка</div>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block animate-scale-in">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/9b45b4bd-00ce-48d7-b2a7-04cc65a7ad64/files/b2fa35bb-302f-4cff-879f-7247b1d969b1.jpg"
              alt="Тормозные диски"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
