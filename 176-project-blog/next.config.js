const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  // 개발 단계...
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: 'sonky740_nextjs',
        mongodb_password: 'eqwwr',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'my-site',
      },
    };
  }

  return {
    env: {
      mongodb_username: 'sonky740_nextjs',
      mongodb_password: 'eqwwr',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'my-site',
    },
  };
};
