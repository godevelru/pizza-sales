import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  User, 
  Eye, 
  MessageCircle,
  Share,
  Clock,
  TrendingUp,
  Award,
  MapPin
} from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Открытие новой пиццерии в районе Сокольники',
      excerpt: 'Мы рады сообщить об открытии нашей 16-й точки в Москве. Новая пиццерия расположена в самом сердце района Сокольники.',
      content: 'Полный текст новости о новом открытии...',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      category: 'Открытия',
      date: '2024-01-15',
      author: 'Михаил Петров',
      views: 1250,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: 'Новое меню: 5 эксклюзивных пицц от шеф-повара',
      excerpt: 'Наш шеф-повар Анна Смирнова представляет 5 новых авторских пицц, которые станут настоящим открытием для гурманов.',
      content: 'Подробности о новом меню...',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg',
      category: 'Меню',
      date: '2024-01-12',
      author: 'Анна Смирнова',
      views: 2100,
      comments: 45,
      featured: true
    },
    {
      id: 3,
      title: 'ПиццаМастер получил награду "Лучшая пиццерия года"',
      excerpt: 'На ежегодной премии "Ресторанный Олимп" наша сеть была признана лучшей пиццерией Москвы по версии клиентов.',
      content: 'Детали о награде...',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg',
      category: 'Награды',
      date: '2024-01-10',
      author: 'Пресс-служба',
      views: 3200,
      comments: 67,
      featured: false
    },
    {
      id: 4,
      title: 'Запуск программы экологической ответственности',
      excerpt: 'Мы запускаем комплексную программу по снижению экологического воздействия: биоразлагаемая упаковка и сортировка отходов.',
      content: 'Подробности экологической программы...',
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
      category: 'Экология',
      date: '2024-01-08',
      author: 'Дмитрий Козлов',
      views: 890,
      comments: 12,
      featured: false
    },
    {
      id: 5,
      title: 'Партнерство с местными фермерами',
      excerpt: 'Заключили договоры с 15 местными фермерскими хозяйствами для поставки свежих овощей и зелени.',
      content: 'О партнерстве с фермерами...',
      image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg',
      category: 'Партнерство',
      date: '2024-01-05',
      author: 'Михаил Петров',
      views: 1450,
      comments: 28,
      featured: false
    },
    {
      id: 6,
      title: 'Итоги 2023 года: рекордные показатели',
      excerpt: 'Подводим итоги уходящего года: 2 миллиона довольных клиентов, 15 новых точек и множество наград.',
      content: 'Подробные итоги года...',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      category: 'Итоги',
      date: '2024-01-01',
      author: 'Пресс-служба',
      views: 4100,
      comments: 89,
      featured: false
    }
  ];

  const categories = ['Все', 'Открытия', 'Меню', 'Награды', 'Экология', 'Партнерство', 'Итоги'];
  const [selectedCategory, setSelectedCategory] = React.useState('Все');

  const filteredNews = selectedCategory === 'Все' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Новости ПиццаМастер</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Следите за последними новостями нашей компании: новые открытия, 
            обновления меню, достижения и интересные события из жизни ПиццаМастер.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured News */}
        {selectedCategory === 'Все' && featuredNews.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Главные новости</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-red-600">{item.category}</Badge>
                      <Badge variant="secondary">Главная новость</Badge>
                    </div>
                    <CardTitle className="text-xl hover:text-red-600 cursor-pointer">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{item.author}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{item.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{item.comments}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular News */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {selectedCategory === 'Все' ? 'Все новости' : `Новости: ${selectedCategory}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <Badge className="bg-red-600 w-fit mb-2">{item.category}</Badge>
                  <CardTitle className="text-lg hover:text-red-600 cursor-pointer line-clamp-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{item.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{item.comments}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-lg p-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Подписка на новости</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Будьте в курсе всех новостей ПиццаМастер! Подпишитесь на нашу рассылку 
              и получайте уведомления о новинках, акциях и событиях.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 rounded-md text-gray-900"
              />
              <Button variant="secondary">
                Подписаться
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Наши достижения в цифрах</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">16</div>
              <div className="text-gray-600">Точек в городе</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">2M+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">50+</div>
              <div className="text-gray-600">Видов пиццы</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">10</div>
              <div className="text-gray-600">Лет на рынке</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;