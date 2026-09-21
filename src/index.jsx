// src/index.jsx

import pkg from "../package.json";

export default {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },

  // Initialization and external plugins must be placed in the init object
  init: {
    // Initialization function must be placed in onInit
    onInit: (appContext) => {},
  },

  // Components must be placed in src/components folder
  components: {},

  // Edits must be placed in src/edits folder
  edits: {},

  // Functions must be placed in src/functions folder
  functions: {},

  // Grids must be placed in src/grids folder
  grids: {},

  // Menus must be placed in src/menus folder
  menus: {},

  // Pages must be placed in src/pages folder
  pages: {},

  // Resources must be placed in src/resources folder
  resources: {},

  // Searchs must be placed in src/searchs folder
  searchs: {},
};
