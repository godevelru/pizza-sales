import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { pizzas } from '@/data/pizzas';
import { useCart } from '@/hooks/useCart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShoppingCart, Filter } from 'lucide-react';

const Menu = () => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');

  const categories = ['все', 'классические', 'мясные', 'вегетарианские', 'острые', 'сладкие'];

  const sortedPizzas = [...pizzas].sort((a, b) => {
    if (sortBy === 'price') {
      return a.sizes[selectedSize].price - b.sizes[selectedSize].price;
    }
    return a.name.localeCompare(b.name);
  });

  const getPizzasByCategory = (category: string) => {
    if (category === 'все') return sortedPizzas;
    return sortedPizzas.filter(pizza => pizza.category === category);
  };

  const handleAddToCart = (pizza: any) => {
    addItem(pizza, selectedSize, 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Наше меню</h1>
          <p className="text-xl text-gray-600">Выберите свою идеальную пиццу</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="font-medium">Размер:</span>
            <div className="flex space-x-2">
              {(['small', 'medium', 'large'] as const).map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                >
                  {size === 'small' ? 'Маленькая' : size === 'medium' ? 'Средняя' : 'Большая'}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-medium">Сортировка:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'price')}
              className="border rounded px-3 py-1"
            >
              <option value="name">По названию</option>
              <option value="price">По цене</option>
            </select>
          </div>
        </div>

        <Tabs defaultValue="все" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {getPizzasByCategory(category).map((pizza) => (
                  <Card key={pizza.id} className="hover:shadow-lg transition-shadow">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img 
                        src={pizza.image} 
                        alt={pizza.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{pizza.name}</CardTitle>
                        <Badge variant="secondary" className="capitalize">
                          {pizza.category}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">
                        {pizza.description}
                      </CardDescription>
                      <div className="text-xs text-gray-500">
                        <strong>Состав:</strong> {pizza.ingredients.join(', ')}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-2xl font-bold text-red-600">
                              {pizza.sizes[selectedSize].price}₽
                            </div>
                            <div className="text-sm text-gray-500">
                              {pizza.sizes[selectedSize].diameter} см
                            </div>
                          </div>
                          <Button 
                            onClick={() => handleAddToCart(pizza)}
                            className="flex items-center space-x-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            <span>В корзину</span>
                          </Button>
                        </div>
                        <Link to={`/menu/${pizza.id}`} className="block">
                          <Button variant="outline" className="w-full">
                            Подробнее
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;