#!/bin/bash
if [ -z "$VCAP_APP_PORT" ];
then SERVER_PORT=5001;
else SERVER_PORT="$VCAP_APP_PORT";
fi
echo port is $SERVER_PORT
python server.py runserver --noreload 0.0.0.0:$SERVER_PORT