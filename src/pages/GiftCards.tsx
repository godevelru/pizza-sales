import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Gift, 
  CreditCard, 
  Heart, 
  Star, 
  Calendar,
  Mail,
  Phone,
  Download,
  Share,
  Check
} from 'lucide-react';

const GiftCards = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedDesign, setSelectedDesign] = useState('classic');

  const predefinedAmounts = [500, 1000, 2000, 3000, 5000];
  
  const designs = [
    { id: 'classic', name: 'Классическая', color: 'bg-red-600' },
    { id: 'birthday', name: 'День рождения', color: 'bg-pink-500' },
    { id: 'wedding', name: 'Свадьба', color: 'bg-purple-500' },
    { id: 'corporate', name: 'Корпоративная', color: 'bg-blue-600' },
    { id: 'holiday', name: 'Праздничная', color: 'bg-green-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Подарочные карты</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Подарите радость вкусной пиццы! Наши подарочные карты - идеальный подарок 
            для любого случая. Выберите сумму, дизайн и порадуйте близких.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Card Configuration */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Gift className="w-6 h-6 text-red-600" />
                  <span>Создать подарочную карту</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Amount Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">Сумма подарочной карты</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? 'default' : 'outline'}
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className="h-12"
                      >
                        {amount}₽
                      </Button>
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      placeholder="Другая сумма"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(0);
                      }}
                      className="flex-1"
                    />
                    <span className="text-gray-500">₽</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Минимальная сумма: 500₽, максимальная: 50 000₽
                  </p>
                </div>

                {/* Design Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">Дизайн карты</label>
                  <div className="grid grid-cols-2 gap-3">
                    {designs.map((design) => (
                      <div
                        key={design.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          selectedDesign === design.id 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedDesign(design.id)}
                      >
                        <div className={`w-full h-16 ${design.color} rounded mb-2 flex items-center justify-center`}>
                          <Gift className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-sm font-medium text-center">{design.name}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recipient Information */}
                <div>
                  <label className="block text-sm font-medium mb-3">Информация о получателе</label>
                  <div className="space-y-3">
                    <Input placeholder="Имя получателя" />
                    <Input type="email" placeholder="Email получателя" />
                    <Textarea 
                      placeholder="Персональное сообщение (необязательно)"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Delivery Options */}
                <div>
                  <label className="block text-sm font-medium mb-3">Способ доставки</label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="delivery" value="email" defaultChecked />
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>Отправить на email</span>
                      <Badge className="bg-green-100 text-green-800">Бесплатно</Badge>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="delivery" value="sms" />
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>Отправить SMS</span>
                      <Badge className="bg-blue-100 text-blue-800">50₽</Badge>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="delivery" value="physical" />
                      <CreditCard className="w-4 h-4 text-gray-500" />
                      <span>Физическая карта</span>
                      <Badge className="bg-yellow-100 text-yellow-800">200₽</Badge>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview and Purchase */}
          <div>
            {/* Card Preview */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Предварительный просмотр</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`w-full h-48 ${designs.find(d => d.id === selectedDesign)?.color} rounded-lg p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-4 right-4">
                    <Gift className="w-8 h-8 opacity-50" />
                  </div>
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">ПиццаМастер</h3>
                      <p className="text-sm opacity-90">Подарочная карта</p>
                    </div>
                    <div>
                      <div className="text-3xl font-bold">
                        {customAmount || selectedAmount}₽
                      </div>
                      <div className="text-sm opacity-75">
                        Действительна до: {new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Purchase Summary */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Итого к оплате</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Номинал карты:</span>
                    <span className="font-semibold">{customAmount || selectedAmount}₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка:</span>
                    <span className="text-green-600">Бесплатно</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>К оплате:</span>
                    <span className="text-red-600">{customAmount || selectedAmount}₽</span>
                  </div>
                </div>
                <Button className="w-full mt-6" size="lg">
                  Купить подарочную карту
                </Button>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Преимущества наших карт</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Срок действия 1 год</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Можно использовать частями</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Действует во всех точках</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Мгновенная доставка на email</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как использовать подарочную карту?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  При оформлении заказа укажите номер карты в поле "Промокод" или сообщите 
                  оператору при телефонном заказе. Остаток средств сохраняется для следующих покупок.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли вернуть подарочную карту?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Подарочные карты не подлежат возврату и обмену на денежные средства. 
                  Неиспользованный остаток сгорает по истечении срока действия.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Как проверить баланс карты?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Баланс можно проверить на нашем сайте в разделе "Проверить карту" 
                  или по телефону горячей линии, назвав номер карты.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли пополнить карту?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Да, вы можете пополнить существующую карту на любую сумму от 500₽ 
                  через наш сайт или в любой точке продаж.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Corporate Cards */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Корпоративные подарочные карты</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Специальные условия для компаний. Скидки от 10% при заказе от 50 карт. 
              Персональный дизайн с логотипом вашей компании.
            </p>
            <Button variant="secondary" size="lg">
              Узнать подробнее
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GiftCards;