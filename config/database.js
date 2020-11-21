module.exports = ({ env }) => ({
  connector: 'bookshelf',
  settings: {
    client: 'sqlite',
    filename: '.tmp/data.db',
  },
  options: {
    // debug: true,
    useNullAsDefault: true,
  },
});