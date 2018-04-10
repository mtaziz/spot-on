from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from .models import Product
from .forms import SearchForm

def index(request):
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():

            return HttpResponseRedirect('/result/')
    else:
        form = SearchForm()

    products_list = Product.objects.all()

    paginator = Paginator(products_list, 25)

    page = request.GET.get('page')
    products = paginator.get_page(page)
    return render(request, 'home/index.html', {'products': products, 'form': form})
