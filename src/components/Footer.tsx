import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">🍕</span>
              </div>
              <span className="text-xl font-bold">ПиццаМастер</span>
            </div>
            <p className="text-gray-400 mb-4">
              Лучшая пицца в городе с доставкой на дом. Свежие ингредиенты, 
              быстрая доставка, доступные цены.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li><Link to="/menu" className="text-gray-400 hover:text-white">Меню</Link></li>
              <li><Link to="/promotions" className="text-gray-400 hover:text-white">Акции</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white">Доставка</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">О нас</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Вакансии</Link></li>
              <li><Link to="/franchise" className="text-gray-400 hover:text-white">Франшиза</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/catering" className="text-gray-400 hover:text-white">Кейтеринг</Link></li>
              <li><Link to="/corporate" className="text-gray-400 hover:text-white">Корпоративные заказы</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white">Мероприятия</Link></li>
              <li><Link to="/gift-cards" className="text-gray-400 hover:text-white">Подарочные карты</Link></li>
              <li><Link to="/loyalty" className="text-gray-400 hover:text-white">Программа лояльности</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">info@pizzamaster.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">г. Москва, ул. Примерная, 123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-600" />
                <span className="text-gray-400">Ежедневно 10:00 - 23:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 ПиццаМастер. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;