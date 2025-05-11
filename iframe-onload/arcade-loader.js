let _arcadeLoaderConfig = undefined;

function onLoadedCallback() {
  // This func should be replaced by iframe parent before calling loadArcade()
  console.log("Loaded");
}

function loadArcade(url) {
  if (!_arcadeLoaderConfig) {
    console.error('configureArcade() not called');
    return;
  }

  console.log('DELAYING LOAD...');

  setTimeout(() => {
    console.log("LOAD!")
    const iframe = document.createElement("iframe");
    iframe.onload = onLoadedCallback;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.src = _arcadeLoaderConfig.url;
    document.getElementById(_arcadeLoaderConfig.containerId).appendChild(iframe);
  }, 3000);

}


function configureArcade(config) {
  if (!config.url) {
    console.error('"url" not set');
  } else if (!config.containerId) {
    console.error('"containerId" not set');
  } else {
    _arcadeLoaderConfig = config;
  }
}
