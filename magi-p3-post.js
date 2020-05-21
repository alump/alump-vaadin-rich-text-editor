module.exports = {
  files: [
    'alump-vaadin-rich-text-editor.js'
  ],
  from: [
    /import '\.\/theme\/lumo\/alump-vaadin-(.+)\.js';/
  ],
  to: [
    `import './theme/lumo/alump-vaadin-$1.js';\nexport * from './src/alump-vaadin-$1.js';`
  ]
};