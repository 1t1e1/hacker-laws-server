# What does it do?

-   `npm run download` command download [hacker laws readme page](https://raw.githubusercontent.com/dwmkerr/hacker-laws/master/README.md) and save in _assets/_.

-   _src/data.js_ read downloaded file return law object.

Server

-   `curl http://localhost:3000/` returns all options.

    > ╰─➤ curl http://localhost:3000/ 130 ↵
    > For list of laws curl http://localhost:3000/laws
    > For detail of law curl http://localhost:3000/law/:id

-   `curl http://localhost:3000/laws` returns list of laws.

    > ╰─➤ curl http://localhost:3000/laws
    > 00 Amdahl's Law
    > 01 The Broken Windows Theory
    > 02 Brooks' Law
    > 03 Conway's Law
    > 04 Cunningham's Law
    > ...
    > 39 The KISS principle
    > 40 YAGNI
    > 41 The Fallacies of Distributed Computing%

-   `curl http://localhost:3000/law/:id` returns info about law number `:id`.
