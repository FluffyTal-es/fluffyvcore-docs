import{_ as e,o as t,c as r,V as o}from"./chunks/framework.7ae304b1.js";const u=JSON.parse('{"title":"FluffyVServer.vehicle.permissions","description":"","frontmatter":{"title":"FluffyVServer.vehicle.permissions","outline":[0,5],"order":0},"headers":[],"relativePath":"modules/server_vehicle_permissions.md","filePath":"modules/server_vehicle_permissions.md","lastUpdated":null}'),a={name:"modules/server_vehicle_permissions.md"},s=o('<h1 id="fluffyvserver-vehicle-permissions" tabindex="-1">FluffyVServer.vehicle.permissions <a class="header-anchor" href="#fluffyvserver-vehicle-permissions" aria-label="Permalink to &quot;FluffyVServer.vehicle.permissions&quot;">​</a></h1><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addgroupperm" tabindex="-1">addGroupPerm <a class="header-anchor" href="#addgroupperm" aria-label="Permalink to &quot;addGroupPerm&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.vehicle.permissions.<strong>addGroupPerm</strong>(<code>vehicle</code>, <code>groupName</code>, <code>permission</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p></div><p>Add a group permission to an owned vehicle.</p><p>If a player group permission, and a vehicle group permission intercept, then vehicle control is granted.</p><p>If a vehicle has any group permissions, all access is denied to non-matching group perms.</p><p><strong><code>Export</code></strong></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td></tr><tr><td style="text-align:left;"><code>groupName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>permission</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/vehicle/permissions.ts#L54" target="_blank" rel="noreferrer">server/vehicle/permissions.ts:54</a></p><hr><h3 id="hascommongrouppermission" tabindex="-1">hasCommonGroupPermission <a class="header-anchor" href="#hascommongrouppermission" aria-label="Permalink to &quot;hasCommonGroupPermission&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.vehicle.permissions.<strong>hasCommonGroupPermission</strong>(<code>vehicle</code>, <code>document</code>, <code>groupName</code>, <code>permission</code>): <code>any</code></p></div><p>Check if a vehicle has any matching permissions against another document.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td></tr><tr><td style="text-align:left;"><code>document</code></td><td style="text-align:left;"><code>PermissionGroup</code></td></tr><tr><td style="text-align:left;"><code>groupName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>permission</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/vehicle/permissions.ts#L32" target="_blank" rel="noreferrer">server/vehicle/permissions.ts:32</a></p><hr><h3 id="hasgrouppermission" tabindex="-1">hasGroupPermission <a class="header-anchor" href="#hasgrouppermission" aria-label="Permalink to &quot;hasGroupPermission&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVServer.vehicle.permissions.<strong>hasGroupPermission</strong>(<code>vehicle</code>, <code>groupName</code>, <code>permission</code>): <code>any</code></p></div><p>Check if a vehicle has a group permission.</p><p><strong><code>Export</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>vehicle</code></td><td style="text-align:left;"><code>Vehicle</code></td></tr><tr><td style="text-align:left;"><code>groupName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>permission</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>any</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/server/vehicle/permissions.ts#L14" target="_blank" rel="noreferrer">server/vehicle/permissions.ts:14</a></p>',36),i=[s];function d(l,n,c,h,p,m){return t(),r("div",null,i)}const g=e(a,[["render",d]]);export{u as __pageData,g as default};
