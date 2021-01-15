
# -*-coding:utf-8 -*
from flask import Flask, render_template

from .models import Movie

app = Flask(__name__)

@app.route('/')
def index():
    best_movie = Movie.the_best_imdb_score()
    bests_movies = Movie.bests_imdb_score()
    movies_by_genre = list() 
    movies_by_genre[0] = Movie.bests_imdb_score_by_genre("Action")
    movies_by_genre[1] = Movie.bests_imdb_score_by_genre("Comedy")
    movies_by_genre[2] = Movie.bests_imdb_score_by_genre("Sci-Fi")
    return render_template('index.html', **locals())