const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const { resolver } = await getDefaultConfig();

  return {
    transformer: {
      experimentalImportSupport: false,
      inlineRequires: true,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: resolver?.assetExts?.filter((ext) => ext !== 'svg'),
      sourceExts: [...(resolver?.sourceExts ?? {}), 'svg'],
    },
  };
})();
