"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[98083],{253410:(e,t,o)=>{o.r(t),o.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-19e8a88b","path":"/devices/ZB006-X.html","title":"Fantem ZB006-X control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Fantem ZB006-X control via MQTT","description":"Integrate your Fantem ZB006-X via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-05-30T19:17:03.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light","slug":"light","link":"#light","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Control_mode (enum)","slug":"control-mode-enum","link":"#control-mode-enum","children":[]},{"level":3,"title":"Switch_type (enum)","slug":"switch-type-enum","link":"#switch-type-enum","children":[]},{"level":3,"title":"Switch_status (numeric)","slug":"switch-status-numeric","link":"#switch-status-numeric","children":[]},{"level":3,"title":"Load_detection_mode (enum)","slug":"load-detection-mode-enum","link":"#load-detection-mode-enum","children":[]},{"level":3,"title":"Load_type (enum)","slug":"load-type-enum","link":"#load-type-enum","children":[]},{"level":3,"title":"Load_dimmable (enum)","slug":"load-dimmable-enum","link":"#load-dimmable-enum","children":[]},{"level":3,"title":"Power_supply_mode (enum)","slug":"power-supply-mode-enum","link":"#power-supply-mode-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1672995909000},"filePathRelative":"devices/ZB006-X.md"}')},962458:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var n=o(166252);const a=(0,n._)("h1",{id:"fantem-zb006-x",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#fantem-zb006-x","aria-hidden":"true"},"#"),(0,n.Uk)(" Fantem ZB006-X")],-1),s=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),i=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"ZB006-X")],-1),d=(0,n._)("td",null,"Vendor",-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Smart dimmer module")],-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"light (state, brightness), action, control_mode, switch_type, switch_status, load_detection_mode, load_type, load_dimmable, power_supply_mode, linkquality")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZB006-X.jpg",alt:"Fantem ZB006-X"})])],-1),u=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),p=(0,n.uE)('<ul><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_move_down</code>, <code>brightness_move_up</code>, <code>brightness_stop</code>.</p><h3 id="control-mode-enum" tabindex="-1"><a class="header-anchor" href="#control-mode-enum" aria-hidden="true">#</a> Control_mode (enum)</h3><p>Control mode. Value can be found in the published state on the <code>control_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;control_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>ext_switch</code>, <code>remote</code>, <code>both</code>.</p><h3 id="switch-type-enum" tabindex="-1"><a class="header-anchor" href="#switch-type-enum" aria-hidden="true">#</a> Switch_type (enum)</h3><p>External switch type. Value can be found in the published state on the <code>switch_type</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;switch_type&quot;: NEW_VALUE}</code>. The possible values are: <code>unknown</code>, <code>toggle</code>, <code>momentary</code>, <code>rotary</code>, <code>auto_config</code>.</p><h3 id="switch-status-numeric" tabindex="-1"><a class="header-anchor" href="#switch-status-numeric" aria-hidden="true">#</a> Switch_status (numeric)</h3><p>External switch status. Value can be found in the published state on the <code>switch_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-10000</code> and the maximum value is <code>10000</code>.</p><h3 id="load-detection-mode-enum" tabindex="-1"><a class="header-anchor" href="#load-detection-mode-enum" aria-hidden="true">#</a> Load_detection_mode (enum)</h3><p>Load detection mode. Value can be found in the published state on the <code>load_detection_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;load_detection_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>none</code>, <code>first_power_on</code>, <code>every_power_on</code>.</p><h3 id="load-type-enum" tabindex="-1"><a class="header-anchor" href="#load-type-enum" aria-hidden="true">#</a> Load_type (enum)</h3><p>Load type. Value can be found in the published state on the <code>load_type</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>unknown</code>, <code>resistive_capacitive</code>, <code>unknown</code>, <code>detecting</code>.</p><h3 id="load-dimmable-enum" tabindex="-1"><a class="header-anchor" href="#load-dimmable-enum" aria-hidden="true">#</a> Load_dimmable (enum)</h3><p>Load dimmable. Value can be found in the published state on the <code>load_dimmable</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>unknown</code>, <code>dimmable</code>, <code>not_dimmable</code>.</p><h3 id="power-supply-mode-enum" tabindex="-1"><a class="header-anchor" href="#power-supply-mode-enum" aria-hidden="true">#</a> Power_supply_mode (enum)</h3><p>Power supply mode. Value can be found in the published state on the <code>power_supply_mode</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>unknown</code>, <code>no_neutral</code>, <code>with_neutral</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',32),h={},m=(0,o(983744).Z)(h,[["render",function(e,t){const o=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[s,(0,n._)("tbody",null,[i,(0,n._)("tr",null,[d,(0,n._)("td",null,[(0,n.Wm)(o,{to:"/supported-devices/#v=Fantem"},{default:(0,n.w5)((()=>[(0,n.Uk)("Fantem")])),_:1})])]),l,c,r])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,n.kq)(" Notes END: Do not edit below this line "),u,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);