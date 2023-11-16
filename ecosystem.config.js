module.exports = {
  apps: [
    {
      script: 'npm start',
    },
  ],

  deploy: {
    production: {
      key: 'key.pem',
      user: 'ec2-user',
      host: '18.143.141.153',
      ref: 'origin/main',
      repo: 'https://github.com/edwinhati/propas-api',
      path: '/home/ec2-user',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes',
    },
  },
};
