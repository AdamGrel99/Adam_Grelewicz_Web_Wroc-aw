# Adam_Grelewicz_Web_Wrocław

Ten projekt został stworzony przy użyciu następujących technologii:

- **Typescript:**
- **React:**
- **CSS:**
- **HTML:**

Dodatkowo w projekcie wykorzystano następujące biblioteki React:

- **React Router:**
- **React Redux Toolkit:**

Były one niezbędne do zarządzania nawigacją między różnymi stronami aplikacji oraz do efektywnego i przejrzystego zarządzania stanem globalnym aplikacji. Początkowo rozważano implementację zarządzania stanem bez tej biblioteki, jednak React Redux Toolkit znacząco upraszcza ten proces i czyni go bardziej zrozumiałym.

Wszystkie podstawowe wymagania projektu zostały zrealizowane. A jednyne założenie to na stronie koszyka zakupów zaimplementowano dwa przyciski powrotu:

- Jeden przycisk umożliwia powrót do poprzedniej strony w celu dodania kolejnych przedmiotów do koszyka.
- Drugi, osobny przycisk powrotu do poprzedniej strony, dodatkowo **czyści zawartość koszyka**.

## Jak uruchomić projekt na swoim komputerze?

Aby uruchomić ten projekt lokalnie, wykonaj następujące kroki:

1.  **Sklonuj repozytorium:**
    Otwórz swój terminal lub wiersz poleceń i przejdź do katalogu, w którym chcesz sklonować projekt. Następnie wykonaj polecenie:

    ```bash
    git clone https://github.com/AdamGrel99/Adam_Grelewicz_Web_Wroc-aw.git
    ```

2.  **Przejdź do katalogu projektu:**
    Po pomyślnym sklonowaniu repozytorium, przejdź do katalogu projektu za pomocą polecenia:

    ```bash
    cd .\Adam_Grelewicz_Web_Wroc-aw\
    ```

3.  **Zainstaluj zależności:**
    W katalogu projektu uruchom polecenie, które zainstaluje wszystkie niezbędne biblioteki (w tym React, React Router, React Redux Toolkit i inne zależności):

    ```bash
    npm install
    ```

    lub krócej:

    ```bash
    npm i
    ```

4.  **Uruchom aplikację w trybie deweloperskim:**
    Po pomyślnej instalacji zależności, uruchom aplikację developerską za pomocą polecenia:

    ```bash
    npm run dev
    ```

    To polecenie zazwyczaj serwer deweloperski, a Twoja aplikacja powinna otworzyć się automatycznie w przeglądarce pod adresem lokalnym (zazwyczaj `http://localhost:3000` lub podobnym). Jeśli nie otworzy się automatycznie, sprawdź komunikat w terminalu, aby znaleźć adres, pod którym uruchomiona jest aplikacja.

Teraz powinieneś móc zobaczyć i przetestować działanie projektu na swoim lokalnym komputerze.
