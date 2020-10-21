def movies(movie):
    idx = 1
    for item in movie:
        print(f"{idx}. {item} : {movie[item]}")
        idx +=1

movies({"Title" : "Star Wars - A new Hope", "Genre" : "Sci-Fi", "Year" : 1977})

