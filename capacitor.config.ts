import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.inventarios.appinventario',
  appName: 'inventario-app',
  webDir: 'dist/inventario-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
