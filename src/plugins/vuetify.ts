import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { App } from 'vue';

export function setupVuetify(app: App) {
  const vuetify = createVuetify({
    theme: {
      themes: {
        main: {
          colors: {
            primary: '#B48E74',
          },
        },
      },
      defaultTheme: 'main',
    },
  });

  app.use(vuetify);
}
