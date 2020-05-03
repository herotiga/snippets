#!/bin/bash
# 使用方法：bash chkhost.sh <ip>
ping -c 3 -i 0.2 -W 3 $1 &> /dev/null
if [ $? -eq 0 ]
then
echo "online"
else
echo "offline"
fi
