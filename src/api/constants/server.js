import config from 'config';

export default config.env === 'development' ? "test.pri" : "";