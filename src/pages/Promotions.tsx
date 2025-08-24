import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Gift, Percent, Users, Calendar, Star, Heart } from 'lucide-react';

const Promotions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Акции и скидки</h1>
          <p className="text-xl text-gray-600">Выгодные предложения каждый день</p>
        </div>

        {/* Current Promotions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Актуальные акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-red-600 text-white">ХИТ</Badge>
                  <Gift className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl">2+1 в подарок</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  При заказе двух больших пицц - третья пицца среднего размера в подарок!
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>• Действует до 31 декабря</p>
                  <p>• Только для больших пицц</p>
                  <p>• Подарочная пицца - средний размер</p>
                </div>
                <Button className="w-full">Заказать сейчас</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-green-600 text-white">НОВИНКА</Badge>
                  <Percent className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl">-30% на первый заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Новым клиентам скидка 30% на первый заказ при регистрации в приложении
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>• Только для новых клиентов</p>
                  <p>• Минимальный заказ 500₽</p>
                  <p>• Промокод: WELCOME30</p>
                </div>
                <Button className="w-full" variant="outline">Получить скидку</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge className="bg-blue-600 text-white">КОМБО</Badge>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Семейный набор</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  4 пиццы среднего размера + 4 напитка + десерт = 1999₽ вместо 2800₽
                </p>
                <div className="space-y-2 text-sm text-gray-500 mb-4">
                  <p>• Экономия 801₽</p>
                  <p>• Любые пиццы на выбор</p>
                  <p>• Бесплатная доставка</p>
                </div>
                <Button className="w-full" variant="outline">Выбрать набор</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Weekly Deals */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Акции по дням недели</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Понедельник</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600 mb-2">-20%</p>
                <p className="text-sm text-gray-600">на все вегетарианские пиццы</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Среда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600 mb-2">1+1</p>
                <p className="text-sm text-gray-600">вторая пицца за полцены</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Пятница</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600 mb-2">-15%</p>
                <p className="text-sm text-gray-600">на заказы от 1000₽</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-8 h-8 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Воскресенье</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600 mb-2">Бонус</p>
                <p className="text-sm text-gray-600">двойные баллы лояльности</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Loyalty Program */}
        <div className="mb-12">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">Программа лояльности</h2>
                  </div>
                  <p className="text-xl opacity-90 mb-6">
                    Накапливайте баллы с каждым заказом и получайте скидки до 20%
                  </p>
                  <ul className="space-y-2 opacity-90 mb-6">
                    <li>• 1 рубль = 1 балл</li>
                    <li>• 100 баллов = 10% скидка</li>
                    <li>• 500 баллов = 15% скидка</li>
                    <li>• 1000 баллов = 20% скидка</li>
                  </ul>
                  <Button variant="secondary" size="lg">
                    Присоединиться
                  </Button>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-16 h-16" />
                  </div>
                  <p className="text-lg opacity-90">
                    Более 10,000 участников уже экономят с нами!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Offers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Специальные предложения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">День рождения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  В день рождения и неделю после - скидка 25% на весь заказ!
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Необходимо указать дату рождения в профиле</li>
                  <li>• Скидка действует 8 дней</li>
                  <li>• Можно совмещать с другими акциями</li>
                </ul>
                <Button variant="outline">Указать дату рождения</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Студенческая скидка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Студентам очной формы обучения - постоянная скидка 15%
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Необходимо подтвердить статус студента</li>
                  <li>• Действует весь учебный год</li>
                  <li>• Скидка на все меню</li>
                </ul>
                <Button variant="outline">Подтвердить статус</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Promo Codes */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Промокоды</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border-2 border-dashed border-red-300 rounded-lg">
              <div className="text-2xl font-bold text-red-600 mb-2">PIZZA20</div>
              <p className="text-gray-600 mb-2">Скидка 20% на заказ от 800₽</p>
              <p className="text-sm text-gray-500">Действует до 31.12.2024</p>
            </div>
            <div className="text-center p-6 border-2 border-dashed border-green-300 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">DELIVERY</div>
              <p className="text-gray-600 mb-2">Бесплатная доставка</p>
              <p className="text-sm text-gray-500">При заказе от 300₽</p>
            </div>
            <div className="text-center p-6 border-2 border-dashed border-blue-300 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">WEEKEND</div>
              <p className="text-gray-600 mb-2">-25% в выходные</p>
              <p className="text-sm text-gray-500">Суббота и воскресенье</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Promotions;