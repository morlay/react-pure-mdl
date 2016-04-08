export default (conf) => ({
  files: [
    {
      src: [
        `${conf.docs}/index.html`
      ],
      output: conf.build
    }
  ]
});

