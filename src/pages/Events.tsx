import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Camera,
  Music,
  Gift,
  Sparkles,
  Heart,
  Star,
  Cake,
  PartyPopper
} from 'lucide-react';

const Events = () => {
  const eventTypes = [
    {
      icon: Heart,
      title: 'Свадьбы',
      description: 'Незабываемый день с идеальным меню',
      features: ['Банкетное меню', 'Свадебный торт', 'Декор столов', 'Персональный координатор']
    },
    {
      icon: Cake,
      title: 'Дни рождения',
      description: 'Праздник для всех возрастов',
      features: ['Детское меню', 'Праздничные торты', 'Анимация', 'Фотозона']
    },
    {
      icon: PartyPopper,
      title: 'Корпоративы',
      description: 'Сплочение команды за вкусным столом',
      features: ['Фуршет', 'Развлекательная программа', 'Призы', 'Тимбилдинг']
    },
    {
      icon: Star,
      title: 'Юбилеи',
      description: 'Торжественные мероприятия',
      features: ['Торжественное меню', 'Живая музыка', 'Поздравления', 'Памятные подарки']
    }
  ];

  const packages = [
    {
      name: 'Камерный',
      price: 'от 15 000₽',
      guests: 'до 30 человек',
      duration: '3 часа',
      features: [
        'Базовое меню из пиццы',
        'Напитки (безалкогольные)',
        'Простое оформление',
        'Музыкальное сопровождение'
      ]
    },
    {
      name: 'Стандарт',
      price: 'от 35 000₽',
      guests: 'до 70 человек',
      duration: '4 часа',
      features: [
        'Расширенное меню',
        'Алкогольные напитки',
        'Праздничное оформление',
        'Ведущий мероприятия',
        'Фотограф (2 часа)'
      ],
      popular: true
    },
    {
      name: 'Премиум',
      price: 'от 70 000₽',
      guests: 'до 150 человек',
      duration: '6 часов',
      features: [
        'VIP меню',
        'Премиум алкоголь',
        'Эксклюзивное оформление',
        'Шоу-программа',
        'Профессиональная фото/видеосъемка',
        'Персональный координатор'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Организация мероприятий</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Создаем незабываемые события для вас и ваших близких. От интимных семейных торжеств 
            до масштабных корпоративных праздников - мы воплотим любую идею в жизнь.
          </p>
        </div>

        {/* Event Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Типы мероприятий</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventTypes.map((event, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <event.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    {event.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Пакеты услуг</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`${pkg.popular ? 'border-2 border-red-500 relative' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600">ПОПУЛЯРНЫЙ</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-red-600">{pkg.price}</div>
                  <div className="text-sm text-gray-500">{pkg.guests}</div>
                  <div className="text-sm text-gray-500">{pkg.duration}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Sparkles className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${pkg.popular ? '' : 'variant-outline'}`}>
                    Выбрать пакет
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Дополнительные услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Camera className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Фото/Видеосъемка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Профессиональная съемка вашего мероприятия
                </p>
                <div className="text-red-600 font-semibold">от 15 000₽</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Music className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Музыкальное сопровождение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  DJ, живая музыка, звуковое оборудование
                </p>
                <div className="text-red-600 font-semibold">от 10 000₽</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Gift className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <CardTitle className="text-lg">Подарки и сувениры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Памятные подарки для гостей
                </p>
                <div className="text-red-600 font-semibold">от 500₽/шт</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наши мероприятия</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <p className="text-gray-500">Фото мероприятия {item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Этапы организации</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Консультация</h3>
              <p className="text-gray-600 text-sm">Обсуждаем ваши пожелания и бюджет</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Планирование</h3>
              <p className="text-gray-600 text-sm">Составляем детальный план мероприятия</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Подготовка</h3>
              <p className="text-gray-600 text-sm">Готовим все необходимое для события</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Проведение</h3>
              <p className="text-gray-600 text-sm">Организуем незабываемое мероприятие</p>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Заказать мероприятие</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Тип мероприятия</label>
                  <select className="w-full border rounded-md px-3 py-2">
                    <option>Выберите тип</option>
                    <option>Свадьба</option>
                    <option>День рождения</option>
                    <option>Корпоратив</option>
                    <option>Юбилей</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Количество гостей</label>
                  <Input type="number" placeholder="50" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Дата мероприятия</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Время начала</label>
                  <Input type="time" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Место проведения</label>
                <Input placeholder="Укажите адрес или выберите наш зал" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Бюджет</label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option>Выберите бюджет</option>
                  <option>До 30 000₽</option>
                  <option>30 000 - 70 000₽</option>
                  <option>70 000 - 150 000₽</option>
                  <option>Более 150 000₽</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Дополнительные пожелания</label>
                <Textarea 
                  placeholder="Опишите ваши пожелания по оформлению, меню, развлечениям..."
                  rows={4}
                />
              </div>
              <Button className="w-full" size="lg">
                Отправить заявку
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Наш event-менеджер свяжется с вами в течение часа для обсуждения деталей
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;