import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Star, 
  Gift, 
  Crown, 
  Zap, 
  Calendar,
  Percent,
  Users,
  Trophy,
  Heart,
  Sparkles
} from 'lucide-react';

const Loyalty = () => {
  const levels = [
    {
      name: 'Новичок',
      icon: Star,
      color: 'text-gray-600',
      bgColor: 'bg-gray-100',
      minSpent: 0,
      discount: 0,
      benefits: ['Приветственная пицца со скидкой 20%', 'SMS-уведомления о новинках']
    },
    {
      name: 'Друг',
      icon: Heart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      minSpent: 5000,
      discount: 5,
      benefits: ['Скидка 5% на все заказы', 'Бесплатная доставка от 800₽', 'Уведомления о персональных акциях']
    },
    {
      name: 'VIP',
      icon: Crown,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
      minSpent: 15000,
      discount: 10,
      benefits: ['Скидка 10% на все заказы', 'Приоритетная доставка', 'Персональные предложения', 'Подарок в день рождения']
    },
    {
      name: 'Легенда',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
      minSpent: 50000,
      discount: 15,
      benefits: ['Скидка 15% на все заказы', 'Эксклюзивные новинки', 'Персональный менеджер', 'VIP-поддержка 24/7']
    }
  ];

  const bonusActions = [
    { action: 'Регистрация в программе', bonus: 500, icon: Users },
    { action: 'Первый заказ', bonus: 300, icon: Gift },
    { action: 'Заказ в день рождения', bonus: 1000, icon: Calendar },
    { action: 'Отзыв с фото', bonus: 200, icon: Star },
    { action: 'Приведи друга', bonus: 500, icon: Users },
    { action: 'Заказ на сумму от 2000₽', bonus: 100, icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Программа лояльности</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Зарабатывайте баллы с каждым заказом и получайте скидки, подарки и эксклюзивные предложения. 
            Чем больше заказываете, тем больше привилегий получаете!
          </p>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Регистрируйтесь</h3>
              <p className="text-gray-600">
                Создайте аккаунт и получите 500 приветственных баллов
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Заказывайте</h3>
              <p className="text-gray-600">
                За каждый рубль получайте 1 балл. 100 баллов = 10₽ скидки
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Экономьте</h3>
              <p className="text-gray-600">
                Тратьте баллы на скидки и получайте персональные предложения
              </p>
            </div>
          </div>
        </div>

        {/* Levels */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Уровни программы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((level, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${level.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <level.icon className={`w-8 h-8 ${level.color}`} />
                  </div>
                  <CardTitle className={`text-xl ${level.color}`}>{level.name}</CardTitle>
                  <div className="text-sm text-gray-500">
                    от {level.minSpent.toLocaleString()}₽
                  </div>
                  {level.discount > 0 && (
                    <Badge className="bg-red-600 w-fit mx-auto">
                      -{level.discount}% на все
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {level.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Sparkles className="w-3 h-3 text-red-600 mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bonus Actions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Как заработать баллы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bonusActions.map((action, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <action.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{action.action}</h3>
                      <div className="text-red-600 font-bold">+{action.bonus} баллов</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Current Status (Example) */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ваш статус</h2>
                  <div className="flex items-center space-x-3 mb-4">
                    <Crown className="w-8 h-8" />
                    <span className="text-2xl font-semibold">VIP клиент</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Текущие баллы:</span>
                      <span className="font-bold">2,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Потрачено всего:</span>
                      <span className="font-bold">23,500₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Скидка:</span>
                      <span className="font-bold">10%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">До уровня "Легенда"</h3>
                  <Progress value={47} className="mb-2" />
                  <p className="text-sm opacity-90">
                    Осталось потратить 26,500₽ для достижения следующего уровня
                  </p>
                  <Button variant="secondary" className="mt-4">
                    Сделать заказ
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Registration Form */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Присоединиться к программе лояльности
          </h2>
          <div className="max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input placeholder="Ваше имя" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input placeholder="+7 (999) 123-45-67" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Дата рождения</label>
                <Input type="date" />
              </div>
              <div className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm text-gray-600">
                  Согласен на получение SMS и email уведомлений о акциях и новинках
                </span>
              </div>
              <Button className="w-full" size="lg">
                Зарегистрироваться и получить 500 баллов
              </Button>
            </form>
          </div>
        </div>

        {/* Benefits Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Gift className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Подарки</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Регулярные подарки, бонусы в день рождения и эксклюзивные предложения
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Zap className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Приоритет</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Приоритетная доставка, персональная поддержка и ранний доступ к новинкам
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <Percent className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Скидки</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Постоянные скидки до 15%, персональные промокоды и специальные цены
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Loyalty;