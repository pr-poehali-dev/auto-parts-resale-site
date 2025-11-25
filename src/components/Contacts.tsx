import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <section id="contacts" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-muted-foreground text-lg">Свяжитесь с нами удобным способом</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon name="Phone" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                    <p className="text-sm text-muted-foreground mt-1">Ежедневно с 9:00 до 21:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon name="Mail" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@avtozapchasti.ru</p>
                    <p className="text-muted-foreground">support@avtozapchasti.ru</p>
                    <p className="text-sm text-muted-foreground mt-1">Ответим в течение 1 часа</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Icon name="MapPin" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Автомобильная, д. 10</p>
                    <p className="text-sm text-muted-foreground mt-1">Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-white">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3">Мы в соцсетях</h3>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20">
                    <Icon name="MessageCircle" className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20">
                    <Icon name="Instagram" className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="bg-white/10 hover:bg-white/20 border-white/20">
                    <Icon name="Send" className="h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Написать нам</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="example@mail.ru" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите ваш вопрос или требуемые запчасти..."
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
