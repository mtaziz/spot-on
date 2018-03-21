from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

import json


def index(request):
    with open('data.json', 'r') as json_data:
        products = json.load(json_data)

        paginator = Paginator(products, 25)

        page = request.GET.get('page')
        contacts = paginator.get_page(page)
        return render(request, 'home/index.html', {'products': products})
