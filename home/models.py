from django.db import models


class Product(models.Model):

    product_name = models.CharField(max_length=255)
    product_price = models.CharField(max_length=255)
    product_image_url = models.CharField(max_length=255)
    product_stock = models.CharField(max_length=255)
    product_rating = models.CharField(max_length=255)
    product_url = models.CharField(max_length=255)
    product_subtitle = models.CharField(max_length=255)
