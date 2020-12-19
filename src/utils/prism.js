/* PrismJS 1.22.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript+bash+css-extras+json+markdown+shell-session&plugins=line-highlight+line-numbers+inline-color+autoloader+keep-markup+command-line+toolbar+copy-to-clipboard+filter-highlight-all */
var _self =
		'undefined' != typeof window
			? window
			: 'undefined' != typeof WorkerGlobalScope &&
			  self instanceof WorkerGlobalScope
			? self
			: {},
	Prism = (function (u) {
		var c = /\blang(?:uage)?-([\w-]+)\b/i,
			n = 0,
			_ = {
				manual: u.Prism && u.Prism.manual,
				disableWorkerMessageHandler:
					u.Prism && u.Prism.disableWorkerMessageHandler,
				util: {
					encode: function e(n) {
						return n instanceof M
							? new M(n.type, e(n.content), n.alias)
							: Array.isArray(n)
							? n.map(e)
							: n
									.replace(/&/g, '&amp;')
									.replace(/</g, '&lt;')
									.replace(/\u00a0/g, ' ')
					},
					type: function (e) {
						return Object.prototype.toString.call(e).slice(8, -1)
					},
					objId: function (e) {
						return (
							e.__id || Object.defineProperty(e, '__id', { value: ++n }), e.__id
						)
					},
					clone: function t(e, r) {
						var a, n
						switch (((r = r || {}), _.util.type(e))) {
							case 'Object':
								if (((n = _.util.objId(e)), r[n])) return r[n]
								for (var i in ((a = {}), (r[n] = a), e))
									e.hasOwnProperty(i) && (a[i] = t(e[i], r))
								return a
							case 'Array':
								return (
									(n = _.util.objId(e)),
									r[n]
										? r[n]
										: ((a = []),
										  (r[n] = a),
										  e.forEach(function (e, n) {
												a[n] = t(e, r)
										  }),
										  a)
								)
							default:
								return e
						}
					},
					getLanguage: function (e) {
						for (; e && !c.test(e.className); ) e = e.parentElement
						return e
							? (e.className.match(c) || [, 'none'])[1].toLowerCase()
							: 'none'
					},
					currentScript: function () {
						if ('undefined' == typeof document) return null
						if ('currentScript' in document) return document.currentScript
						try {
							throw new Error()
						} catch (e) {
							var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(e.stack) || [])[1]
							if (n) {
								var t = document.getElementsByTagName('script')
								for (var r in t) if (t[r].src == n) return t[r]
							}
							return null
						}
					},
					isActive: function (e, n, t) {
						for (var r = 'no-' + n; e; ) {
							var a = e.classList
							if (a.contains(n)) return !0
							if (a.contains(r)) return !1
							e = e.parentElement
						}
						return !!t
					},
				},
				languages: {
					extend: function (e, n) {
						var t = _.util.clone(_.languages[e])
						for (var r in n) t[r] = n[r]
						return t
					},
					insertBefore: function (t, e, n, r) {
						var a = (r = r || _.languages)[t],
							i = {}
						for (var l in a)
							if (a.hasOwnProperty(l)) {
								if (l == e)
									for (var o in n) n.hasOwnProperty(o) && (i[o] = n[o])
								n.hasOwnProperty(l) || (i[l] = a[l])
							}
						var s = r[t]
						return (
							(r[t] = i),
							_.languages.DFS(_.languages, function (e, n) {
								n === s && e != t && (this[e] = i)
							}),
							i
						)
					},
					DFS: function e(n, t, r, a) {
						a = a || {}
						var i = _.util.objId
						for (var l in n)
							if (n.hasOwnProperty(l)) {
								t.call(n, l, n[l], r || l)
								var o = n[l],
									s = _.util.type(o)
								'Object' !== s || a[i(o)]
									? 'Array' !== s || a[i(o)] || ((a[i(o)] = !0), e(o, t, l, a))
									: ((a[i(o)] = !0), e(o, t, null, a))
							}
					},
				},
				plugins: {},
				highlightAll: function (e, n) {
					_.highlightAllUnder(document, e, n)
				},
				highlightAllUnder: function (e, n, t) {
					var r = {
						callback: t,
						container: e,
						selector:
							'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
					}
					_.hooks.run('before-highlightall', r),
						(r.elements = Array.prototype.slice.apply(
							r.container.querySelectorAll(r.selector)
						)),
						_.hooks.run('before-all-elements-highlight', r)
					for (var a, i = 0; (a = r.elements[i++]); )
						_.highlightElement(a, !0 === n, r.callback)
				},
				highlightElement: function (e, n, t) {
					var r = _.util.getLanguage(e),
						a = _.languages[r]
					e.className =
						e.className.replace(c, '').replace(/\s+/g, ' ') + ' language-' + r
					var i = e.parentElement
					i &&
						'pre' === i.nodeName.toLowerCase() &&
						(i.className =
							i.className.replace(c, '').replace(/\s+/g, ' ') +
							' language-' +
							r)
					var l = { element: e, language: r, grammar: a, code: e.textContent }
					function o(e) {
						;(l.highlightedCode = e),
							_.hooks.run('before-insert', l),
							(l.element.innerHTML = l.highlightedCode),
							_.hooks.run('after-highlight', l),
							_.hooks.run('complete', l),
							t && t.call(l.element)
					}
					if ((_.hooks.run('before-sanity-check', l), !l.code))
						return _.hooks.run('complete', l), void (t && t.call(l.element))
					if ((_.hooks.run('before-highlight', l), l.grammar))
						if (n && u.Worker) {
							var s = new Worker(_.filename)
							;(s.onmessage = function (e) {
								o(e.data)
							}),
								s.postMessage(
									JSON.stringify({
										language: l.language,
										code: l.code,
										immediateClose: !0,
									})
								)
						} else o(_.highlight(l.code, l.grammar, l.language))
					else o(_.util.encode(l.code))
				},
				highlight: function (e, n, t) {
					var r = { code: e, grammar: n, language: t }
					return (
						_.hooks.run('before-tokenize', r),
						(r.tokens = _.tokenize(r.code, r.grammar)),
						_.hooks.run('after-tokenize', r),
						M.stringify(_.util.encode(r.tokens), r.language)
					)
				},
				tokenize: function (e, n) {
					var t = n.rest
					if (t) {
						for (var r in t) n[r] = t[r]
						delete n.rest
					}
					var a = new i()
					return (
						z(a, a.head, e),
						(function e(n, t, r, a, i, l) {
							for (var o in r)
								if (r.hasOwnProperty(o) && r[o]) {
									var s = r[o]
									s = Array.isArray(s) ? s : [s]
									for (var u = 0; u < s.length; ++u) {
										if (l && l.cause == o + ',' + u) return
										var c = s[u],
											g = c.inside,
											f = !!c.lookbehind,
											h = !!c.greedy,
											d = c.alias
										if (h && !c.pattern.global) {
											var v = c.pattern.toString().match(/[imsuy]*$/)[0]
											c.pattern = RegExp(c.pattern.source, v + 'g')
										}
										for (
											var p = c.pattern || c, m = a.next, y = i;
											m !== t.tail && !(l && y >= l.reach);
											y += m.value.length, m = m.next
										) {
											var k = m.value
											if (t.length > n.length) return
											if (!(k instanceof M)) {
												var b,
													x = 1
												if (h) {
													if (!(b = W(p, y, n, f))) break
													var w = b.index,
														A = b.index + b[0].length,
														P = y
													for (P += m.value.length; P <= w; )
														(m = m.next), (P += m.value.length)
													if (
														((P -= m.value.length),
														(y = P),
														m.value instanceof M)
													)
														continue
													for (
														var S = m;
														S !== t.tail &&
														(P < A || 'string' == typeof S.value);
														S = S.next
													)
														x++, (P += S.value.length)
													x--, (k = n.slice(y, P)), (b.index -= y)
												} else if (!(b = W(p, 0, k, f))) continue
												var w = b.index,
													E = b[0],
													O = k.slice(0, w),
													L = k.slice(w + E.length),
													N = y + k.length
												l && N > l.reach && (l.reach = N)
												var j = m.prev
												O && ((j = z(t, j, O)), (y += O.length)), I(t, j, x)
												var C = new M(o, g ? _.tokenize(E, g) : E, d, E)
												;(m = z(t, j, C)),
													L && z(t, m, L),
													1 < x &&
														e(n, t, r, m.prev, y, {
															cause: o + ',' + u,
															reach: N,
														})
											}
										}
									}
								}
						})(e, a, n, a.head, 0),
						(function (e) {
							var n = [],
								t = e.head.next
							for (; t !== e.tail; ) n.push(t.value), (t = t.next)
							return n
						})(a)
					)
				},
				hooks: {
					all: {},
					add: function (e, n) {
						var t = _.hooks.all
						;(t[e] = t[e] || []), t[e].push(n)
					},
					run: function (e, n) {
						var t = _.hooks.all[e]
						if (t && t.length) for (var r, a = 0; (r = t[a++]); ) r(n)
					},
				},
				Token: M,
			}
		function M(e, n, t, r) {
			;(this.type = e),
				(this.content = n),
				(this.alias = t),
				(this.length = 0 | (r || '').length)
		}
		function W(e, n, t, r) {
			e.lastIndex = n
			var a = e.exec(t)
			if (a && r && a[1]) {
				var i = a[1].length
				;(a.index += i), (a[0] = a[0].slice(i))
			}
			return a
		}
		function i() {
			var e = { value: null, prev: null, next: null },
				n = { value: null, prev: e, next: null }
			;(e.next = n), (this.head = e), (this.tail = n), (this.length = 0)
		}
		function z(e, n, t) {
			var r = n.next,
				a = { value: t, prev: n, next: r }
			return (n.next = a), (r.prev = a), e.length++, a
		}
		function I(e, n, t) {
			for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next
			;((n.next = r).prev = n), (e.length -= a)
		}
		if (
			((u.Prism = _),
			(M.stringify = function n(e, t) {
				if ('string' == typeof e) return e
				if (Array.isArray(e)) {
					var r = ''
					return (
						e.forEach(function (e) {
							r += n(e, t)
						}),
						r
					)
				}
				var a = {
						type: e.type,
						content: n(e.content, t),
						tag: 'span',
						classes: ['token', e.type],
						attributes: {},
						language: t,
					},
					i = e.alias
				i &&
					(Array.isArray(i)
						? Array.prototype.push.apply(a.classes, i)
						: a.classes.push(i)),
					_.hooks.run('wrap', a)
				var l = ''
				for (var o in a.attributes)
					l +=
						' ' +
						o +
						'="' +
						(a.attributes[o] || '').replace(/"/g, '&quot;') +
						'"'
				return (
					'<' +
					a.tag +
					' class="' +
					a.classes.join(' ') +
					'"' +
					l +
					'>' +
					a.content +
					'</' +
					a.tag +
					'>'
				)
			}),
			!u.document)
		)
			return (
				u.addEventListener &&
					(_.disableWorkerMessageHandler ||
						u.addEventListener(
							'message',
							function (e) {
								var n = JSON.parse(e.data),
									t = n.language,
									r = n.code,
									a = n.immediateClose
								u.postMessage(_.highlight(r, _.languages[t], t)), a && u.close()
							},
							!1
						)),
				_
			)
		var e = _.util.currentScript()
		function t() {
			_.manual || _.highlightAll()
		}
		if (
			(e &&
				((_.filename = e.src),
				e.hasAttribute('data-manual') && (_.manual = !0)),
			!_.manual)
		) {
			var r = document.readyState
			'loading' === r || ('interactive' === r && e && e.defer)
				? document.addEventListener('DOMContentLoaded', t)
				: window.requestAnimationFrame
				? window.requestAnimationFrame(t)
				: window.setTimeout(t, 16)
		}
		return _
	})(_self)
