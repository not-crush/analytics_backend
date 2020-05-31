from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings



class User(AbstractUser):
    '''
    Модель для пользователей
    '''

    #role = models.CharField("Роль", max_length=15, default='student')
    #tel = models.CharField("Телефон", max_length=15, blank=True, null=True)
    patronymic = models.CharField(max_length=1024, blank=True, null=True)
    isu_number = models.CharField(max_length=1024, blank=True, null=True)

    # def __str__(self):
    #     return self.first_name + ' ' + self.last_name

    REQUIRED_FIELDS = ['first_name', 'last_name', 'email']

    def __str__(self):
        return self.username


class Domain(models.Model):
    '''
        Модель для предметной области
    '''

    name = models.CharField(max_length=200, blank=True, verbose_name='Название')
    user = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name = 'domain_user', verbose_name='Пользователи')
    def __str__(self):
        return self.name


class Items(models.Model):
    '''
        Модель для сущностей
    '''
    class Meta:
        verbose_name_plural = 'Учебные сущности'
 
    name = models.CharField(max_length=200, blank=True, verbose_name='Название')
    domain = models.ForeignKey(Domain, null = True, blank = True, help_text='Укажите область', verbose_name='Область знаний',on_delete=models.CASCADE,)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name = 'Автор', verbose_name='Пользователи', null=True)
    value = models.IntegerField(blank=True, null = True, default = 0, verbose_name='Значение')
    source = models.CharField(max_length=200, blank=True, verbose_name='Источник')    
    #date_created = models.DateField(auto_now_add = True)
    relation_with_item = models.ManyToManyField('Items', verbose_name='Связи айтима', through='Relation')


    def __str__(self):
        return self.name

class Relation(models.Model):
    '''
        Модель для связей
    '''

    HIERARCHY = '1'
    NOT_DEFINED = '0'
    SAME_PARENT = '2'
    HAVE_PREREQUISITE = '4'
    SYNONYMS = '5'
    NO = '7'
    
    STATUS_CHOICES = (
        (NOT_DEFINED, 'неопределенное'),
        (HIERARCHY, 'включает в себя'),
        (SAME_PARENT, 'является частью одного раздела'),
        (HAVE_PREREQUISITE, 'имеет пререквизит'),
        (SYNONYMS, 'тождество'),
        (NO, 'отсутствует'),
    )

    item1 = models.ForeignKey(Items,on_delete=models.CASCADE, related_name = 'item1', verbose_name='Элемент РПД')
    relation = models.CharField(choices=STATUS_CHOICES, max_length=10, default=HIERARCHY, verbose_name='Связь')
    item2 = models.ManyToManyField(Items, related_name = 'item2', through='Connection', verbose_name='Элемент РПД')
    
    def __str__(self):
        return self.item1.name


class Connection(models.Model):
    '''
        Модель для связей
    '''
    #
    # class Meta:
    #     auto_created = True

    relation = models.ForeignKey(Relation,on_delete=models.CASCADE, verbose_name='Связь')
    items = models.ForeignKey(Items, on_delete=models.CASCADE, related_name = 'item', verbose_name='Учебная сущность')
    count = models.IntegerField(null = True, blank = True, default = 0, verbose_name='Повторения')

    def __str__(self):
        return self.items.name