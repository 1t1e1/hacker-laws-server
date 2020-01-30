# What does it do?

-   `npm run download` command download [hacker laws readme page](https://raw.githubusercontent.com/dwmkerr/hacker-laws/master/README.md) and save in _assets/_.

-   _src/data.js_ read downloaded file return law object.

Server

-   `curl http://localhost:3000/` returns all options.
-   `curl http://localhost:3000/laws` returns list of laws.
-   `curl http://localhost:3000/law/:id` returns info about law number `:id`.
