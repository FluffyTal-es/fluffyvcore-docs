import{_ as o,c as l,x as e,a,t as d,S as n,o as c}from"./chunks/framework.175b5f45.js";const w=JSON.parse('{"title":"AthenaClient.webview.page.IPage","description":"","frontmatter":{"title":"AthenaClient.webview.page.IPage","outline":[1,3],"order":0},"headers":[],"relativePath":"api/interfaces/client_webview_page_IPage.md","lastUpdated":null}'),i={name:"api/interfaces/client_webview_page_IPage.md"},s={id:"frontmatter-title",tabindex:"-1"},r=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),h=n('<p><a href="./../modules/client_webview_page">client/webview/page</a>.IPage</p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="callbacks" tabindex="-1">callbacks <a class="header-anchor" href="#callbacks" aria-label="Permalink to &quot;callbacks&quot;">​</a></h3><p>• <strong>callbacks</strong>: <code>Object</code></p><p>Events to call when the page is opened.</p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>onClose</code></td><td style="text-align:left;"><a href="./../modules/client_webview_page_Internal#AnyCallback"><code>AnyCallback</code></a></td><td style="text-align:left;">Function to call when the View is closed.</td></tr><tr><td style="text-align:left;"><code>onReady</code></td><td style="text-align:left;"><a href="./../modules/client_webview_page_Internal#AnyCallback"><code>AnyCallback</code></a></td><td style="text-align:left;">Function to call when the View is loaded. Usually used to pass data to the WebView after it&#39;s ready.</td></tr></tbody></table><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/cdad41b/src/core/client/webview/page.ts#L22" target="_blank" rel="noreferrer">client/webview/page.ts:22</a></p><hr><h3 id="keybind" tabindex="-1">keybind <a class="header-anchor" href="#keybind" aria-label="Permalink to &quot;keybind&quot;">​</a></h3><p>• <code>Optional</code> <strong>keybind</strong>: <code>any</code></p><p>An optional hotkey to open / close the page. Set <code>useSameKeyToClose</code> to true to force the same key to close the interface.</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/cdad41b/src/core/client/webview/page.ts#L164" target="_blank" rel="noreferrer">client/webview/page.ts:164</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code></p><p>The full name of the Vue file you are trying to load.</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/cdad41b/src/core/client/webview/page.ts#L15" target="_blank" rel="noreferrer">client/webview/page.ts:15</a></p><hr><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h3><p>• <code>Optional</code> <strong>options</strong>: <code>Object</code></p><h4 id="type-declaration-1" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration-1" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>disableEscapeKey?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Disable the escape key auto-close bind.</td></tr><tr><td style="text-align:left;"><code>onClose?</code></td><td style="text-align:left;">{ <code>enableControls?</code>: <code>boolean</code> ; <code>enablePauseMenu?</code>: <code>boolean</code> ; <code>hideCursor?</code>: <code>boolean</code> ; <code>setIsMenuOpenToFalse?</code>: <code>boolean</code> ; <code>showHud?</code>: <code>boolean</code> ; <code>showOverlays?</code>: <code>boolean</code> ; <code>unblurBackground?</code>: <code>boolean</code> ; <code>unfocus?</code>: <code>boolean</code> }</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>onClose.enableControls?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable game controls on close.</td></tr><tr><td style="text-align:left;"><code>onClose.enablePauseMenu?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable the pause menu on close?</td></tr><tr><td style="text-align:left;"><code>onClose.hideCursor?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Hide the cursor when the WebView is closed?</td></tr><tr><td style="text-align:left;"><code>onClose.setIsMenuOpenToFalse?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Sets alt.Player.local.isMenuOpen to false if true.</td></tr><tr><td style="text-align:left;"><code>onClose.showHud?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Show the HUD when the WebView is closed?</td></tr><tr><td style="text-align:left;"><code>onClose.showOverlays?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Show overlays when the WebView is closed?</td></tr><tr><td style="text-align:left;"><code>onClose.unblurBackground?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Unblur the game.</td></tr><tr><td style="text-align:left;"><code>onClose.unfocus?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Unfocus the WebView when it is closed?</td></tr><tr><td style="text-align:left;"><code>onOpen?</code></td><td style="text-align:left;">{ <code>blurBackground?</code>: <code>boolean</code> ; <code>disableControls?</code>: <code>&quot;all&quot;</code> | <code>&quot;camera&quot;</code> | <code>&quot;none&quot;</code> ; <code>disablePauseMenu?</code>: <code>boolean</code> ; <code>focus?</code>: <code>boolean</code> ; <code>hideHud?</code>: <code>boolean</code> ; <code>hideOverlays?</code>: <code>boolean</code> ; <code>setIsMenuOpenToTrue?</code>: <code>boolean</code> ; <code>showCursor?</code>: <code>boolean</code> }</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>onOpen.blurBackground?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Blur the game.</td></tr><tr><td style="text-align:left;"><code>onOpen.disableControls?</code></td><td style="text-align:left;"><code>&quot;all&quot;</code> | <code>&quot;camera&quot;</code> | <code>&quot;none&quot;</code></td><td style="text-align:left;">Disable game controls on open?</td></tr><tr><td style="text-align:left;"><code>onOpen.disablePauseMenu?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Disable pause menu while this page is open?</td></tr><tr><td style="text-align:left;"><code>onOpen.focus?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Focus the WebView when this page is opened.</td></tr><tr><td style="text-align:left;"><code>onOpen.hideHud?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Hide the HUD when the WebView is opened.</td></tr><tr><td style="text-align:left;"><code>onOpen.hideOverlays?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Hide overlays when the WebView is opened.</td></tr><tr><td style="text-align:left;"><code>onOpen.setIsMenuOpenToTrue?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Sets alt.Player.local.isMenuOpen to false if false.</td></tr><tr><td style="text-align:left;"><code>onOpen.showCursor?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Show the cursor when the WebView is focused?</td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/Stuyk/altv-athena/blob/cdad41b/src/core/client/webview/page.ts#L34" target="_blank" rel="noreferrer">client/webview/page.ts:34</a></p>',28);function b(t,f,g,p,y,u){return c(),l("div",null,[e("h1",s,[a(d(t.$frontmatter.title)+" ",1),r]),h])}const m=o(i,[["render",b]]);export{w as __pageData,m as default};
