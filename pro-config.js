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
  // IDs REAIS do app "DigitaHinos Violão" no AdMob (app + bloco premiado). O workflow recusa build de produção com IDs de teste do Google.
  admobAppId: 'ca-app-pub-4518875317226768~9809120877',    // ID do APP no AdMob (formato ca-app-pub-...~...)
  adRewardedId: 'ca-app-pub-4518875317226768/6999124703',  // ID do bloco de anúncio PREMIADO (formato ca-app-pub-.../...)
  adHoras: 1                                    // horas de hino liberado ao assistir o anúncio
};
