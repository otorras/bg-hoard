import { formatFiles, generateFiles, installPackagesTask, Tree } from '@nrwl/devkit';
import { runCommandsGenerator } from '@nrwl/workspace/generators';
import { join } from 'path';

interface Schema {
  project: string;
  subdomain: string;
}

export default async function (tree: Tree, schema: Schema) {
  await runCommandsGenerator(tree, {
    name: 'deploy',
    project: schema.project,
    command: `npm run surge dist/apps/${schema.project} \${SURGE_DOMAIN_${underscoreWithCaps(schema.project)}} --token \${SURGE_TOKEN}`,
  });
  await generateFiles(tree, join(__dirname, './files'), `apps/${schema.project}`, {
    tmpl: '',
    project: schema.project,
    subdomain: schema.subdomain,
    undercaps: underscoreWithCaps,
  });
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}

export function underscoreWithCaps(value: string): string {
  return value.replace(/-/g, '_').toLocaleUpperCase();
}
