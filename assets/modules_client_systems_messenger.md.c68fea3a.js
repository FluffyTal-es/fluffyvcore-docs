import{_ as e,o as t,c as a,V as s}from"./chunks/framework.7ae304b1.js";const b=JSON.parse('{"title":"FluffyVClient.systems.messenger","description":"","frontmatter":{"title":"FluffyVClient.systems.messenger","outline":[0,5],"order":0},"headers":[],"relativePath":"modules/client_systems_messenger.md","filePath":"modules/client_systems_messenger.md","lastUpdated":null}'),r={name:"modules/client_systems_messenger.md"},l=s('<h1 id="fluffyvclient-systems-messenger" tabindex="-1">FluffyVClient.systems.messenger <a class="header-anchor" href="#fluffyvclient-systems-messenger" aria-label="Permalink to &quot;FluffyVClient.systems.messenger&quot;">​</a></h1><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-label="Permalink to &quot;Type Aliases&quot;">​</a></h2><h3 id="historycallback" tabindex="-1">HistoryCallback <a class="header-anchor" href="#historycallback" aria-label="Permalink to &quot;HistoryCallback&quot;">​</a></h3><p>Ƭ <strong>HistoryCallback</strong>: (<code>msgs</code>: <a href="./client_systems_messenger#MessageInfo"><code>MessageInfo</code></a>[]) =&gt; <code>void</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.messenger.(<code>msgs</code>): <code>void</code></p></div><h5 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>msgs</code></td><td style="text-align:left;"><a href="./client_systems_messenger#MessageInfo"><code>MessageInfo</code></a>[]</td></tr></tbody></table><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/messenger.ts#L9" target="_blank" rel="noreferrer">client/systems/messenger.ts:9</a></p><hr><h3 id="messagecallback" tabindex="-1">MessageCallback <a class="header-anchor" href="#messagecallback" aria-label="Permalink to &quot;MessageCallback&quot;">​</a></h3><p>Ƭ <strong>MessageCallback</strong>: (<code>msg</code>: <code>string</code>) =&gt; <code>void</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.messenger.(<code>msg</code>): <code>void</code></p></div><h5 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h5><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/messenger.ts#L8" target="_blank" rel="noreferrer">client/systems/messenger.ts:8</a></p><hr><h3 id="messageinfo" tabindex="-1">MessageInfo <a class="header-anchor" href="#messageinfo" aria-label="Permalink to &quot;MessageInfo&quot;">​</a></h3><p>Ƭ <strong>MessageInfo</strong>: <code>Object</code></p><h4 id="type-declaration-2" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-2" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>timestamp</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/messenger.ts#L7" target="_blank" rel="noreferrer">client/systems/messenger.ts:7</a></p><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="emit" tabindex="-1">emit <a class="header-anchor" href="#emit" aria-label="Permalink to &quot;emit&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.messenger.<strong>emit</strong>(<code>msg</code>): <code>void</code></p></div><p>Emits a message to all callbacks.</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/messenger.ts#L43" target="_blank" rel="noreferrer">client/systems/messenger.ts:43</a></p><hr><h3 id="getcommands" tabindex="-1">getCommands <a class="header-anchor" href="#getcommands" aria-label="Permalink to &quot;getCommands&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.messenger.<strong>getCommands</strong>(): <a href="./client_rmlui_commands_Internal#Omit"><code>Omit</code></a>&lt;<a href="./server_config#player"><code>player</code></a>&lt;<code>alt.Player</code>&gt;, <code>&quot;callback&quot;</code>&gt;[]</p></div><p>Get the commands that this client has permission for.</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./client_rmlui_commands_Internal#Omit"><code>Omit</code></a>&lt;<a href="./server_config#player"><code>player</code></a>&lt;<code>alt.Player</code>&gt;, <code>&quot;callback&quot;</code>&gt;[]</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/messenger.ts#L101" target="_blank" rel="noreferrer">client/systems/messenger.ts:101</a></p><hr><h3 id="gethistory" tabindex="-1">getHistory <a class="header-anchor" href="#gethistory" aria-label="Permalink to &quot;getHistory&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.messenger.<strong>getHistory</strong>(): { <code>msg</code>: <code>string</code> ; <code>timestamp</code>: <code>number</code> }[]</p></div><p>Return current chat history. Newest message is always first element in array.</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>{ <code>msg</code>: <code>string</code> ; <code>timestamp</code>: <code>number</code> }[]</p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/messenger.ts#L71" target="_blank" rel="noreferrer">client/systems/messenger.ts:71</a></p><hr><h3 id="registerhistorycallback" tabindex="-1">registerHistoryCallback <a class="header-anchor" href="#registerhistorycallback" aria-label="Permalink to &quot;registerHistoryCallback&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.messenger.<strong>registerHistoryCallback</strong>(<code>callback</code>): <code>void</code></p></div><p>Register a callback that handles messages. The messages from other clients, and FluffyV itself will be pushed through all callbacks registered. Useful for plugin creators.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./client_systems_messenger#HistoryCallback"><code>HistoryCallback</code></a></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/messenger.ts#L34" target="_blank" rel="noreferrer">client/systems/messenger.ts:34</a></p><hr><h3 id="registermessagecallback" tabindex="-1">registerMessageCallback <a class="header-anchor" href="#registermessagecallback" aria-label="Permalink to &quot;registerMessageCallback&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.messenger.<strong>registerMessageCallback</strong>(<code>callback</code>): <code>void</code></p></div><p>Register a callback that handles messages. The messages from other clients, and FluffyV itself will be pushed through all callbacks registered. Useful for plugin creators.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;"><a href="./client_systems_messenger#MessageCallback"><code>MessageCallback</code></a></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/messenger.ts#L23" target="_blank" rel="noreferrer">client/systems/messenger.ts:23</a></p><hr><h3 id="send" tabindex="-1">send <a class="header-anchor" href="#send" aria-label="Permalink to &quot;send&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.messenger.<strong>send</strong>(<code>msg</code>): <code>void</code></p></div><p>Takes a message, or command and processes it from an input. Commands must start with a forward slash. Such as &#39;/&#39;.</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>msg</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/messenger.ts#L81" target="_blank" rel="noreferrer">client/systems/messenger.ts:81</a></p><hr><h3 id="setcommands" tabindex="-1">setCommands <a class="header-anchor" href="#setcommands" aria-label="Permalink to &quot;setCommands&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVClient.systems.messenger.<strong>setCommands</strong>(<code>_commands</code>): <code>void</code></p></div><p>Populates the local command list for the client. Which can be used to</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>_commands</code></td><td style="text-align:left;"><a href="./client_rmlui_commands_Internal#Omit"><code>Omit</code></a>&lt;<code>MessageCommand</code>&lt;<code>Player</code>&gt;, <code>&quot;callback&quot;</code>&gt;[]</td></tr></tbody></table><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/client/systems/messenger.ts#L91" target="_blank" rel="noreferrer">client/systems/messenger.ts:91</a></p>',96),o=[l];function n(i,d,c,h,m,f){return t(),a("div",null,o)}const g=e(r,[["render",n]]);export{b as __pageData,g as default};
