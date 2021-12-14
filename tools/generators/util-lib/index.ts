import { formatFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, schema: any) {
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
