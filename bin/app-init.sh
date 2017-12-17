#!/usr/bin/env bash
#开发上线之前执行步骤
root_dir=$(cd "$(dirname "$0")"; cd ..; pwd)

mkdir -p $root_dir/logs/pids
chmod 755 $root_dir/logs

##执行js打包处理
cd $root_dir/public && gulp


