## Useful commands
### Call websocket using curl
```bash
curl --include \
     --no-buffer \
     --header "Connection: Upgrade" \
     --header "Upgrade: websocket" \
     --header "Host: localhost:3000" \
     --header "Origin: http://localhost:3000" \
     --header "Sec-WebSocket-Key: SGVsbG8sIHdvcmxkIQ==" \
     --header "Sec-WebSocket-Version: 13" \
     http://localhost:3000
```

curl -i -N -H "Connection: Upgrade" -H "Upgrade: websocket" -H "Host: http://localhost:3000" -H "Origin: http://localhost:3000" http://localhost:3000