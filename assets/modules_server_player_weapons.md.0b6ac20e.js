import{_ as e,o as t,c as a,V as r}from"./chunks/framework.7ae304b1.js";const u=JSON.parse('{"title":"FluffyVServer.player.weapons","description":"","frontmatter":{"title":"FluffyVServer.player.weapons","outline":[0,5],"order":0},"headers":[],"relativePath":"modules/server_player_weapons.md","filePath":"modules/server_player_weapons.md","lastUpdated":null}'),l={name:"modules/server_player_weapons.md"},o=r('<h1 id="fluffyvserver-player-weapons" tabindex="-1">FluffyVServer.player.weapons <a class="header-anchor" href="#fluffyvserver-player-weapons" aria-label="Permalink to &quot;FluffyVServer.player.weapons&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;clear&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.player.weapons.<strong>clear</strong>(<code>player</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Clear all weapons from a player&#39;s inventory.</p><p>Returns true if weapons were found and removed.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/player/weapons.ts#L40" target="_blank" rel="noreferrer">server/player/weapons.ts:40</a></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.player.weapons.<strong>get</strong>(<code>player</code>): <code>Object</code></p></div><p>Return all weapons the player currently has in their inventory, and toolbar.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>player</code></td><td style="text-align:left;"><code>Player</code></td><td style="text-align:left;">An alt:V Player Entity</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Object</code></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>inventory</code></td><td style="text-align:left;"><a href="./server_config#player"><code>player</code></a>[]</td></tr><tr><td style="text-align:left;"><code>toolbar</code></td><td style="text-align:left;"><a href="./server_config#player"><code>player</code></a>[]</td></tr></tbody></table><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/player/weapons.ts#L12" target="_blank" rel="noreferrer">server/player/weapons.ts:12</a></p>',23),n=[o];function s(d,i,c,p,h,f){return t(),a("div",null,n)}const b=e(l,[["render",s]]);export{u as __pageData,b as default};