// src/index.jsx

import pkg from "../package.json";

export default {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },

  // Components must be placed in src/components folder
  components: {
    sample: ({ ui }) => {
      const { Button } = ui;

      return <Button>Click me</Button>;
    },
  },

  // Functions must be placed in src/functions folder
  functions: {
    sample: () => undefined,
  },

  // Menus must be placed in src/menus folder
  menus: {
    main: {},
  },

  // Pages must be placed in src/pages folder
  pages: {
    sample: ({ ui }) => undefined,
  },

  // Resources must be placed in src/resources folder
  resources: {
    "pt-BR": {},
  },

  onInit: (appContext) => {},
};
