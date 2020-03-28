module.exports = {
  components: 'src/components/[A-Z]*/*.jsx',
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Helvetica',
      },
      '@global a': {
        textDecoration: 'none,',
      },
      '@global *': {
        boxSizing: 'border-box',
      },
    },
  },
};
