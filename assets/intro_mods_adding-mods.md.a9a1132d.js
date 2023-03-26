import{_ as o,c as n,x as s,a as e,t as l,S as p,o as t}from"./chunks/framework.175b5f45.js";const u=JSON.parse('{"title":"Adding Mods","description":"","frontmatter":{"title":"Adding Mods","order":-98},"headers":[],"relativePath":"intro/mods/adding-mods.md","lastUpdated":1679840881000}'),r={name:"intro/mods/adding-mods.md"},c={id:"frontmatter-title",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),D=p(`<h3 id="using-mods-with-alt-v" tabindex="-1">Using Mods with alt:V <a class="header-anchor" href="#using-mods-with-alt-v" aria-label="Permalink to &quot;Using Mods with alt:V&quot;">​</a></h3><p>alt:V has <a href="https://docs.altv.mp/gta/articles/tutorials/index.html" target="_blank" rel="noreferrer">general modding instructions on how to stream files, mlos, ymaps, etc</a>.</p><p>After following those general instructions read further below on where to put your mods.</p><h3 id="where-to-load-mods" tabindex="-1">Where to Load Mods? <a class="header-anchor" href="#where-to-load-mods" aria-label="Permalink to &quot;Where to Load Mods?&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">📁 altv</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">athena</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">    L 📁 resources</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">        L 📁 mods</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> 📁 a</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">mod</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> stream</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cfg</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> resource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cfg</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    L 📁 stream</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> 📁 some</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">mod</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> stream</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cfg</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> resource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cfg</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">    L 📁 stream</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">            L 📁 whatever</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">mod</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> stream</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cfg</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">|-</span><span style="color:#A6ACCD;"> resource</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cfg</span></span>
<span class="line"><span style="color:#A6ACCD;">                L 📁 stream</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span></code></pre></div><h3 id="add-to-server-cfg" tabindex="-1">Add to server.cfg <a class="header-anchor" href="#add-to-server-cfg" aria-label="Permalink to &quot;Add to server.cfg&quot;">​</a></h3><p><strong>! WAIT DO NOT EDIT <code>server.cfg</code> !</strong></p><p>Navigate to one of the following files:</p><ul><li><code>config/prod.json</code></li><li><code>config/devtest.json</code></li><li><code>config/dev.json</code></li></ul><p>Add the name of your resource and the folder path to the <code>resources</code> section.</p><p>Example:</p><ul><li><code>mods/teslacar</code></li><li><code>mods/hospital</code></li><li><code>mods/fastcar</code></li></ul><h3 id="load-order" tabindex="-1">Load Order <a class="header-anchor" href="#load-order" aria-label="Permalink to &quot;Load Order&quot;">​</a></h3><p>In your configuration(s) you should always be loading mods <code>FIRST</code>. Which means you should append mods before normal athena resources such as <code>core</code> and <code>webview</code>.</p><p>Ensure you edit configurations in the <code>configs</code> folder.</p><p>Example:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">resources</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mods/a-mod</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mods/some-mod</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mods/whatever-mod</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">webviews</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">core</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span></code></pre></div><p><em>It is highly recommended that if you are actively developing that you leave major MLOs off as it increases load time.</em></p><h3 id="where-to-place-mods" tabindex="-1">Where to Place Mods <a class="header-anchor" href="#where-to-place-mods" aria-label="Permalink to &quot;Where to Place Mods&quot;">​</a></h3><p>Mods are a bit tricky with alt:V but the alt:V Discord should always be your #1 place to ask for modding support and ask general questions.</p><p><strong>ALL MODS SHOULD BE PLACED INSIDE <code>./resources/mods</code>. ANYTHING OUTSIDE THIS FOLDER GETS DELETED</strong></p><p>This is necessary to ensure a clean build is created for each deployment.</p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><p><strong>Folder Path</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">./</span><span style="color:#A6ACCD;">resources</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">mods</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">hospital</span></span>
<span class="line"></span></code></pre></div><p><strong>Resource Name</strong></p><p><code>mods/hospital</code></p>`,27);function i(a,y,C,A,F,h){return t(),n("div",null,[s("h1",c,[e(l(a.$frontmatter.title)+" ",1),d]),D])}const g=o(r,[["render",i]]);export{u as __pageData,g as default};
