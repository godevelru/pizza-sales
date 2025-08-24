import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, Heart, Clock, ChefHat, Truck } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">О нас</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ПиццаМастер - это семейная компания, которая уже более 10 лет радует жителей города 
            вкусной пиццей, приготовленной с любовью и заботой о каждом клиенте.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Наша история</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Все началось в 2014 году, когда основатель компании Михаил Петров решил открыть 
                небольшую пиццерию в центре города. Его мечтой было создать место, где каждый 
                сможет насладиться настоящей итальянской пиццей, приготовленной по традиционным рецептам.
              </p>
              <p>
                За годы работы мы выросли от маленькой пиццерии до сети из 15 точек по всему городу. 
                Но наши принципы остались неизменными: качественные ингредиенты, традиционные рецепты 
                и внимание к каждому клиенту.
              </p>
              <p>
                Сегодня ПиццаМастер - это команда из более чем 200 сотрудников, которые каждый день 
                работают над тем, чтобы вы получили самую вкусную пиццу в городе.
              </p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Фото истории компании</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы используем только свежие и качественные ингредиенты от проверенных поставщиков
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Клиентоориентированность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Каждый клиент для нас важен, мы стремимся превзойти ваши ожидания
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Традиции</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы следуем традиционным итальянским рецептам, передавая их из поколения в поколение
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наши достижения</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">10+</div>
              <div className="text-gray-600">лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">15</div>
              <div className="text-gray-600">точек в городе</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">200+</div>
              <div className="text-gray-600">сотрудников</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">50 000+</div>
              <div className="text-gray-600">довольных клиентов</div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Михаил Петров</h3>
                <p className="text-gray-600 mb-2">Основатель и CEO</p>
                <p className="text-sm text-gray-500">
                  Основатель компании с 15-летним опытом в ресторанном бизнесе
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Анна Смирнова</h3>
                <p className="text-gray-600 mb-2">Шеф-повар</p>
                <p className="text-sm text-gray-500">
                  Мастер итальянской кухни, создатель уникальных рецептов
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Дмитрий Козлов</h3>
                <p className="text-gray-600 mb-2">Директор по развитию</p>
                <p className="text-sm text-gray-500">
                  Отвечает за развитие сети и внедрение новых технологий
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Наша миссия</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Делать каждый день наших клиентов немного вкуснее и радостнее, 
            предлагая лучшую пиццу в городе с быстрой доставкой и отличным сервисом.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;