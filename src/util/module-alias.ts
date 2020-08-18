import * as path from 'path';
import moduleAlias from 'module-alias';

const FILES = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': path.join(FILES, 'src'),
  '@test': path.join(FILES, 'test'),
});
