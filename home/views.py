from django.shortcuts import render
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponseRedirect


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
    return render(request, 'home/index.html', {'form': form, 'products': products})


def result(request):
    keywords = ''
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            keywords = form.cleaned_data['keywords']

    else:
        form = SearchForm()

    products = Product.objects.all()

    return render(request, 'home/result.html', {'form': form, 'keywords': keywords, 'products': products})
