import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Calendar } from '@/components/ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [activeSection, setActiveSection] = useState('main');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const events = [
    { id: 1, date: '15 января', time: '10:00', title: 'Консультация: Кармический анализ', type: 'consultation', spots: 3 },
    { id: 2, date: '18 января', time: '14:00', title: 'Вебинар: Трансформация семейных отношений', type: 'webinar', spots: 12 },
    { id: 3, date: '22 января', time: '11:00', title: 'Групповое занятие: Работа с детскими травмами', type: 'group', spots: 8 },
    { id: 4, date: '25 января', time: '16:00', title: 'Консультация: Развитие личности', type: 'consultation', spots: 2 },
  ];

  const courses = [
    {
      id: 1,
      title: 'Основы кармического менеджмента',
      description: 'Изучение базовых принципов работы с кармой и жизненными циклами',
      duration: '6 недель',
      level: 'Базовый'
    },
    {
      id: 2,
      title: 'Семейная психология и карма',
      description: 'Глубокая работа с родовыми программами и семейными сценариями',
      duration: '8 недель',
      level: 'Продвинутый'
    },
    {
      id: 3,
      title: 'Воспитание детей: осознанный подход',
      description: 'Практические инструменты для гармоничного развития детей',
      duration: '4 недели',
      level: 'Для родителей'
    }
  ];

  const services = [
    { icon: 'User', title: 'Личные консультации', description: 'Индивидуальная работа с кармическими программами' },
    { icon: 'Users', title: 'Семейные сессии', description: 'Гармонизация семейных отношений и решение конфликтов' },
    { icon: 'Heart', title: 'Работа с детьми', description: 'Помощь в развитии и раскрытии потенциала ребенка' },
    { icon: 'BookOpen', title: 'Обучающие курсы', description: 'Структурированные программы личностного роста' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Что такое кармический менеджмент?',
      excerpt: 'Понимание глубинных связей между нашими действиями и жизненными событиями',
      date: '10 января 2026'
    },
    {
      id: 2,
      title: 'Семейные сценарии: как их распознать',
      excerpt: 'Родовые программы влияют на наши решения больше, чем мы думаем',
      date: '5 января 2026'
    },
    {
      id: 3,
      title: 'Осознанное родительство в XXI веке',
      excerpt: 'Как вырастить счастливого и гармоничного человека',
      date: '28 декабря 2025'
    }
  ];

  const testimonials = [
    {
      name: 'Елена М.',
      text: 'После работы с кармическими программами моя жизнь изменилась. Наконец-то нашла гармонию в семье.',
      rating: 5
    },
    {
      name: 'Дмитрий К.',
      text: 'Курс помог понять глубинные причины конфликтов с детьми. Рекомендую всем родителям!',
      rating: 5
    },
    {
      name: 'Анна С.',
      text: 'Профессиональный подход и глубокие знания. Благодарю за трансформацию!',
      rating: 5
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBooking = (event?: any) => {
    if (event) {
      setSelectedEvent(event);
      setFormData({ ...formData, eventType: event.title });
    }
    setIsBookingOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения записи.',
    });
    setIsBookingOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Кармический Путь
            </h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О философии', 'Курсы', 'Услуги', 'Статьи', 'Отзывы', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="py-20 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-secondary-foreground">Трансформация через осознанность</Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Путь к гармонии через
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                кармический менеджмент
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Откройте новые горизонты личностного роста, семейной гармонии и осознанного родительства
            </p>
            <div className="flex gap-4 justify-center">
              <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="group" onClick={() => handleBooking()}>
                    Записаться на консультацию
                    <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Запись на консультацию</DialogTitle>
                    <DialogDescription>
                      Заполните форму, и мы свяжемся с вами для подтверждения записи
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Имя *</Label>
                      <Input
                        id="name"
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eventType">Тип мероприятия *</Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) => setFormData({ ...formData, eventType: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тип" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">Личная консультация</SelectItem>
                          <SelectItem value="family">Семейная сессия</SelectItem>
                          <SelectItem value="child">Работа с детьми</SelectItem>
                          <SelectItem value="webinar">Вебинар</SelectItem>
                          <SelectItem value="group">Групповое занятие</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="preferredDate">Желаемая дата</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredTime">Желаемое время</Label>
                        <Select
                          value={formData.preferredTime}
                          onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Выберите" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10:00">10:00</SelectItem>
                            <SelectItem value="11:00">11:00</SelectItem>
                            <SelectItem value="12:00">12:00</SelectItem>
                            <SelectItem value="14:00">14:00</SelectItem>
                            <SelectItem value="15:00">15:00</SelectItem>
                            <SelectItem value="16:00">16:00</SelectItem>
                            <SelectItem value="17:00">17:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Дополнительная информация</Label>
                      <Textarea
                        id="message"
                        placeholder="Расскажите о том, с чем хотели бы поработать"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                      />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      Отправить заявку
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('курсы')}>
                Смотреть курсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="о-философии" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Наша философия</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow animate-slide-up">
                <CardHeader>
                  <Icon name="Sparkles" className="mb-4 text-primary" size={32} />
                  <CardTitle>Кармический менеджмент</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Управление жизненными циклами через осознание глубинных причинно-следственных связей
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <Icon name="Heart" className="mb-4 text-primary" size={32} />
                  <CardTitle>Семейная гармония</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Трансформация родовых программ и создание здоровых семейных отношений
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <Icon name="Smile" className="mb-4 text-primary" size={32} />
                  <CardTitle>Осознанное родительство</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Воспитание детей через понимание их уникальной природы и потенциала
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <CardHeader>
                  <Icon name="TrendingUp" className="mb-4 text-primary" size={32} />
                  <CardTitle>Личностный рост</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Раскрытие внутреннего потенциала и достижение жизненных целей
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="курсы" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Обучающие курсы</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card key={course.id} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <Badge className="w-fit mb-2">{course.level}</Badge>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Icon name="Clock" size={16} />
                    <span>{course.duration}</span>
                  </div>
                  <Button className="w-full">Узнать больше</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Наши услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={service.title} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="календарь" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Расписание мероприятий</h2>
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="list" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="list">Список</TabsTrigger>
                <TabsTrigger value="calendar">Календарь</TabsTrigger>
              </TabsList>
              
              <TabsContent value="list" className="space-y-4 animate-fade-in">
                {events.map((event) => (
                  <Card key={event.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant={event.type === 'consultation' ? 'default' : event.type === 'webinar' ? 'secondary' : 'outline'}>
                              {event.type === 'consultation' ? 'Консультация' : event.type === 'webinar' ? 'Вебинар' : 'Группа'}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{event.spots} мест</span>
                          </div>
                          <CardTitle className="text-xl mb-1">{event.title}</CardTitle>
                          <CardDescription className="flex items-center gap-3">
                            <span className="flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {event.time}
                            </span>
                          </CardDescription>
                        </div>
                        <Button onClick={() => handleBooking(event)}>Записаться</Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="calendar" className="animate-fade-in">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <Card className="flex-1">
                    <CardContent className="pt-6">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border mx-auto"
                      />
                    </CardContent>
                  </Card>
                  <div className="flex-1 w-full">
                    <Card>
                      <CardHeader>
                        <CardTitle>События на {date?.toLocaleDateString('ru-RU')}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {events.slice(0, 2).map((event) => (
                          <div key={event.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">{event.title}</p>
                                <p className="text-sm text-muted-foreground">{event.time}</p>
                              </div>
                              <Button size="sm" onClick={() => handleBooking(event)}>Записаться</Button>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="статьи" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Полезные статьи</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {articles.map((article, index) => (
              <Card key={article.id} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{article.date}</span>
                    <Button variant="ghost" size="sm">
                      Читать
                      <Icon name="ArrowRight" className="ml-1" size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="отзывы" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Отзывы клиентов</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-primary fill-primary" size={16} />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-base italic">"{testimonial.text}"</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Начните свой путь трансформации</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Свяжитесь с нами для записи на консультацию или получения дополнительной информации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="gap-2">
                <Icon name="Phone" size={20} />
                +7 (999) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Mail" size={20} />
                info@karma-path.ru
              </Button>
            </div>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t bg-muted/10">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 Кармический Путь. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;