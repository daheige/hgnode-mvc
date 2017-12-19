#!/usr/bin/env bash
#开发人员上线之前，需执行打包js
root_dir=$(cd "$(dirname "$0")"; cd ..; pwd)

mkdir -p $root_dir/logs/pids
chmod 755 $root_dir/logs

##执行js打包处理
cd $root_dir/public && gulp

##同步到指定的目录(根据具体情况修改)
# rsync -avz $root_dir heige@192.168.10.102:/home/heige/hgnode-mvc
