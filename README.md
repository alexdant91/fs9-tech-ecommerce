# fs9-tech-ecommerce

## Entities

1. User -> Utenti registrati che potranno effettuare acquisti;
2. Products -> prodotti acquistabili;
3. Categories -> Categorie dei prodotti;
4. Tags -> Tag da associare ai prodotti
5. Cart -> Contiene i prodotti
6. Review -> Recensioni per i prodotti

## Routes

1. `/` -> Home page
2. `/categories` -> Pagina delle categorie
3. `/search` -> Pagina per la ricerca dei prodotti
4. `/products/:id` -> Pagina del prodotto specifico
5. `/cart` -> Pagina del carrello
6. `/login` -> Pagina di login utente
7. `/register` -> Pagina di ergistrazione utente

8. `/dashboard` -> Pagina con riepilogo ordini

### Urls

- `http://localhost:5173/` -> pages/Home.jsx
- `http://localhost:5173/login` -> pages/Login.jsx
- `http://localhost:5173/register` -> pages/Register.jsx
- `http://localhost:5173/products/1` -> pages/Product.jsx
- `http://localhost:5173/cart` -> pages/Cart.jsx
- `http://localhost:5173/categories` -> pages/Categories.jsx
- `http://localhost:5173/dashboard` -> pages/dashboard/Home.jsx

`protocollo://host:port/path`
`http://localhost:5173/`
`http://localhost:5173/login`
`http://localhost:5173/register`
