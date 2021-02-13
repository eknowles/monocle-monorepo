const tsNode = require("ts-node");

tsNode.register({
  transpileOnly: true,
  compilerOptions: {
    esModuleInterop: true,
    moduleResolution: "node",
  },
  skipProject: true,
});
