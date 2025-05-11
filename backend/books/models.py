from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    genre = models.CharField(max_length=100)
    descriptions = models.TextField()
    rating = models.DecimalField(max_digits=2, decimal_places=1, default=0.0)
    created_at = models.DateField(auto_now=True)

    def __str__(self):
        return self.title