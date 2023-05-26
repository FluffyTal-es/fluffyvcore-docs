import{_ as e,c as a,o as s,V as o}from"./chunks/framework.a7f1c75a.js";const u=JSON.parse('{"title":"How to Read the API","description":"","frontmatter":{"title":"How to Read the API","outline":[1,5],"order":-99999,"comment":false},"headers":[],"relativePath":"how-to-read.md","lastUpdated":1685091683000}'),t={name:"how-to-read.md"},n=o(`<h1 id="how-to-read-the-api" tabindex="-1">How to Read the API <a class="header-anchor" href="#how-to-read-the-api" aria-label="Permalink to &quot;How to Read the API&quot;">​</a></h1><p>Reading API pages can be a bit overwhelming but I promise there is a method to the madness.</p><p>Those of you who are unfamiliar with API documentation will <strong>definitely need to read this</strong>.</p><h2 id="navigation" tabindex="-1">Navigation <a class="header-anchor" href="#navigation" aria-label="Permalink to &quot;Navigation&quot;">​</a></h2><p>In the left-hand sidebar you will see API pathways.</p><p><img src="https://i.imgur.com/WJS4vXa.png" alt=""></p><p>Inside you will find a <em>similar</em> folder structure to the default intellisense when you use any of the standard imports while programming.</p><p><img src="https://i.imgur.com/lmqhTIh.png" alt=""></p><h2 id="digestion" tabindex="-1">Digestion <a class="header-anchor" href="#digestion" aria-label="Permalink to &quot;Digestion&quot;">​</a></h2><p>When you are reading a page it&#39;s going to look like a bunch of random words if you&#39;ve never seen an API page before.</p><p>In the example below we will be using the following pathway in the server API: <code>FluffyVCore.player</code></p><h3 id="right-sidebar" tabindex="-1">Right Sidebar <a class="header-anchor" href="#right-sidebar" aria-label="Permalink to &quot;Right Sidebar&quot;">​</a></h3><p>On the right-hand side you will see a sidebar of all the available functions. They are listed under the header called <code>Functions</code>, if there is no header called <code>Functions</code> then it is not a function.</p><p><img src="https://i.imgur.com/HoF4yxw.png" alt=""></p><p>Knowing that the API pathway is <code>FluffyVCore.player</code>, we can append a function name to the end of our code.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> FluffyVCore </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@FluffyVCore/server</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// setPositionAndRotation is the function name</span></span>
<span class="line"><span style="color:#A6ACCD;">FluffyVCore</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">player</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setPositionAndRotation</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><p>Now how do we determine what we should pass inside of the parenthesis?</p><h3 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h3><p>These are the values that need to be passed inside of the function, they should be passed in the same order that they are listed in the table.</p><p>In the case of <code>FluffyVCore.player.setPositionAndRotation</code> we have multiple parameters.</p><p><img src="https://i.imgur.com/lqfC9sA.png" alt=""></p><h3 id="parameter-types" tabindex="-1">Parameter Types <a class="header-anchor" href="#parameter-types" aria-label="Permalink to &quot;Parameter Types&quot;">​</a></h3><p>If the <code>type</code> has a clickable link you can read more about the <code>Object</code> that needs to be passed.</p><p>If you are unfamiliar with objects, they look like this:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">color</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">pos</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">x</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">y</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">z</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">scale</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">shortRange</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">text</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">My Blip!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">sprite</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">80</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>Notice how the object defined above, matches the <code>Type</code> definition of the <code>Blip</code> type.</p><p><img src="https://i.imgur.com/di45whh.png" alt=""></p><p>The individual properties for a <code>type</code> have individual definitions as well. Which will help you understand what is supposed to be passed to a specific <code>property</code> inside of an <code>object</code>.</p><p>ie. If we look at the property <code>scale</code> it clearly says it needs a <code>number</code> type.</p><p><img src="https://i.imgur.com/8HT8amw.png" alt=""></p><h2 id="that-s-about-it" tabindex="-1">That&#39;s About It! <a class="header-anchor" href="#that-s-about-it" aria-label="Permalink to &quot;That&#39;s About It!&quot;">​</a></h2><p>There isn&#39;t much else to say about this other than trying a few functions on your own in VSCode, and utilizing the intellisense window that pops up as you are typing.</p><p>Hope this helps someone out there understand API documentation a bit better.</p>`,33),l=[n];function p(r,i,c,h,d,y){return s(),a("div",null,l)}const m=e(t,[["render",p]]);export{u as __pageData,m as default};
