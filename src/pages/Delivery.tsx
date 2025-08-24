import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Clock, MapPin, CreditCard, Shield, Phone } from 'lucide-react';

const Delivery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Доставка и оплата</h1>
          <p className="text-xl text-gray-600">Быстро, удобно и надежно</p>
        </div>

        {/* Delivery Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="w-6 h-6 text-red-600" />
                <span>Условия доставки</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span>Бесплатная доставка</span>
                <Badge className="bg-green-600">от 500₽</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span>Стоимость доставки</span>
                <span className="font-semibold">150₽</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span>Время доставки</span>
                <Badge className="bg-blue-600">15-30 мин</Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span>Зона доставки</span>
                <span className="font-semibold">в пределах МКАД</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-red-600" />
                <span>Режим работы</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Понедельник - Четверг</span>
                  <span className="font-semibold">10:00 - 23:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Пятница - Суббота</span>
                  <span className="font-semibold">10:00 - 01:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Воскресенье</span>
                  <span className="font-semibold">10:00 - 23:00</span>
                </div>
              </div>
              <div className="p-3 bg-red-50 rounded-lg">
                <p className="text-sm text-red-700">
                  <strong>Ночная доставка:</strong> с 23:00 до 10:00 стоимость доставки увеличивается на 100₽
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Methods */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Банковской картой</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Visa, MasterCard, МИР при получении или онлайн
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">₽</span>
                </div>
                <CardTitle className="text-lg">Наличными</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Оплата курьеру при получении заказа
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">SBP</span>
                </div>
                <CardTitle className="text-lg">СБП</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Система быстрых платежей через QR-код
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">💳</span>
                </div>
                <CardTitle className="text-lg">Электронные кошельки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  ЮMoney, QIWI, WebMoney
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Delivery Zones */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Зоны доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-green-600">Зеленая зона</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Бесплатно</div>
                <p className="text-gray-600 mb-4">при заказе от 500₽</p>
                <p className="text-sm text-gray-500">
                  Центральный район, в радиусе 3 км от ресторана
                </p>
                <div className="mt-4 p-2 bg-green-50 rounded">
                  <p className="text-sm text-green-700">Время доставки: 15-25 мин</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-orange-600">Оранжевая зона</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">150₽</div>
                <p className="text-gray-600 mb-4">стоимость доставки</p>
                <p className="text-sm text-gray-500">
                  Спальные районы, в радиусе 3-7 км от ресторана
                </p>
                <div className="mt-4 p-2 bg-orange-50 rounded">
                  <p className="text-sm text-orange-700">Время доставки: 25-35 мин</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-red-600">Красная зона</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">300₽</div>
                <p className="text-gray-600 mb-4">стоимость доставки</p>
                <p className="text-sm text-gray-500">
                  Удаленные районы, в радиусе 7-15 км от ресторана
                </p>
                <div className="mt-4 p-2 bg-red-50 rounded">
                  <p className="text-sm text-red-700">Время доставки: 35-50 мин</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Наши гарантии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-6 h-6 text-red-600" />
                  <span>Гарантия качества</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Горячая пицца при доставке</li>
                  <li>• Свежие ингредиенты</li>
                  <li>• Соблюдение рецептуры</li>
                  <li>• Возврат денег при несоответствии качества</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-red-600" />
                  <span>Гарантия времени</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Доставка в указанное время</li>
                  <li>• SMS-уведомления о статусе заказа</li>
                  <li>• Скидка 20% при опоздании более чем на 15 минут</li>
                  <li>• Отслеживание курьера в реальном времени</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Часто задаваемые вопросы</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Можно ли заказать доставку на определенное время?</h3>
              <p className="text-gray-600">
                Да, вы можете выбрать удобное время доставки при оформлении заказа. 
                Мы принимаем заказы на определенное время за 2 часа до желаемого времени доставки.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Что делать, если курьер не может найти адрес?</h3>
              <p className="text-gray-600">
                Курьер обязательно свяжется с вами по телефону. Пожалуйста, указывайте точный адрес 
                и будьте на связи во время доставки.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Можно ли изменить или отменить заказ?</h3>
              <p className="text-gray-600">
                Заказ можно изменить или отменить в течение 5 минут после оформления. 
                После начала приготовления изменения невозможны.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Есть ли минимальная сумма заказа?</h3>
              <p className="text-gray-600">
                Минимальная сумма заказа составляет 300₽. Для бесплатной доставки - от 500₽.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Delivery;