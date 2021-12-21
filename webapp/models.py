from django.db import models


class User(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=30, verbose_name='password')

    def __str__(self):
        return self.email

    class Meta:
        verbose_name_plural = "Пользователи"
        verbose_name = "Пользователь"


class Key(models.Model):
    user = models.ForeignKey(User, related_name="user", on_delete=models.CASCADE)
    key = models.CharField()

    def __str__(self):
        return self.user

    class Meta:
        verbose_name = "Ключи для пользователь"
        verbose_name_plural = "Ключи для пользователя"


