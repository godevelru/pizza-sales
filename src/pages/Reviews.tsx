import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Star, ThumbsUp, MessageCircle, Filter } from 'lucide-react';

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      rating: 5,
      date: '2024-01-15',
      comment: 'Отличная пицца! Быстрая доставка, всегда горячая. Особенно нравится Маргарита - тонкое тесто, много сыра. Заказываем регулярно всей семьей.',
      likes: 12,
      verified: true
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      rating: 4,
      date: '2024-01-14',
      comment: 'Хорошее качество, но иногда доставка задерживается. В целом довольны, особенно нравится программа лояльности.',
      likes: 8,
      verified: true
    },
    {
      id: 3,
      name: 'Елена Козлова',
      rating: 5,
      date: '2024-01-13',
      comment: 'Заказывали пиццу для корпоратива - все остались в восторге! Большой выбор, вежливые курьеры, все привезли точно в срок.',
      likes: 15,
      verified: false
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      rating: 3,
      date: '2024-01-12',
      comment: 'Пицца неплохая, но цены кусаются. Хотелось бы больше акций для постоянных клиентов.',
      likes: 3,
      verified: true
    },
    {
      id: 5,
      name: 'Ольга Смирнова',
      rating: 5,
      date: '2024-01-11',
      comment: 'Лучшая пиццерия в городе! Всегда свежие ингредиенты, большие порции. Особенно рекомендую Четыре сыра и Пепперони.',
      likes: 20,
      verified: true
    }
  ];

  const filteredReviews = reviews.filter(review => {
    if (filter === 'all') return true;
    if (filter === '5') return review.rating === 5;
    if (filter === '4') return review.rating === 4;
    if (filter === '3') return review.rating <= 3;
    return true;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h1>
          <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
        </div>

        {/* Rating Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600">Средняя оценка</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">{reviews.length}</div>
              <p className="text-gray-600">Всего отзывов</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
              <p className="text-gray-600">Рекомендуют нас</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Reviews List */}
          <div className="lg:col-span-2">
            {/* Filter */}
            <div className="flex items-center space-x-4 mb-6">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium">Фильтр:</span>
              <div className="flex space-x-2">
                <Button
                  variant={filter === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('all')}
                >
                  Все
                </Button>
                <Button
                  variant={filter === '5' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('5')}
                >
                  5 звезд
                </Button>
                <Button
                  variant={filter === '4' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('4')}
                >
                  4 звезды
                </Button>
                <Button
                  variant={filter === '3' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setFilter('3')}
                >
                  3 и ниже
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{review.name}</h3>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Проверенный отзыв
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{review.comment}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600">
                        <ThumbsUp className="w-4 h-4" />
                        <span className="text-sm">{review.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">Ответить</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Write Review Form */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Оставить отзыв</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваша оценка</label>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setRating(i + 1)}
                        className="focus:outline-none"
                      >
                        <Star 
                          className={`w-8 h-8 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 hover:text-yellow-400'}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Отзыв</label>
                  <Textarea 
                    placeholder="Поделитесь своим мнением о нашей пицце и сервисе..."
                    rows={4}
                  />
                </div>
                <Button className="w-full">Отправить отзыв</Button>
                <p className="text-xs text-gray-500 text-center">
                  Отзыв будет опубликован после модерации
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;