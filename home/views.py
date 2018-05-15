from django.shortcuts import render, redirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.http import HttpResponseRedirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate

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
    return render(request, 'home/index.html', {'form': form, 'products': products})


def result(request):
    keywords = ''
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            keywords = [element.strip() for element in form.cleaned_data['keywords'].split(',')]

    else:
        form = SearchForm()

    products = Product.objects.all()

    return render(request, 'home/result.html', {'form': form, 'keywords': keywords, 'products': products})


def intro(request):
    return render(request, 'home/intro.html')


def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('/')
    else:
        form = UserCreationForm()
    return render(request, 'home/signup.html', {'form': form})
