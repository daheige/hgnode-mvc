# hgnode-mvc
    项目采用nodejs8.4.0+之后的版本，express4.x构建
# 版权声明：
    该hgnode项目属于个人项目，未经同意，不得私自转载和肆意传播，以及用于商业项目用途
# 项目npm初始化
    1. 请执行 yarn install 安装必要的npm
    2. 初始化logs
        mkdir -p logs/pids
        chmod 755 logs
# 运行
    方式1: node bootstrap/www
    方式2: pm2启动
        测试环境: pm2 start bootstrap/boot.json --env testing
        生产环境: pm2 start bootstrap/boot.json --env production
        开发环境: pm2 start bootstrap/boot.json --env dev

