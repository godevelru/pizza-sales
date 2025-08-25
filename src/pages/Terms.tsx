import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  ShoppingCart, 
  CreditCard, 
  Truck,
  Shield,
  AlertTriangle,
  CheckCircle,
  Scale
} from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Условия использования</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Настоящие условия регулируют использование сайта и услуг ПиццаМастер. 
            Используя наш сайт, вы соглашаетесь с данными условиями.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Последнее обновление: 15 января 2024 года
          </div>
        </div>

        {/* Important Notice */}
        <div className="mb-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Важно!</h3>
              <p className="text-yellow-700">
                Пожалуйста, внимательно прочитайте данные условия перед использованием наших услуг. 
                Продолжая пользоваться сайтом, вы подтверждаете свое согласие с этими условиями.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-6 h-6 text-red-600" />
                <span>1. Общие положения</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">1.1. Определения</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li><strong>Сайт</strong> - интернет-ресурс pizzamaster.ru</li>
                  <li><strong>Компания</strong> - ООО "ПиццаМастер"</li>
                  <li><strong>Пользователь</strong> - лицо, использующее сайт</li>
                  <li><strong>Услуги</strong> - приготовление и доставка пиццы</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">1.2. Применение условий</h3>
                <p className="text-gray-700">
                  Данные условия применяются ко всем пользователям сайта и клиентам компании. 
                  Использование сайта означает полное согласие с настоящими условиями.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">1.3. Изменения условий</h3>
                <p className="text-gray-700">
                  Компания оставляет за собой право изменять данные условия в любое время. 
                  Актуальная версия всегда доступна на данной странице.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ShoppingCart className="w-6 h-6 text-red-600" />
                <span>2. Заказы и услуги</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">2.1. Оформление заказа</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Заказ считается принятым после подтверждения оператором</li>
                  <li>Все цены указаны в рублях и включают НДС</li>
                  <li>Компания оставляет право отказать в выполнении заказа</li>
                  <li>Минимальная сумма заказа для доставки - 300₽</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">2.2. Изменение и отмена заказа</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Заказ можно изменить в течение 5 минут после оформления</li>
                  <li>Отмена заказа возможна до начала приготовления</li>
                  <li>При отмене оплаченного заказа возврат осуществляется в течение 3-5 рабочих дней</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">2.3. Наличие товара</h3>
                <p className="text-gray-700">
                  В случае отсутствия ингредиентов компания предложит замену или отменит заказ 
                  с полным возвратом средств.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CreditCard className="w-6 h-6 text-red-600" />
                <span>3. Оплата</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">3.1. Способы оплаты</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Наличными при получении</li>
                  <li>Банковской картой при получении</li>
                  <li>Онлайн-оплата на сайте</li>
                  <li>Безналичный расчет для юридических лиц</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">3.2. Безопасность платежей</h3>
                <p className="text-gray-700">
                  Все онлайн-платежи обрабатываются через защищенные платежные системы. 
                  Компания не хранит данные банковских карт.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">3.3. Возврат средств</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Возврат осуществляется тем же способом, которым была произведена оплата</li>
                  <li>Срок возврата: 3-5 рабочих дней для карт, до 30 дней для других способов</li>
                  <li>Возврат возможен при отмене заказа или некачественном товаре</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="w-6 h-6 text-red-600" />
                <span>4. Доставка</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">4.1. Условия доставки</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Доставка осуществляется в пределах зоны обслуживания</li>
                  <li>Время доставки: 15-45 минут в зависимости от загруженности</li>
                  <li>Стоимость доставки: 150₽, бесплатно при заказе от 500₽</li>
                  <li>Доставка осуществляется ежедневно с 10:00 до 23:00</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">4.2. Ответственность при доставке</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Клиент обязан присутствовать по указанному адресу</li>
                  <li>При отсутствии клиента заказ ожидается 15 минут</li>
                  <li>Повторная доставка оплачивается дополнительно</li>
                  <li>Компания не несет ответственности за задержки по независящим причинам</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-6 h-6 text-red-600" />
                <span>5. Гарантии и ответственность</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">5.1. Гарантии качества</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Компания гарантирует качество используемых продуктов</li>
                  <li>Все блюда готовятся в соответствии с технологическими картами</li>
                  <li>При обнаружении недостатков товар подлежит замене или возврату</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">5.2. Ограничение ответственности</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Компания не несет ответственности за вред, причиненный неправильным использованием товара</li>
                  <li>Ответственность ограничена стоимостью заказа</li>
                  <li>Компания не отвечает за последствия форс-мажорных обстоятельств</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">5.3. Рекламации</h3>
                <p className="text-gray-700">
                  Претензии по качеству принимаются в течение 2 часов с момента получения заказа. 
                  Рекламации рассматриваются в течение 24 часов.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader>
              <CardTitle>6. Использование сайта</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">6.1. Правила использования</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Запрещается использование сайта в незаконных целях</li>
                  <li>Нельзя нарушать работу сайта или серверов</li>
                  <li>Запрещено копирование контента без разрешения</li>
                  <li>Пользователь несет ответственность за достоверность предоставленных данных</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">6.2. Интеллектуальная собственность</h3>
                <p className="text-gray-700">
                  Все материалы сайта (тексты, изображения, логотипы) являются собственностью компании 
                  и защищены авторским правом.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card>
            <CardHeader>
              <CardTitle>7. Персональные данные</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Обработка персональных данных осуществляется в соответствии с 
                <a href="/privacy" className="text-red-600 hover:underline ml-1">Политикой конфиденциальности</a>.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Данные используются только для выполнения заказов</li>
                <li>Информация не передается третьим лицам без согласия</li>
                <li>Пользователь может запросить удаление своих данных</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Scale className="w-6 h-6 text-red-600" />
                <span>8. Разрешение споров</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">8.1. Досудебное урегулирование</h3>
                <p className="text-gray-700">
                  Все споры решаются путем переговоров. Претензии направляются на 
                  email: info@pizzamaster.ru и рассматриваются в течение 10 рабочих дней.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">8.2. Применимое право</h3>
                <p className="text-gray-700">
                  К настоящим условиям применяется российское законодательство. 
                  Споры рассматриваются в судах по месту нахождения компании.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section 9 */}
          <Card>
            <CardHeader>
              <CardTitle>9. Заключительные положения</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">9.1. Действие условий</h3>
                <p className="text-gray-700">
                  Настоящие условия действуют с момента размещения на сайте и до их изменения или отмены.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">9.2. Недействительность отдельных положений</h3>
                <p className="text-gray-700">
                  Если какое-либо положение признается недействительным, остальные условия 
                  продолжают действовать в полном объеме.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card className="bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-red-600" />
                <span>Информация о компании</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Реквизиты:</h4>
                  <div className="space-y-1 text-gray-700">
                    <p>ООО "ПиццаМастер"</p>
                    <p>ИНН: 1234567890</p>
                    <p>КПП: 123456789</p>
                    <p>ОГРН: 1234567890123</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Контакты:</h4>
                  <div className="space-y-1 text-gray-700">
                    <p>Адрес: г. Москва, ул. Примерная, 123</p>
                    <p>Телефон: +7 (999) 123-45-67</p>
                    <p>Email: info@pizzamaster.ru</p>
                    <p>Сайт: pizzamaster.ru</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;