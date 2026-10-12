module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/test'],
  testMatch: ['**/*.test.ts'],
  // Las rutas de `src/` llevan la extensión `.js` que exige `moduleResolution:
  // NodeNext` para el código emitido; sin este mapeo, jest busca `node.js` en el
  // disco en vez del `node.ts` fuente.
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
};
