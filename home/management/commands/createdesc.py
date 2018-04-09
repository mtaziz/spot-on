from django.core.management.base import BaseCommand, CommandError
from home.models import Product

import json


class Command(BaseCommand):
    help = 'Add specific description to a single product'

    def add_arguments(self, parser):
        parser.add_argument('productid', nargs=1)
        parser.add_argument('input', nargs=1)

    def handle(self, *args, **options):
        data_input = options['input'][0]
        data_id = options['productid'][0]

        product = Product.objects.get(id=data_id)

        product.product_desc = json.loads(data_input)
        product.save()
