// src/index.js

import pkg from "../package.json";
import components_sample from "./components/sample.jsx";
import functions_sample from "./functions/sample.js";
import menus_main from "./menus/main.json";
import pages_sample from "./pages/sample.jsx";
import resources_pt_BR from "./resources.pt-BR.json";

export default {
  meta: {
    name: pkg.name,
    version: pkg.version,
  },

  components: {
    sample: components_sample,
  },

  functions: {
    sample: functions_sample,
  },

  menus: {
    main: menus_main,
  },

  pages: {
    sample: pages_sample,
  },

  resources: {
    "pt-BR": resources_pt_BR,
  },

  onInit: (appContext) => {
    console.log("Custom plugin initialized successfully!", appContext);
  },
};
