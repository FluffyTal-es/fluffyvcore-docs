import{_ as e,o as t,c as a,V as r}from"./chunks/framework.7ae304b1.js";const b=JSON.parse('{"title":"FluffyVServer.database.singleton","description":"","frontmatter":{"title":"FluffyVServer.database.singleton","outline":[0,5],"order":0},"headers":[],"relativePath":"modules/server_database_singleton.md","filePath":"modules/server_database_singleton.md","lastUpdated":null}'),o={name:"modules/server_database_singleton.md"},d=r('<h1 id="fluffyvserver-database-singleton" tabindex="-1">FluffyVServer.database.singleton <a class="header-anchor" href="#fluffyvserver-database-singleton" aria-label="Permalink to &quot;FluffyVServer.database.singleton&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-label="Permalink to &quot;create&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.database.singleton.<strong>create</strong>&lt;<code>T</code>&gt;(<code>collection</code>, <code>data</code>): <code>Promise</code>&lt;{ <code>_id</code>: <code>string</code> } &amp; <code>T</code>&gt;</p></div><p>Creates a single document to be stored in a collection.</p><p>Only one document may ever exist for a collection.</p><p>Returns the existing singleton if already present.</p><p><strong><code>Export</code></strong></p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>collection</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;{ <code>_id</code>: <code>string</code> } &amp; <code>T</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/database/singleton.ts#L28" target="_blank" rel="noreferrer">server/database/singleton.ts:28</a></p><hr><h3 id="get" tabindex="-1">get <a class="header-anchor" href="#get" aria-label="Permalink to &quot;get&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.database.singleton.<strong>get</strong>&lt;<code>T</code>&gt;(<code>collection</code>): <code>Promise</code>&lt;{ <code>_id</code>: <code>string</code> } &amp; <code>T</code>&gt;</p></div><p>Returns a singleton document if it exists.</p><p><strong><code>Export</code></strong></p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>collection</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;{ <code>_id</code>: <code>string</code> } &amp; <code>T</code>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/database/singleton.ts#L11" target="_blank" rel="noreferrer">server/database/singleton.ts:11</a></p><hr><h3 id="updatebulk" tabindex="-1">updateBulk <a class="header-anchor" href="#updatebulk" aria-label="Permalink to &quot;updateBulk&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.database.singleton.<strong>updateBulk</strong>&lt;<code>T</code>&gt;(<code>collection</code>, <code>data</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Update all the data from a single document in a collection.</p><p>Only one document may ever exist for a collection.</p><p>This takes the data from the database and applies your data on top of it.</p><p>Returns true if updated successfully</p><p><strong><code>Export</code></strong></p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td><td style="text-align:left;">{}</td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>collection</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><a href="./client_rmlui_sprites_Internal#Partial"><code>Partial</code></a>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/database/singleton.ts#L77" target="_blank" rel="noreferrer">server/database/singleton.ts:77</a></p><hr><h3 id="updatefield" tabindex="-1">updateField <a class="header-anchor" href="#updatefield" aria-label="Permalink to &quot;updateField&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.database.singleton.<strong>updateField</strong>(<code>collection</code>, <code>fieldName</code>, <code>fieldValue</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Update / insert a single document into a collection.</p><p>Only one document may ever exist for a collection.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>collection</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>fieldName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>fieldValue</code></td><td style="text-align:left;"><code>any</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/database/singleton.ts#L53" target="_blank" rel="noreferrer">server/database/singleton.ts:53</a></p>',57),l=[d];function s(n,i,c,h,f,p){return t(),a("div",null,l)}const g=e(o,[["render",s]]);export{b as __pageData,g as default};
