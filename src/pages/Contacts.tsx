import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h1>
          <p className="text-xl text-gray-600">Свяжитесь с нами любым удобным способом</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Как с нами связаться</h2>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                      <p className="text-gray-600 mb-1">+7 (999) 123-45-67</p>
                      <p className="text-sm text-gray-500">Круглосуточно для заказов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-gray-600 mb-1">info@pizzamaster.ru</p>
                      <p className="text-sm text-gray-500">Ответим в течение 24 часов</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Главный офис</h3>
                      <p className="text-gray-600 mb-1">г. Москва, ул. Примерная, 123</p>
                      <p className="text-sm text-gray-500">Метро "Примерная", 5 минут пешком</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                      <p className="text-gray-600 mb-1">Ежедневно: 10:00 - 23:00</p>
                      <p className="text-sm text-gray-500">Доставка работает круглосуточно</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MessageCircle className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Социальные сети</h3>
                      <div className="space-y-1">
                        <p className="text-gray-600">VK: @pizzamaster</p>
                        <p className="text-gray-600">Instagram: @pizzamaster_official</p>
                        <p className="text-gray-600">Telegram: @pizzamaster_bot</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Тема</label>
                  <select className="w-full border rounded-md px-3 py-2">
                    <option>Выберите тему</option>
                    <option>Вопрос о заказе</option>
                    <option>Жалоба</option>
                    <option>Предложение</option>
                    <option>Сотрудничество</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Опишите ваш вопрос или предложение..."
                    rows={5}
                  />
                </div>
                <Button className="w-full">Отправить сообщение</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Наши точки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Центральная</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">ул. Центральная, 45</p>
                <p className="text-sm text-gray-500 mb-2">Пн-Вс: 10:00-23:00</p>
                <p className="text-sm text-red-600">+7 (999) 123-45-01</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Северная</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">пр. Северный, 123</p>
                <p className="text-sm text-gray-500 mb-2">Пн-Вс: 10:00-23:00</p>
                <p className="text-sm text-red-600">+7 (999) 123-45-02</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Южная</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">ул. Южная, 78</p>
                <p className="text-sm text-gray-500 mb-2">Пн-Вс: 10:00-23:00</p>
                <p className="text-sm text-red-600">+7 (999) 123-45-03</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Интерактивная карта с точками</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;