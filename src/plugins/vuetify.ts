import 'vuetify/styles';
import { createVuetify, ThemeDefinition } from 'vuetify';
import { App } from 'vue';

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#b48e74',
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#b48e74',
  },
};

export function setupVuetify(app: App) {
  const vuetify = createVuetify({
    theme: {
      themes: {
        lightTheme,
        darkTheme,
      },
      defaultTheme: 'lightTheme',
    },
  });

  app.use(vuetify);
}
