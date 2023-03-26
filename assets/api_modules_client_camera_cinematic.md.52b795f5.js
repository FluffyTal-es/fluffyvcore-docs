import{_ as t,c as r,x as e,a as o,t as n,S as i,o as d}from"./chunks/framework.175b5f45.js";const x=JSON.parse('{"title":"AthenaClient.camera.cinematic","description":"","frontmatter":{"title":"AthenaClient.camera.cinematic","outline":[1,3],"order":0},"headers":[],"relativePath":"api/modules/client_camera_cinematic.md","lastUpdated":1679834335000}'),c={name:"api/modules/client_camera_cinematic.md"},l={id:"frontmatter-title",tabindex:"-1"},s=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=i('<h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><ul><li><a href="./../interfaces/client_camera_cinematic_iCameraNode">iCameraNode</a></li></ul><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-label="Permalink to &quot;Functions&quot;">​</a></h2><h3 id="addnode" tabindex="-1">addNode <a class="header-anchor" href="#addnode" aria-label="Permalink to &quot;addNode&quot;">​</a></h3><p>▸ <strong>addNode</strong>(<code>node</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Add a camera node to the camera set.</p><p><strong><code>Memberof</code></strong></p><p>CinematicCam</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>node</code></td><td style="text-align:left;"><a href="./../interfaces/client_camera_cinematic_iCameraNode"><code>iCameraNode</code></a></td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/camera/cinematic.ts#L319" target="_blank" rel="noreferrer">client/camera/cinematic.ts:319</a></p><hr><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>▸ <strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>This function will destroy all camera instances</p><p><strong><code>Memberof</code></strong></p><p>CinematicCam</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/camera/cinematic.ts#L305" target="_blank" rel="noreferrer">client/camera/cinematic.ts:305</a></p><hr><h3 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next&quot;">​</a></h3><p>▸ <strong>next</strong>(<code>removeFromArray?</code>): <code>Promise</code>&lt;<code>boolean</code>&gt;</p><p>Goes to the next camera.</p><p>If <code>false</code> is passed in the function it will not remove a camera from the camera array. Allows for repeating camera movement over and over.</p><p><strong><code>Memberof</code></strong></p><p>CinematicCam</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default value</th></tr></thead><tbody><tr><td style="text-align:left;"><code>removeFromArray?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>boolean</code>&gt;</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/camera/cinematic.ts#L345" target="_blank" rel="noreferrer">client/camera/cinematic.ts:345</a></p><hr><h3 id="overridenodes" tabindex="-1">overrideNodes <a class="header-anchor" href="#overridenodes" aria-label="Permalink to &quot;overrideNodes&quot;">​</a></h3><p>▸ <strong>overrideNodes</strong>(<code>_nodes</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>_nodes</code></td><td style="text-align:left;"><a href="./../interfaces/client_camera_cinematic_iCameraNode"><code>iCameraNode</code></a>[]</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/camera/cinematic.ts#L309" target="_blank" rel="noreferrer">client/camera/cinematic.ts:309</a></p><hr><h3 id="play" tabindex="-1">play <a class="header-anchor" href="#play" aria-label="Permalink to &quot;play&quot;">​</a></h3><p>▸ <strong>play</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Play all camera nodes, but do not clear the camera nodes array.</p><p><strong><code>Memberof</code></strong></p><p>CinematicCam</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/627294b/src/core/client/camera/cinematic.ts#L374" target="_blank" rel="noreferrer">client/camera/cinematic.ts:374</a></p>',56);function m(a,f,p,u,b,g){return d(),r("div",null,[e("h1",l,[o(n(a.$frontmatter.title)+" ",1),s]),h])}const y=t(c,[["render",m]]);export{x as __pageData,y as default};
