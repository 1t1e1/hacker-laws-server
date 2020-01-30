# What does it do?

-   `npm run download` command download [hacker laws readme page](https://raw.githubusercontent.com/dwmkerr/hacker-laws/master/README.md) and save in _assets/_.

-   _src/data.js_ read downloaded file return law object.

Server:

-   `curl http://localhost:3000/` returns all options.
```
╰─➤ curl http://localhost:3000/ 130 ↵
For list of laws curl http://localhost:3000/laws
For detail of law curl http://localhost:3000/law/:id
```
-   `curl http://localhost:3000/laws` returns list of laws.
```
╰─➤ curl http://localhost:3000/laws
00 Amdahl's Law
01 The Broken Windows Theory
02 Brooks' Law
03 Conway's Law
04 Cunningham's Law
...
39 The KISS principle
40 YAGNI
41 The Fallacies of Distributed Computing%
```

-   `curl http://localhost:3000/law/:id` returns info about law number `:id`.
```
╰─➤  curl http://localhost:3000/law/40
40 YAGNI
[YAGNI on Wikipedia](https://en.wikipedia.org/wiki/You_ain%27t_gonna_need_it)

This is an acronym for _**Y**ou **A**in't **G**onna **N**eed **I**t_.

> Always implement things when you actually need them, never when you just foresee that you need them.
>
> ([Ron Jeffries](https://twitter.com/RonJeffries)) (XP co-founder and author of the book "Extreme Programming Installed")

This _Extreme Programming_ (XP) principle suggests developers should only implement functionality that is needed for the immediate requirements, and avoid attempts to predict the future by implementing functionality that might be needed later.

Adhering to this principle should reduce the amount of unused code in the codebase, and avoid time and effort being wasted on functionality that brings no value.

See also:

- [Reading List: Extreme Programming Installed](#reading-list)
```
