import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Store, 
  TrendingUp, 
  Users, 
  Award, 
  DollarSign, 
  BookOpen,
  Headphones,
  MapPin
} from 'lucide-react';

const Franchise = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Франшиза ПиццаМастер</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Откройте свою пиццерию под проверенным брендом. Мы поможем вам создать 
            успешный бизнес с минимальными рисками и максимальной поддержкой.
          </p>
        </div>

        {/* Why Choose Our Franchise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Почему стоит выбрать нашу франшизу
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Проверенная модель</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  10 лет успешной работы и 15 действующих точек
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Быстрая окупаемость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Средний срок окупаемости 12-18 месяцев
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Headphones className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Полная поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Помощь на всех этапах от открытия до развития
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Обучение персонала</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Комплексное обучение всех сотрудников
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment Details */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Инвестиции и доходность
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="w-6 h-6 text-red-600" />
                  <span>Первоначальные инвестиции</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Паушальный взнос</span>
                  <span className="font-semibold">500 000 ₽</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Оборудование</span>
                  <span className="font-semibold">800 000 - 1 200 000 ₽</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Ремонт и дизайн</span>
                  <span className="font-semibold">400 000 - 600 000 ₽</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Оборотные средства</span>
                  <span className="font-semibold">200 000 - 300 000 ₽</span>
                </div>
                <hr />
                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                  <span className="font-semibold">Общие инвестиции</span>
                  <span className="font-bold text-red-600">1 900 000 - 2 600 000 ₽</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-red-600" />
                  <span>Ожидаемая доходность</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Средний оборот в месяц</span>
                  <span className="font-semibold">800 000 - 1 200 000 ₽</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Валовая прибыль</span>
                  <span className="font-semibold">60-65%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Чистая прибыль</span>
                  <span className="font-semibold">15-25%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span>Роялти</span>
                  <span className="font-semibold">5% от оборота</span>
                </div>
                <hr />
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-semibold">Срок окупаемости</span>
                  <span className="font-bold text-green-600">12-18 месяцев</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* What We Provide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Что мы предоставляем
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Store className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle className="text-lg">Помощь в выборе места</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Анализ локации</li>
                  <li>• Оценка проходимости</li>
                  <li>• Помощь в переговорах с арендодателем</li>
                  <li>• Технико-экономическое обоснование</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle className="text-lg">Обучение и поддержка</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Обучение владельца бизнесу</li>
                  <li>• Подготовка персонала</li>
                  <li>• Операционные стандарты</li>
                  <li>• Постоянная поддержка</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle className="text-lg">Маркетинг и реклама</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Рекламные материалы</li>
                  <li>• Маркетинговые кампании</li>
                  <li>• Продвижение в соцсетях</li>
                  <li>• Программы лояльности</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Требования к франчайзи
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Финансовые требования</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Собственные средства от 2 млн рублей</li>
                    <li>• Возможность получения кредита</li>
                    <li>• Финансовая стабильность</li>
                    <li>• Готовность к долгосрочным инвестициям</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Личные качества</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Предпринимательский опыт</li>
                    <li>• Готовность к активному участию</li>
                    <li>• Коммуникабельность</li>
                    <li>• Нацеленность на результат</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Заявка на франшизу
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Фамилия</label>
                  <Input placeholder="Ваша фамилия" />
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
              <div>
                <label className="block text-sm font-medium mb-2">Город</label>
                <Input placeholder="В каком городе планируете открытие?" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Размер инвестиций</label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option>Выберите размер инвестиций</option>
                  <option>До 2 млн рублей</option>
                  <option>2-3 млн рублей</option>
                  <option>3-5 млн рублей</option>
                  <option>Более 5 млн рублей</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Опыт в бизнесе</label>
                <Textarea 
                  placeholder="Расскажите о своем предпринимательском опыте..."
                  rows={4}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Дополнительная информация</label>
                <Textarea 
                  placeholder="Дополнительные вопросы или комментарии..."
                  rows={3}
                />
              </div>
              <Button className="w-full" size="lg">
                Отправить заявку
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Мы свяжемся с вами в течение 24 часов для обсуждения деталей
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Franchise;