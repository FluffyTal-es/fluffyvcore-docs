import{_ as a,c as l,x as s,a as e,t as o,S as i,o as p}from"./chunks/framework.175b5f45.js";const D=JSON.parse('{"title":"Loading Plugins","description":"","frontmatter":{"title":"Loading Plugins","order":-97},"headers":[],"relativePath":"plugins/loading-plugins.md","lastUpdated":1679068208000}'),t={name:"plugins/loading-plugins.md"},r={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),d=i(`<h3 id="learn-to-load-plugins" tabindex="-1">Learn to Load Plugins <a class="header-anchor" href="#learn-to-load-plugins" aria-label="Permalink to &quot;Learn to Load Plugins&quot;">​</a></h3><p>All plugins should be placed inside the 📁<code>src/core/plugins</code> folder.</p><p>This can be done by performing a submodule clone, or simply downloading the resource files and dragging and dropping them into the folder.</p><h4 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-label="Permalink to &quot;Structure&quot;">​</a></h4><p>The folder structure is very specific.</p><p>It consists of several folders inside your main folder.</p><ul><li>server <ul><li>This should all be server-side code</li></ul></li><li>client <ul><li>This should all be client-side code</li></ul></li><li>shared <ul><li>This should be shared between server, client, and webview</li></ul></li><li>webview <ul><li>This is a WebView Page you want to inject</li></ul></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">📁 src/core/plugins/core-example</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├───📁 client</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   │   index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  |   │</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   └───📁 src  </span></span>
<span class="line"><span style="color:#A6ACCD;">  │       │   file1.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  │       │   file2.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  │       │   file3.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  |</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├───📁 server</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   │   index.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   │</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   └───📁 src</span></span>
<span class="line"><span style="color:#A6ACCD;">  │       │   file1.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  │       │   file2.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  │       │   file3.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  │</span></span>
<span class="line"><span style="color:#A6ACCD;">  ├───📁 shared</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   │   file1.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   │   file2.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  │   │   file3.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">  │</span></span>
<span class="line"><span style="color:#A6ACCD;">  └───📁 webview</span></span>
<span class="line"><span style="color:#A6ACCD;">      │   Example.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">      │   tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;">      │</span></span>
<span class="line"><span style="color:#A6ACCD;">      ├───📁 components</span></span>
<span class="line"><span style="color:#A6ACCD;">      │       Component1.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">      │       Component2.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">      │       Component3.vue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="enabling-disabling-plugins" tabindex="-1"><strong>Enabling &amp; Disabling Plugins</strong> <a class="header-anchor" href="#enabling-disabling-plugins" aria-label="Permalink to &quot;**Enabling &amp; Disabling Plugins**&quot;">​</a></h3><p>In order to disable a plugin, create a file with one of the following names from the list below inside the root folder of the plugin (<code>src/core/plugins/&lt;your-plugin&gt;</code>):</p><ul><li><code>disable.plugin</code></li><li><code>disabled.plugin</code></li><li><code>disable</code></li></ul>`,11);function u(n,C,A,g,h,f){return p(),l("div",null,[s("h1",r,[e(o(n.$frontmatter.title)+" ",1),c]),d])}const b=a(t,[["render",u]]);export{D as __pageData,b as default};
