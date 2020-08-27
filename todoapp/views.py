from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.forms import User
# Create your views here.
def index(request):
    if not request.user.is_authenticated:
        return render(request, 'register.html')
    return render(request, 'homepage.html')

def register(request):
    if request.method == 'POST':
        email = request.POST["email-address"]
        password = request.POST["password"]
        print(email)
        print(password)
        user = User.objects.create_user(email, password)
        user.save()
        return HttpResponseRedirect(reverse("index"))
    return render(request, 'register.html')


