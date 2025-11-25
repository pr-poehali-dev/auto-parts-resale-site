import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const deliveryOptions = [
  {
    icon: 'Package',
    title: 'Курьерская доставка',
    description: 'Доставим запчасти прямо к вашему адресу',
    price: 'от 300 ₽',
    time: '1-3 дня',
  },
  {
    icon: 'MapPin',
    title: 'Самовывоз',
    description: 'Заберите заказ с нашего склада',
    price: 'Бесплатно',
    time: 'В день заказа',
  },
  {
    icon: 'Truck',
    title: 'Транспортная компания',
    description: 'Отправка в любой город России',
    price: 'от 500 ₽',
    time: '3-7 дней',
  },
];

export default function Delivery() {
  return (
    <section id="delivery" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Доставка и оплата</h2>
          <p className="text-muted-foreground text-lg">Удобные способы получения и оплаты заказа</p>
        </div>

        <Tabs defaultValue="delivery" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="delivery">Доставка</TabsTrigger>
            <TabsTrigger value="payment">Оплата</TabsTrigger>
          </TabsList>

          <TabsContent value="delivery" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {deliveryOptions.map((option, index) => (
                <Card 
                  key={option.title}
                  className="hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-6">
                    <div className="bg-primary/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                      <Icon name={option.icon as any} className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="text-sm text-muted-foreground">{option.time}</span>
                      <span className="font-semibold text-primary">{option.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Icon name="Info" className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Условия доставки</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Бесплатная доставка при заказе от 5000 ₽</li>
                      <li>• Доставка осуществляется ежедневно с 9:00 до 21:00</li>
                      <li>• Возможна срочная доставка в течение 3 часов</li>
                      <li>• Проверка товара при получении</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="payment" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="bg-green-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Icon name="CreditCard" className="h-7 w-7 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Онлайн оплата</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-green-600" />
                      Банковские карты
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-green-600" />
                      Электронные кошельки
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-green-600" />
                      Банковский перевод
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="bg-blue-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Icon name="Banknote" className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">Оплата при получении</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-blue-600" />
                      Наличными курьеру
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-blue-600" />
                      Картой курьеру
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" className="h-4 w-4 text-blue-600" />
                      На складе при самовывозе
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-primary/20 mt-6">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Icon name="Shield" className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Безопасность платежей</h4>
                    <p className="text-sm text-muted-foreground">
                      Все онлайн-платежи защищены по стандарту PCI DSS. Мы не храним данные ваших карт. 
                      Для каждой транзакции используется безопасное соединение.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
