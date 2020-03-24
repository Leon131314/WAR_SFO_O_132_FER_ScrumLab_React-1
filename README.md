# ScrumLab React

To repozytorium jest poświęcone projektowi ScrumLab w wersji Reactowej. 


## Jak zacząć?

Aby rozpocząć pracę nad projektem, należy:

- `clone` - sklonować to repoztorium
- `npm install` - zainstalować wszystkie niezbędne zależności

Projekt jest oparty o konfigurację *Create React App*.


## Development i Budowanie

Aby uruchomić serwer deweloperski przy pracy nad projektem, trzeba uruchomić komendę `npm start`.

Budowanie projektu to komenda `npm run build`. Z tej komendy korzystamy tylko wtedy kiedy chcemy wygenerować folder `build` ze skompilowaną i produkcyjną wersją naszej aplikacji.

Więcej o komendach CRA możecie przeczytać tutaj: [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).


## REST API

W ramach projektu ScrumLab przygotowano podstawową strukturę bazy danych `json-server`. Plik zawierający wszystkie dane znajduje się w folderze `database` pod nazwą `db.json`.

Uruchamiamy serwer za pomocą `npm run api` w osobnej karcie terminala. Serwer powinien zostać uruchomiony na porcie `3000`: http://localhost:3000.

Operacje które możemy wykonywać na bazie:

### Użytkownik
```json
{
  "user": {
    "name": ""
  }
}
```

| Zasób | Metoda | Dane | Opis |
| ----- | ------ | ---- | ---- |
| `/user` | `GET` | - | Pobranie obiektu `user` w którym znajduje się klucz `name`|
| `/user` | `PATCH` | ` { "name": "Tomek" } ` | Zaktualizowanie obiektu `user` o nową wartość `name` |


### Przepisy 
```json
{
  "id": 1,
  "name": "Zupa pomidorowa",
  "description": "Pyszna zupa pomidorowa z całych pomidorów.",
  "steps": ["Wlej wodę do garnka"],
  "ingredients": ["Pomidory"]
}
```

| Zasób | Metoda | Opis |
| ----- | ------ | ---- |
| `/recipes` | `GET` | Pobranie wszystkich przepisów |
| `/recipes/:id` | `GET` | Pobranie konkretnego przepisu (pod `:id` wstawiamy ID przepisu) |
| `/recipes` | `POST` | Wysyłamy obiekt `json` z nazwą, opisem, krokami i składnikami przepisu |
| `/recipes/:id` | `PATCH` | Wysyłamy odpowiednie dane w celu edycji istniejącego już przepisu |
| `/recipes/:id` | `DELETE` | Usuwamy konkretny przepis z bazy |



### Harmonogramy 
```json
{
  "id": 1,
  "name": "Wegetariański tydzień",
  "description": "Długi opis tygodnia bez mięsa.",
  "weekNumber": 1,
  "monday": [1,2,3,4,5],
  "tuesday": [1,2,3,4,5],
  "wednesday": [1,2,3,4,5],
  "thrusday": [1,2,3,4,5],
  "friday": [1,2,3,4,5],
  "satruday": [1,2,3,4,5],
  "sunday": [1,2,3,4,5]
}
```


| Zasób | Metoda | Opis |
| ----- | ------ | ---- |
| `/schedules` | `GET` | Pobranie wszystkich harmonogramów |
| `/schedules/:id` | `GET` | Pobranie konkretnego harmonogramu (pod `:id` wstawiamy ID harmonogramu) |
| `/schedules` | `POST` | Wysyłamy obiekt `json` z nazwą, opisem, numerem tygodnia i odpowiednich kluczach korespondujących z odpowiednim dniem tygodnia jako tablica 5 ID przepisów (`monday`, `thursday` etc.) |
| `/schedules/:id` | `PATCH` | Wysyłamy odpowiednie dane w celu edycji istniejącego już harmonogramu  |
| `/schedules/:id` | `DELETE` | Usuwamy konkretny harmonogram z bazy |


## Struktura projektu

Projekt ma następującą strukturę:

    .
    ├── build                   # Skompilowane pliki (po wykonaniu komendy npm run build)
    ├── database                # Pliki potrzebne do działania bazy danych json-server
    ├── public
    │   └── index.html          # Szablon wynikowego pliku html
    ├── src                     
    │   ├── scss                # Pliki styli w formacie scss
    │   ├── js                  # Pliki JavaScript
    │   ├── images              # Zdjęcia i obrazki
    │   └── index.js            # Główny plik projektu (nie zmieniamy go)
    └── README.md
