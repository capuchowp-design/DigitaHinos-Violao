# DigitaHinos Violao

Visualizador MIDI com violão animado: a digitação (casa, dedo da mão esquerda e dedo da mão direita p-i-m-a) aparece sobre o braço do violão, com a pauta e o compositor.

- Violão de nylon ou de aço (seletor no app).
- Compositor com exportação WAV, MIDI, JSON e partitura em PDF; projetos salvos no navegador.
- Publicação: suba os arquivos no GitHub Pages. A cada versão nova, mude `CACHE_NAME` em `sw.js`.
- A pauta mostra a nota escrita uma oitava acima do som real (convenção do violão).

## Partitura / PDF
O PDF pode sair com **tablatura + notação** (padrão), **só tablatura** ou **só notação** (seletor "Formato"). Na tablatura, cada linha é uma corda (a de baixo é a Mi grave) e o número é a casa; em acordes, as casas são escolhidas para ficarem próximas.

## Várias notas ao mesmo tempo
O violão mostra todas as cordas que soam juntas (baixo + melodia, acordes, dedilhado): cada nota ganha a sua corda, casa e dedo, e a mão direita (p i m a) aparece em cada corda tocada. Na tablatura em PDF, cada nota é impressa uma vez, no ataque.

## Violão deitado, mão e acordes (v5)
- O violão aparece **deitado**: braço à direita, caixa à esquerda. A faixa de cima mostra a pauta, o nome das notas e o acorde.
- Uma **mão** (dedos 1–4) segura as casas no braço e se move com a música. Botão **🖐 Mão** liga/desliga; **🔍 Braço** amplia o braço e a câmera acompanha a mão.
- No editor, **segure uma nota** (ou clique com o botão direito) para escolher o acorde; a letra aparece na linha **Ac.** sobre a nota e vale até o próximo acorde. O acorde **não muda o som**: só define a forma da mão. As cordas que soam são as notas da tablatura; se uma nota não faz parte do acorde, um dedo livre vai buscá-la (ex.: Dó maior + Ré na casa 3 da corda Si → mindinho).
- Os acordes são salvos no projeto (JSON). Mude `CACHE_NAME` em `sw.js` a cada versão (agora `digitahinos-violao-v14`).

## v7: mão fiel ao acorde e baixo contínuo
- A mão agora escolhe os dedos de todas as notas **juntas**, mudando o mínimo possível da forma do acorde: se a corda de uma nota está ocupada por outro dedo do acorde, esse dedo sai e a nota vai para o dedo mais próximo (ex.: Dó maior + Lá casa 2 → o médio vai para a Lá; Si casa 3 → mindinho). Os dedos do acorde que não atrapalham continuam apoiados. O acorde vale até você escolher outro.
- **Baixo contínuo**: as 3 cordas graves (Mi, Lá, Ré) continuam soando até o próximo ataque de baixo (mesmo em outra corda, ou a mesma nota repetida). As 3 cordas agudas (melodia) não mudam. Vale para o player e para o WAV exportado (o MIDI e a pauta continuam com as durações escritas).
- A animação mostra só a mão (sem punho/antebraço).

## v8
- Sem polegar na animação (só palma e dedos).
- Corda solta tocada dentro da forma do acorde (ex.: Fá maior com pestana e a Si solta): o dedo **não sai da forma**, ele "levanta de leve" naquela corda — a pestana fica interrompida ali, aparece um círculo tracejado e o dedo fica mais leve. Vale também para dedos simples do acorde.

## v9
- No braço, só os dedos que estão **fazendo soar uma corda** ficam em vermelho brilhante com o número. Os demais dedos da forma do acorde continuam visíveis, mas em cinza-transparente (neutro), sem brilho.

## Harmonia "Cantoral (livro)"
Em **Harmonia** há uma terceira opção, *Cantoral (livro)*, que usa as cifras do livro (arquivo `hinos/cifras.json`, uma lista de acordes por hino: compasso, tempo, raiz real e tipo). Hinos sem cifra no arquivo continuam com a harmonia automática. As opções *Simples* e *Melhor encaixe*, o modo básico/profissional, a troca de tom e a escolha de voz não mudaram.

## Cordas soltas
O dedilhado agora usa a corda solta sempre que ela dá exatamente a mesma nota e nenhuma outra nota está soando nessa corda ao mesmo tempo (função `vgOpenStrings`).

## Estilo "Acompanhamento"
Em **Estilo** há: *Fingerstyle · básico*, *Fingerstyle · profissional (dedilhado)* e **Acompanhamento**.
No Acompanhamento o violão toca só as cifras e o **soprano toca ao fundo** (flauta, violino, harmônio ou violão; campo *Soprano ao fundo*).
- **Ritmo:** *Batida* (golpes ↓ ↑) ou *Dedilhado* (P = polegar, sempre o baixo do acorde; I = indicador na 3ª corda; M = médio na 2ª; A = anelar na 1ª).
- **Contagem:** os movimentos seguem a contagem do compasso do hino.
  - *Simples*: um movimento por tempo. Ex.: 6/8 = batida ↓↓↑↓↓↑ e dedilhado P I M A M I; 4/4 = P I M A; 3/4 = P IMA IMA.
  - *Subdividida*: "1 e 2 e 3 e…", o dobro de movimentos. Ex.: 6/8 = P I M A M I P I M A M I.
  - *Mista*: primeira metade do compasso simples e segunda metade subdividida. Ex.: 4/4 = ↓ ↓ ↑↓↑↓ ↓↑↓↑.
