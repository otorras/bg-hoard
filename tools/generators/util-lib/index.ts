import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

interface Schema {
  name: string;
  directory: string;
}

export default async function (tree: Tree, schema: Schema) {
  await libraryGenerator(tree, {
    name: `util-${schema.name}`,
    directory: schema.directory,
    tags: `scope:${schema.directory},type:util`,
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
