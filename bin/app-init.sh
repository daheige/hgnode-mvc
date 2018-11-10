#!/usr/bin/env bash
#运维上线需执行该脚本
root_dir=$(cd "$(dirname "$0")"; cd ..; pwd)

mkdir -p $root_dir/logs/pids
chmod 755 $root_dir/logs

pm2_exec=`which pm2`
appName=hgnode #应用的名字

if [ ! -f "$pm2_exec" ]; then
    echo "${pm2_exec} not exist!"
else
    count=`ps axu | grep "${appName}" | grep -v "grep" | wc -l`
    if [ $count != 0 ];then
        echo "hgnode will restart now...."
        $pm2_exec restart $appName
        echo "${appName} success restart"
    else
        echo "hgnode will run now...."
        $pm2_exec start $root_dir/bootstrap/boot.json --env production
        echo "hgnode success start!"
    fi
fi
