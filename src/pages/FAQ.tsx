import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Search, 
  Phone, 
  Mail, 
  MessageCircle,
  Clock,
  Truck,
  CreditCard,
  Pizza,
  Users,
  Gift
} from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      id: 'orders',
      title: 'Заказы и доставка',
      icon: Truck,
      questions: [
        {
          question: 'Как сделать заказ?',
          answer: 'Вы можете сделать заказ несколькими способами: через наш сайт, мобильное приложение, по телефону +7 (999) 123-45-67 или в любой из наших пиццерий. Онлайн-заказ доступен 24/7.'
        },
        {
          question: 'Сколько времени занимает доставка?',
          answer: 'Среднее время доставки составляет 15-30 минут в зависимости от загруженности и удаленности адреса. В часы пик время может увеличиться до 45 минут. Мы всегда информируем о точном времени при оформлении заказа.'
        },
        {
          question: 'Какая минимальная сумма заказа для доставки?',
          answer: 'Минимальная сумма заказа для бесплатной доставки составляет 500₽. При заказе на меньшую сумму стоимость доставки составляет 150₽.'
        },
        {
          question: 'Можно ли изменить или отменить заказ?',
          answer: 'Заказ можно изменить или отменить в течение 5 минут после оформления, пока он не поступил на кухню. После начала приготовления изменения невозможны.'
        },
        {
          question: 'Доставляете ли вы в выходные и праздники?',
          answer: 'Да, мы работаем без выходных. В праздничные дни график работы может быть изменен - актуальную информацию уточняйте по телефону или на сайте.'
        }
      ]
    },
    {
      id: 'payment',
      title: 'Оплата',
      icon: CreditCard,
      questions: [
        {
          question: 'Какие способы оплаты вы принимаете?',
          answer: 'Мы принимаем наличные, банковские карты (Visa, MasterCard, МИР), оплату через СБП, электронные кошельки (ЮMoney, QIWI) и корпоративные карты.'
        },
        {
          question: 'Можно ли оплатить онлайн?',
          answer: 'Да, при оформлении заказа через сайт или приложение вы можете оплатить картой онлайн. Это безопасно и удобно.'
        },
        {
          question: 'Выдаете ли вы чек?',
          answer: 'Да, мы выдаем фискальный чек при любом способе оплаты. Электронный чек отправляется на email или SMS по вашему желанию.'
        },
        {
          question: 'Есть ли возможность оплаты в рассрочку?',
          answer: 'Для корпоративных клиентов доступна отсрочка платежа до 30 дней. Физические лица могут воспользоваться картами рассрочки банков-партнеров.'
        }
      ]
    },
    {
      id: 'menu',
      title: 'Меню и продукты',
      icon: Pizza,
      questions: [
        {
          question: 'Есть ли вегетарианские пиццы?',
          answer: 'Да, у нас есть специальный раздел вегетарианских пицц. Также мы можем приготовить любую пиццу без мяса по вашему желанию.'
        },
        {
          question: 'Можно ли заказать пиццу с индивидуальным составом?',
          answer: 'Конечно! Вы можете создать свою уникальную пиццу, выбрав размер теста и любые ингредиенты из нашего ассортимента.'
        },
        {
          question: 'Есть ли безглютеновое тесто?',
          answer: 'Да, мы предлагаем безглютеновое тесто для людей с непереносимостью глютена. Уточняйте наличие при заказе.'
        },
        {
          question: 'Указываете ли вы калорийность блюд?',
          answer: 'Да, информация о калорийности и составе всех блюд указана в меню на сайте и в мобильном приложении.'
        },
        {
          question: 'Есть ли детское меню?',
          answer: 'У нас есть специальные детские пиццы меньшего размера с простыми и любимыми детьми ингредиентами.'
        }
      ]
    },
    {
      id: 'loyalty',
      title: 'Программа лояльности',
      icon: Gift,
      questions: [
        {
          question: 'Как работает программа лояльности?',
          answer: 'За каждый рубль покупки вы получаете 1 балл. 100 баллов = 10₽ скидки. Также есть уровни с дополнительными привилегиями.'
        },
        {
          question: 'Как зарегистрироваться в программе?',
          answer: 'Регистрация доступна на сайте, в мобильном приложении или в любой пиццерии. При регистрации вы получаете 500 приветственных баллов.'
        },
        {
          question: 'Сгорают ли баллы?',
          answer: 'Баллы действительны в течение 12 месяцев с момента последнего заказа. При новом заказе срок действия всех баллов продлевается.'
        },
        {
          question: 'Можно ли передать баллы другому человеку?',
          answer: 'Баллы привязаны к личному аккаунту и не подлежат передаче. Но вы можете оплатить заказ для другого человека своими баллами.'
        }
      ]
    },
    {
      id: 'other',
      title: 'Прочие вопросы',
      icon: Users,
      questions: [
        {
          question: 'Есть ли у вас мобильное приложение?',
          answer: 'Да, наше приложение доступно в App Store и Google Play. В приложении удобно делать заказы, отслеживать доставку и копить баллы.'
        },
        {
          question: 'Можно ли забронировать столик?',
          answer: 'В наших пиццериях с залом для посетителей можно забронировать столик по телефону или через сайт.'
        },
        {
          question: 'Организуете ли вы мероприятия?',
          answer: 'Да, мы предоставляем услуги кейтеринга и организации мероприятий. Подробности в разделе "Мероприятия" или по телефону.'
        },
        {
          question: 'Как стать франчайзи?',
          answer: 'Информация о франшизе доступна в соответствующем разделе сайта. Для получения подробной информации заполните заявку или позвоните нам.'
        },
        {
          question: 'Как подать жалобу или предложение?',
          answer: 'Вы можете связаться с нами через форму обратной связи на сайте, по телефону горячей линии или написать на email: info@pizzamaster.ru'
        }
      ]
    }
  ];

  const filteredFAQ = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Найдите ответы на самые популярные вопросы о наших услугах, доставке, 
            оплате и многом другом. Если не нашли ответ, свяжитесь с нами!
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Поиск по вопросам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQ.map((category) => (
            <Card key={category.id}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <category.icon className="w-8 h-8 text-red-600" />
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`${category.id}-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {searchQuery && filteredFAQ.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ничего не найдено
            </h3>
            <p className="text-gray-600 mb-8">
              По вашему запросу "{searchQuery}" ничего не найдено. 
              Попробуйте изменить поисковый запрос или свяжитесь с нами напрямую.
            </p>
            <Button onClick={() => setSearchQuery('')}>
              Очистить поиск
            </Button>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-16 bg-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Не нашли ответ?</h2>
            <p className="text-xl text-gray-600">
              Наша служба поддержки готова помочь вам 24/7
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Phone className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-red-600 mb-2">
                  +7 (999) 123-45-67
                </p>
                <p className="text-gray-600">Круглосуточно</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Mail className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-red-600 mb-2">
                  support@pizzamaster.ru
                </p>
                <p className="text-gray-600">Ответ в течение часа</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <MessageCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Онлайн-чат</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="mb-2">Начать чат</Button>
                <p className="text-gray-600">Мгновенные ответы</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Популярные темы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 text-left">
              <div>
                <div className="font-semibold">Время доставки</div>
                <div className="text-sm text-gray-500">15-30 минут</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 text-left">
              <div>
                <div className="font-semibold">Способы оплаты</div>
                <div className="text-sm text-gray-500">Карты, наличные, онлайн</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 text-left">
              <div>
                <div className="font-semibold">Программа лояльности</div>
                <div className="text-sm text-gray-500">Баллы и скидки</div>
              </div>
            </Button>
            <Button variant="outline" className="h-auto p-4 text-left">
              <div>
                <div className="font-semibold">Изменение заказа</div>
                <div className="text-sm text-gray-500">В течение 5 минут</div>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;