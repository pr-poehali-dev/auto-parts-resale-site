import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Shield',
    title: 'Гарантия качества',
    description: 'Все товары сертифицированы. Гарантия на все запчасти от 6 месяцев.',
  },
  {
    icon: 'Truck',
    title: 'Быстрая доставка',
    description: 'Доставка по всей России. В наличии склады в 15 городах.',
  },
  {
    icon: 'BadgePercent',
    title: 'Выгодные цены',
    description: 'Работаем напрямую с производителями. Без лишних наценок.',
  },
  {
    icon: 'Headphones',
    title: 'Поддержка 24/7',
    description: 'Консультации специалистов в любое время. Поможем с подбором.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">О компании</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы специализируемся на продаже оригинальных и качественных аналоговых автозапчастей с 2010 года
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="text-center hover:shadow-lg transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon name={feature.icon as any} className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary text-white rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Почему выбирают нас?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Более 14 лет на рынке автозапчастей</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Свыше 50 000 довольных клиентов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Собственная сеть складов по России</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>Прямые поставки от производителей</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm">Товаров</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-sm">Клиентов</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-sm">Городов</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold text-primary mb-2">14</div>
                <div className="text-sm">Лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
