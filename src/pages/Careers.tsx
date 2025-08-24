import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, MapPin, Clock, DollarSign, Heart, Award } from 'lucide-react';

const Careers = () => {
  const vacancies = [
    {
      id: 1,
      title: 'Пиццайоло',
      location: 'Центральная пиццерия',
      type: 'Полная занятость',
      salary: '40 000 - 60 000 ₽',
      description: 'Ищем опытного пиццайоло для работы в нашей центральной пиццерии',
      requirements: [
        'Опыт работы пиццайоло от 1 года',
        'Знание технологии приготовления пиццы',
        'Ответственность и пунктуальность',
        'Готовность работать в команде'
      ],
      benefits: [
        'Официальное трудоустройство',
        'Обучение и развитие',
        'Скидки на продукцию',
        'Дружный коллектив'
      ]
    },
    {
      id: 2,
      title: 'Курьер',
      location: 'Все районы города',
      type: 'Гибкий график',
      salary: '35 000 - 50 000 ₽',
      description: 'Требуются курьеры для доставки пиццы на личном или корпоративном транспорте',
      requirements: [
        'Наличие личного транспорта (приветствуется)',
        'Знание города',
        'Коммуникабельность',
        'Ответственность'
      ],
      benefits: [
        'Гибкий график работы',
        'Ежедневные выплаты',
        'Компенсация ГСМ',
        'Возможность подработки'
      ]
    },
    {
      id: 3,
      title: 'Администратор',
      location: 'Северная пиццерия',
      type: 'Полная занятость',
      salary: '35 000 - 45 000 ₽',
      description: 'В команду требуется администратор для работы с клиентами и координации работы',
      requirements: [
        'Опыт работы в сфере обслуживания',
        'Грамотная речь',
        'Стрессоустойчивость',
        'Знание ПК'
      ],
      benefits: [
        'Стабильная зарплата',
        'Социальный пакет',
        'Обучение за счет компании',
        'Карьерный рост'
      ]
    },
    {
      id: 4,
      title: 'Менеджер по продажам',
      location: 'Головной офис',
      type: 'Полная занятость',
      salary: '50 000 - 80 000 ₽',
      description: 'Ищем активного менеджера для развития корпоративных продаж и работы с клиентами',
      requirements: [
        'Опыт продаж от 2 лет',
        'Навыки переговоров',
        'Знание CRM систем',
        'Высшее образование'
      ],
      benefits: [
        'Высокая зарплата + бонусы',
        'Корпоративный автомобиль',
        'ДМС',
        'Обучение и тренинги'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Вакансии</h1>
          <p className="text-xl text-gray-600">Присоединяйтесь к нашей дружной команде</p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Почему стоит работать с нами</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Дружная команда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Мы ценим каждого сотрудника и создаем комфортную рабочую атмосферу
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Развитие и обучение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Предоставляем возможности для профессионального роста и обучения
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Достойная оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Конкурентная заработная плата и система премирования
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Открытые вакансии</h2>
          <div className="space-y-6">
            {vacancies.map((vacancy) => (
              <Card key={vacancy.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{vacancy.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{vacancy.location}</span>
                        </Badge>
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{vacancy.type}</span>
                        </Badge>
                        <Badge className="bg-green-600 flex items-center space-x-1">
                          <DollarSign className="w-3 h-3" />
                          <span>{vacancy.salary}</span>
                        </Badge>
                      </div>
                    </div>
                    <Button>Откликнуться</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{vacancy.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Требования:</h4>
                      <ul className="space-y-1 text-gray-600">
                        {vacancy.requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-red-600 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Мы предлагаем:</h4>
                      <ul className="space-y-1 text-gray-600">
                        {vacancy.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="text-green-600 mt-1">•</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Отправить резюме</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Фамилия</label>
                  <input 
                    type="text" 
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="Ваша фамилия"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full border rounded-md px-3 py-2"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Желаемая позиция</label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option>Выберите позицию</option>
                  {vacancies.map((vacancy) => (
                    <option key={vacancy.id} value={vacancy.title}>
                      {vacancy.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">О себе</label>
                <textarea 
                  className="w-full border rounded-md px-3 py-2"
                  rows={4}
                  placeholder="Расскажите о своем опыте и навыках..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Резюме</label>
                <input 
                  type="file" 
                  className="w-full border rounded-md px-3 py-2"
                  accept=".pdf,.doc,.docx"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Поддерживаемые форматы: PDF, DOC, DOCX (до 5 МБ)
                </p>
              </div>
              <Button className="w-full" size="lg">
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Careers;