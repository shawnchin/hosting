function initTransport() {
  const hashParams = new URLSearchParams(window.location.hash.substring(1));
  const transportScope = hashParams.get('scope');

  return new QwilApiTransport.Transport({
    scope: transportScope,
    window: window.parent,
    eventHandler: function() {},
  });
}


function loadArcade(config) {

  transport = initTransport();
  transport.sendEvent('__wrapper_loaded');

  function onLoad() {
    transport.sendEvent('__content_loaded');
  }

  const iframe = document.createElement("iframe");
  iframe.frameBorder = 0;
  iframe.style.border = '0px';
  iframe.onload = onLoad;
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.src = config.url;
  document.getElementById(config.containerId).appendChild(iframe);
}


function embedArcade(config) {
  if (!config.url) {
    console.error('"url" not set');
  } else if (!config.containerId) {
    console.error('"containerId" not set');
  } else {
    loadArcade(config);
  }
}
