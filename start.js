
const fs = require('fs');
const childProcess = require('child_process');
const minimist = require('minimist');
const log = console.log.bind(console);
const reqObj = minimist(process.argv.slice(2));
console.log('reqObj',reqObj)

// 基本配置文件
let config = {
  distName:'dist',
  imgName: 'nest-admin-portal',
  tag: reqObj.tag || ``,
  platform: reqObj.platform || 'linux/amd64',
  dockerfile: 'Dockerfile',
};
// 打dist 包
const buildDist = () => {
  const {distName, mode} = config;
  const cmd = `npm run build:prod`;
  const option = {
    encoding: 'utf-8',
    windowsHide: false,
  };
  log('执行打包dist命令：', cmd);

  const msg = childProcess.execSync(cmd, option);
  log('打包dist：', msg.toString());
};
// 打docker 镜像
const buildImg = () => {
  const {imgName, tag, dockerfile, platform} = config;
  const version = `${imgName}:${tag}`;
  config.version = version;

  const cmd = `docker build -t ${version} --platform=${platform} -f ${dockerfile} .`;
  // log('cmd', cmd);
  log('执行创建镜像命令：', cmd);

  const msg = childProcess.execSync(cmd);
  // log('buildImg', msg.toString());
  log('创建镜像：', msg.toString());
};

// 执行程序
const main = () => {
  buildDist();
  try {
    fs.accessSync('./dist');
  } catch (err) {
    log('dist 打包失败');
    return;
  }
  // 创建镜像;
  buildImg();
};

if (require.main === module) {
  main();
}
