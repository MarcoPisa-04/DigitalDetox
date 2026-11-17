# Note di progetto — Sprint 01

## Decisioni

- L’interfaccia è scritta in TypeScript, senza un framework UI. Lo sprint ha una sola pagina, componenti creati con il DOM e nessuno stato applicativo complesso: React non aggiungeva una capacità necessaria.
- Le voci di navigazione stanno in `src/app/navigation.ts`. Le sezioni future si aggiungono lì quando esiste una pagina reale.
- Solo Home è raggiungibile. Le altre voci sono pulsanti con stato «In sviluppo» e non puntano a pagine vuote.
- Le call to action della homepage portano a sezioni della stessa pagina: il percorso e la presentazione del progetto.
- Grafici, questionario interattivo, simulator e dashboard restano fuori da questo sprint.
- Il colore, la tipografia e la spaziatura passano da `src/styles/variables.css`.

## Versione

Interfaccia `0.1.0`, allineata al campo `version` di `package.json`.

## Revisione dei contributi

I file in `docs/contributions/` sono modelli. Non contengono ricerche scritte al posto del gruppo.
