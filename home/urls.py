from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('result/', views.result, name='result'),

    # @Lam this is the change I made
    path('intro/', views.intro, name='intro')

]
