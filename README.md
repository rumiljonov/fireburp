<img src=src/icons/fireburp.png width=200>

# fireburp

Sends `fireburp: <color>` header. To highlight it later in Burp proxy.

## Instalation

- Download and install [this](https://addons.mozilla.org/addon/fireburp/) firefox addon
- Download my forked version of request-highlighter [here](https://github.com/rumiljonov/request-highlighter) and add it to Burp plugins


## Workflow:

Open a few tabs in different containers

<img src=images/README/20201204021701.png>

Check containers name in extension action menu

<img src=images/README/20201204021737.png>

Now all your request are highlighted based on container they are opened in

<img src=images/README/20201203182145.png>


## TO-DO
- ~~Add settings to enable/disable containers~~
- ~~Send color with container name~~
- ~~Add styling to action menu~~
- ~~Fork https://github.com/PortSwigger/request-highlighter~~ 
    - ~~Automaticly find fireburp header and highlight request based on header data~~
    - Remove fireburp header after highlighting
    - Add comments to requests for easy sort in HTTP History
