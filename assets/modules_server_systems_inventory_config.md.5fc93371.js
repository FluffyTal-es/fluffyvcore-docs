import{_ as e,o as t,c as o,V as n}from"./chunks/framework.7ae304b1.js";const g=JSON.parse('{"title":"FluffyVServer.systems.inventory.config","description":"","frontmatter":{"title":"FluffyVServer.systems.inventory.config","outline":[0,5],"order":0},"headers":[],"relativePath":"modules/server_systems_inventory_config.md","filePath":"modules/server_systems_inventory_config.md","lastUpdated":null}'),r={name:"modules/server_systems_inventory_config.md"},s=n('<h1 id="fluffyvserver-systems-inventory-config" tabindex="-1">FluffyVServer.systems.inventory.config <a class="header-anchor" href="#fluffyvserver-systems-inventory-config" aria-label="Permalink to &quot;FluffyVServer.systems.inventory.config&quot;">​</a></h1><h2 id="modules" tabindex="-1">Modules <a class="header-anchor" href="#modules" aria-label="Permalink to &quot;Modules&quot;">​</a></h2><ul><li><a href="./server_systems_inventory_config_Internal">Internal</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="disableweight" tabindex="-1">disableWeight <a class="header-anchor" href="#disableweight" aria-label="Permalink to &quot;disableWeight&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.inventory.config.<strong>disableWeight</strong>(): <code>void</code></p></div><p>Use this function to disable weight restrictions on inventories.</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/inventory/config.ts#L49" target="_blank" rel="noreferrer">server/systems/inventory/config.ts:49</a></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.inventory.config.<strong>get</strong>(): typeof <a href="./server_systems_inventory_config_Internal#DEFAULT_CONFIG"><code>DEFAULT_CONFIG</code></a></p></div><p>Returns the current inventory configurations.</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p>typeof <a href="./server_systems_inventory_config_Internal#DEFAULT_CONFIG"><code>DEFAULT_CONFIG</code></a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/inventory/config.ts#L42" target="_blank" rel="noreferrer">server/systems/inventory/config.ts:42</a></p><hr><h3 id="set" tabindex="-1">set <a class="header-anchor" href="#set" aria-label="Permalink to &quot;set&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.inventory.config.<strong>set</strong>(<code>config</code>): <code>void</code></p></div><p>Modify the existing inventory configurations. Values set may not work with interfaces designed for default values above.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>config.custom</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>config.custom.size</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>256</code></td></tr><tr><td style="text-align:left;"><code>config.inventory</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>config.inventory.size</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>30</code></td></tr><tr><td style="text-align:left;"><code>config.toolbar</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>config.toolbar.size</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>4</code></td></tr><tr><td style="text-align:left;"><code>config.weight</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;"><code>undefined</code></td></tr><tr><td style="text-align:left;"><code>config.weight.enabled</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td></tr><tr><td style="text-align:left;"><code>config.weight.player</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>64</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/inventory/config.ts#L32" target="_blank" rel="noreferrer">server/systems/inventory/config.ts:32</a></p>',29),a=[s];function d(i,l,c,f,h,u){return t(),o("div",null,a)}const m=e(r,[["render",d]]);export{g as __pageData,m as default};
