import '@testing-library/jest-dom';

// Polyfill for React Router v6 compatibility with Jest
// React Router requires TextEncoder/TextDecoder which aren't available in Jest's Node environment
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}
