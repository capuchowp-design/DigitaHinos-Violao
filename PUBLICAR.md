# Publicar o DigitaHinos Violão (Play + APK + PWA)

Resumo do que cada canal faz:

| Canal | Arquivo | Pro | Anúncios | Hinos grátis |
|---|---|---|---|---|
| **Google Play** | `.aab` | Google Play Billing (R$ definido na Play) | Sim, premiado: libera 1 hino por 1 h | 1 a 5 |
| **APK (site/APKPure)** | `.apk` | Pix + código de uso único | Não | 1 a 50 |
| **PWA (GitHub Pages)** | — | Pix + código de uso único | Não | 1 a 50 |

Tudo isso sai do mesmo código. O `.aab` sai com o Pix **removido** automaticamente (a Play não aceita pagamento externo para recurso digital).

---

## 1. Subir os arquivos no GitHub

1. No repositório `DigitaHinos-Violao`, substitua/adicione os arquivos desta pasta (mantenha a pasta `hinos/`).
2. Arquivos **novos**: `native-bridge.js`, `app-ads.txt`, `privacy.html`, `terms.html`, `PUBLICAR.md`, `scripts/`, `android-icons/`, `design/`, `vendor/Tone.js`, `.github/workflows/baixar-samples.yml`.
3. Arquivos **alterados**: `index.html`, `sw.js`, `pro-config.js`, `package.json`, `README.md`, `.github/workflows/build-apk.yml`.
4. Se existir um `package-lock.json` no repositório, apague-o (o `package.json` mudou de Capacitor 7 para 8).
5. Ative o GitHub Pages (Settings → Pages → branch `main`, pasta raiz). A política de privacidade ficará em `https://SEU-USUARIO.github.io/DigitaHinos-Violao/privacy.html`.

## 2. Baixar os sons para dentro do app (rodar 1 vez)

1. Aba **Actions → "Baixar sons do violão (rodar 1 vez)" → Run workflow**.
2. Quando terminar, ele grava `samples/` no repositório.
3. Abra `sw.js` e troque `digitahinos-violao-v28` por `digitahinos-violao-v29` (e some 1 a cada publicação nova).

Isso é o que deixa o app leve em celular fraco: o som carrega do próprio aparelho, sem sondar 70 arquivos na internet a cada abertura.

## 3. AdMob (anúncio premiado)

1. Em admob.google.com: **Apps → Adicionar app** → Android → "DigitaHinos Violão". Copie o **ID do app** (`ca-app-pub-4518875317226768~XXXXXXXXXX`).
2. Dentro desse app: **Blocos de anúncios → Adicionar → Premiado**. Copie o **ID do bloco** (`ca-app-pub-4518875317226768/XXXXXXXXXX`).
3. Edite `pro-config.js`:
   - `admobAppId` = ID do app
   - `adRewardedId` = ID do bloco premiado
   Hoje eles estão com os IDs **de teste do Google** (assim o build já funciona). O workflow **recusa** gerar produção enquanto houver ID de teste.
4. `app-ads.txt` já tem o seu ID de editor (o mesmo do Violino). Ele precisa estar na raiz do site/domínio cadastrado na ficha da Play.
5. Em **Privacidade e mensagens** (AdMob), crie a mensagem de consentimento europeia, se quiser cobrir UE/Reino Unido. O app já chama o formulário quando for exigido.

## 4. Play Console (uma vez)

1. **Criar app**: nome "DigitaHinos Violão", português (Brasil), App, Gratuito. O ID do pacote é o do `capacitor.config.json`: `io.github.capuchowpdesign.guitarbounce` (não dá para mudar depois de publicar).
2. **Conteúdo do app** (todas as declarações):
   - Política de privacidade: a URL do passo 1.5.
   - **Anúncios: Sim** (contém anúncios).
   - **ID de publicidade: Sim** (a permissão `AD_ID` já está no AAB).
   - Segurança dos dados: declare ID de publicidade/dispositivo (anúncios) e o ID do aparelho, se for o caso; compra pelo Google Play.
   - Classificação de conteúdo e público-alvo: **não** direcionado a crianças.
