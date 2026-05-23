const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const allInOnePath = path.join(rootDir, 'packages/shopee-tiktok-lazada-api/package.json');
const clientPackagePaths = [
  path.join(rootDir, 'packages/lazada-api-client/package.json'),
  path.join(rootDir, 'packages/shopee-api-client/package.json'),
  path.join(rootDir, 'packages/tiktokshops-api-client/package.json'),
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function bumpVersion(version, bumpType) {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)$/);

  if (!match) {
    throw new Error(`Unsupported semver version: ${version}`);
  }

  let [, major, minor, patch] = match.map(Number);

  if (bumpType === 'major') {
    major += 1;
    minor = 0;
    patch = 0;
  } else if (bumpType === 'minor') {
    minor += 1;
    patch = 0;
  } else if (bumpType === 'patch') {
    patch += 1;
  } else {
    throw new Error(`Unsupported bump type: ${bumpType}`);
  }

  return `${major}.${minor}.${patch}`;
}

const args = process.argv.slice(2);
const checkOnly = args.includes('--check');
const bumpIndex = args.indexOf('--bump');
const bumpType = bumpIndex === -1 ? undefined : args[bumpIndex + 1];

const allInOnePackage = readJson(allInOnePath);
const clientPackages = clientPackagePaths.map(readJson);
const desiredDependencies = Object.fromEntries(clientPackages.map((pkg) => [pkg.name, `^${pkg.version}`]));

let changed = false;

for (const [name, versionRange] of Object.entries(desiredDependencies)) {
  if (allInOnePackage.dependencies[name] !== versionRange) {
    changed = true;
    allInOnePackage.dependencies[name] = versionRange;
  }
}

if (bumpType) {
  changed = true;
  allInOnePackage.version = bumpVersion(allInOnePackage.version, bumpType);
}

if (checkOnly) {
  if (changed) {
    console.error('All-in-one package dependencies are out of sync.');
    console.error(`Expected dependencies: ${JSON.stringify(desiredDependencies, null, 2)}`);
    process.exit(1);
  }

  console.log('All-in-one package dependencies are in sync.');
  process.exit(0);
}

if (changed) {
  writeJson(allInOnePath, allInOnePackage);
  console.log(`Updated ${path.relative(rootDir, allInOnePath)}.`);
} else {
  console.log('All-in-one package dependencies are already in sync.');
}
