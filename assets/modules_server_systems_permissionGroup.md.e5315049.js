import{_ as e,o as t,c as s,V as r}from"./chunks/framework.7ae304b1.js";const f=JSON.parse('{"title":"FluffyVServer.systems.permissionGroup","description":"","frontmatter":{"title":"FluffyVServer.systems.permissionGroup","outline":[0,5],"order":0},"headers":[],"relativePath":"modules/server_systems_permissionGroup.md","filePath":"modules/server_systems_permissionGroup.md","lastUpdated":null}'),a={name:"modules/server_systems_permissionGroup.md"},o=r(`<h1 id="fluffyvserver-systems-permissiongroup" tabindex="-1">FluffyVServer.systems.permissionGroup <a class="header-anchor" href="#fluffyvserver-systems-permissiongroup" aria-label="Permalink to &quot;FluffyVServer.systems.permissionGroup&quot;">​</a></h1><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/server_systems_permissionGroup_PermissionGroup">PermissionGroup</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addgroupperm" tabindex="-1">addGroupPerm <a class="header-anchor" href="#addgroupperm" aria-label="Permalink to &quot;addGroupPerm&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.permissionGroup.<strong>addGroupPerm</strong>&lt;<code>T</code>&gt;(<code>document</code>, <code>groupName</code>, <code>value</code>): <code>T</code> &amp; <a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></p></div><p>Add a group key to a document, and return the document.</p><p>Document can be anything.</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> data </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> FluffyV</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">character</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">get</span><span style="color:#A6ACCD;">(somePlayer)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">data) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> modifiedDocument </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> FluffyV</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">systems</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">permissionGroup</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addGroupKey</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#A6ACCD;"> data</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(data</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">police</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">police-chief</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> FluffyV</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">character</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;">(somePlayer</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">groups</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> modifiedDocument</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">groups)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><strong><code>Export</code></strong></p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>document</code></td><td style="text-align:left;"><code>T</code> &amp; <a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></td></tr><tr><td style="text-align:left;"><code>groupName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>string</code> | <code>string</code>[]</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code> &amp; <a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/permissionGroup.ts#L28" target="_blank" rel="noreferrer">server/systems/permissionGroup.ts:28</a></p><hr><h3 id="hasatleastonegroupperm" tabindex="-1">hasAtLeastOneGroupPerm <a class="header-anchor" href="#hasatleastonegroupperm" aria-label="Permalink to &quot;hasAtLeastOneGroupPerm&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.permissionGroup.<strong>hasAtLeastOneGroupPerm</strong>(<code>document</code>, <code>groupName</code>, <code>permissions</code>): <code>boolean</code></p></div><p>Check if a specific document has any of the listed permissions.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>document</code></td><td style="text-align:left;"><a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></td></tr><tr><td style="text-align:left;"><code>groupName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>permissions</code></td><td style="text-align:left;"><code>string</code>[]</td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/permissionGroup.ts#L160" target="_blank" rel="noreferrer">server/systems/permissionGroup.ts:160</a></p><hr><h3 id="hascommonpermission" tabindex="-1">hasCommonPermission <a class="header-anchor" href="#hascommonpermission" aria-label="Permalink to &quot;hasCommonPermission&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.permissionGroup.<strong>hasCommonPermission</strong>(<code>documents</code>, <code>groupName</code>, <code>permission</code>): <code>boolean</code></p></div><p>Checks if the given documents have a common permission.</p><p><strong><code>Name</code></strong></p><p>hasCommonPermission</p><p><strong><code>Exports</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>documents</code></td><td style="text-align:left;"><a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a>[]</td></tr><tr><td style="text-align:left;"><code>groupName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>permission</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/permissionGroup.ts#L191" target="_blank" rel="noreferrer">server/systems/permissionGroup.ts:191</a></p><hr><h3 id="hasgroup" tabindex="-1">hasGroup <a class="header-anchor" href="#hasgroup" aria-label="Permalink to &quot;hasGroup&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.permissionGroup.<strong>hasGroup</strong>(<code>document</code>, <code>groupName</code>): <code>boolean</code></p></div><p>Checks if the documet is part of a group.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>document</code></td><td style="text-align:left;"><a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></td></tr><tr><td style="text-align:left;"><code>groupName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/permissionGroup.ts#L119" target="_blank" rel="noreferrer">server/systems/permissionGroup.ts:119</a></p><hr><h3 id="hasgroupperm" tabindex="-1">hasGroupPerm <a class="header-anchor" href="#hasgroupperm" aria-label="Permalink to &quot;hasGroupPerm&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.permissionGroup.<strong>hasGroupPerm</strong>(<code>document</code>, <code>groupName</code>, <code>permission</code>): <code>boolean</code></p></div><p>Check if a document has a specific group permission.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>document</code></td><td style="text-align:left;"><a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></td></tr><tr><td style="text-align:left;"><code>groupName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>permission</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>boolean</code></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/permissionGroup.ts#L140" target="_blank" rel="noreferrer">server/systems/permissionGroup.ts:140</a></p><hr><h3 id="removegroup" tabindex="-1">removeGroup <a class="header-anchor" href="#removegroup" aria-label="Permalink to &quot;removeGroup&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.permissionGroup.<strong>removeGroup</strong>&lt;<code>T</code>&gt;(<code>document</code>, <code>groupName</code>): <code>T</code> &amp; <a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></p></div><p>Removes a group entirely from a document.</p><p><strong><code>Export</code></strong></p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>document</code></td><td style="text-align:left;"><code>T</code> &amp; <a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></td></tr><tr><td style="text-align:left;"><code>groupName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code> &amp; <a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/permissionGroup.ts#L102" target="_blank" rel="noreferrer">server/systems/permissionGroup.ts:102</a></p><hr><h3 id="removegroupperm" tabindex="-1">removeGroupPerm <a class="header-anchor" href="#removegroupperm" aria-label="Permalink to &quot;removeGroupPerm&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.systems.permissionGroup.<strong>removeGroupPerm</strong>&lt;<code>T</code>&gt;(<code>document</code>, <code>groupName</code>, <code>value</code>): <code>T</code> &amp; <a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></p></div><p>Remove a permission from a group key.</p><p><strong><code>Export</code></strong></p><h4 id="type-parameters-2" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-2" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>document</code></td><td style="text-align:left;"><code>T</code> &amp; <a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></td></tr><tr><td style="text-align:left;"><code>groupName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>string</code> | <code>string</code>[]</td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>T</code> &amp; <a href="./../interfaces/server_systems_permissionGroup_PermissionGroup"><code>PermissionGroup</code></a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/systems/permissionGroup.ts#L63" target="_blank" rel="noreferrer">server/systems/permissionGroup.ts:63</a></p>`,91),n=[o];function l(i,d,p,c,m,u){return t(),s("div",null,n)}const y=e(a,[["render",l]]);export{f as __pageData,y as default};
