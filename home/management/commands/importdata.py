from django.core.management.base import BaseCommand, CommandError
from home.models import Product

import json


class Command(BaseCommand):
    help = 'Import the data into the database'

    def add_arguments(self, parser):
        parser.add_argument('data', nargs=1)

    def handle(self, *args, **options):
        file_name = options['data'][0]

        with open(file_name, 'r') as json_data:
            for product in json.load(json_data):
                product_detail = Product(product_name=str(product['product_name']),
                       product_price=str(product['product_price']),
                       product_image_url=str(product['product_image_url']),
                       product_stock=str(product['product_stock']),
                       product_rating=str(product['product_rating']),
                       product_url=str(product['product_url']),
                       product_subtitle=str(product['product_subtitle'])
                       )

                product_detail.save()

                self.stdout.write(self.style.SUCCESS('Successfully import data'))
