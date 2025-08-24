import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, 
  Truck, 
  Star, 
  Users, 
  Award, 
  Shield, 
  Heart, 
  Zap,
  ChefHat,
  MapPin
} from 'lucide-react';
import { pizzas } from '@/data/pizzas';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const featuredPizzas = pizzas.slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Лучшая пицца в городе
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Свежие ингредиенты, быстрая доставка, незабываемый вкус
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-3">
                  Посмотреть меню
                </Button>
              </Link>
              <Link to="/promotions">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 text-lg px-8 py-3">
                  Акции и скидки
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">15 мин</div>
              <div className="text-gray-600">Среднее время доставки</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600">Видов пиццы</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">10 000+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Работаем для вас</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Pizzas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Популярные пиццы</h2>
            <p className="text-xl text-gray-600">Попробуйте наши хиты продаж</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPizzas.map((pizza) => (
              <Card key={pizza.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={pizza.image} 
                    alt={pizza.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{pizza.name}</CardTitle>
                  <CardDescription className="text-sm">{pizza.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-600">от {pizza.price}₽</span>
                    <Link to={`/menu/${pizza.id}`}>
                      <Button size="sm">Заказать</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/menu">
              <Button size="lg" variant="outline">Посмотреть все пиццы</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-gray-600">Мы заботимся о качестве и вашем удовольствии</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Свежие ингредиенты</h3>
              <p className="text-gray-600">Используем только качественные и свежие продукты</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставляем горячую пиццу за 15-30 минут</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Высокое качество</h3>
              <p className="text-gray-600">Каждая пицца готовится с любовью и вниманием</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Мы предлагаем больше, чем просто пиццу</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Быстрая доставка по всему городу</p>
                <Link to="/delivery" className="text-red-600 hover:underline mt-2 inline-block">
                  Подробнее
                </Link>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Кейтеринг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Организация мероприятий и банкетов</p>
                <Link to="/catering" className="text-red-600 hover:underline mt-2 inline-block">
                  Подробнее
                </Link>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Программа лояльности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Накапливайте бонусы и получайте скидки</p>
                <Link to="/loyalty" className="text-red-600 hover:underline mt-2 inline-block">
                  Подробнее
                </Link>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">100% гарантия свежести и качества</p>
                <Link to="/quality" className="text-red-600 hover:underline mt-2 inline-block">
                  Подробнее
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Актуальные акции</h2>
            <p className="text-xl opacity-90">Не упустите выгодные предложения</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Badge className="bg-yellow-500 text-black w-fit">Хит</Badge>
                <CardTitle>2+1 в подарок</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">При заказе двух больших пицц - третья в подарок!</p>
                <Button variant="secondary" size="sm">Заказать</Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Badge className="bg-green-500 text-white w-fit">Скидка</Badge>
                <CardTitle>-30% на первый заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Новым клиентам скидка 30% на первый заказ</p>
                <Button variant="secondary" size="sm">Получить скидку</Button>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <Badge className="bg-blue-500 text-white w-fit">Комбо</Badge>
                <CardTitle>Семейный набор</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">4 пиццы + 4 напитка = выгодная цена</p>
                <Button variant="secondary" size="sm">Выбрать набор</Button>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/promotions">
              <Button size="lg" variant="secondary">Все акции</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Анна К.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Лучшая пицца в городе! Быстрая доставка, всегда горячая и очень вкусная. 
                  Заказываем регулярно всей семьей."
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Михаил С.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Отличное качество ингредиентов, большой выбор пицц. 
                  Особенно нравится программа лояльности - накапливаю бонусы!"
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardTitle className="text-lg">Елена В.</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  "Заказывали пиццу для корпоратива - все остались довольны! 
                  Вежливые курьеры, все привезли вовремя."
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link to="/reviews">
              <Button variant="outline">Все отзывы</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы заказать?</h2>
            <p className="text-xl mb-8 opacity-90">
              Позвоните нам или оформите заказ онлайн
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-xl">
                <Phone className="w-6 h-6 text-red-500" />
                <span className="font-semibold">+7 (999) 123-45-67</span>
              </div>
              <span className="hidden sm:block text-gray-400">или</span>
              <Link to="/menu">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Заказать онлайн
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Мы находимся</h2>
            <p className="text-xl text-gray-600">Приходите к нам или заказывайте доставку</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Адрес</h3>
                    <p className="text-gray-600">г. Москва, ул. Примерная, 123</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Режим работы</h3>
                    <p className="text-gray-600">Ежедневно с 10:00 до 23:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Телефон</h3>
                    <p className="text-gray-600">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contacts">
                  <Button size="lg">Подробная информация</Button>
                </Link>
              </div>
            </div>
            <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
              <p className="text-gray-500">Карта будет здесь</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;