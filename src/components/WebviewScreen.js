import React from 'react';
import WebView from 'react-native-webview';

const WebviewScreen = () => {
  return <WebView source={{ uri: 'https://youtu.be/uejJmrKS79s?si=J9sXvO-IZ5A49Hxt' }} style={{ flex: 1 }} />;
}

export default WebviewScreen;