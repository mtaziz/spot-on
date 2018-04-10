from django import forms


class SearchForm(forms.Form):
    keywords = forms.CharField(label='keywords', max_length=100)