'undefined' != typeof module && module.exports && (module.exports = Prism),
	'undefined' != typeof global && (global.Prism = Prism)
;(Prism.languages.markup = {
	comment: /<!--[\s\S]*?-->/,
	prolog: /<\?[\s\S]+?\?>/,
	doctype: {
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: !0,
		inside: {
			'internal-subset': {
				pattern: /(\[)[\s\S]+(?=\]>$)/,
				lookbehind: !0,
				greedy: !0,
				inside: null,
			},
			string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
			punctuation: /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/,
			name: /[^\s<>'"]+/,
		},
	},
	cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
	tag: {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: !0,
		inside: {
			tag: {
				pattern: /^<\/?[^\s>\/]+/,
				inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
			},
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
				},
			},
			punctuation: /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: { namespace: /^[^\s>\/:]+:/ },
			},
		},
	},
	entity: [
		{ pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
		/&#x?[\da-f]{1,8};/i,
	],
}),
	(Prism.languages.markup.tag.inside['attr-value'].inside.entity =
		Prism.languages.markup.entity),
	(Prism.languages.markup.doctype.inside['internal-subset'].inside =
		Prism.languages.markup),
	Prism.hooks.add('wrap', function (a) {
		'entity' === a.type &&
			(a.attributes.title = a.content.replace(/&amp;/, '&'))
	}),
	Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
		value: function (a, e) {
			var s = {}
			;(s['language-' + e] = {
				pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
				lookbehind: !0,
				inside: Prism.languages[e],
			}),
				(s.cdata = /^<!\[CDATA\[|\]\]>$/i)
			var n = {
				'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: s },
			}
			n['language-' + e] = { pattern: /[\s\S]+/, inside: Prism.languages[e] }
			var t = {}
			;(t[a] = {
				pattern: RegExp(
					'(<__[^]*?>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)'.replace(
						/__/g,
						function () {
							return a
						}
					),
					'i'
				),
				lookbehind: !0,
				greedy: !0,
				inside: n,
			}),
				Prism.languages.insertBefore('markup', 'cdata', t)
		},
	}),
	(Prism.languages.html = Prism.languages.markup),
	(Prism.languages.mathml = Prism.languages.markup),
	(Prism.languages.svg = Prism.languages.markup),
	(Prism.languages.xml = Prism.languages.extend('markup', {})),
	(Prism.languages.ssml = Prism.languages.xml),
	(Prism.languages.atom = Prism.languages.xml),
	(Prism.languages.rss = Prism.languages.xml)
