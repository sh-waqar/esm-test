const _ = require("lodash");
const gzipSize = require("gzip-size");

const findChunk = chunks => file => _.find(chunks, chunk => _.includes(chunk.files, file))

module.exports = stats => {
  const findByChunk = findChunk(stats.compilation.chunks);

  const rawFiles = _.pickBy(
    stats.compilation.assets,
    (v, name) => _.endsWith(name, '.js') || _.endsWith(name, '.css')
  );

  const assets = _.map(rawFiles, (asset, name) => ({
    name,
    isInitial: findByChunk(name).canBeInitial(),
    minSize: asset.size(),
    gzipSize: gzipSize.sync(asset.source())
  }));

  const totalMinSize = _.sumBy(assets, asset => asset.minSize);
  const totalGzipSize = _.sumBy(assets, asset => asset.gzipSize);

  const time = stats.endTime - stats.startTime;

  return {
    assets,
    totalMinSize,
    totalGzipSize,
    time,
    timestamp: Date.now()
  };
};
