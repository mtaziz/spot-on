from django import forms


class SearchForm(forms.Form):
    keywords = forms.CharField(label='keywords',
                               max_length=100,
                               widget=forms.TextInput(attrs={'data-role':'tagsinput', 'placeholder': 'What\'s on your mind today' }))
