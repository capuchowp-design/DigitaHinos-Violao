// Lê os IDs do AdMob do pro-config.js (fonte única) e entrega ao workflow como variáveis de ambiente.
const fs = require('fs');
const cfg = {};
new Function('window', fs.readFileSync('pro-config.js', 'utf8'))({ set PRO_CFG(v) { Object.assign(cfg, v); } });
const out = process.env.GITHUB_ENV;
const linhas = 'ADMOB_APP_ID=' + (cfg.admobAppId || '') + '\nAD_UNIT_ID=' + (cfg.adRewardedId || '') + '\n';
if (out) fs.appendFileSync(out, linhas); else process.stdout.write(linhas);
