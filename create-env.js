const fs = require('fs');

const envList = [
  'OPENAI_API_KEY',
  'OPENAI_API_BASE_URL',
  'HEAD_SCRIPTS',
  'SECRET_KEY',
  'SITE_PASSWORD',
  'OPENAI_API_MODEL'
];

fs.writeFileSync('.env', envList.map(e => `${e}=${process.env[e] || ''}`).join('\n'));
