import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Car" className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">АвтоЗапчасти</span>
            </div>
            <p className="text-white/80 text-sm">
              Качественные автозапчасти с доставкой по всей России с 2010 года
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Покупателям</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#catalog" className="hover:text-primary transition-colors">Каталог</a></li>
              <li><a href="#delivery" className="hover:text-primary transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Возврат товара</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Компания</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
              <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Партнёрам</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4 text-primary" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4 text-primary" />
                <span>info@avtozapchasti.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" className="h-4 w-4 text-primary" />
                <span>г. Москва, ул. Автомобильная, 10</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© 2024 АвтоЗапчасти. Все права защищены.</p>
          <div className="flex gap-4 text-sm text-white/60">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
