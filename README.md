# GiulioAndOrario

<p  align="center" >
<img src="./public/logo.png" width="150" height="150"/>
</p>

Benvenuto nel sito GiulioAndOrario

## Informazioni Librerie Framework/Linguaggi/Librerie/Tema

[ViteJs](https://vitejs.dev) (Compilatore)

[Svelte](https://svelte.dev) (Framework Web)

[Typescript](https://www.typescriptlang.org/) (SuperSet JavaScript)

[Sass](https://sass-lang.com/) (Linguaggio)

[Nord](https://www.nordtheme.com/) (Tema Colori)

## Come configurare il progetto

Il progetto di base è gia configurato per l'uso (Si sconsiglia vivamente di modificare i file svelte.config.js / tsconfig.json e vite.config.ts per evitare problemi di incompatibilità)

In caso vorresti modificare l'orario è molto semplice basta modificare il file `./src/orario.ts` il file è un ogetto che segue l'interfaccia in `./src/interfaces/calendar.ts`, il primo paramentro è il giorno che è un ogetto dove dentro ci sono 6 ogetti ognuna rispettivamente per ogni ora del giorno

## Come buildare il sito

Per prima cosa dobbiamo installare le dipendenze noi consigliamo di utilizare [Yarn](https://yarnpkg.com/) però tuttivia è supportato anche [Npm](https://npmjs.com) per installare le dipendenze basta utilizzare il comando

Dopo aver installato le dipendenze possiamo eseguire la build,per eseguirla basta fare `yarn build` o `npm run build`

## Come avviare il sito

Basta eseguire il comando `yarn preview` e `npm run preview`

In caso di ulteriori informazioni potete contattare [Lolly#1150](https://discord.com/users/820726341976588340)
