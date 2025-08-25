import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Award, 
  CheckCircle, 
  Thermometer,
  Clock,
  Users,
  Leaf,
  Heart,
  Star,
  Truck,
  ChefHat,
  Factory
} from 'lucide-react';

const Quality = () => {
  const standards = [
    {
      icon: Shield,
      title: 'Безопасность продуктов',
      description: 'Строгий контроль качества на всех этапах производства',
      details: [
        'Сертифицированные поставщики',
        'Контроль температурного режима',
        'Регулярные лабораторные исследования',
        'Соблюдение HACCP стандартов'
      ]
    },
    {
      icon: Leaf,
      title: 'Натуральные ингредиенты',
      description: 'Только свежие и качественные продукты без консервантов',
      details: [
        'Свежие овощи и зелень',
        'Натуральные сыры',
        'Мясо высшего сорта',
        'Тесто собственного производства'
      ]
    },
    {
      icon: ChefHat,
      title: 'Мастерство поваров',
      description: 'Профессиональная команда с многолетним опытом',
      details: [
        'Обучение итальянским традициям',
        'Регулярное повышение квалификации',
        'Строгое соблюдение рецептур',
        'Контроль качества каждого блюда'
      ]
    },
    {
      icon: Thermometer,
      title: 'Температурный режим',
      description: 'Соблюдение температуры на всех этапах приготовления и доставки',
      details: [
        'Хранение при оптимальной температуре',
        'Приготовление при 350°C',
        'Термосумки для доставки',
        'Контроль температуры при получении'
      ]
    }
  ];

  const certificates = [
    { name: 'ISO 22000', description: 'Система менеджмента безопасности пищевых продуктов' },
    { name: 'HACCP', description: 'Анализ рисков и критические контрольные точки' },
    { name: 'Роспотребнадзор', description: 'Санитарно-эпидемиологическое заключение' },
    { name: 'Халяль', description: 'Сертификат соответствия халяльным требованиям' }
  ];

  const qualitySteps = [
    {
      step: 1,
      title: 'Закупка ингредиентов',
      description: 'Тщательный отбор поставщиков и контроль качества сырья',
      icon: Factory
    },
    {
      step: 2,
      title: 'Хранение',
      description: 'Соблюдение температурного режима и сроков годности',
      icon: Thermometer
    },
    {
      step: 3,
      title: 'Приготовление',
      description: 'Строгое следование рецептурам и технологиям',
      icon: ChefHat
    },
    {
      step: 4,
      title: 'Контроль качества',
      description: 'Проверка каждого блюда перед отправкой клиенту',
      icon: CheckCircle
    },
    {
      step: 5,
      title: 'Доставка',
      description: 'Сохранение температуры и качества при транспортировке',
      icon: Truck
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Гарантия качества</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы гарантируем высочайшее качество наших продуктов на каждом этапе - от закупки 
            ингредиентов до доставки готовой пиццы к вашему столу.
          </p>
        </div>

        {/* Quality Promise */}
        <div className="mb-16 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Наше обещание качества</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-6">
              Если вы не удовлетворены качеством нашей пиццы, мы вернем деньги или 
              приготовим новую пиццу бесплатно. Ваше удовлетворение - наш приоритет.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-white text-red-600 text-lg px-4 py-2">100% гарантия</Badge>
              <Badge className="bg-white text-red-600 text-lg px-4 py-2">Возврат денег</Badge>
              <Badge className="bg-white text-red-600 text-lg px-4 py-2">Новая пицца</Badge>
            </div>
          </div>
        </div>

        {/* Quality Standards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Стандарты качества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {standards.map((standard, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <standard.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{standard.title}</CardTitle>
                      <p className="text-gray-600 text-sm">{standard.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {standard.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Процесс контроля качества</h2>
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              <div className="flex justify-between items-center mb-8">
                {qualitySteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center max-w-xs">
                    <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-4 relative">
                      <step.icon className="w-8 h-8" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white text-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="absolute top-8 left-8 right-8 h-0.5 bg-red-200 -z-10"></div>
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-6">
              {qualitySteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center relative flex-shrink-0">
                    <step.icon className="w-6 h-6" />
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-white text-red-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Сертификаты и лицензии</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16 bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наши показатели качества</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">99.8%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">15 мин</div>
              <div className="text-gray-600">Среднее время приготовления</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">0.1%</div>
              <div className="text-gray-600">Возвратов по качеству</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Контроль качества</div>
            </div>
          </div>
        </div>

        {/* Ingredients Quality */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Качество ингредиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Leaf className="w-6 h-6 text-green-600" />
                  <span>Тесто</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Мука высшего сорта</li>
                  <li>• Живые дрожжи</li>
                  <li>• Оливковое масло Extra Virgin</li>
                  <li>• 24-часовая ферментация</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-6 h-6 text-red-600" />
                  <span>Соус</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Томаты San Marzano</li>
                  <li>• Свежий базилик</li>
                  <li>• Морская соль</li>
                  <li>• Без консервантов</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-6 h-6 text-yellow-600" />
                  <span>Сыр</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Моцарелла из Италии</li>
                  <li>• Пармезан 24 месяца выдержки</li>
                  <li>• Натуральные сыры</li>
                  <li>• Ежедневные поставки</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Quality Team */}
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Есть вопросы о качестве?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Наша служба качества готова ответить на любые вопросы и принять ваши предложения 
              по улучшению наших продуктов и сервиса.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-red-600" />
                <span>quality@pizzamaster.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-red-600" />
                <span>+7 (999) 123-45-68</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quality;