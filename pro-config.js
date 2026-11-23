// ===== CONFIGURAÇÃO DO MODO PRO — edite só este arquivo =====
window.PRO_CFG = {
  modo: 'pix',                                  // 'pix' = site e APK (Pix) | 'play' = versão da Google Play (o workflow define sozinho)
  produtoId: 'pro_desbloqueio',                 // ID do produto criado na Play Console (só vale no modo 'play')
  app: 'violao',                                // nome do app (aparece na planilha)
  scriptUrl: 'https://script.google.com/macros/s/AKfycby1gjVjWW5iy7rhaRxYEJlwlbhKhQUCRt-2EcqlB3sQA8xO-tf0cB7cqk0zR_TITmlH7g/exec',
  pixKey: 'meuidwp@duck.com',                   // chave Pix (e-mail)
  pixName: 'WESLEY PHILIP A CAPUCHO',           // nome do recebedor (até 25 letras, sem acento)
  pixCity: 'SAO SEBASTIAO',                     // cidade (até 15 letras, sem acento)
  price: 19.90,                                 // valor em reais
  whatsapp: '5512974087661',                    // WhatsApp (com 55 + DDD) para receber o comprovante
  freeHinos: 50,                                // hinos 1 a N completos no modo grátis (site e APK, sem anúncio)
  freeHinosPlay: 5,                             // idem na versão da Google Play (lá há o anúncio para liberar 1 hino por 1 h)
  previewSec: 15,                               // segundos de prévia nos demais hinos

  // ---- AdMob (só vale no modo 'play') ----
  // ATENÇÃO: estes dois IDs são os de TESTE do Google. Antes do build de produção, crie o app "DigitaHinos Violão"
  // no AdMob e troque pelos IDs dele (veja PUBLICAR.md, passo 3). O workflow se recusa a gerar produção com IDs de teste.
  admobAppId: 'ca-app-pub-3940256099942544~3347511713',    // ID do APP no AdMob (formato ca-app-pub-...~...)
  adRewardedId: 'ca-app-pub-3940256099942544/5224354917',  // ID do bloco de anúncio PREMIADO (formato ca-app-pub-.../...)
  adHoras: 1                                    // horas de hino liberado ao assistir o anúncio
};
