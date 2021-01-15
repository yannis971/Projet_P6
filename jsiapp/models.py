# -*-coding:utf-8 -*

class Movie:

    def __init__(self, **properties):
        for attr_name, attr_value in properties.items():
            setattr(self, attr_name, attr_value)

    @classmethod
    def all(self):
        """
        next_url = URL_API_V1_TITLES
        faire un GET sur next_url
        recuperer la valeur de count
        return self._fonction_generatrice(request, count)
        """

    @classmethod
    def the_best_imdb_score(cls):
        """
        next_url = URL_API_V1_TITLES + '?sort_by=-imdb_score'
        faire un GET sur next_url
        url_detail = results[0]['url']
        faire un GET de url_detail
        return Movie(**req)
        """

    @staticmethod
    def _fonction_generatice(request, nb_movies_max):
        """
        boucle tant que len(list_bests_movies<nb_movies_max)
            for item in results:
                url_detail = item['url']
                faire un GET de url_detail
                yield Movie(**req)
            récupérer la valeur de la clé next
            if next_url <> null
                faire un GET de next
        """
    @classmethod
    def bests_imdb_score(self, nb_movies_max=NB_MOVIES_MAX):
        """
        nb_movies_max += 1
        next_url = URL_API_V1_TITLES + '?sort_by=-imdb_score'
        faire un GET sur next_url
        gen = self._fonction_generatrice(request, nb_movies_max)
        gen.__next__()
        return gen
        """

    @classmethod
    def bests_imdb_score_by_genre(self, genre_name, nb_movies_max=NB_MOVIES_MAX):
        """
        http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score
        http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score
        next_url =  URL_API_V1_TITLES + '?genre=' + genre_name + '&sort_by=-imdb_score'
        faire un GET sur next_url
        return self._fonction_generatrice(request, nb_movies_max)
        """


class Genre:

    def __init__(self, **properties):
        for attr_name, attr_value in properties.items():
            setattr(self, attr_name, attr_value)

    def all(self):
        """
        next_url = URL_API_V1_GENRES
        faire un GET sur next_url
        boucle
            récupérer la valeur de la clé results
            for item in results
                yield Movie(**item)
            récupérer la valeur de la clé next
            if next_url <> null
                faire un GET de next
        """