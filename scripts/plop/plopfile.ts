import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  plop.setGenerator("component", {
    description: "react component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please",
      },
    ],
    actions(_data) {
      const actions = [
        {
          type: "add",
          path: "packages/components/src/{{kebabCase name}}/index.ts",
          template: 'export * from "./{{kebabCase name}}.component";\n',
        },
        {
          type: "add",
          path:
            "packages/components/src/{{kebabCase name}}/{{kebabCase name}}.component.tsx",
          templateFile: "component/component.hbs",
        },
        {
          type: "add",
          path:
            "packages/components/src/{{kebabCase name}}/{{kebabCase name}}.stories.tsx",
          templateFile: "component/story.hbs",
        },
        {
          type: "modify",
          path: "packages/components/src/index.ts",
          pattern: /(\/\/ COMPONENTS)/g,
          template: '$1\nexport * from "./{{kebabCase name}}";',
        },
      ];
      return actions;
    },
  });
}
