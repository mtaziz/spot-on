# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy.item import Item, Field


class NikeShoesItem(scrapy.Item):
    product_name = Field()
    product_price = Field()
    product_image_url = Field()
    product_stock = Field()
    product_rating = Field()
    product_url = Field()
    product_subtitle = Field()
