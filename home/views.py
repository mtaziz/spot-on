from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from .models import Product


def index(request):
    products_list = Product.objects.all()

    paginator = Paginator(products_list, 25)

    page = request.GET.get('page')
    products = paginator.get_page(page)
    return render(request, 'home/index.html', {'products': products})
