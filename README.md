# fireburp

Simply sends `fireburp: <container_name>;<color>` header. To highlight it later in Burp proxy.

### TO-DO
- ~~Add settings to enable/disable containers~~
- ~~Send color with container name~~
- Add styling to action menu
- Fork https://github.com/PortSwigger/request-highlighter 
    - Automaticly find fireburp header and highlight request based on header data
    - Remove fireburp header after highlighting
    - Add comments to requests for easy sort in HTTP History