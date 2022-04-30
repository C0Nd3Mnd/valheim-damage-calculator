import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { App } from 'vue';

export function setupVuetify(app: App) {
  const vuetify = createVuetify({
    theme: {
      themes: {
        main: {
          colors: {
            primary: '#f0efab',
          },
        },
      },
      defaultTheme: 'main',
    },
  });

  app.use(vuetify);
}
