module.exports = {
  components: 'src/components/[A-Z]*/*.jsx',
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Helvetica',
        fontSize: '13px',
        lineHeight: '15px',
      },
      '@global a': {
        textDecoration: 'none',
      },
      '@global *': {
        boxSizing: 'border-box',
      },
    },
  },
};
