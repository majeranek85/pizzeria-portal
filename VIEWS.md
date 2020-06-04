# Dashboard

- `/`
  - statystyki dzisiejszych zamówień (zdalne i lokalne)
  - listę rezerwacji i eventów zalanowanych na dzisiaj

# Logowanie

- `/login`
  - pola na login i hasło
  - gusik do zalogowania (link do dashboardu)

# Widok dostępności stolików

- `/tables`
  - wybór daty i godziny
  - tabala z listą rezerwacji oraz wydarzeń
    - każda kolumna = 1 stolik
    - każdy wiersz = 30 minut
    - ma przypominać widok tygodnia w kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    - po kliknięciu rezerwacji lub eventu, przechodzimy na stronę szczegółów
- `/tables/booking/:id`
  - zawiera wszystkie informacje dot. rezerwacji
  - umożliwia edycję i zapisanie zmian
- `/tables/booking/new`
  - analogicznie do powyższej, bez poczatkowych informacji
- `/tables/events/:id`
  - analogicznie do powyższej, dla eventów
- `/tables/events/new`
  - analogicznie do powyższej, bez poczatkowych informacji

# Widok kelnera

- `/waiter`
  - tabela
    - w wierszach stoliki
    - w kolumnach różne rodzaje informacji (status, czas od ostatniej aktywności)
    - w ostatniej kolumnie dostępne akcje dla danego stolika
- `/waiter/order/new`
  - numer stolika (edytowalny)
  - menu produktów
  - opcje wybranego produktu
  - zamówienie (zamówione produkty z opcjami i ceną)
  -kwotę zamówienia
- `/waiter/order/:id`
  - jak powyżej

# Widok kuchni

- `/kitchen`
  - wyświetlać listę zamówień w kolejnosci ich złożenia
  - lista musi zawierać:
    - numer stolika (lub zamówienia zdalnego)
    - pełne informacje dot. zamówionych dań
  - na liście musi być możliwość oznaczenia zamówienia jako zrealizowane
