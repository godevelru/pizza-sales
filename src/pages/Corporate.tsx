import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Building, 
  Users, 
  Clock, 
  Truck, 
  CreditCard,
  FileText,
  Calculator,
  Handshake,
  Award,
  TrendingUp
} from 'lucide-react';

const Corporate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Корпоративные заказы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Специальные условия для бизнеса. Обеспечиваем питанием офисы, организуем корпоративные 
            мероприятия и предлагаем выгодные условия для постоянных партнеров.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Преимущества для бизнеса</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Calculator className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Специальные цены</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Скидки до 20% для корпоративных клиентов и оптовые цены при больших заказах
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <FileText className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Документооборот</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Полный пакет документов, работа с НДС, безналичный расчет
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Гибкий график</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Доставка в удобное время, возможность предзаказа на несколько дней
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наши услуги</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Building className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Питание в офисе</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ежедневные обеды для сотрудников</li>
                  <li>• Бизнес-ланчи и комплексные обеды</li>
                  <li>• Кофе-брейки и перекусы</li>
                  <li>• Индивидуальное меню под ваш бюджет</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Корпоративные мероприятия</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Конференции и семинары</li>
                  <li>• Корпоративные вечеринки</li>
                  <li>• Тимбилдинги и выездные мероприятия</li>
                  <li>• Презентации и деловые встречи</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Truck className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Регулярная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ежедневная доставка по расписанию</li>
                  <li>• Персональный менеджер</li>
                  <li>• Отслеживание заказов</li>
                  <li>• Гибкая система оплаты</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CreditCard className="w-8 h-8 text-red-600 mb-2" />
                <CardTitle>Удобная оплата</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Безналичный расчет</li>
                  <li>• Отсрочка платежа до 30 дней</li>
                  <li>• Работа с НДС</li>
                  <li>• Электронный документооборот</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Тарифные планы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Badge className="bg-blue-600 w-fit mx-auto mb-2">СТАРТ</Badge>
                <CardTitle className="text-2xl">Малый офис</CardTitle>
                <div className="text-sm text-gray-500 mb-4">до 20 сотрудников</div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-blue-600">5%</div>
                  <div className="text-sm text-gray-500">скидка на все заказы</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Персональный менеджер</li>
                  <li>• Бесплатная доставка от 2000₽</li>
                  <li>• Отсрочка платежа 14 дней</li>
                  <li>• Базовая отчетность</li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Подключить</Button>
              </CardContent>
            </Card>
            <Card className="border-2 border-red-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-red-600">ПОПУЛЯРНЫЙ</Badge>
              </div>
              <CardHeader className="text-center">
                <Badge className="bg-red-600 w-fit mx-auto mb-2">БИЗНЕС</Badge>
                <CardTitle className="text-2xl">Средний офис</CardTitle>
                <div className="text-sm text-gray-500 mb-4">20-100 сотрудников</div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-red-600">10%</div>
                  <div className="text-sm text-gray-500">скидка на все заказы</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Выделенный менеджер</li>
                  <li>• Бесплатная доставка от 1500₽</li>
                  <li>• Отсрочка платежа 21 день</li>
                  <li>• Расширенная аналитика</li>
                  <li>• Индивидуальное меню</li>
                </ul>
                <Button className="w-full mt-6">Подключить</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Badge className="bg-yellow-600 w-fit mx-auto mb-2">КОРПОРАЦИЯ</Badge>
                <CardTitle className="text-2xl">Крупный офис</CardTitle>
                <div className="text-sm text-gray-500 mb-4">100+ сотрудников</div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-yellow-600">20%</div>
                  <div className="text-sm text-gray-500">скидка на все заказы</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Команда менеджеров</li>
                  <li>• Всегда бесплатная доставка</li>
                  <li>• Отсрочка платежа 30 дней</li>
                  <li>• Полная аналитика и отчеты</li>
                  <li>• Эксклюзивные предложения</li>
                  <li>• Приоритетное обслуживание</li>
                </ul>
                <Button className="w-full mt-6" variant="outline">Подключить</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16 bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Нам доверяют</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-600">корпоративных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">50 000+</div>
              <div className="text-gray-600">обедов в месяц</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <div className="text-gray-600">довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">5 лет</div>
              <div className="text-gray-600">средний срок сотрудничества</div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Стать корпоративным клиентом</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Название компании</label>
                  <Input placeholder="ООО Ваша компания" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ИНН</label>
                  <Input placeholder="1234567890" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Контактное лицо</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Должность</label>
                  <Input placeholder="Менеджер по закупкам" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="manager@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Количество сотрудников</label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option>Выберите количество сотрудников</option>
                  <option>До 20 человек</option>
                  <option>20-50 человек</option>
                  <option>50-100 человек</option>
                  <option>100-500 человек</option>
                  <option>Более 500 человек</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Адрес офиса</label>
                <Input placeholder="Укажите адрес для доставки" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Потребности</label>
                <Textarea 
                  placeholder="Опишите ваши потребности: регулярные обеды, мероприятия, бюджет..."
                  rows={4}
                />
              </div>
              <Button className="w-full" size="lg">
                Отправить заявку
              </Button>
              <p className="text-xs text-gray-500 text-center">
                Наш менеджер свяжется с вами в течение часа для обсуждения условий сотрудничества
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Corporate;