3. **Produto de compra**: Monetizar → Produtos → **Produtos únicos** → criar com ID **`pro_desbloqueio`** (exatamente), preço e **ativar**. Cada app tem o seu produto: o do Violino não vale aqui.
4. **Ficha da loja**: ícone `design/icone-playstore-512.png`, gráfico de recursos `design/feature-graphic-1024x500.png`, capturas de tela de celular.
5. Para testar a compra sem pagar: Configurações → **Testes de licença** → adicione seu e-mail Gmail.

## 5. Chave de assinatura (segredos do GitHub)

No repositório: Settings → Secrets and variables → Actions → crie `KEYSTORE_BASE64`, `KEYSTORE_PASSWORD` e `KEY_ALIAS`. Pode usar **os mesmos valores do Violino** (a chave de envio pode ser a mesma em apps diferentes). A senha da chave precisa ser igual à senha do keystore (é como o workflow assina).

## 6. Gerar e testar o AAB

1. **Actions → "Gerar APK / AAB (Violão)" → Run workflow** → `canal: play`, deixe **anúncios de teste marcado**.
2. Baixe o artefato `digitahinos-violao-aab`.
3. Play Console → **Teste interno** (ou fechado) → Criar versão → envie o `.aab`.
4. Instale pelo link de teste e confira: hinos 1 a 5 completos; do 6 em diante, prévia de 15 s com o botão "Ver anúncio" (anúncio de teste), "Comprar Pro" e "Restaurar compra"; **sem** botão Pix.

## 7. Produção

1. Troque os IDs de teste do passo 3 e faça commit.
2. Rode o workflow com `canal: play` e **desmarque "anúncios de teste"**.
3. Envie esse `.aab` em **Produção**. O `versionCode` é o número da execução do workflow, então sempre sobe.
4. Nunca clique nos seus próprios anúncios reais (o AdMob pode suspender a conta). Para testar, use sempre a versão com "anúncios de teste".

## 8. APK com Pix e PWA

- **APK**: Actions → Gerar APK / AAB → `canal: apkpure` → artefato `digitahinos-violao-apk`. Para publicar fora da Play, use sua chave (os segredos do passo 5); sem eles o workflow assina com chave de teste.
- **PWA**: o que está no GitHub Pages. A cada publicação mude o número do `CACHE_NAME` no `sw.js`.

## 9. Celulares fracos

- O ⚡ no topo liga sozinho em celular/tablet e em aparelhos com pouca memória. O botão liga/desliga e guarda a escolha.
- **Segure o ⚡ por 1 s** para abrir o diagnóstico (estado do áudio, se está tocando gravações ou sintetizador, quadros por segundo, travadas). Se alguém reclamar de picote, peça um print dessa tela.
- Se mesmo assim picotar em algum aparelho, o diagnóstico tem botões para testar outra latência sem recompilar.

## 10. Pontos de atenção

- **Assinatura do APK já publicado.** Se o APK atual do Violão foi gerado sem segredos (chave de teste), ele tem assinatura diferente da nova e quem o instalou não consegue atualizar por cima: precisaria desinstalar. Se foi com a sua chave, atualiza normal.
- **Política de privacidade do Violino.** O primeiro parágrafo dela diz que o app "não contém anúncios", mas a versão da Play tem. A Play confere isso. A do Violão já está corrigida; vale copiar o mesmo texto para o Violino.
- **Contas pessoais novas** na Play costumam precisar de teste fechado com um número mínimo de testadores por um período antes da produção. Confira a exigência atual no painel.
- No PWA, os apps do GitHub Pages do mesmo usuário compartilham o `localStorage` (mesmo domínio). A conferência diária do código Pro desliga o Pro de um app se o código não for dele, mas isso pode confundir em testes.
