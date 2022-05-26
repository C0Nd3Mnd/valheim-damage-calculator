import 'vuetify/styles';
import { createVuetify, ThemeDefinition } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { App } from 'vue';

enum PlainsColors {
  DarkGreen = '#023430',
  DarkBlue = '#2C3D4C',
  Blue = '#1773A9',
  LightBlue = '#709DB5',
  Brown = '#B78852',
  Pink = '#CA6D61',
  Red = '#AD3131',
  DarkRed = '#431815',
}

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: PlainsColors.Brown,
    secondary: PlainsColors.Pink,
  },
};

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: PlainsColors.DarkRed,
    secondary: PlainsColors.Blue,
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
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  });

  app.use(vuetify);
}
