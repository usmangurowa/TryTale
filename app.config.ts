const IS_DEV = process.env.APP_ENVIRONMENT === "development";

const config = {
  name: IS_DEV ? "TryTale Dev" : "TryTale", // TODO: Add project name
  slug: "trytale", // TODO: Add project slug
  scheme: "trytale", // TODO: Add project scheme
  version: "1.0.0",
  owner: "usmangurowa", // TODO: Add your username
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  jsEngine: "hermes",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },

  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: IS_DEV
      ? "com.usmangurowa.trytale.dev"
      : "com.usmangurowa.trytale", // TODO: Add iOS bundle identifier
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
    package: IS_DEV ? "com.usmangurowa.trytale.dev" : "com.usmangurowa.trytale", // TODO: Add Android package name
  },
  web: {
    favicon: "./assets/favicon.png",
    bundler: "metro",
  },
  extra: {
    eas: {
      projectId: "93cf904f-2ae8-4aad-95c2-29661aa98072", // TODO: Add EAS project ID or run `eas init` to create a new one
    },
  },

  plugins: ["expo-build-properties"],
};

module.exports = config;
