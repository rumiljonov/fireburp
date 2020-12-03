<img src=src/icons/fireburp.png width=200>

# fireburp

Simply sends `fireburp: <container_name>;<color>` header. To highlight it later in Burp proxy.

## How it works right now:

1) <details><summary>Open a tab in a container</summary><img src=images/README/20201203181511.png></details>
2) <details><summary>Check container name in extension action menu</summary><img src=images/README/20201203181913.png></details>
3) <details><summary>Set autohighlighting in Burp using <a href=https://github.com/PortSwigger/request-highlighter>request-highligher</a></summary><img src=images/README/20201203181716.png></details>
4) Do the same for other containers you work with
5) <details><summary>Now all your request are highlighted based on container they are opened in</summary><img src=images/README/20201203182145.png></details>

### TO-DO
- ~~Add settings to enable/disable containers~~
- ~~Send color with container name~~
- Add styling to action menu
- Fork https://github.com/PortSwigger/request-highlighter 
    - Automaticly find fireburp header and highlight request based on header data
    - Remove fireburp header after highlighting
    - Add comments to requests for easy sort in HTTP History