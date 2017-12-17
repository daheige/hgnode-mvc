#!/bin/sh
# nodejs日志迁移脚本
# 1 0 * * * sh bin/cut-pm2-log.sh >> /dev/null 每天凌晨执行日志切割
root_dir=$(cd "$(dirname "$0")"; cd ..; pwd)

LOGPATH=$root_dir/logs  #日志目录
out_log_name=hgnode-out.log         #输出日志名称
error_log_name=hgnode-error.log     #错误日志名称
out_log_file=$LOGPATH/$out_log_name
error_log_file=$LOGPATH/$error_log_name

yesterday=`date  +"%Y%m%d" -d  "-1 days"`   #前一天日期
out_target_log=$LOGPATH/$yesterday"_"$out_log_name
error_target_log=$LOGPATH/${yesterday}"_"$error_log_name

#开始迁移
if [ -f "$out_log_file" ] && [ -f "$error_log_file" ]; then
    echo "---------------开始迁移pm2日志----------------------------"
    echo "日志输出文件为："$out_target_log
    mv $out_log_file $out_target_log
    touch $out_log_file
    echo "重置"$out_log_file"成功"

    # mv $error_log_file $error_target_log
    # touch $error_log_file
    pm2 reloadLogs #初始化日志

    echo "---------------初始化日志成功，迁移完毕！------------------"
else
    echo "没有任何日志迁移操作！"
fi
