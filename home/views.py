from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from .models import Product


def index(request):
    products = Product.objects.all()

    paginator = Paginator(products, 25)

    page = request.GET.get('page')
    contacts = paginator.get_page(page)
    return render(request, 'home/index.html', {'products': products})
