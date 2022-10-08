import{_ as e,c as n,a as s,b as l,t as o,d as t,o as p}from"./app.97362bb9.js";const u=JSON.parse('{"title":".ped","description":"","frontmatter":{"title":".ped","order":-99},"headers":[{"level":2,"title":"create","slug":"create","link":"#create","children":[]},{"level":2,"title":"destroy","slug":"destroy","link":"#destroy","children":[]},{"level":2,"title":"setCamParams","slug":"setcamparams","link":"#setcamparams","children":[]},{"level":2,"title":"update","slug":"update","link":"#update","children":[]}],"relativePath":"api-client/camera/ped.md"}'),r={name:"api-client/camera/ped.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=t(`<p>A camera that rotates the player in a circle based on mouse position on-screen when holding right-click.</p><p>Also includes <code>WASD</code> controls to move the camera up and down.</p><p>Only one instance of this camera can exist at a time.</p><h2 id="create" tabindex="-1">create <a class="header-anchor" href="#create" aria-hidden="true">#</a></h2><p>Used to create the ped edit camera.</p><p>Arguments</p><ul><li>scriptID of PED or Player</li><li>Vector3 Offset of Camera</li><li>isLocalPlayer? -&gt; boolean</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setupCameraForLocalPlayer</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ped</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">alt</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scriptID</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> x</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">0.25</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> y</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> z</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-hidden="true">#</a></h2><p>Simply destroy the currently created PedEditCamera.</p><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ped</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">destroy</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="setcamparams" tabindex="-1">setCamParams <a class="header-anchor" href="#setcamparams" aria-hidden="true">#</a></h2><p>Change camera properties.</p><p>Arguments</p><ul><li>zPos - starting z position of the camera</li><li>fov - The field of view for the camera</li><li>easeTime - Time to ease the camera from current position to new position</li></ul><h2 id="update" tabindex="-1">update <a class="header-anchor" href="#update" aria-hidden="true">#</a></h2><p>Force update the camera.</p><p>Arguments</p><ul><li>scriptID of PED or Player</li></ul><div class="language-ts"><button class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#89DDFF;">await</span><span style="color:#A6ACCD;"> AthenaClient</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">camera</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ped</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">update</span><span style="color:#A6ACCD;">(alt</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Player</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scriptID)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,20);function D(a,d,F,A,C,h){return p(),n("div",null,[s("h1",c,[l(o(a.$frontmatter.title)+" ",1),i]),y])}const f=e(r,[["render",D]]);export{u as __pageData,f as default};