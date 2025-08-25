import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  ChefHat,
  Utensils,
  Star,
  CheckCircle
} from 'lucide-react';

const Catering = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Кейтеринг услуги</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Организуем питание для любых мероприятий. От небольших встреч до крупных корпоративных событий - 
            мы обеспечим ваших гостей вкусной пиццей и отличным сервисом.
          </p>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Корпоративные мероприятия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Конференции, семинары, тимбилдинги, корпоративные вечеринки
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• От 20 до 500 человек</li>
                  <li>• Полное обслуживание</li>
                  <li>• Индивидуальное меню</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Частные мероприятия</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Дни рождения, свадьбы, юбилеи, семейные торжества
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• От 10 до 200 человек</li>
                  <li>• Праздничное оформление</li>
                  <li>• Персональный подход</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <ChefHat className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Выездное обслуживание</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Приготовление пиццы на месте проведения мероприятия
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Мобильная печь</li>
                  <li>• Шоу-программа</li>
                  <li>• Свежая пицца</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Пакеты услуг</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200">
              <CardHeader className="text-center">
                <Badge className="bg-blue-600 w-fit mx-auto mb-2">БАЗОВЫЙ</Badge>
                <CardTitle className="text-2xl">Стандарт</CardTitle>
                <div className="text-3xl font-bold text-blue-600">от 800₽</div>
                <div className="text-sm text-gray-500">за человека</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>4 вида пиццы на выбор</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Напитки (вода, соки)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Одноразовая посуда</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Доставка и сервировка</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Выбрать пакет</Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-red-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-600">ПОПУЛЯРНЫЙ</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="bg-red-600 w-fit mx-auto mb-2">ПРЕМИУМ</Badge>
                <CardTitle className="text-2xl">Комфорт</CardTitle>
                <div className="text-3xl font-bold text-red-600">от 1200₽</div>
                <div className="text-sm text-gray-500">за человека</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>8 видов пиццы на выбор</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Салаты и закуски</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Напитки и десерты</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Официанты</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Декор столов</span>
                  </li>
                </ul>
                <Button className="w-full mt-6">Выбрать пакет</Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-500">
              <CardHeader className="text-center">
                <Badge className="bg-yellow-600 w-fit mx-auto mb-2">VIP</Badge>
                <CardTitle className="text-2xl">Люкс</CardTitle>
                <div className="text-3xl font-bold text-yellow-600">от 1800₽</div>
                <div className="text-sm text-gray-500">за человека</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Безлимитное меню</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Живое приготовление</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Полный сервис</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Персональный менеджер</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Праздничное оформление</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Выбрать пакет</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">1. Заявка</h3>
              <p className="text-gray-600">Оставьте заявку или позвоните нам</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">2. Консультация</h3>
              <p className="text-gray-600">Обсуждаем детали мероприятия</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">3. Подготовка</h3>
              <p className="text-gray-600">Готовим меню и организуем доставку</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">4. Мероприятие</h3>
              <p className="text-gray-600">Обслуживаем ваше событие</p>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Заказать кейтеринг</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Компания</label>
                  <Input placeholder="Название компании" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Дата мероприятия</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Количество гостей</label>
                  <Input type="number" placeholder="50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Тип мероприятия</label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option>Выберите тип мероприятия</option>
                  <option>Корпоративное мероприятие</option>
                  <option>День рождения</option>
                  <option>Свадьба</option>
                  <option>Конференция</option>
                  <option>Другое</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Адрес проведения</label>
                <Input placeholder="Укажите адрес мероприятия" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Дополнительные пожелания</label>
                <Textarea 
                  placeholder="Опишите особенности мероприятия, предпочтения по меню..."
                  rows={4}
                />
              </div>
              <Button className="w-full" size="lg">
                Отправить заявку
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Мы свяжемся с вами в течение 30 минут для уточнения деталей
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catering;