!(function (e) {
	var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
	;(e.languages.css = {
		comment: /\/\*[\s\S]*?\*\//,
		atrule: {
			pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
			inside: {
				rule: /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
					lookbehind: !0,
					alias: 'selector',
				},
				keyword: {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: !0,
				},
			},
		},
		url: {
			pattern: RegExp(
				'\\burl\\((?:' + t.source + '|(?:[^\\\\\r\n()"\']|\\\\[^])*)\\)',
				'i'
			),
			greedy: !0,
			inside: {
				function: /^url/i,
				punctuation: /^\(|\)$/,
				string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' },
			},
		},
		selector: RegExp('[^{}\\s](?:[^{};"\']|' + t.source + ')*?(?=\\s*\\{)'),
		string: { pattern: t, greedy: !0 },
		property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
		important: /!important\b/i,
		function: /[-a-z0-9]+(?=\()/i,
		punctuation: /[(){};:,]/,
	}),
		(e.languages.css.atrule.inside.rest = e.languages.css)
	var s = e.languages.markup
	s &&
		(s.tag.addInlined('style', 'css'),
		e.languages.insertBefore(
			'inside',
			'attr-value',
			{
				'style-attr': {
					pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
					lookbehind: !0,
					inside: {
						'attr-value': {
							pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
							inside: {
								style: {
									pattern: /(["'])[\s\S]+(?=["']$)/,
									lookbehind: !0,
									alias: 'language-css',
									inside: e.languages.css,
								},
								punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
							},
						},
						'attr-name': /^style/i,
					},
				},
			},
			s.tag
		))
})(Prism)
Prism.languages.clike = {
	comment: [
		{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 },
		{ pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
	],
	string: {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: !0,
	},
	'class-name': {
		pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: !0,
		inside: { punctuation: /[.\\]/ },
	},
	keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
	boolean: /\b(?:true|false)\b/,
	function: /\w+(?=\()/,
	number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
	operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	punctuation: /[{}[\];(),.:]/,
}
;(Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
			lookbehind: !0,
		},
	],
	keyword: [
		{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: !0,
		},
	],
	number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
	function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
	(Prism.languages.javascript[
		'class-name'
	][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
	Prism.languages.insertBefore('javascript', 'keyword', {
		regex: {
			pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
			lookbehind: !0,
			greedy: !0,
			inside: {
				'regex-source': {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: !0,
					alias: 'language-regex',
					inside: Prism.languages.regex,
				},
				'regex-flags': /[a-z]+$/,
				'regex-delimiter': /^\/|\/$/,
			},
		},
		'function-variable': {
			pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
			alias: 'function',
		},
		parameter: [
			{
				pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
				inside: Prism.languages.javascript,
			},
			{
				pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
			{
				pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
				lookbehind: !0,
				inside: Prism.languages.javascript,
			},
		],
		constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
	}),
	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
			greedy: !0,
			inside: {
				'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
				interpolation: {
					pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
					lookbehind: !0,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\${|}$/,
							alias: 'punctuation',
						},
						rest: Prism.languages.javascript,
					},
				},
				string: /[\s\S]+/,
			},
		},
	}),
	Prism.languages.markup &&
		Prism.languages.markup.tag.addInlined('script', 'javascript'),
	(Prism.languages.js = Prism.languages.javascript)
!(function (e) {
	var t =
			'\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
		n = {
			pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
			lookbehind: !0,
			alias: 'punctuation',
			inside: null,
		},
		a = {
			bash: n,
			environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
			variable: [
				{
					pattern: /\$?\(\([\s\S]+?\)\)/,
					greedy: !0,
					inside: {
						variable: [
							{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
							/^\$\(\(/,
						],
						number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
						operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
						punctuation: /\(\(?|\)\)?|,|;/,
					},
				},
				{
					pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
					greedy: !0,
					inside: { variable: /^\$\(|^`|\)$|`$/ },
				},
				{
					pattern: /\$\{[^}]+\}/,
					greedy: !0,
					inside: {
						operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
						punctuation: /[\[\]]/,
						environment: {
							pattern: RegExp('(\\{)' + t),
							lookbehind: !0,
							alias: 'constant',
						},
					},
				},
				/\$(?:\w+|[#?*!@$])/,
			],
			entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
		}
	;(e.languages.bash = {
		shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
		comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
		'function-name': [
			{
				pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
				lookbehind: !0,
				alias: 'function',
			},
			{ pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
		],
		'for-or-select': {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: 'variable',
			lookbehind: !0,
		},
		'assign-left': {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
			inside: {
				environment: {
					pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
					lookbehind: !0,
					alias: 'constant',
				},
			},
			alias: 'variable',
			lookbehind: !0,
		},
		string: [
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: !0,
				greedy: !0,
				inside: a,
			},
			{
				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: !0,
				greedy: !0,
				inside: { bash: n },
			},
			{
				pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
				lookbehind: !0,
				greedy: !0,
				inside: a,
			},
		],
		environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
		variable: a.variable,
		function: {
			pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		keyword: {
			pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		builtin: {
			pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
			lookbehind: !0,
			alias: 'class-name',
		},
		boolean: {
			pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
			lookbehind: !0,
		},
		'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
		operator: {
			pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
			inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } },
		},
		punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
	}),
		(n.inside = e.languages.bash)
	for (
		var s = [
				'comment',
				'function-name',
				'for-or-select',
				'assign-left',
				'string',
				'environment',
				'function',
				'keyword',
				'builtin',
				'boolean',
				'file-descriptor',
				'operator',
				'punctuation',
				'number',
			],
			i = a.variable[1].inside,
			o = 0;
		o < s.length;
		o++
	)
		i[s[o]] = e.languages.bash[s[o]]
	e.languages.shell = e.languages.bash
})(Prism)
!(function (e) {
	var a,
		n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
	;(e.languages.css.selector = {
		pattern: e.languages.css.selector,
		inside: (a = {
			'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
			'pseudo-class': /:[-\w]+/,
			class: /\.[-\w]+/,
			id: /#[-\w]+/,
			attribute: {
				pattern: RegExp('\\[(?:[^[\\]"\']|' + n.source + ')*\\]'),
				greedy: !0,
				inside: {
					punctuation: /^\[|\]$/,
					'case-sensitivity': {
						pattern: /(\s)[si]$/i,
						lookbehind: !0,
						alias: 'keyword',
					},
					namespace: {
						pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
						lookbehind: !0,
						inside: { punctuation: /\|$/ },
					},
					'attr-name': { pattern: /^(\s*)[-\w\xA0-\uFFFF]+/, lookbehind: !0 },
					'attr-value': [
						n,
						{ pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/, lookbehind: !0 },
					],
					operator: /[|~*^$]?=/,
				},
			},
			'n-th': [
				{
					pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
					lookbehind: !0,
					inside: { number: /[\dn]+/, operator: /[+-]/ },
				},
				{ pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
			],
			combinator: />|\+|~|\|\|/,
			punctuation: /[(),]/,
		}),
	}),
		(e.languages.css.atrule.inside['selector-function-argument'].inside = a),
		e.languages.insertBefore('css', 'property', {
			variable: {
				pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
				lookbehind: !0,
			},
		})
	var r = { pattern: /(\b\d+)(?:%|[a-z]+\b)/, lookbehind: !0 },
		i = { pattern: /(^|[^\w.-])-?\d*\.?\d+/, lookbehind: !0 }
	e.languages.insertBefore('css', 'function', {
		operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
		hexcode: { pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i, alias: 'color' },
		color: [
			/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
			{
				pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
				inside: {
					unit: r,
					number: i,
					function: /[\w-]+(?=\()/,
					punctuation: /[(),]/,
				},
			},
		],
		entity: /\\[\da-f]{1,8}/i,
		unit: r,
		number: i,
	})
})(Prism)
;(Prism.languages.json = {
	property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
	string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
	comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
	number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	punctuation: /[{}[\],]/,
	operator: /:/,
	boolean: /\b(?:true|false)\b/,
	null: { pattern: /\bnull\b/, alias: 'keyword' },
}),
	(Prism.languages.webmanifest = Prism.languages.json)
!(function (d) {
	function n(n) {
		return (
			(n = n.replace(/<inner>/g, function () {
				return '(?:\\\\.|[^\\\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))'
			})),
			RegExp('((?:^|[^\\\\])(?:\\\\{2})*)(?:' + n + ')')
		)
	}
	var e = '(?:\\\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\\\|\r\n`])+',
		t = '\\|?__(?:\\|__)+\\|?(?:(?:\n|\r\n?)|$)'.replace(/__/g, function () {
			return e
		}),
		a = '\\|?[ \t]*:?-{3,}:?[ \t]*(?:\\|[ \t]*:?-{3,}:?[ \t]*)+\\|?(?:\n|\r\n?)'
	;(d.languages.markdown = d.languages.extend('markup', {})),
		d.languages.insertBefore('markdown', 'prolog', {
			'front-matter-block': {
				pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
				lookbehind: !0,
				greedy: !0,
				inside: {
					punctuation: /^---|---$/,
					'font-matter': {
						pattern: /\S+(?:\s+\S+)*/,
						alias: ['yaml', 'language-yaml'],
						inside: d.languages.yaml,
					},
				},
			},
			blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
			table: {
				pattern: RegExp('^' + t + a + '(?:' + t + ')*', 'm'),
				inside: {
					'table-data-rows': {
						pattern: RegExp('^(' + t + a + ')(?:' + t + ')*$'),
						lookbehind: !0,
						inside: {
							'table-data': {
								pattern: RegExp(e),
								inside: d.languages.markdown,
							},
							punctuation: /\|/,
						},
					},
					'table-line': {
						pattern: RegExp('^(' + t + ')' + a + '$'),
						lookbehind: !0,
						inside: { punctuation: /\||:?-{3,}:?/ },
					},
					'table-header-row': {
						pattern: RegExp('^' + t + '$'),
						inside: {
							'table-header': {
								pattern: RegExp(e),
								alias: 'important',
								inside: d.languages.markdown,
							},
							punctuation: /\|/,
						},
					},
				},
			},
			code: [
				{
					pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
					lookbehind: !0,
					alias: 'keyword',
				},
				{ pattern: /``.+?``|`[^`\r\n]+`/, alias: 'keyword' },
				{
					pattern: /^```[\s\S]*?^```$/m,
					greedy: !0,
					inside: {
						'code-block': {
							pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
							lookbehind: !0,
						},
						'code-language': { pattern: /^(```).+/, lookbehind: !0 },
						punctuation: /```/,
					},
				},
			],
			title: [
				{
					pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
					alias: 'important',
					inside: { punctuation: /==+$|--+$/ },
				},
				{
					pattern: /(^\s*)#+.+/m,
					lookbehind: !0,
					alias: 'important',
					inside: { punctuation: /^#+|#+$/ },
				},
			],
			hr: {
				pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
				lookbehind: !0,
				alias: 'punctuation',
			},
			list: {
				pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
				lookbehind: !0,
				alias: 'punctuation',
			},
			'url-reference': {
				pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
				inside: {
					variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
					string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
					punctuation: /^[\[\]!:]|[<>]/,
				},
				alias: 'url',
			},
			bold: {
				pattern: n(
					'\\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\\b|\\*\\*(?:(?!\\*)<inner>|\\*(?:(?!\\*)<inner>)+\\*)+\\*\\*'
				),
				lookbehind: !0,
				greedy: !0,
				inside: {
					content: {
						pattern: /(^..)[\s\S]+(?=..$)/,
						lookbehind: !0,
						inside: {},
					},
					punctuation: /\*\*|__/,
				},
			},
			italic: {
				pattern: n(
					'\\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\\b|\\*(?:(?!\\*)<inner>|\\*\\*(?:(?!\\*)<inner>)+\\*\\*)+\\*'
				),
				lookbehind: !0,
				greedy: !0,
				inside: {
					content: { pattern: /(^.)[\s\S]+(?=.$)/, lookbehind: !0, inside: {} },
					punctuation: /[*_]/,
				},
			},
			strike: {
				pattern: n('(~~?)(?:(?!~)<inner>)+?\\2'),
				lookbehind: !0,
				greedy: !0,
				inside: {
					content: {
						pattern: /(^~~?)[\s\S]+(?=\1$)/,
						lookbehind: !0,
						inside: {},
					},
					punctuation: /~~?/,
				},
			},
			url: {
				pattern: n(
					'!?\\[(?:(?!\\])<inner>)+\\](?:\\([^\\s)]+(?:[\t ]+"(?:\\\\.|[^"\\\\])*")?\\)| ?\\[(?:(?!\\])<inner>)+\\])'
				),
				lookbehind: !0,
				greedy: !0,
				inside: {
					variable: { pattern: /(\[)[^\]]+(?=\]$)/, lookbehind: !0 },
					content: {
						pattern: /(^!?\[)[^\]]+(?=\])/,
						lookbehind: !0,
						inside: {},
					},
					string: { pattern: /"(?:\\.|[^"\\])*"(?=\)$)/ },
				},
			},
		}),
		['url', 'bold', 'italic', 'strike'].forEach(function (e) {
			;['url', 'bold', 'italic', 'strike'].forEach(function (n) {
				e !== n &&
					(d.languages.markdown[e].inside.content.inside[n] =
						d.languages.markdown[n])
			})
		}),
		d.hooks.add('after-tokenize', function (n) {
			;('markdown' !== n.language && 'md' !== n.language) ||
				!(function n(e) {
					if (e && 'string' != typeof e)
						for (var t = 0, a = e.length; t < a; t++) {
							var i = e[t]
							if ('code' === i.type) {
								var r = i.content[1],
									o = i.content[3]
								if (
									r &&
									o &&
									'code-language' === r.type &&
									'code-block' === o.type &&
									'string' == typeof r.content
								) {
									var l = r.content
											.replace(/\b#/g, 'sharp')
											.replace(/\b\+\+/g, 'pp'),
										s =
											'language-' +
											(l = (/[a-z][\w-]*/i.exec(l) || [''])[0].toLowerCase())
									o.alias
										? 'string' == typeof o.alias
											? (o.alias = [o.alias, s])
											: o.alias.push(s)
										: (o.alias = [s])
								}
							} else n(i.content)
						}
				})(n.tokens)
		}),
		d.hooks.add('wrap', function (n) {
			if ('code-block' === n.type) {
				for (var e = '', t = 0, a = n.classes.length; t < a; t++) {
					var i = n.classes[t],
						r = /language-(.+)/.exec(i)
					if (r) {
						e = r[1]
						break
					}
				}
				var o = d.languages[e]
				if (o) {
					var l = n.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&')
					n.content = d.highlight(l, o, e)
				} else if (e && 'none' !== e && d.plugins.autoloader) {
					var s =
						'md-' +
						new Date().valueOf() +
						'-' +
						Math.floor(1e16 * Math.random())
					;(n.attributes.id = s),
						d.plugins.autoloader.loadLanguages(e, function () {
							var n = document.getElementById(s)
							n && (n.innerHTML = d.highlight(n.textContent, d.languages[e], e))
						})
				}
			}
		}),
		(d.languages.md = d.languages.markdown)
})(Prism)
!(function (s) {
	var n = [
		'(["\'])(?:\\\\[^]|\\$\\([^)]+\\)|\\$(?!\\()|`[^`]+`|(?!\\1)[^\\\\`$])*\\1',
		'<<-?\\s*(["\']?)(\\w+)\\2\\s[^]*?[\r\n]\\3',
	].join('|')
	;(s.languages['shell-session'] = {
		command: {
			pattern: RegExp(
				'^(?:[^\\s@:$#*!/\\\\]+@[^\\s@:$#*!/\\\\]+(?::[^\0-\\x1F$#*?"<>:;|]+)?)?[$#](?:[^\\\\\r\n\'"<]|\\\\.|<<str>>)+'.replace(
					/<<str>>/g,
					function () {
						return n
					}
				),
				'm'
			),
			greedy: !0,
			inside: {
				info: {
					pattern: /^[^#$]+/,
					alias: 'punctuation',
					inside: {
						path: { pattern: /(:)[\s\S]+/, lookbehind: !0 },
						user: /^[^:]+/,
						punctuation: /:/,
					},
				},
				bash: {
					pattern: /(^[$#]\s*)[\s\S]+/,
					lookbehind: !0,
					alias: 'language-bash',
					inside: s.languages.bash,
				},
				'shell-symbol': { pattern: /^[$#]/, alias: 'important' },
			},
		},
		output: /.(?:.*(?:[\r\n]|.$))*/,
	}),
		(s.languages['sh-session'] = s.languages.shellsession =
			s.languages['shell-session'])
})(Prism)
!(function () {
	if (
		'undefined' != typeof self &&
		self.Prism &&
		self.document &&
		document.querySelector
	) {
		var t,
			s = function () {
				if (void 0 === t) {
					var e = document.createElement('div')
					;(e.style.fontSize = '13px'),
						(e.style.lineHeight = '1.5'),
						(e.style.padding = '0'),
						(e.style.border = '0'),
						(e.innerHTML = '&nbsp;<br />&nbsp;'),
						document.body.appendChild(e),
						(t = 38 === e.offsetHeight),
						document.body.removeChild(e)
				}
				return t
			},
			l = !0,
			a = 0
		Prism.hooks.add('before-sanity-check', function (e) {
			var t = e.element.parentNode,
				n = t && t.getAttribute('data-line')
			if (t && n && /pre/i.test(t.nodeName)) {
				var i = 0
				g('.line-highlight', t).forEach(function (e) {
					;(i += e.textContent.length), e.parentNode.removeChild(e)
				}),
					i &&
						/^( \n)+$/.test(e.code.slice(-i)) &&
						(e.code = e.code.slice(0, -i))
			}
		}),
			Prism.hooks.add('complete', function e(t) {
				var n = t.element.parentNode,
					i = n && n.getAttribute('data-line')
				if (n && i && /pre/i.test(n.nodeName)) {
					clearTimeout(a)
					var r = Prism.plugins.lineNumbers,
						o = t.plugins && t.plugins.lineNumbers
					if (b(n, 'line-numbers') && r && !o)
						Prism.hooks.add('line-numbers', e)
					else u(n, i)(), (a = setTimeout(c, 1))
				}
			}),
			window.addEventListener('hashchange', c),
			window.addEventListener('resize', function () {
				g('pre[data-line]')
					.map(function (e) {
						return u(e)
					})
					.forEach(v)
			})
	}
	function g(e, t) {
		return Array.prototype.slice.call((t || document).querySelectorAll(e))
	}
	function b(e, t) {
		return (
			(t = ' ' + t + ' '),
			-1 < (' ' + e.className + ' ').replace(/[\n\t]/g, ' ').indexOf(t)
		)
	}
	function v(e) {
		e()
	}
	function u(u, e, c) {
		var t = (e = 'string' == typeof e ? e : u.getAttribute('data-line'))
				.replace(/\s+/g, '')
				.split(',')
				.filter(Boolean),
			d = +u.getAttribute('data-line-offset') || 0,
			f = (s() ? parseInt : parseFloat)(getComputedStyle(u).lineHeight),
			m = b(u, 'line-numbers'),
			p = m ? u : u.querySelector('code') || u,
			h = []
		t.forEach(function (e) {
			var t = e.split('-'),
				n = +t[0],
				i = +t[1] || n,
				r =
					u.querySelector('.line-highlight[data-range="' + e + '"]') ||
					document.createElement('div')
			if (
				(h.push(function () {
					r.setAttribute('aria-hidden', 'true'),
						r.setAttribute('data-range', e),
						(r.className = (c || '') + ' line-highlight')
				}),
				m && Prism.plugins.lineNumbers)
			) {
				var o = Prism.plugins.lineNumbers.getLine(u, n),
					a = Prism.plugins.lineNumbers.getLine(u, i)
				if (o) {
					var s = o.offsetTop + 'px'
					h.push(function () {
						r.style.top = s
					})
				}
				if (a) {
					var l = a.offsetTop - o.offsetTop + a.offsetHeight + 'px'
					h.push(function () {
						r.style.height = l
					})
				}
			} else
				h.push(function () {
					r.setAttribute('data-start', n),
						n < i && r.setAttribute('data-end', i),
						(r.style.top = (n - d - 1) * f + 'px'),
						(r.textContent = new Array(i - n + 2).join(' \n'))
				})
			h.push(function () {
				p.appendChild(r)
			})
		})
		var i = u.id
		if (m && i) {
			for (var n = 'linkable-line-numbers', r = !1, o = u; o; ) {
				if (b(o, n)) {
					r = !0
					break
				}
				o = o.parentElement
			}
			if (r) {
				b(u, n) ||
					h.push(function () {
						u.className = (u.className + ' ' + n).trim()
					})
				var a = parseInt(u.getAttribute('data-start') || '1')
				g('.line-numbers-rows > span', u).forEach(function (e, t) {
					var n = t + a
					e.onclick = function () {
						var e = i + '.' + n
						;(l = !1),
							(location.hash = e),
							setTimeout(function () {
								l = !0
							}, 1)
					}
				})
			}
		}
		return function () {
			h.forEach(v)
		}
	}
	function c() {
		var e = location.hash.slice(1)
		g('.temporary.line-highlight').forEach(function (e) {
			e.parentNode.removeChild(e)
		})
		var t = (e.match(/\.([\d,-]+)$/) || [, ''])[1]
		if (t && !document.getElementById(e)) {
			var n = e.slice(0, e.lastIndexOf('.')),
				i = document.getElementById(n)
			if (i)
				i.hasAttribute('data-line') || i.setAttribute('data-line', ''),
					u(i, t, 'temporary ')(),
					l &&
						document.querySelector('.temporary.line-highlight').scrollIntoView()
		}
	}
})()
!(function () {
	if ('undefined' != typeof self && self.Prism && self.document) {
		var o = 'line-numbers',
			a = /\n(?!$)/g,
			e = (Prism.plugins.lineNumbers = {
				getLine: function (e, n) {
					if ('PRE' === e.tagName && e.classList.contains(o)) {
						var t = e.querySelector('.line-numbers-rows')
						if (t) {
							var i = parseInt(e.getAttribute('data-start'), 10) || 1,
								r = i + (t.children.length - 1)
							n < i && (n = i), r < n && (n = r)
							var s = n - i
							return t.children[s]
						}
					}
				},
				resize: function (e) {
					u([e])
				},
				assumeViewportIndependence: !0,
			}),
			t = function (e) {
				return e
					? window.getComputedStyle
						? getComputedStyle(e)
						: e.currentStyle || null
					: null
			},
			n = void 0
		window.addEventListener('resize', function () {
			;(e.assumeViewportIndependence && n === window.innerWidth) ||
				((n = window.innerWidth),
				u(Array.prototype.slice.call(document.querySelectorAll('pre.' + o))))
		}),
			Prism.hooks.add('complete', function (e) {
				if (e.code) {
					var n = e.element,
						t = n.parentNode
					if (
						t &&
						/pre/i.test(t.nodeName) &&
						!n.querySelector('.line-numbers-rows') &&
						Prism.util.isActive(n, o)
					) {
						n.classList.remove(o), t.classList.add(o)
						var i,
							r = e.code.match(a),
							s = r ? r.length + 1 : 1,
							l = new Array(s + 1).join('<span></span>')
						;(i = document.createElement('span')).setAttribute(
							'aria-hidden',
							'true'
						),
							(i.className = 'line-numbers-rows'),
							(i.innerHTML = l),
							t.hasAttribute('data-start') &&
								(t.style.counterReset =
									'linenumber ' +
									(parseInt(t.getAttribute('data-start'), 10) - 1)),
							e.element.appendChild(i),
							u([t]),
							Prism.hooks.run('line-numbers', e)
					}
				}
			}),
			Prism.hooks.add('line-numbers', function (e) {
				;(e.plugins = e.plugins || {}), (e.plugins.lineNumbers = !0)
			})
	}
	function u(e) {
		if (
			0 !=
			(e = e.filter(function (e) {
				var n = t(e)['white-space']
				return 'pre-wrap' === n || 'pre-line' === n
			})).length
		) {
			var n = e
				.map(function (e) {
					var n = e.querySelector('code'),
						t = e.querySelector('.line-numbers-rows')
					if (n && t) {
						var i = e.querySelector('.line-numbers-sizer'),
							r = n.textContent.split(a)
						i ||
							(((i = document.createElement('span')).className =
								'line-numbers-sizer'),
							n.appendChild(i)),
							(i.innerHTML = '0'),
							(i.style.display = 'block')
						var s = i.getBoundingClientRect().height
						return (
							(i.innerHTML = ''),
							{
								element: e,
								lines: r,
								lineHeights: [],
								oneLinerHeight: s,
								sizer: i,
							}
						)
					}
				})
				.filter(Boolean)
			n.forEach(function (e) {
				var i = e.sizer,
					n = e.lines,
					r = e.lineHeights,
					s = e.oneLinerHeight
				;(r[n.length - 1] = void 0),
					n.forEach(function (e, n) {
						if (e && 1 < e.length) {
							var t = i.appendChild(document.createElement('span'))
							;(t.style.display = 'block'), (t.textContent = e)
						} else r[n] = s
					})
			}),
				n.forEach(function (e) {
					for (
						var n = e.sizer, t = e.lineHeights, i = 0, r = 0;
						r < t.length;
						r++
					)
						void 0 === t[r] &&
							(t[r] = n.children[i++].getBoundingClientRect().height)
				}),
				n.forEach(function (e) {
					var n = e.sizer,
						t = e.element.querySelector('.line-numbers-rows')
					;(n.style.display = 'none'),
						(n.innerHTML = ''),
						e.lineHeights.forEach(function (e, n) {
							t.children[n].style.height = e + 'px'
						})
				})
		}
	}
})()
!(function () {
	if (
		'undefined' != typeof self &&
		'undefined' != typeof Prism &&
		'undefined' != typeof document
	) {
		var a = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g,
			c = /^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i,
			f = [
				function (n) {
					var r = c.exec(n)
					if (r) {
						for (
							var o = 6 <= (n = r[1]).length ? 2 : 1,
								e = n.length / o,
								s = 1 == o ? 1 / 15 : 1 / 255,
								t = [],
								i = 0;
							i < e;
							i++
						) {
							var a = parseInt(n.substr(i * o, o), 16)
							t.push(a * s)
						}
						return (
							3 == e && t.push(1),
							'rgba(' +
								t
									.slice(0, 3)
									.map(function (n) {
										return String(Math.round(255 * n))
									})
									.join(',') +
								',' +
								String(Number(t[3].toFixed(3))) +
								')'
						)
					}
				},
				function (n) {
					var r = new Option().style
					return (r.color = n), r.color ? n : void 0
				},
			]
		Prism.hooks.add('wrap', function (n) {
			if ('color' === n.type || 0 <= n.classes.indexOf('color')) {
				for (
					var r, o = n.content, e = o.split(a).join(''), s = 0, t = f.length;
					s < t && !r;
					s++
				)
					r = f[s](e)
				if (!r) return
				var i =
					'<span class="inline-color-wrapper"><span class="inline-color" style="background-color:' +
					r +
					';"></span></span>'
				n.content = i + o
			}
		})
	}
})()
!(function () {
	if (
		'undefined' != typeof self &&
		self.Prism &&
		self.document &&
		document.createElement
	) {
		var l = {
				javascript: 'clike',
				actionscript: 'javascript',
				apex: ['clike', 'sql'],
				arduino: 'cpp',
				aspnet: ['markup', 'csharp'],
				birb: 'clike',
				bison: 'c',
				c: 'clike',
				csharp: 'clike',
				cpp: 'c',
				coffeescript: 'javascript',
				crystal: 'ruby',
				'css-extras': 'css',
				d: 'clike',
				dart: 'clike',
				django: 'markup-templating',
				ejs: ['javascript', 'markup-templating'],
				etlua: ['lua', 'markup-templating'],
				erb: ['ruby', 'markup-templating'],
				fsharp: 'clike',
				'firestore-security-rules': 'clike',
				flow: 'javascript',
				ftl: 'markup-templating',
				gml: 'clike',
				glsl: 'c',
				go: 'clike',
				groovy: 'clike',
				haml: 'ruby',
				handlebars: 'markup-templating',
				haxe: 'clike',
				hlsl: 'c',
				java: 'clike',
				javadoc: ['markup', 'java', 'javadoclike'],
				jolie: 'clike',
				jsdoc: ['javascript', 'javadoclike', 'typescript'],
				'js-extras': 'javascript',
				json5: 'json',
				jsonp: 'json',
				'js-templates': 'javascript',
				kotlin: 'clike',
				latte: ['clike', 'markup-templating', 'php'],
				less: 'css',
				lilypond: 'scheme',
				markdown: 'markup',
				'markup-templating': 'markup',
				mongodb: 'javascript',
				n4js: 'javascript',
				nginx: 'clike',
				objectivec: 'c',
				opencl: 'c',
				parser: 'markup',
				php: 'markup-templating',
				phpdoc: ['php', 'javadoclike'],
				'php-extras': 'php',
				plsql: 'sql',
				processing: 'clike',
				protobuf: 'clike',
				pug: ['markup', 'javascript'],
				purebasic: 'clike',
				purescript: 'haskell',
				qml: 'javascript',
				qore: 'clike',
				racket: 'scheme',
				jsx: ['markup', 'javascript'],
				tsx: ['jsx', 'typescript'],
				reason: 'clike',
				ruby: 'clike',
				sass: 'css',
				scss: 'css',
				scala: 'java',
				'shell-session': 'bash',
				smarty: 'markup-templating',
				solidity: 'clike',
				soy: 'markup-templating',
				sparql: 'turtle',
				sqf: 'clike',
				swift: 'clike',
				't4-cs': ['t4-templating', 'csharp'],
				't4-vb': ['t4-templating', 'vbnet'],
				tap: 'yaml',
				tt2: ['clike', 'markup-templating'],
				textile: 'markup',
				twig: 'markup',
				typescript: 'javascript',
				vala: 'clike',
				vbnet: 'basic',
				velocity: 'markup',
				wiki: 'markup',
				xeora: 'markup',
				'xml-doc': 'markup',
				xquery: 'markup',
			},
			n = {
				html: 'markup',
				xml: 'markup',
				svg: 'markup',
				mathml: 'markup',
				ssml: 'markup',
				atom: 'markup',
				rss: 'markup',
				js: 'javascript',
				g4: 'antlr4',
				adoc: 'asciidoc',
				shell: 'bash',
				shortcode: 'bbcode',
				rbnf: 'bnf',
				oscript: 'bsl',
				cs: 'csharp',
				dotnet: 'csharp',
				coffee: 'coffeescript',
				conc: 'concurnas',
				jinja2: 'django',
				'dns-zone': 'dns-zone-file',
				dockerfile: 'docker',
				eta: 'ejs',
				xlsx: 'excel-formula',
				xls: 'excel-formula',
				gamemakerlanguage: 'gml',
				hs: 'haskell',
				gitignore: 'ignore',
				hgignore: 'ignore',
				npmignore: 'ignore',
				webmanifest: 'json',
				kt: 'kotlin',
				kts: 'kotlin',
				tex: 'latex',
				context: 'latex',
				ly: 'lilypond',
				emacs: 'lisp',
				elisp: 'lisp',
				'emacs-lisp': 'lisp',
				md: 'markdown',
				moon: 'moonscript',
				n4jsd: 'n4js',
				nani: 'naniscript',
				objc: 'objectivec',
				objectpascal: 'pascal',
				px: 'pcaxis',
				pcode: 'peoplecode',
				pq: 'powerquery',
				mscript: 'powerquery',
				pbfasm: 'purebasic',
				purs: 'purescript',
				py: 'python',
				rkt: 'racket',
				rpy: 'renpy',
				robot: 'robotframework',
				rb: 'ruby',
				'sh-session': 'shell-session',
				shellsession: 'shell-session',
				smlnj: 'sml',
				sol: 'solidity',
				sln: 'solution-file',
				rq: 'sparql',
				t4: 't4-cs',
				trig: 'turtle',
				ts: 'typescript',
				tsconfig: 'typoscript',
				uscript: 'unrealscript',
				uc: 'unrealscript',
				vb: 'visual-basic',
				vba: 'visual-basic',
				xeoracube: 'xeora',
				yml: 'yaml',
			},
			p = {},
			e = 'components/',
			a = Prism.util.currentScript()
		if (a) {
			var r = /\bplugins\/autoloader\/prism-autoloader\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,
				s = /(^|\/)[\w-]+\.(?:min\.)?js(?:\?[^\r\n/]*)?$/i,
				t = a.getAttribute('data-autoloader-path')
			if (null != t) e = t.trim().replace(/\/?$/, '/')
			else {
				var i = a.src
				r.test(i)
					? (e = i.replace(r, 'components/'))
					: s.test(i) && (e = i.replace(s, '$1components/'))
			}
		}
		var o = (Prism.plugins.autoloader = {
			languages_path: e,
			use_minified: !0,
			loadLanguages: m,
		})
		Prism.hooks.add('complete', function (e) {
			var a = e.element,
				r = e.language
			if (a && r && 'none' !== r) {
				var s = (function (e) {
					var a = (e.getAttribute('data-dependencies') || '').trim()
					if (!a) {
						var r = e.parentElement
						r &&
							'pre' === r.tagName.toLowerCase() &&
							(a = (r.getAttribute('data-dependencies') || '').trim())
					}
					return a ? a.split(/\s*,\s*/g) : []
				})(a)
				;/^diff-./i.test(r)
					? (s.push('diff'), s.push(r.substr('diff-'.length)))
					: s.push(r),
					s.every(u) ||
						m(s, function () {
							Prism.highlightElement(a)
						})
			}
		})
	}
	function u(e) {
		if (0 <= e.indexOf('!')) return !1
		if ((e = n[e] || e) in Prism.languages) return !0
		var a = p[e]
		return a && !a.error && !1 === a.loading
	}
	function m(e, a, r) {
		'string' == typeof e && (e = [e])
		var s = e.length,
			t = 0,
			i = !1
		function c() {
			i || (++t === s && a && a(e))
		}
		0 !== s
			? e.forEach(function (e) {
					!(function (a, r, s) {
						var t = 0 <= a.indexOf('!')
						function e() {
							var e = p[a]
							e || (e = p[a] = { callbacks: [] }),
								e.callbacks.push({ success: r, error: s }),
								!t && u(a)
									? k(a, 'success')
									: !t && e.error
									? k(a, 'error')
									: (!t && e.loading) ||
									  ((e.loading = !0),
									  (e.error = !1),
									  (function (e, a, r) {
											var s = document.createElement('script')
											;(s.src = e),
												(s.async = !0),
												(s.onload = function () {
													document.body.removeChild(s), a && a()
												}),
												(s.onerror = function () {
													document.body.removeChild(s), r && r()
												}),
												document.body.appendChild(s)
									  })(
											(function (e) {
												return (
													o.languages_path +
													'prism-' +
													e +
													(o.use_minified ? '.min' : '') +
													'.js'
												)
											})(a),
											function () {
												;(e.loading = !1), k(a, 'success')
											},
											function () {
												;(e.loading = !1), (e.error = !0), k(a, 'error')
											}
									  ))
						}
						;(a = a.replace('!', '')), (a = n[a] || a)
						var i = l[a]
						i && i.length ? m(i, e, s) : e()
					})(e, c, function () {
						i || ((i = !0), r && r(e))
					})
			  })
			: a && setTimeout(a, 0)
	}
	function k(e, a) {
		if (p[e]) {
			for (var r = p[e].callbacks, s = 0, t = r.length; s < t; s++) {
				var i = r[s][a]
				i && setTimeout(i, 0)
			}
			r.length = 0
		}
	}
})()
'undefined' != typeof self &&
	self.Prism &&
	self.document &&
	document.createRange &&
	((Prism.plugins.KeepMarkup = !0),
	Prism.hooks.add('before-highlight', function (e) {
		if (
			e.element.children.length &&
			Prism.util.isActive(e.element, 'keep-markup', !0)
		) {
			var a = 0,
				s = [],
				l = function (e, n) {
					var o = {}
					n || ((o.clone = e.cloneNode(!1)), (o.posOpen = a), s.push(o))
					for (var t = 0, d = e.childNodes.length; t < d; t++) {
						var r = e.childNodes[t]
						1 === r.nodeType ? l(r) : 3 === r.nodeType && (a += r.data.length)
					}
					n || (o.posClose = a)
				}
			l(e.element, !0), s && s.length && (e.keepMarkup = s)
		}
	}),
	Prism.hooks.add('after-highlight', function (n) {
		if (n.keepMarkup && n.keepMarkup.length) {
			var a = function (e, n) {
				for (var o = 0, t = e.childNodes.length; o < t; o++) {
					var d = e.childNodes[o]
					if (1 === d.nodeType) {
						if (!a(d, n)) return !1
					} else
						3 === d.nodeType &&
							(!n.nodeStart &&
								n.pos + d.data.length > n.node.posOpen &&
								((n.nodeStart = d), (n.nodeStartPos = n.node.posOpen - n.pos)),
							n.nodeStart &&
								n.pos + d.data.length >= n.node.posClose &&
								((n.nodeEnd = d), (n.nodeEndPos = n.node.posClose - n.pos)),
							(n.pos += d.data.length))
					if (n.nodeStart && n.nodeEnd) {
						var r = document.createRange()
						return (
							r.setStart(n.nodeStart, n.nodeStartPos),
							r.setEnd(n.nodeEnd, n.nodeEndPos),
							n.node.clone.appendChild(r.extractContents()),
							r.insertNode(n.node.clone),
							r.detach(),
							!1
						)
					}
				}
				return !0
			}
			n.keepMarkup.forEach(function (e) {
				a(n.element, { node: e, pos: 0 })
			}),
				(n.highlightedCode = n.element.innerHTML)
		}
	}))
!(function () {
	if ('undefined' != typeof self && self.Prism && self.document) {
		var f = /(?:^|\s)command-line(?:\s|$)/,
			p = 'command-line-prompt',
			m = ''.startsWith
				? function (e, t) {
						return e.startsWith(t)
				  }
				: function (e, t) {
						return 0 === e.indexOf(t)
				  }
		Prism.hooks.add('before-highlight', function (e) {
			var t = h(e)
			if (!t.complete && e.code) {
				var n = e.element.parentElement
				if (
					n &&
					/pre/i.test(n.nodeName) &&
					(f.test(n.className) || f.test(e.element.className))
				) {
					var a = e.element.querySelector('.' + p)
					a && a.remove()
					var s = e.code.split('\n')
					t.numberOfLines = s.length
					var o = (t.outputLines = []),
						r = n.getAttribute('data-output'),
						i = n.getAttribute('data-filter-output')
					if (null !== r)
						r.split(',').forEach(function (e) {
							var t = e.split('-'),
								n = parseInt(t[0], 10),
								a = 2 === t.length ? parseInt(t[1], 10) : n
							if (!isNaN(n) && !isNaN(a)) {
								n < 1 && (n = 1), a > s.length && (a = s.length), a--
								for (var r = --n; r <= a; r++) (o[r] = s[r]), (s[r] = '')
							}
						})
					else if (i)
						for (var l = 0; l < s.length; l++)
							m(s[l], i) && ((o[l] = s[l].slice(i.length)), (s[l] = ''))
					e.code = s.join('\n')
				} else t.complete = !0
			} else t.complete = !0
		}),
			Prism.hooks.add('before-insert', function (e) {
				var t = h(e)
				if (!t.complete) {
					for (
						var n = e.highlightedCode.split('\n'),
							a = t.outputLines || [],
							r = 0,
							s = a.length;
						r < s;
						r++
					)
						a.hasOwnProperty(r) && (n[r] = a[r])
					e.highlightedCode = n.join('\n')
				}
			}),
			Prism.hooks.add('complete', function (e) {
				var t = h(e)
				if (!t.complete) {
					var n,
						a = e.element.parentElement
					f.test(e.element.className) &&
						(e.element.className = e.element.className.replace(f, ' ')),
						f.test(a.className) || (a.className += ' command-line')
					var r = t.numberOfLines || 0,
						s = u('data-prompt', '')
					if ('' !== s) n = d('<span data-prompt="' + s + '"></span>', r)
					else
						n = d(
							'<span data-user="' +
								u('data-user', 'user') +
								'" data-host="' +
								u('data-host', 'localhost') +
								'"></span>',
							r
						)
					var o = document.createElement('span')
					;(o.className = p), (o.innerHTML = n)
					for (var i = t.outputLines || [], l = 0, m = i.length; l < m; l++)
						if (i.hasOwnProperty(l)) {
							var c = o.children[l]
							c.removeAttribute('data-user'),
								c.removeAttribute('data-host'),
								c.removeAttribute('data-prompt')
						}
					e.element.insertBefore(o, e.element.firstChild), (t.complete = !0)
				}
				function u(e, t) {
					return (a.getAttribute(e) || t).replace(/"/g, '&quot')
				}
			})
	}
	function d(e, t) {
		for (var n = '', a = 0; a < t; a++) n += e
		return n
	}
	function h(e) {
		var t = (e.vars = e.vars || {})
		return (t['command-line'] = t['command-line'] || {})
	}
})()
!(function () {
	if ('undefined' != typeof self && self.Prism && self.document) {
		var i = [],
			l = {},
			c = function () {}
		Prism.plugins.toolbar = {}
		var e = (Prism.plugins.toolbar.registerButton = function (e, n) {
				var t
				;(t =
					'function' == typeof n
						? n
						: function (e) {
								var t
								return (
									'function' == typeof n.onClick
										? (((t = document.createElement('button')).type = 'button'),
										  t.addEventListener('click', function () {
												n.onClick.call(this, e)
										  }))
										: 'string' == typeof n.url
										? ((t = document.createElement('a')).href = n.url)
										: (t = document.createElement('span')),
									n.className && t.classList.add(n.className),
									(t.textContent = n.text),
									t
								)
						  }),
					e in l
						? console.warn(
								'There is a button with the key "' + e + '" registered already.'
						  )
						: i.push((l[e] = t))
			}),
			t = (Prism.plugins.toolbar.hook = function (a) {
				var e = a.element.parentNode
				if (
					e &&
					/pre/i.test(e.nodeName) &&
					!e.parentNode.classList.contains('code-toolbar')
				) {
					var t = document.createElement('div')
					t.classList.add('code-toolbar'),
						e.parentNode.insertBefore(t, e),
						t.appendChild(e)
					var r = document.createElement('div')
					r.classList.add('toolbar')
					var n = i,
						o = (function (e) {
							for (; e; ) {
								var t = e.getAttribute('data-toolbar-order')
								if (null != t)
									return (t = t.trim()).length ? t.split(/\s*,\s*/g) : []
								e = e.parentElement
							}
						})(a.element)
					o &&
						(n = o.map(function (e) {
							return l[e] || c
						})),
						n.forEach(function (e) {
							var t = e(a)
							if (t) {
								var n = document.createElement('div')
								n.classList.add('toolbar-item'),
									n.appendChild(t),
									r.appendChild(n)
							}
						}),
						t.appendChild(r)
				}
			})
		e('label', function (e) {
			var t = e.element.parentNode
			if (t && /pre/i.test(t.nodeName) && t.hasAttribute('data-label')) {
				var n,
					a,
					r = t.getAttribute('data-label')
				try {
					a = document.querySelector('template#' + r)
				} catch (e) {}
				return (
					a
						? (n = a.content)
						: (t.hasAttribute('data-url')
								? ((n = document.createElement('a')).href = t.getAttribute(
										'data-url'
								  ))
								: (n = document.createElement('span')),
						  (n.textContent = r)),
					n
				)
			}
		}),
			Prism.hooks.add('complete', t)
	}
})()
!(function () {
	if ('undefined' != typeof self && self.Prism && self.document)
		if (Prism.plugins.toolbar) {
			var i = window.ClipboardJS || void 0
			i || 'function' != typeof require || (i = require('clipboard'))
			var u = []
			if (!i) {
				var t = document.createElement('script'),
					e = document.querySelector('head')
				;(t.onload = function () {
					if ((i = window.ClipboardJS)) for (; u.length; ) u.pop()()
				}),
					(t.src =
						'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js'),
					e.appendChild(t)
			}
			Prism.plugins.toolbar.registerButton('copy-to-clipboard', function (t) {
				var e = document.createElement('button')
				;(e.textContent = 'Copy'), e.setAttribute('type', 'button')
				var o = t.element
				return i ? n() : u.push(n), e
				function n() {
					var t = new i(e, {
						text: function () {
							return o.textContent
						},
					})
					t.on('success', function () {
						;(e.textContent = 'Copied!'), r()
					}),
						t.on('error', function () {
							;(e.textContent = 'Press Ctrl+C to copy'), r()
						})
				}
				function r() {
					setTimeout(function () {
						e.textContent = 'Copy'
					}, 5e3)
				}
			})
		} else
			console.warn('Copy to Clipboard plugin loaded before Toolbar plugin.')
})()
!(function () {
	if ('undefined' == typeof self || self.Prism) {
		Element.prototype.matches ||
			(Element.prototype.matches =
				Element.prototype.msMatchesSelector ||
				Element.prototype.webkitMatchesSelector)
		var e,
			t = Prism.util.currentScript(),
			r = [],
			n = (Prism.plugins.filterHighlightAll = {
				add: function (t) {
					r.push(function (e) {
						return t({ element: e, language: Prism.util.getLanguage(e) })
					})
				},
				addSelector: function (t) {
					r.push(function (e) {
						return e.matches(t)
					})
				},
				reject: {
					add: function (t) {
						r.push(function (e) {
							return !t({ element: e, language: Prism.util.getLanguage(e) })
						})
					},
					addSelector: function (t) {
						r.push(function (e) {
							return !e.matches(t)
						})
					},
				},
				filterKnown: !!t && t.hasAttribute('data-filter-known'),
			})
		if (
			(n.add(function (e) {
				return !n.filterKnown || 'object' == typeof Prism.languages[e.language]
			}),
			t)
		)
			(e = t.getAttribute('data-filter-selector')) && n.addSelector(e),
				(e = t.getAttribute('data-reject-selector')) && n.reject.addSelector(e)
		Prism.hooks.add('before-all-elements-highlight', function (e) {
			e.elements = e.elements.filter(i)
		})
	}
	function i(e) {
		for (var t = 0, n = r.length; t < n; t++) if (!r[t](e)) return !1
		return !0
	}
})()
