# Violão Bounce

Visualizador MIDI com violão animado: a digitação (casa, dedo da mão esquerda e dedo da mão direita p-i-m-a) aparece sobre o braço do violão, com a pauta e o compositor.

- Violão de nylon ou de aço (seletor no app).
- Compositor com exportação WAV, MIDI, JSON e partitura em PDF; projetos salvos no navegador.
- Publicação: suba os arquivos no GitHub Pages. A cada versão nova, mude `CACHE_NAME` em `sw.js`.
- A pauta mostra a nota escrita uma oitava acima do som real (convenção do violão).

## Partitura / PDF
O PDF pode sair com **tablatura + notação** (padrão), **só tablatura** ou **só notação** (seletor "Formato"). Na tablatura, cada linha é uma corda (a de baixo é a Mi grave) e o número é a casa; em acordes, as casas são escolhidas para ficarem próximas.
