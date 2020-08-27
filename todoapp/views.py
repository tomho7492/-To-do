from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.forms import User
from django.contrib.auth import authenticate, login as auth_login, logout

# Create your views here.
def index(request):
    if not request.user.is_authenticated:
        return render(request, 'login.html')
    return render(request, 'homepage.html')

def register(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse("index"))
    if request.method == 'POST':
        email = request.POST["email-address"]
        password = request.POST["password"]
        print(email)
        print(password)
        user = User.objects.create_user(username=email, password=password)
        user.save()
        return HttpResponseRedirect(reverse("index"))
    return render(request, 'register.html')

def login(request):
    if request.user.is_authenticated:
        return HttpResponseRedirect(reverse("index"))
    if request.method == 'POST':
        email = request.POST["email-address"]
        password = request.POST["password"]
        user = authenticate(request, username=email, password=password)
        print(user)
        if user is not None:
            auth_login(request, user)
            return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, 'login.html')