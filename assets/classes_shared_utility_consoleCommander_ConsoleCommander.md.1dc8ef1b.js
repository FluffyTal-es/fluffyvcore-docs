import{_ as e,o as t,c as o,V as a}from"./chunks/framework.7ae304b1.js";const b=JSON.parse('{"title":"FluffyVShared.utility.consoleCommander.ConsoleCommander","description":"","frontmatter":{"title":"FluffyVShared.utility.consoleCommander.ConsoleCommander","outline":[0,5],"order":0},"headers":[],"relativePath":"classes/shared_utility_consoleCommander_ConsoleCommander.md","filePath":"classes/shared_utility_consoleCommander_ConsoleCommander.md","lastUpdated":null}'),r={name:"classes/shared_utility_consoleCommander_ConsoleCommander.md"},d=a('<h1 id="fluffyvshared-utility-consolecommander-consolecommander" tabindex="-1">FluffyVShared.utility.consoleCommander.ConsoleCommander <a class="header-anchor" href="#fluffyvshared-utility-consolecommander-consolecommander" aria-label="Permalink to &quot;FluffyVShared.utility.consoleCommander.ConsoleCommander&quot;">​</a></h1><p><a href="./../modules/shared_utility_consoleCommander">shared/utility/consoleCommander</a>.ConsoleCommander</p><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new ConsoleCommander</strong>()</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="getcommands" tabindex="-1">getCommands <a class="header-anchor" href="#getcommands" aria-label="Permalink to &quot;getCommands&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVShared.utility.consoleCommander.ConsoleCommander.<code>Static</code> <strong>getCommands</strong>(): <code>string</code>[]</p></div><p>Return a list of commands...</p><p><strong><code>Static</code></strong></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code>[]</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/shared/utility/consoleCommander.ts#L61" target="_blank" rel="noreferrer">shared/utility/consoleCommander.ts:61</a></p><hr><h3 id="init" tabindex="-1">init <a class="header-anchor" href="#init" aria-label="Permalink to &quot;init&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVShared.utility.consoleCommander.ConsoleCommander.<code>Static</code> <strong>init</strong>(<code>alt</code>): <code>void</code></p></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>alt</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>alt.on</code></td><td style="text-align:left;">(<code>event</code>: <code>string</code>, <code>handler</code>: <code>Function</code>) =&gt; <code>any</code></td></tr></tbody></table><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/shared/utility/consoleCommander.ts#L25" target="_blank" rel="noreferrer">shared/utility/consoleCommander.ts:25</a></p><hr><h3 id="invokecommand" tabindex="-1">invokeCommand <a class="header-anchor" href="#invokecommand" aria-label="Permalink to &quot;invokeCommand&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVShared.utility.consoleCommander.ConsoleCommander.<code>Static</code> <strong>invokeCommand</strong>(<code>cmdName</code>, <code>...args</code>): <code>void</code></p></div><p>Allows a console command to be invoked through other means.</p><p><strong><code>Static</code></strong></p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cmdName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>...args</code></td><td style="text-align:left;"><code>string</code>[]</td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/shared/utility/consoleCommander.ts#L37" target="_blank" rel="noreferrer">shared/utility/consoleCommander.ts:37</a></p><hr><h3 id="registerconsolecommand" tabindex="-1">registerConsoleCommand <a class="header-anchor" href="#registerconsolecommand" aria-label="Permalink to &quot;registerConsoleCommand&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">Usage</p><p>FluffyVShared.utility.consoleCommander.ConsoleCommander.<code>Static</code> <strong>registerConsoleCommand</strong>(<code>cmdName</code>, <code>callback</code>): <code>void</code></p></div><p>Register a Server-Side or Client-Side Console Command Depends on the folder you are writing inside of.</p><p><strong><code>Static</code></strong></p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cmdName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>callback</code></td><td style="text-align:left;">(...<code>args</code>: <code>string</code>[]) =&gt; <code>void</code></td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/FluffyTal-es/FluffyV/blob/3d35dcf/src/fv-core/shared/utility/consoleCommander.ts#L50" target="_blank" rel="noreferrer">shared/utility/consoleCommander.ts:50</a></p>',45),n=[d];function l(s,i,c,m,h,u){return t(),o("div",null,n)}const p=e(r,[["render",l]]);export{b as __pageData,p as default};
