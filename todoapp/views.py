from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.forms import User
from .models import Todo
from django.contrib.auth import authenticate, login as auth_login, logout

# Create your views here.
def index(request):
    if not request.user.is_authenticated:
        return render(request, 'login.html')
    toDos = Todo.objects.filter(User=request.user)
    toDosList = []
    for toDo in toDos:
        toDosList.append(toDo.content)
    context = {"toDosList":toDosList}
    return render(request, 'homepage.html', context)

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
def addNote(request):
    if request.method == 'POST':

        content = request.POST["toDoContent"]
        print(f"content: {content}")
        toDo = Todo.objects.create(User=request.user, content=content)
        toDo.save()
        print(toDo)
        return HttpResponseRedirect(reverse("index"))
    else:
        return HttpResponseRedirect(reverse("index"))

def remove(request):
    if request.method == 'POST':
        content = request.POST["deleteInput"][1:]
        print(f"HERE -> {content}");
        Todo.objects.filter(User=request.user, content=content).first().delete()
        return HttpResponseRedirect(reverse("index"))
    else:
        return HttpResponseRedirect(reverse("index"))