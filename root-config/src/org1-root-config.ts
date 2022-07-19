import { registerApplication, start } from "single-spa";

registerApplication({
  name: "react-app",
  app: () => System.import("react-app"),
  activeWhen: ["/react"],
});

registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: ["/angular"],
});

registerApplication({
  name: "vue-app",
  app: () => System.import("vue-app"),
  activeWhen: ["/vue"],
});

start({
  urlRerouteOnly: true,
});
