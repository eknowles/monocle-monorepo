import messages from "@monocle/common/compiled-lang/en.json";
import { IntlProvider } from "react-intl";

require('@monocle/common/index.css');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <IntlProvider messages={messages} locale="en" defaultLocale="en">
      <Story />
    </IntlProvider>
  ),
];
