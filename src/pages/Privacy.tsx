import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Lock, 
  Eye, 
  UserCheck, 
  Database,
  Mail,
  Phone,
  Calendar
} from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Политика конфиденциальности</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы серьезно относимся к защите ваших персональных данных и обеспечиваем их безопасность 
            в соответствии с требованиями российского законодательства.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            Последнее обновление: 15 января 2024 года
          </div>
        </div>

        {/* Quick Overview */}
        <div className="mb-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Краткий обзор</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-blue-600" />
              <span className="text-sm">Защищаем ваши данные</span>
            </div>
            <div className="flex items-center space-x-3">
              <Lock className="w-6 h-6 text-blue-600" />
              <span className="text-sm">Безопасное хранение</span>
            </div>
            <div className="flex items-center space-x-3">
              <Eye className="w-6 h-6 text-blue-600" />
              <span className="text-sm">Прозрачность использования</span>
            </div>
            <div className="flex items-center space-x-3">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <span className="text-sm">Ваши права защищены</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section 1 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="w-6 h-6 text-red-600" />
                <span>1. Какие данные мы собираем</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Персональные данные:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Имя и фамилия</li>
                  <li>Номер телефона</li>
                  <li>Адрес электронной почты</li>
                  <li>Адрес доставки</li>
                  <li>Дата рождения (для программы лояльности)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Данные о заказах:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>История заказов и предпочтения</li>
                  <li>Способы оплаты (без сохранения данных карт)</li>
                  <li>Отзывы и оценки</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Технические данные:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>IP-адрес и данные браузера</li>
                  <li>Файлы cookie</li>
                  <li>Данные о посещениях сайта</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="w-6 h-6 text-red-600" />
                <span>2. Как мы используем ваши данные</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Обработка заказов:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Оформление и доставка заказов</li>
                  <li>Связь с клиентами по вопросам заказа</li>
                  <li>Обработка платежей</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Улучшение сервиса:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Персонализация предложений</li>
                  <li>Анализ предпочтений клиентов</li>
                  <li>Улучшение качества обслуживания</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Маркетинг:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Информирование о новинках и акциях</li>
                  <li>Программа лояльности</li>
                  <li>Поздравления с днем рождения</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lock className="w-6 h-6 text-red-600" />
                <span>3. Как мы защищаем ваши данные</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Технические меры:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>SSL-шифрование для передачи данных</li>
                  <li>Защищенные серверы и базы данных</li>
                  <li>Регулярное обновление систем безопасности</li>
                  <li>Многоуровневая аутентификация</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Организационные меры:</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Ограниченный доступ к персональным данным</li>
                  <li>Обучение сотрудников вопросам конфиденциальности</li>
                  <li>Регулярный аудит безопасности</li>
                  <li>Соглашения о неразглашении</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <UserCheck className="w-6 h-6 text-red-600" />
                <span>4. Ваши права</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                В соответствии с Федеральным законом "О персональных данных" вы имеете право:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Доступ:</strong> Получить информацию о том, какие данные мы о вас храним</li>
                <li><strong>Исправление:</strong> Потребовать исправления неточных данных</li>
                <li><strong>Удаление:</strong> Потребовать удаления ваших персональных данных</li>
                <li><strong>Ограничение:</strong> Ограничить обработку ваших данных</li>
                <li><strong>Отзыв согласия:</strong> Отозвать согласие на обработку данных</li>
                <li><strong>Жалоба:</strong> Подать жалобу в Роскомнадзор</li>
              </ul>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card>
            <CardHeader>
              <CardTitle>5. Передача данных третьим лицам</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Мы можем передавать ваши данные третьим лицам только в следующих случаях:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Службы доставки (только адрес и контактные данные)</li>
                <li>Платежные системы (для обработки платежей)</li>
                <li>SMS и email сервисы (для уведомлений)</li>
                <li>Государственные органы (при наличии законных требований)</li>
              </ul>
              <p className="text-gray-700">
                Все третьи лица обязуются соблюдать конфиденциальность ваших данных.
              </p>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card>
            <CardHeader>
              <CardTitle>6. Файлы cookie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Мы используем файлы cookie для:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Запоминания ваших предпочтений</li>
                <li>Анализа посещаемости сайта</li>
                <li>Персонализации контента</li>
                <li>Обеспечения безопасности</li>
              </ul>
              <p className="text-gray-700">
                Вы можете отключить cookie в настройках браузера, но это может ограничить 
                функциональность сайта.
              </p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card>
            <CardHeader>
              <CardTitle>7. Хранение данных</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Мы храним ваши персональные данные:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>В течение срока действия договора</li>
                <li>В течение 3 лет после последнего заказа</li>
                <li>До отзыва согласия на обработку</li>
                <li>В соответствии с требованиями законодательства</li>
              </ul>
              <p className="text-gray-700">
                После истечения срока хранения данные удаляются безвозвратно.
              </p>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card>
            <CardHeader>
              <CardTitle>8. Изменения в политике</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Мы можем обновлять данную политику конфиденциальности. О существенных 
                изменениях мы уведомим вас по email или через уведомления на сайте.
              </p>
              <p className="text-gray-700">
                Рекомендуем периодически проверять данную страницу для ознакомления 
                с актуальной версией политики.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-red-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Mail className="w-6 h-6 text-red-600" />
                <span>Контактная информация</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                По вопросам обработки персональных данных обращайтесь:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Контакты:</h4>
                  <div className="space-y-1 text-gray-700">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>privacy@pizzamaster.ru</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span>+7 (999) 123-45-69</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Адрес:</h4>
                  <p className="text-gray-700">
                    ООО "ПиццаМастер"<br />
                    г. Москва, ул. Примерная, 123<br />
                    ИНН: 1234567890
                  </p>
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

export default Privacy;