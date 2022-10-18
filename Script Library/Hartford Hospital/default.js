/*! jQuery UI - v1.10.3 - 2013-07-25
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.datepicker.js, jquery.ui.effect.js
* Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function (e, t) { function i(t, i) { var a, n, r, o = t.nodeName.toLowerCase(); return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t) } function s(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () { return "hidden" === e.css(this, "visibility") }).length } var a = 0, n = /^ui-id-\d+$/; e.ui = e.ui || {}, e.extend(e.ui, { version: "1.10.3", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ focus: function (t) { return function (i, s) { return "number" == typeof i ? this.each(function () { var t = this; setTimeout(function () { e(t).focus(), s && s.call(t) }, i) }) : t.apply(this, arguments) } }(e.fn.focus), scrollParent: function () { var t; return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () { return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x")) }).eq(0) : this.parents().filter(function () { return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x")) }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t }, zIndex: function (i) { if (i !== t) return this.css("zIndex", i); if (this.length) for (var s, a, n = e(this[0]) ; n.length && n[0] !== document;) { if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a; n = n.parent() } return 0 }, uniqueId: function () { return this.each(function () { this.id || (this.id = "ui-id-" + ++a) }) }, removeUniqueId: function () { return this.each(function () { n.test(this.id) && e(this).removeAttr("id") }) } }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function (t) { return function (i) { return !!e.data(i, t) } }) : function (t, i, s) { return !!e.data(t, s[3]) }, focusable: function (t) { return i(t, !isNaN(e.attr(t, "tabindex"))) }, tabbable: function (t) { var s = e.attr(t, "tabindex"), a = isNaN(s); return (a || s >= 0) && i(t, !a) } }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, s) { function a(t, i, s, a) { return e.each(n, function () { i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0) }), i } var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"], r = s.toLowerCase(), o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight }; e.fn["inner" + s] = function (i) { return i === t ? o["inner" + s].call(this) : this.each(function () { e(this).css(r, a(this, i) + "px") }) }, e.fn["outer" + s] = function (t, i) { return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function () { e(this).css(r, a(this, t, !0, i) + "px") }) } }), e.fn.addBack || (e.fn.addBack = function (e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) { return function (i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) } }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({ disableSelection: function () { return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) { e.preventDefault() }) }, enableSelection: function () { return this.unbind(".ui-disableSelection") } }), e.extend(e.ui, { plugin: { add: function (t, i, s) { var a, n = e.ui[t].prototype; for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]]) }, call: function (e, t, i) { var s, a = e.plugins[t]; if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i) } }, hasScroll: function (t, i) { if ("hidden" === e(t).css("overflow")) return !1; var s = i && "left" === i ? "scrollLeft" : "scrollTop", a = !1; return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a) } }) })(jQuery); (function (t, e) {
	function i() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all notranslate'></div>")) } function s(e) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return e.delegate(i, "mouseout", function () { t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover") }).delegate(i, "mouseover", function () { t.datepicker._isDisabledDatepicker(a.inline ? e.parent()[0] : a.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover")) }) } function n(e, i) { t.extend(e, i); for (var s in i) null == i[s] && (e[s] = i[s]); return e } t.extend(t.ui, { datepicker: { version: "1.10.3" } }); var a, r = "datepicker"; t.extend(i.prototype, {
		markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () { return this.dpDiv }, setDefaults: function (t) { return n(this._defaults, t || {}), this }, _attachDatepicker: function (e, i) { var s, n, a; s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), a = this._newInst(t(e), n), a.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a) }, _newInst: function (e, i) { var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"); return { id: n, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all notranslate'></div>")) : this.dpDiv } }, _connectDatepicker: function (e, i) { var s = t(e); i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, r, i), i.settings.disabled && this._disableDatepicker(e)) }, _attachments: function (e, i) { var s, n, a, r = this._get(i, "appendText"), o = this._get(i, "isRTL"); i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[o ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: a, alt: n, title: n }) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({ src: a, alt: n, title: n }) : n)), e[o ? "before" : "after"](i.trigger), i.trigger.click(function () { return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1 })) }, _autoSize: function (t) { if (this._get(t, "autoSize") && !t.inline) { var e, i, s, n, a = new Date(2009, 11, 20), r = this._get(t, "dateFormat"); r.match(/[DM]/) && (e = function (t) { for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n); return s }, a.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), t.input.attr("size", this._formatDate(t, a).length) } }, _inlineDatepicker: function (e, i) { var s = t(e); s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block")) }, _dialogDatepicker: function (e, i, s, a, o) { var h, l, c, u, d, p = this._dialogInst; return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], r, p)), n(p.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], r, p), this }, _destroyDatepicker: function (e) { var i, s = t(e), n = t.data(e, r); s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, r), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty()) }, _enableDatepicker: function (e) { var i, s, n = t(e), a = t.data(e, r); n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, a.trigger.filter("button").each(function () { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) { return t === e ? null : t })) }, _disableDatepicker: function (e) { var i, s, n = t(e), a = t.data(e, r); n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, a.trigger.filter("button").each(function () { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) { return t === e ? null : t }), this._disabledInputs[this._disabledInputs.length] = e) }, _isDisabledDatepicker: function (t) { if (!t) return !1; for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0; return !1 }, _getInst: function (e) { try { return t.data(e, r) } catch (i) { throw "Missing instance data for this datepicker" } }, _optionDatepicker: function (i, s, a) { var r, o, h, l, c = this._getInst(i); return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (r = s || {}, "string" == typeof s && (r = {}, r[s] = a), c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, r), null !== h && r.dateFormat !== e && r.minDate === e && (c.settings.minDate = this._formatDate(c, h)), null !== l && r.dateFormat !== e && r.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c)), e) }, _changeDatepicker: function (t, e, i) { this._optionDatepicker(t, e, i) }, _refreshDatepicker: function (t) { var e = this._getInst(t); e && this._updateDatepicker(e) }, _setDateDatepicker: function (t, e) { var i = this._getInst(t); i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i)) }, _getDateDatepicker: function (t, e) { var i = this._getInst(t); return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null }, _doKeyDown: function (e) { var i, s, n, a = t.datepicker._getInst(e.target), r = !0, o = a.dpDiv.is(".ui-datepicker-rtl"); if (a._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) { case 9: t.datepicker._hideDatepicker(), r = !1; break; case 13: return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv), n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]), i = t.datepicker._get(a, "onSelect"), i ? (s = t.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(), !1; case 27: t.datepicker._hideDatepicker(); break; case 33: t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M"); break; case 34: t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M"); break; case 35: (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey; break; case 36: (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey; break; case 37: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M"); break; case 38: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey; break; case 39: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M"); break; case 40: (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey; break; default: r = !1 } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1; r && (e.preventDefault(), e.stopPropagation()) }, _doKeyPress: function (i) { var s, n, a = t.datepicker._getInst(i.target); return t.datepicker._get(a, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(a, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e }, _doKeyUp: function (e) { var i, s = t.datepicker._getInst(e.target); if (s.input.val() !== s.lastVal) try { i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s)) } catch (n) { } return !0 }, _showDatepicker: function (e) { if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) { var i, s, a, r, o, h, l; i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), a = s ? s.apply(e, [e, i]) : {}, a !== !1 && (n(i.settings, a), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () { return r |= "fixed" === t(this).css("position"), !r }), o = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(i), o = t.datepicker._checkOffset(i, o, r), i.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: o.left + "px", top: o.top + "px" }), i.inline || (h = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), t.datepicker._shouldFocusInput(i) && i.input.focus(), t.datepicker._curInst = i)) } }, _updateDatepicker: function (e) { this.maxRows = 4, a = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover(); var i, s = this._getNumberOfMonths(e), n = s[1], r = 17; e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", r * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function () { i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null }, 0)) }, _shouldFocusInput: function (t) { return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus") }, _checkOffset: function (e, i, s) { var n = e.dpDiv.outerWidth(), a = e.dpDiv.outerHeight(), r = e.input ? e.input.outerWidth() : 0, o = e.input ? e.input.outerHeight() : 0, h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()), l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop()); return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + o ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + o) : 0), i }, _findPos: function (e) { for (var i, s = this._getInst(e), n = this._get(s, "isRTL") ; e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)) ;) e = e[n ? "previousSibling" : "nextSibling"]; return i = t(e).offset(), [i.left, i.top] }, _hideDatepicker: function (e) { var i, s, n, a, o = this._curInst; !o || e && o !== t.data(e, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () { t.datepicker._tidyDialog(o) }, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1) }, _tidyDialog: function (t) { t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") }, _checkExternalClick: function (e) { if (t.datepicker._curInst) { var i = t(e.target), s = t.datepicker._getInst(i[0]); (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker() } }, _adjustDate: function (e, i, s) { var n = t(e), a = this._getInst(n[0]); this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a)) }, _gotoToday: function (e) { var i, s = t(e), n = this._getInst(s[0]); this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s) }, _selectMonthYear: function (e, i, s) { var n = t(e), a = this._getInst(n[0]); a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n) }, _selectDay: function (e, i, s, n) { var a, r = t(e); t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]), a.selectedDay = a.currentDay = t("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear))) }, _clearDate: function (e) { var i = t(e); this._selectDate(i, "") }, _selectDate: function (e, i) { var s, n = t(e), a = this._getInst(n[0]); i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null) }, _updateAlternate: function (e) { var i, s, n, a = this._get(e, "altField"); a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(a).each(function () { t(this).val(n) })) }, noWeekends: function (t) { var e = t.getDay(); return [e > 0 && 6 > e, ""] }, iso8601Week: function (t) { var e, i = new Date(t.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1 }, parseDate: function (i, s, n) { if (null == i || null == s) throw "Invalid arguments"; if (s = "object" == typeof s ? "" + s : s + "", "" === s) return null; var a, r, o, h, l = 0, c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10), d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, p = (n ? n.dayNames : null) || this._defaults.dayNames, f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, m = (n ? n.monthNames : null) || this._defaults.monthNames, g = -1, v = -1, _ = -1, b = -1, y = !1, x = function (t) { var e = i.length > a + 1 && i.charAt(a + 1) === t; return e && a++, e }, k = function (t) { var e = x(t), i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, n = RegExp("^\\d{1," + i + "}"), a = s.substring(l).match(n); if (!a) throw "Missing number at position " + l; return l += a[0].length, parseInt(a[0], 10) }, w = function (i, n, a) { var r = -1, o = t.map(x(i) ? a : n, function (t, e) { return [[e, t]] }).sort(function (t, e) { return -(t[1].length - e[1].length) }); if (t.each(o, function (t, i) { var n = i[1]; return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = i[0], l += n.length, !1) : e }), -1 !== r) return r + 1; throw "Unknown name at position " + l }, D = function () { if (s.charAt(l) !== i.charAt(a)) throw "Unexpected literal at position " + l; l++ }; for (a = 0; i.length > a; a++) if (y) "'" !== i.charAt(a) || x("'") ? D() : y = !1; else switch (i.charAt(a)) { case "d": _ = k("d"); break; case "D": w("D", d, p); break; case "o": b = k("o"); break; case "m": v = k("m"); break; case "M": v = w("M", f, m); break; case "y": g = k("y"); break; case "@": h = new Date(k("@")), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate(); break; case "!": h = new Date((k("!") - this._ticksTo1970) / 1e4), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate(); break; case "'": x("'") ? D() : y = !0; break; default: D() } if (s.length > l && (o = s.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o; if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)), b > -1) for (v = 1, _ = b; ;) { if (r = this._getDaysInMonth(g, v - 1), r >= _) break; v++, _ -= r } if (h = this._daylightSavingAdjust(new Date(g, v - 1, _)), h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== _) throw "Invalid date"; return h }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (t, e, i) { if (!e) return ""; var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort, a = (i ? i.dayNames : null) || this._defaults.dayNames, r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort, o = (i ? i.monthNames : null) || this._defaults.monthNames, h = function (e) { var i = t.length > s + 1 && t.charAt(s + 1) === e; return i && s++, i }, l = function (t, e, i) { var s = "" + e; if (h(t)) for (; i > s.length;) s = "0" + s; return s }, c = function (t, e, i, s) { return h(t) ? s[e] : i[e] }, u = "", d = !1; if (e) for (s = 0; t.length > s; s++) if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1; else switch (t.charAt(s)) { case "d": u += l("d", e.getDate(), 2); break; case "D": u += c("D", e.getDay(), n, a); break; case "o": u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3); break; case "m": u += l("m", e.getMonth() + 1, 2); break; case "M": u += c("M", e.getMonth(), r, o); break; case "y": u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100; break; case "@": u += e.getTime(); break; case "!": u += 1e4 * e.getTime() + this._ticksTo1970; break; case "'": h("'") ? u += "'" : d = !0; break; default: u += t.charAt(s) } return u }, _possibleChars: function (t) { var e, i = "", s = !1, n = function (i) { var s = t.length > e + 1 && t.charAt(e + 1) === i; return s && e++, s }; for (e = 0; t.length > e; e++) if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1; else switch (t.charAt(e)) { case "d": case "m": case "y": case "@": i += "0123456789"; break; case "D": case "M": return null; case "'": n("'") ? i += "'" : s = !0; break; default: i += t.charAt(e) } return i }, _get: function (t, i) { return t.settings[i] !== e ? t.settings[i] : this._defaults[i] }, _setDateFromField: function (t, e) { if (t.input.val() !== t.lastVal) { var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null, n = this._getDefaultDate(t), a = n, r = this._getFormatConfig(t); try { a = this.parseDate(i, s, r) || n } catch (o) { s = e ? "" : s } t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = s ? a.getDate() : 0, t.currentMonth = s ? a.getMonth() : 0, t.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(t) } }, _getDefaultDate: function (t) { return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date)) }, _determineDate: function (e, i, s) { var n = function (t) { var e = new Date; return e.setDate(e.getDate() + t), e }, a = function (i) { try { return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e)) } catch (s) { } for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), r = n.getMonth(), o = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i) ; l;) { switch (l[2] || "d") { case "d": case "D": o += parseInt(l[1], 10); break; case "w": case "W": o += 7 * parseInt(l[1], 10); break; case "m": case "M": r += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r)); break; case "y": case "Y": a += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r)) } l = h.exec(i) } return new Date(a, r, o) }, r = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime()); return r = r && "Invalid Date" == "" + r ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r) }, _daylightSavingAdjust: function (t) { return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null }, _setDate: function (t, e, i) { var s = !e, n = t.selectedMonth, a = t.selectedYear, r = this._restrictMinMax(t, this._determineDate(t, e, new Date)); t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t)) }, _getDate: function (t) { var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return e }, _attachHandlers: function (e) { var i = this._get(e, "stepMonths"), s = "#" + e.id.replace(/\\\\/g, "\\"); e.dpDiv.find("[data-handler]").map(function () { var e = { prev: function () { t.datepicker._adjustDate(s, -i, "M") }, next: function () { t.datepicker._adjustDate(s, +i, "M") }, hide: function () { t.datepicker._hideDatepicker() }, today: function () { t.datepicker._gotoToday(s) }, selectDay: function () { return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function () { return t.datepicker._selectMonthYear(s, this, "M"), !1 }, selectYear: function () { return t.datepicker._selectMonthYear(s, this, "Y"), !1 } }; t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]) }) }, _generateHTML: function (t) { var e, i, s, n, a, r, o, h, l, c, u, d, p, f, m, g, v, _, b, y, x, k, w, D, T, C, M, S, N, I, P, A, z, H, E, F, O, W, j, R = new Date, L = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())), Y = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"), J = this._get(t, "hideIfNoPrevNext"), K = this._get(t, "navigationAsDateFormat"), Q = this._getNumberOfMonths(t), V = this._get(t, "showCurrentAtPos"), U = this._get(t, "stepMonths"), q = 1 !== Q[0] || 1 !== Q[1], X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), G = this._getMinMaxDate(t, "min"), $ = this._getMinMaxDate(t, "max"), Z = t.drawMonth - V, te = t.drawYear; if (0 > Z && (Z += 12, te--), $) for (e = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - Q[0] * Q[1] + 1, $.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--); for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - U, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + U, 1)), this._getFormatConfig(t)) : n, a = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), o = this._get(t, "gotoCurrent") && t.currentDay ? X : L, r = K ? this.formatDate(r, o, this._getFormatConfig(t)) : r, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; Q[0] > k; k++) { for (w = "", this.maxRows = 4, D = 0; Q[1] > D; D++) { if (T = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), C = " ui-corner-all", M = "", q) { if (M += "<div class='ui-datepicker-group", Q[1] > 1) switch (D) { case 0: M += " ui-datepicker-group-first", C = " ui-corner-" + (Y ? "right" : "left"); break; case Q[1] - 1: M += " ui-datepicker-group-last", C = " ui-corner-" + (Y ? "left" : "right"); break; default: M += " ui-datepicker-group-middle", C = "" } M += "'>" } for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === k ? Y ? a : s : "") + (/all|right/.test(C) && 0 === k ? Y ? s : a : "") + this._generateMonthYearHeader(t, Z, te, G, $, k > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", S = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) N = (x + c) % 7, S += "<th" + ((x + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[N] + "'>" + p[N] + "</span></th>"; for (M += S + "</tr></thead><tbody>", I = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, A = Math.ceil((P + I) / 7), z = q ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = z, H = this._daylightSavingAdjust(new Date(te, Z, 1 - P)), E = 0; z > E; E++) { for (M += "<tr>", F = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", x = 0; 7 > x; x++) O = g ? g.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], W = H.getMonth() !== Z, j = W && !_ || !O[0] || G && G > H || $ && H > $, F += "<td class='" + ((x + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + O[1] + (H.getTime() === X.getTime() ? " " + this._currentClass : "") + (H.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === L.getTime() ? " ui-state-highlight" : "") + (H.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H); M += F + "</tr>" } Z++, Z > 11 && (Z = 0, te++), M += "</tbody></table>" + (q ? "</div>" + (Q[0] > 0 && D === Q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += M } y += w } return y += l, t._keyEvent = !1, y }, _generateMonthYearHeader: function (t, e, i, s, n, a, r, o) {
			var h, l, c, u, d, p, f, m, g = this._get(t, "changeMonth"), v = this._get(t, "changeYear"), _ = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = ""; if (a || !g) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>"; else { for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++) (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + o[c] + "</option>"); y += "</select>" } if (_ || (b += y + (!a && g && v ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
				for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
				var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
				return isNaN(e) ? d : e
				}, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>"; t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
			} return b += this._get(t, "yearSuffix"), _ && (b += (!a && g && v ? "" : "&#xa0;") + y), b += "</div>"
		}, _adjustInstDate: function (t, e, i) { var s = t.drawYear + ("Y" === i ? e : 0), n = t.drawMonth + ("M" === i ? e : 0), a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0), r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a))); t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t) }, _restrictMinMax: function (t, e) { var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && i > e ? i : e; return s && n > s ? s : n }, _notifyChange: function (t) { var e = this._get(t, "onChangeMonthYear"); e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]) }, _getNumberOfMonths: function (t) { var e = this._get(t, "numberOfMonths"); return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e }, _getMinMaxDate: function (t, e) { return this._determineDate(t, this._get(t, e + "Date"), null) }, _getDaysInMonth: function (t, e) { return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate() }, _getFirstDayOfMonth: function (t, e) { return new Date(t, e, 1).getDay() }, _canAdjustMonth: function (t, e, i, s) { var n = this._getNumberOfMonths(t), a = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1)); return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a) }, _isInRange: function (t, e) { var i, s, n = this._getMinMaxDate(t, "min"), a = this._getMinMaxDate(t, "max"), r = null, o = null, h = this._get(t, "yearRange"); return h && (i = h.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!r || e.getFullYear() >= r) && (!o || o >= e.getFullYear()) }, _getFormatConfig: function (t) { var e = this._get(t, "shortYearCutoff"); return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") } }, _formatDate: function (t, e, i, s) { e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear); var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t)) }
	}), t.fn.datepicker = function (e) { if (!this.length) return this; t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv); var i = Array.prototype.slice.call(arguments, 1); return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () { "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e) }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.3"
})(jQuery); (function (t, e) { var i = "ui-effects-"; t.effects = { effect: {} }, function (t, e) { function i(t, e, i) { var s = u[e.type] || {}; return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t) } function s(i) { var s = l(), n = s._rgba = []; return i = i.toLowerCase(), f(h, function (t, a) { var o, r = a.re.exec(i), h = r && a.parse(r), l = a.space || "rgba"; return h ? (o = s[l](h), s[c[l].cache] = o[c[l].cache], n = s._rgba = o._rgba, !1) : e }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i] } function n(t, e, i) { return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t } var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) { return [t[1], t[2], t[3], t[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) { return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (t) { return [t[1], t[2] / 100, t[3] / 100, t[4]] } }], l = t.Color = function (e, i, s, n) { return new t.Color.fn.parse(e, i, s, n) }, c = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } }, u = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } }, d = l.support = {}, p = t("<p>")[0], f = t.each; p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) { e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = t.extend(l.prototype, { parse: function (n, o, r, h) { if (n === e) return this._rgba = [null, null, null, null], this; (n.jquery || n.nodeType) && (n = t(n).css(o), o = e); var u = this, d = t.type(n), p = this._rgba = []; return o !== e && (n = [n, o, r, h], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function (t, e) { p[e.idx] = i(n[e.idx], e) }), this) : "object" === d ? (n instanceof l ? f(c, function (t, e) { n[e.cache] && (u[e.cache] = n[e.cache].slice()) }) : f(c, function (e, s) { var a = s.cache; f(s.props, function (t, e) { if (!u[a] && s.to) { if ("alpha" === t || null == n[t]) return; u[a] = s.to(u._rgba) } u[a][e.idx] = i(n[t], e, !0) }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a]))) }), this) : e }, is: function (t) { var i = l(t), s = !0, n = this; return f(c, function (t, a) { var o, r = i[a.cache]; return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (t, i) { return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e })), s }), s }, _space: function () { var t = [], e = this; return f(c, function (i, s) { e[s.cache] && t.push(i) }), t.pop() }, transition: function (t, e) { var s = l(t), n = s._space(), a = c[n], o = 0 === this.alpha() ? l("transparent") : this, r = o[a.cache] || a.to(o._rgba), h = r.slice(); return s = s[a.cache], f(a.props, function (t, n) { var a = n.idx, o = r[a], l = s[a], c = u[n.type] || {}; null !== l && (null === o ? h[a] = l : (c.mod && (l - o > c.mod / 2 ? o += c.mod : o - l > c.mod / 2 && (o -= c.mod)), h[a] = i((l - o) * e + o, n))) }), this[n](h) }, blend: function (e) { if (1 === this._rgba[3]) return this; var i = this._rgba.slice(), s = i.pop(), n = l(e)._rgba; return l(t.map(i, function (t, e) { return (1 - s) * n[e] + s * t })) }, toRgbaString: function () { var e = "rgba(", i = t.map(this._rgba, function (t, e) { return null == t ? e > 2 ? 1 : 0 : t }); return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")" }, toHslaString: function () { var e = "hsla(", i = t.map(this.hsla(), function (t, e) { return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t }); return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")" }, toHexString: function (e) { var i = this._rgba.slice(), s = i.pop(); return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) { return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t }).join("") }, toString: function () { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() } }), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) { if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]]; var e, i, s = t[0] / 255, n = t[1] / 255, a = t[2] / 255, o = t[3], r = Math.max(s, n, a), h = Math.min(s, n, a), l = r - h, c = r + h, u = .5 * c; return e = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o] }, c.hsla.from = function (t) { if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]]; var e = t[0] / 360, i = t[1], s = t[2], a = t[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o; return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a] }, f(c, function (s, n) { var a = n.props, o = n.cache, h = n.to, c = n.from; l.fn[s] = function (s) { if (h && !this[o] && (this[o] = h(this._rgba)), s === e) return this[o].slice(); var n, r = t.type(s), u = "array" === r || "object" === r ? s : arguments, d = this[o].slice(); return f(a, function (t, e) { var s = u["object" === r ? t : e.idx]; null == s && (s = d[e.idx]), d[e.idx] = i(s, e) }), c ? (n = l(c(d)), n[o] = d, n) : l(d) }, f(a, function (e, i) { l.fn[e] || (l.fn[e] = function (n) { var a, o = t.type(n), h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, l = this[h](), c = l[i.idx]; return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l))) }) }) }), l.hook = function (e) { var i = e.split(" "); f(i, function (e, i) { t.cssHooks[i] = { set: function (e, n) { var a, o, r = ""; if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) { if (n = l(a || n), !d.rgba && 1 !== n._rgba[3]) { for (o = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && o && o.style;) try { r = t.css(o, "backgroundColor"), o = o.parentNode } catch (h) { } n = n.blend(r && "transparent" !== r ? r : "_default") } n = n.toRgbaString() } try { e.style[i] = n } catch (h) { } } }, t.fx.step[i] = function (e) { e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos)) } }) }, l.hook(o), t.cssHooks.borderColor = { expand: function (t) { var e = {}; return f(["Top", "Right", "Bottom", "Left"], function (i, s) { e["border" + s + "Color"] = t }), e } }, a = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" } }(jQuery), function () { function i(e) { var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle, a = {}; if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]); else for (i in n) "string" == typeof n[i] && (a[i] = n[i]); return a } function s(e, i) { var s, n, o = {}; for (s in i) n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n)); return o } var n = ["add", "remove", "toggle"], a = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) { t.fx.step[i] = function (t) { ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0) } }), t.fn.addBack || (t.fn.addBack = function (t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.effects.animateClass = function (e, a, o, r) { var h = t.speed(a, o, r); return this.queue(function () { var a, o = t(this), r = o.attr("class") || "", l = h.children ? o.find("*").addBack() : o; l = l.map(function () { var e = t(this); return { el: e, start: i(this) } }), a = function () { t.each(n, function (t, i) { e[i] && o[i + "Class"](e[i]) }) }, a(), l = l.map(function () { return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this }), o.attr("class", r), l = l.map(function () { var e = this, i = t.Deferred(), s = t.extend({}, h, { queue: !1, complete: function () { i.resolve(e) } }); return this.el.animate(this.diff, s), i.promise() }), t.when.apply(t, l.get()).done(function () { a(), t.each(arguments, function () { var e = this.el; t.each(this.diff, function (t) { e.css(t, "") }) }), h.complete.call(o[0]) }) }) }, t.fn.extend({ addClass: function (e) { return function (i, s, n, a) { return s ? t.effects.animateClass.call(this, { add: i }, s, n, a) : e.apply(this, arguments) } }(t.fn.addClass), removeClass: function (e) { return function (i, s, n, a) { return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, s, n, a) : e.apply(this, arguments) } }(t.fn.removeClass), toggleClass: function (i) { return function (s, n, a, o, r) { return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? { add: s } : { remove: s }, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: s }, n, a, o) } }(t.fn.toggleClass), switchClass: function (e, i, s, n, a) { return t.effects.animateClass.call(this, { add: i, remove: e }, s, n, a) } }) }(), function () { function s(e, i, s, n) { return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e } function n(e) { return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0 } t.extend(t.effects, { version: "1.10.3", save: function (t, e) { for (var s = 0; e.length > s; s++) null !== e[s] && t.data(i + e[s], t[0].style[e[s]]) }, restore: function (t, s) { var n, a; for (a = 0; s.length > a; a++) null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n)) }, setMode: function (t, e) { return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e }, getBaseline: function (t, e) { var i, s; switch (t[0]) { case "top": i = 0; break; case "middle": i = .5; break; case "bottom": i = 1; break; default: i = t[0] / e.height } switch (t[1]) { case "left": s = 0; break; case "center": s = .5; break; case "right": s = 1; break; default: s = t[1] / e.width } return { x: s, y: i } }, createWrapper: function (e) { if (e.parent().is(".ui-effects-wrapper")) return e.parent(); var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), "float": e.css("float") }, s = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), n = { width: e.width(), height: e.height() }, a = document.activeElement; try { a.id } catch (o) { a = document.body } return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({ position: "relative" }), e.css({ position: "relative" })) : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }), t.each(["top", "left", "bottom", "right"], function (t, s) { i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto") }), e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), e.css(n), s.css(i).show() }, removeWrapper: function (e) { var i = document.activeElement; return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e }, setTransition: function (e, i, s, n) { return n = n || {}, t.each(i, function (t, i) { var a = e.cssUnit(i); a[0] > 0 && (n[i] = a[0] * s + a[1]) }), n } }), t.fn.extend({ effect: function () { function e(e) { function s() { t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e() } var n = t(this), a = i.complete, r = i.mode; (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s) } var i = s.apply(this, arguments), n = i.mode, a = i.queue, o = t.effects.effect[i.effect]; return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function () { i.complete && i.complete.call(this) }) : a === !1 ? this.each(e) : this.queue(a || "fx", e) }, show: function (t) { return function (e) { if (n(e)) return t.apply(this, arguments); var i = s.apply(this, arguments); return i.mode = "show", this.effect.call(this, i) } }(t.fn.show), hide: function (t) { return function (e) { if (n(e)) return t.apply(this, arguments); var i = s.apply(this, arguments); return i.mode = "hide", this.effect.call(this, i) } }(t.fn.hide), toggle: function (t) { return function (e) { if (n(e) || "boolean" == typeof e) return t.apply(this, arguments); var i = s.apply(this, arguments); return i.mode = "toggle", this.effect.call(this, i) } }(t.fn.toggle), cssUnit: function (e) { var i = this.css(e), s = []; return t.each(["em", "px", "%", "pt"], function (t, e) { i.indexOf(e) > 0 && (s = [parseFloat(i), e]) }), s } }) }(), function () { var e = {}; t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) { e[i] = function (e) { return Math.pow(e, t + 2) } }), t.extend(e, { Sine: function (t) { return 1 - Math.cos(t * Math.PI / 2) }, Circ: function (t) { return 1 - Math.sqrt(1 - t * t) }, Elastic: function (t) { return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15) }, Back: function (t) { return t * t * (3 * t - 2) }, Bounce: function (t) { for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;); return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2) } }), t.each(e, function (e, i) { t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) { return 1 - i(1 - t) }, t.easing["easeInOut" + e] = function (t) { return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2 } }) }() })(jQuery);

/*!
* http://www.zazar.net/developers/jquery/zrssfeed/
*/
//(function (e) { e.fn.rssfeed = function (r, i, s) { i = e.extend({ limit: 10, offset: 1, header: !0, titletag: "h4", date: !0, dateformat: "datetime", content: !0, snippet: !0, media: !0, showerror: !0, errormsg: "", key: null, ssl: !1, linktarget: "_self", linkredirect: "", linkcontent: !1, sort: "", sortasc: !0, historical: !1 }, i); return this.each(function (o, u) { var a = e(u), f = ""; i.ssl && (f = "s"); a.hasClass("rssFeed") || a.addClass("rssFeed"); if (null == r) return !1; 0 < i.offset && (i.offset -= 1); i.limit += i.offset; f = "http" + f + "://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(r); f += "&num=" + i.limit; i.historical && (f += "&scoring=h"); null != i.key && (f += "&key=" + i.key); e.getJSON(f + "&output=json_xml", function (r) { if (200 == r.responseStatus) { var o = r.responseData, f = i; if (r = o.feed) { var c = [], d = 0, v = "", m = "odd"; if (f.media) { var g = o.xmlString; "Microsoft Internet Explorer" == navigator.appName ? (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(g)) : d = (new DOMParser).parseFromString(g, "text/xml"); g = d.getElementsByTagName("item") } f.header && (v += '<div class="rssHeader"><a href="' + r.link + '" title="' + r.description + '">' + r.title + "</a></div>"); v += '<div class="rssBody"><ul>'; for (o = f.offset; o < r.entries.length; o++) { d = o - f.offset; c[d] = []; var y = r.entries[o], b, E = "", S = y.link; switch (f.sort) { case "title": E = y.title; break; case "date": E = y.publishedDate } c[d].sort = E; if (y.publishedDate) switch (E = new Date(y.publishedDate), b = E.toLocaleDateString() + " " + E.toLocaleTimeString(), f.dateformat) { case "datetime": break; case "date": b = E.toLocaleDateString(); break; case "time": b = E.toLocaleTimeString(); break; case "timeline": b = new Date(E); b = Math.round(((new Date).getTime() - b.getTime()) / 1e3); 60 > b ? b = "< 1 min" : (3600 > b ? (b = Math.round(b / 60) - 1, E = "min") : 86400 > b ? (b = Math.round(b / 3600) - 1, E = "hour") : 604800 > b ? (b = Math.round(b / 86400) - 1, E = "day") : (b = Math.round(b / 604800) - 1, E = "week"), 1 < b && (E += "s"), b = b + " " + E); break; default: b = E, E = new Date(b), b = f.dateformat, b = b.replace("dd", t(E.getDate())), b = b.replace("MMMM", n(E.getMonth())), b = b.replace("MM", t(E.getMonth() + 1)), b = b.replace("yyyy", E.getFullYear()), b = b.replace("hh", t(E.getHours())), b = b.replace("mm", t(E.getMinutes())), b = b.replace("ss", t(E.getSeconds())) } f.linkredirect && (S = encodeURIComponent(S)); c[d].html = "<" + f.titletag + '><a href="' + f.linkredirect + S + '" title="View this feed at ' + r.title + '">' + y.title + "</a></" + f.titletag + ">"; f.date && b && (c[d].html += "<div>" + b + "</div>"); f.content && (y = f.snippet && "" != y.contentSnippet ? y.contentSnippet : y.content, f.linkcontent && (y = '<a href="' + f.linkredirect + S + '" title="View this feed at ' + r.title + '">' + y + "</a>"), c[d].html += "<p>" + y + "</p>"); if (f.media && 0 < g.length && (S = g[o].getElementsByTagName("enclosure"), 0 < S.length)) { c[d].html += '<div class="rssMedia"><div>Media files</div><ul>'; for (y = 0; y < S.length; y++) { var T = S[y].getAttribute("url"), N = S[y].getAttribute("type"), C = S[y].getAttribute("length"), E = c[d], k = c[d].html, T = '<li><a href="' + T + '" title="Download this media">' + T.split("/").pop() + "</a> (" + N + ", ", N = Math.floor(Math.log(C) / Math.log(1024)), C = (C / Math.pow(1024, Math.floor(N))).toFixed(2) + " " + "bytes kb MB GB TB PB".split(" ")[N]; E.html = k + (T + C + ")</li>") } c[d].html += "</ul></div>" } } f.sort && c.sort(function (e, t) { if (f.sortasc) var n = e.sort, r = t.sort; else n = t.sort, r = e.sort; if ("date" == f.sort) return new Date(n) - new Date(r); n = n.toLowerCase(); r = r.toLowerCase(); return n < r ? -1 : n > r ? 1 : 0 }); e.each(c, function (e) { v += '<li class="rssRow ' + m + '">' + c[e].html + "</li>"; m = "odd" == m ? "even" : "odd" }); v += "</ul></div>"; e(u).html(v); e("a", u).attr("target", f.linktarget) } e.isFunction(s) && s.call(this, a) } else i.showerror && (d = "" != i.errormsg ? i.errormsg : r.responseDetails), e(u).html('<div class="rssError"><p>' + d + "</p></div>") }) }) }; var t = function (e) { e += ""; 2 > e.length && (e = "0" + e); return e }, n = function (e) { return "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[e] } })(jQuery)


/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
*/

(function (a) { a.fn.extend({ customSelect: function (c) { if (typeof document.body.style.maxHeight === "undefined") { return this } var e = { customClass: "customSelect", mapClass: true, mapStyle: true }, c = a.extend(e, c), d = c.customClass, f = function (h, k) { var g = h.find(":selected"), j = k.children(":first"), i = g.html() || "&nbsp;"; j.html(i); if (g.attr("disabled")) { k.addClass(b("DisabledOption")) } else { k.removeClass(b("DisabledOption")) } setTimeout(function () { k.removeClass(b("Open")); a(document).off("mouseup." + b("Open")) }, 60) }, b = function (g) { return d + g }; return this.each(function () { var g = a(this), i = a("<span />").addClass(b("Inner")), h = a("<span />"); g.after(h.append(i)); h.addClass(d); if (c.mapClass) { h.addClass(g.attr("class")) } if (c.mapStyle) { h.attr("style", g.attr("style")) } g.addClass("hasCustomSelect").on("update", function () { f(g, h); var k = parseInt(g.outerWidth(), 10) - (parseInt(h.outerWidth(), 10) - parseInt(h.width(), 10)); h.css({ display: "inline-block" }); var j = h.outerHeight(); if (g.attr("disabled")) { h.addClass(b("Disabled")) } else { h.removeClass(b("Disabled")) } i.css({ width: k, display: "inline-block" }); g.css({ "-webkit-appearance": "menulist-button", width: h.outerWidth(), position: "absolute", opacity: 0, height: j, fontSize: h.css("font-size") }) }).on("change", function () { h.addClass(b("Changed")); f(g, h) }).on("keyup", function (j) { if (!h.hasClass(b("Open"))) { g.blur(); g.focus() } else { if (j.which == 13 || j.which == 27) { f(g, h) } } }).on("mousedown", function (j) { h.removeClass(b("Changed")) }).on("mouseup", function (j) { if (!h.hasClass(b("Open"))) { if (a("." + b("Open")).not(h).length > 0 && typeof InstallTrigger !== "undefined") { g.focus() } else { h.addClass(b("Open")); j.stopPropagation(); a(document).one("mouseup." + b("Open"), function (k) { if (k.target != g.get(0) && a.inArray(k.target, g.find("*").get()) < 0) { g.blur() } else { f(g, h) } }) } } }).focus(function () { h.removeClass(b("Changed")).addClass(b("Focus")) }).blur(function () { h.removeClass(b("Focus") + " " + b("Open")) }).hover(function () { h.addClass(b("Hover")) }, function () { h.removeClass(b("Hover")) }).trigger("update") }) } }) })(jQuery);

/*! http://mths.be/placeholder v2.0.7 by @mathias */
; (function (f, h, $) { var a = 'placeholder' in h.createElement('input'), d = 'placeholder' in h.createElement('textarea'), i = $.fn, c = $.valHooks, k, j; if (a && d) { j = i.placeholder = function () { return this }; j.input = j.textarea = true } else { j = i.placeholder = function () { var l = this; l.filter((a ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({ 'focus.placeholder': b, 'blur.placeholder': e }).data('placeholder-enabled', true).trigger('blur.placeholder'); return l }; j.input = a; j.textarea = d; k = { get: function (m) { var l = $(m); return l.data('placeholder-enabled') && l.hasClass('placeholder') ? '' : m.value }, set: function (m, n) { var l = $(m); if (!l.data('placeholder-enabled')) { return m.value = n } if (n == '') { m.value = n; if (m != h.activeElement) { e.call(m) } } else { if (l.hasClass('placeholder')) { b.call(m, true, n) || (m.value = n) } else { m.value = n } } return l } }; a || (c.input = k); d || (c.textarea = k); $(function () { $(h).delegate('form', 'submit.placeholder', function () { var l = $('.placeholder', this).each(b); setTimeout(function () { l.each(e) }, 10) }) }); $(f).bind('beforeunload.placeholder', function () { $('.placeholder').each(function () { this.value = '' }) }) } function g(m) { var l = {}, n = /^jQuery\d+$/; $.each(m.attributes, function (p, o) { if (o.specified && !n.test(o.name)) { l[o.name] = o.value } }); return l } function b(m, n) { var l = this, o = $(l); if (l.value == o.attr('placeholder') && o.hasClass('placeholder')) { if (o.data('placeholder-password')) { o = o.hide().next().show().attr('id', o.removeAttr('id').data('placeholder-id')); if (m === true) { return o[0].value = n } o.focus() } else { l.value = ''; o.removeClass('placeholder'); l == h.activeElement && l.select() } } } function e() { var q, l = this, p = $(l), m = p, o = this.id; if (l.value == '') { if (l.type == 'password') { if (!p.data('placeholder-textinput')) { try { q = p.clone().attr({ type: 'text' }) } catch (n) { q = $('<input>').attr($.extend(g(this), { type: 'text' })) } q.removeAttr('name').data({ 'placeholder-password': true, 'placeholder-id': o }).bind('focus.placeholder', b); p.data({ 'placeholder-textinput': q, 'placeholder-id': o }).before(q) } p = p.removeAttr('id').hide().prev().attr('id', o).show() } p.addClass('placeholder'); p[0].value = p.attr('placeholder') } else { p.removeClass('placeholder') } } }(this, document, jQuery));

var HHC = {
	WebFonts: {
		Initialize: function () {
			var mtiTracking = document.createElement('script');
			mtiTracking.type = 'text/javascript';
			mtiTracking.async = 'true';
			mtiTracking.src = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//fast.fonts.net/t/trackingCode.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(mtiTracking);
		}
	},

	QueryString: {
		SetValue: function (url, key, value) {
			if (url && key) {
				if (url.indexOf("?") > -1) {
					var parameterRegex = new RegExp("([?&])" + key + "=[^&]*");

					if (parameterRegex.test(url))
						url = url.replace(parameterRegex, "$1" + key + "=" + encodeURIComponent(value));
					else
						url += "&" + key + "=" + encodeURIComponent(value);
				}
				else
					if (value)
						url += "?" + key + "=" + encodeURIComponent(value);
			}

			return url;
		}
	},

	AnchoredLinks: {
		Initialize: function () {
			$(document).on("click", "a", function (event) {
				var href = $(this).attr("href");

				if (href !== undefined && href.indexOf("#") === 0) {
					event.preventDefault();

					HHC.AnchoredLinks.Scroll(href);
				}
			});
		},

		Scroll: function (href) {
			var anchor = $(href);
			var headerHeight = 0;

			if ($(window).width() >= 990) {
			    headerHeight = $('#siteheader').height();
			    headerHeight = headerHeight + $('#microsite-sticky').height() + $('#microsite-sticky').height();
			}
			if (anchor.size() > 0) {
				$("html, body").animate({
				    scrollTop: anchor.offset().top - headerHeight
				}, 500, "easeInCubic");
			}
		}
	},

	PrimaryNavigation: {
		RenderMobile: function () {
			// Add desktop containing elements
			$("h2", "div#primary-navigation div.drop-down").each(function () {
				$(this).nextUntil("h2").andSelf().wrapAll('<div class="section" />');
			});

			$("h3", "div#primary-navigation div.drop-down").each(function () {
				$(this).nextUntil("h3").andSelf().wrapAll('<div class="section" />');
			});

			$("h4", "div#primary-navigation div.drop-down").each(function () {
				$(this).nextUntil("h4").andSelf().wrapAll('<div class="section" />');
			});

			$("ul", "div#primary-navigation div.drop-down").each(function () {
				$(this).nextUntil("ul").andSelf().wrapAll('<div class="section" />');
			});

			$("div.section", "div#primary-navigation div.drop-down").each(function () {
				var level = 1;
				var parentSection = $(this).parents("div.section:first");

				if (parentSection.size() > 0)
					level = parentSection.data("level") + 1;

				$(this).addClass("level-" + level);
				$(this).data("level", level);
			});

			var html = '';
			html += '<ul class="mobile collapsed">';

			// Primary Navigation
			$("ul.desktop > li", "div#primary-navigation").each(function () {
				html += '<li>';
				html += '<a href="' + $(this).children("a").prop("href") + '">' + $(this).children("a").html() + '</a>';
				html += HHC.PrimaryNavigation.AddSectionToMobile($(this), 1);
				html += '</li>';
			});

			// Utility Navigation

			html += '<li class="utility-navigation">';
			html += '<ul>';

			$("ul > li > a", "div#utility-navigation").each(function () {
				html += '<li><a href="' + $(this).prop("href") + '">' + $(this).html() + '</a></li>';
			});

			// Network Navigation
			/*
			$("ul > li > a", "div#network-navigation").each(function () {
				html += '<li><a href="' + $(this).prop("href") + '">' + $(this).html() + '</a></li>';
			});

			html += '</ul>';
			html += '</li>';
			html += '</ul>';
			*/

			$("div#primary-navigation").append(html);
		},

		AddSectionToMobile: function (menu, level) {
			var html = '';

			var sections = $("div.section.level-" + level, menu);

			if (sections.size() > 0) {
				html += '<div class="menu clearfix">';
				html += '<a href="#" class="back">Back</a>';

				var topItem = menu.find("h2, h3, h4, a").filter(":first");

				if (topItem.is("a"))
					html += '<a href="' + topItem.prop("href") + '" class="current-level">' + topItem.html() + '</a>';
				else
					html += '<span class="current-level">' + topItem.html() + '</span>';

				html += '</div>';
				html += '<ul>';

				sections.each(function () {
					var section = $(this);
					var items = section.find("h2, h3, h4, a").filter(":not(div.level-" + (level + 1) + " *)");

					items.each(function () {
						if (!$(this).is("h2, h3, h4") || $(this).children("a").size() == 0) {
							html += '<li>';

							if ($(this).is("a"))
								html += '<a href=\"' + $(this).attr("href") + '\">' + $(this).html() + '</a>';
							else
								html += '<a href=\"#\">' + $(this).html() + '</a>';

							html += HHC.PrimaryNavigation.AddSectionToMobile(section, level + 1);
							html += '</li>';
						}
					});
				});

				html += '</ul>';
			}

			return html;
		},

		Initialize: function () {
			this.RenderMobile();

			// Mobile navigation
			var mobileNav = $("> ul.mobile", "div#primary-navigation");

			// Toggle
			$("> a.mobile", "div#primary-navigation").on("click", function (event) {
				event.preventDefault();

				var expanded = !$(this).hasClass("expanded");

				$(this).toggleClass("expanded", expanded).toggleClass("collapsed", !expanded);
				mobileNav.toggleClass("expanded", expanded).toggleClass("collapsed", !expanded);

				$("a.search", "div#primary-navigation").removeClass("expanded").addClass("collapsed");
				$("div.search", "div#banner").removeClass("expanded").addClass("collapsed");

				if (!expanded) {
					$("> ul.mobile li", "div#primary-navigation").removeClass("selected");
					$("> ul.mobile", "div#primary-navigation").height("auto");
				}
			});

			// Link handler
			mobileNav.find("a:not(.back)").on("click", function (event) {
				event.preventDefault();

				if ($(this).siblings("ul").size() > 0) {
					var selectedMenu = $(this).parents("li:first");

					selectedMenu.addClass("selected");

					mobileNav.outerHeight(selectedMenu.outerHeight());
				}
				else
					window.location.href = $(this).prop("href");
			});

			// Back link handler
			mobileNav.find("a.back").on("click", function (event) {
				event.preventDefault();

				$(this).parents("li.selected:first").removeClass("selected");

				if ($(this).parents("li.selected").size() > 0)
					mobileNav.outerHeight($(this).parents("li.selected:first").outerHeight());
				else
					mobileNav.height("auto");
			});

			// Mobile search
			$("> a.search", "div#primary-navigation").on("click", function (event) {
				event.preventDefault();

				var expanded = !$(this).hasClass("expanded");

				$(this).toggleClass("expanded", expanded).toggleClass("collapsed", !expanded);
				$("div.search", "div#banner").toggleClass("expanded", expanded).toggleClass("collapsed", !expanded);

				$("> a.mobile, ul.mobile", "div#primary-navigation").removeClass("expanded").addClass("collapsed");
				$("> ul.mobile li", "div#primary-navigation").removeClass("selected");
				$("> ul.mobile", "div#primary-navigation").height("auto");
			});

			// Desktop hover
			$("ul.desktop > li", "div#primary-navigation").hover(function () {
				var container = $(this).parents("div.container");
				var dropDown = $(this).find("div.drop-down");

				var currentPosition = dropDown.outerWidth() + $(this).offset().left;
				var maxPosition = container.width() + container.offset().left;

				if (currentPosition > maxPosition)
					dropDown.css({
						left: maxPosition - currentPosition
					});
			}, function () {
				var dropDown = $(this).find("div.drop-down");

				dropDown.removeAttr("style");
			});
		}
	},

	LeftNavigation: {
		Initialize: function () {
		    var leftNavigation = $("div#left-navigation");
		    var leftNavigationTop = $("div#left-navigation-top");

			if (leftNavigation.size() > 0) {
				// Hide navigation on mobile
			    leftNavigation.addClass("collapsed");
			    leftNavigationTop.addClass("collapsed");

				// Mobile toggle
				var mobileToggle = $('<a href="#" class="mobile-toggle">Explore this Section</a>');

				leftNavigationTop.append(mobileToggle);

				mobileToggle.on("click", function (event) {
					event.preventDefault();

					leftNavigation.toggleClass("collapsed");
					leftNavigationTop.toggleClass("collapsed");

				});
			}
		}
	},

	PageNavigation: {
		Utility: {
			LoadAddThis: function () {
				// Set Configuration Options
				addthis_config = {
					ui_click: true,
					ui_offset_top: 20,
					ui_offset_left: -20
				}

                // Load Script
                var script = document.createElement("script");
		        script.async = true; 
				script.type = "text/javascript";
				script.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-51f6cc226c6b9d4f";

				document.body.appendChild(script);
			},

			Initialize: function () {
				var utility = $("ul.utility", "div#page-navigation");

				if (utility.size() > 0) {
					// Print
					$("li.print a", utility).on("click", function (event) {
						event.preventDefault();

						window.print();
					});

					// Email
					$("li.email a", utility).on("click", function (event) {
						event.preventDefault();

						addthis_sendto('email');
					});

					// Font Size Adjustment
					$("a.decrease", utility).on("click", function () {
						var html = $("html");

						if (html.hasClass("large"))
							html.removeClass("large");
						else
							html.addClass("small");
					});

					$("a.increase", utility).on("click", function () {
						var html = $("html");

						if (html.hasClass("small"))
							html.removeClass("small");
						else
							html.addClass("large");
					});

					// AddThis
					this.LoadAddThis();
				}
			}
		},

		Initialize: function () {
			this.Utility.Initialize();
		}
	},

	TabbedNavigation: {
		Initialize: function () {
			$("div.mobile select", "div#tabbed-navigation").on("change", function () {
				var url = $(this).val();

				window.location.href = url;
			});
		}
	},

	AlphabeticalNavigation: {
		Initialize: function () {
			$("div.alphabetical-navigation div.mobile select", "div#content").on("change", function () {
				var url = $(this).val();

				window.location.href = url;
			});
		}
	},

	FileUpload: {
		Initialize: function () {
			// Replace file upload control with custom form elements
			$('input[type="file"]').each(function () {
				$(this).wrap('<div class="file-upload"></div>');

				$(this).parent().append('<input type="text" />');
				$(this).parent().append('<input type="button" class="small" value="Browse..." />');
			});

			// Button click handler
			$('div.file-upload input[type="button"]').on("click", function () {
				var container = $(this).parents("div.file-upload:first");
				var fileUpload = container.find('input[type="file"]');

				fileUpload.click();
			});

			// Text box blur
			$('div.file-upload input[type="text"]').on("focus", function () {
				$(this).blur();
			});

			// File upload change handler
			$('div.file-upload input[type="file"]').on("change", function () {
				var container = $(this).parents("div.file-upload:first");
				var textBox = container.find('input[type="text"]');
				var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');

				textBox.val(fileName);
			});
		}
	},
	
	DatePicker: {
		Initialize: function () {
			var datePickers = $("div.date-picker", "div#content");
			datePickers.datepicker({
				prevText: "Previous",
				nextText: "Next",
				dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
				showOtherMonths: true,
				selectOtherMonths: true,
				onChangeMonthYear: function (year, month, instance) {
					// Highlight current week
					setTimeout(function () {
						$("td.ui-datepicker-today", instance.dpDiv).parent("tr").addClass("ui-datepicker-current-week");
					}, 100);
				}
			});

			datePickers.each(function () {
				var datePicker = $(this);

				// Set Date
				var selectedDate = datePicker.data("selected-date");

				if (selectedDate !== undefined)
					$(this).datepicker("setDate", selectedDate);

				// Highlight current week
				setTimeout(function () {
					$("td.ui-datepicker-today", datePicker).parent("tr").addClass("ui-datepicker-current-week");
				}, 100);
			});
		}
	},

	ToggleContainer: {
		Initialize: function () {
			$(".toggle-container").each(function () {
				var toggleContainer = $(this);

				// Collapse on page load
				HHC.ToggleContainer.Toggle(toggleContainer, false);

				// Toggle click handler
				$("a.toggle", toggleContainer).on("click", function (event) {
					event.preventDefault();

					HHC.ToggleContainer.Toggle(toggleContainer);
				});
			});
		},

		Toggle: function (toggleContainer, expanded) {
			if (typeof expanded !== "boolean")
				expanded = !toggleContainer.hasClass("expanded");

			if (expanded)
				toggleContainer.removeClass("collapsed").addClass("expanded");
			else
				toggleContainer.removeClass("expanded").addClass("collapsed");

			var toggleLink = $("a.toggle", toggleContainer);

			if (toggleLink.size() > 0) {
				var html = toggleLink.html();

				if (expanded)
					html = html.replace(/More/, "Less")
				else
					html = html.replace(/Less/, "More")

				toggleLink.html(html);

				// Fix custom select boxes that were hidden
				$("select", "div#template").trigger("update");

				setTimeout(function () {
					$("select", "div#template").trigger("update");
				}, 50);
			}
		}
	},

	Tooltips: {
		Initialize: function () {
			$("[data-tooltip]").hover(function () {
				if ($(window).width() >= 990) {
					// Generate Tooltip
					var content = $(this).data("tooltip");

					var html = '';
					html += '<div class="tooltip">';
					html += '<div class="content">';
					html += '<p>' + content + '</p>';
					html += '</div>';
					html += '</div>';

					$("div#content").append(html);

					// Position Tooltip
					var tooltip = $("div#content").children("div.tooltip");
					horizontalOffset = 21;
					verticalOffset = 30;

					var windowHeight = $(window).height();
					var windowWidth = $(window).width();
					var tooltipHeight = tooltip.outerHeight(false);
					var tooltipWidth = tooltip.outerWidth(false);
					var topPosition = $(this).offset().top + $(this).outerHeight(false) + verticalOffset;
					var leftPosition = $(this).offset().left - horizontalOffset;
					var topClass = "top";
					var leftClass = "left";

					if ($(this).offset().top + tooltipHeight + verticalOffset > windowHeight + $(window).scrollTop()) {
						topPosition = $(this).offset().top - tooltipHeight - horizontalOffset;
						topClass = "bottom";
					}

					if ($(this).offset().left + tooltipWidth > windowWidth) {
						leftPosition = leftPosition + $(this).outerWidth(false) - tooltipWidth + (2 * horizontalOffset);
						leftClass = "right";
					}

					tooltip.css({
						top: topPosition,
						left: leftPosition
					}).addClass(topClass).addClass(leftClass).show();
				}
			}, function () {
				$("div#content").children("div.tooltip").remove();
			});
		}
	},

	Popups: {
		Initialize: function () {
			$("a.popup[data-popup-selector]").on("click.popup", function (event) {
				event.preventDefault();

				var popup = $($(this).data("popup-selector"));

				if (popup.size() > 0)
					HHC.Popups.DisplayPopup(popup);
			});

			$("a.modal").on("click.modal", function (event) {
				event.preventDefault();

				var modal = $("#iframe-modal");

				if (modal.size() === 0) {
					var html = '';

					html += '<div id="iframe-modal" class="popup">';
					html += '<a href="#" class="close">Close</a>';
					html += '<iframe></iframe>';
					html += '<div class="buttons">';
					html += '<input type="button" value="Close" class="close" />';
					html += '</div>';
					html += '</div>';

					modal = $(html).appendTo("#content");
				}
				else
					$("iframe", modal).removeAttr("style");

				var url = $(this).attr("href");
				var width = $(this).data("width");
				var height = $(this).data("height");

				$("iframe", modal).attr("src", url);

				if (width !== undefined)
					modal.css("max-width", width);

				if (height !== undefined)
					$("iframe", modal).css("height", height);

				HHC.Popups.DisplayPopup(modal);
			});
		},

		DisplayPopup: function (popup) {
			if ($("div.overlay").size() === 0)
				$("div#template").append('<div class="overlay"></div>');

			var overlay = $("div.overlay");

			overlay.show();
			popup.show();
			HHC.Popups.Reposition(popup);

			// Close Handler
			$(".close", popup).on("click.popup", function () {
				overlay.removeAttr("style");
				popup.removeAttr("style");

				$("a.close", popup).unbind("click.popup");
				$("window").unbind("resize.popup");
			});

			// Window Resize
			$(window).on("resize", function () { HHC.Popups.Reposition(popup) });
			$(window).on("scroll", function () { HHC.Popups.Reposition(popup) });
		},

		Reposition: function (popup) {
			var doc = document.documentElement;
			var windowTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
			var windowWidth = $(window).width();
			var windowHeight = $(window).height();
			var popupWidth = popup.outerWidth();
			var popupHeight = popup.outerHeight();

			if (typeof this.lastwindowTop == 'undefined') this.lastwindowTop = 0;
			if (typeof this.lastwindowWidth == 'undefined') this.lastwindowWidth = 0;
			if (typeof this.lastwindowHeight == 'undefined') this.lastwindowHeight = 0;
			if (typeof this.lastpopupWidth == 'undefined') this.lastpopupWidth = 0;
			if (typeof this.lastpopupHeight == 'undefined') this.lastpopupHeight = 0;

			if (windowTop !== this.lastwindowTop ||
				windowWidth !== this.lastwindowWidth ||
				windowHeight !== this.lastwindowHeight ||
				popupWidth !== this.lastpopupWidth ||
				Math.abs(this.lastpopupHeight - popupHeight) > 1) {

				var offset = 0;

				//if (windowWidth < 990)
				//	offset = 10;

				popup.css({
					top: ((windowHeight - popupHeight) > 0 ? Math.floor((windowHeight - popupHeight) / 2) : 0) + offset + $(window).scrollTop() + "px",
					left: ((windowWidth - popupWidth) > 0 ? Math.floor((windowWidth - popupWidth) / 2) : 0) + "px"
				});
			}

			this.lastwindowTop = windowHeight;
			this.lastwindowWidth = windowWidth;
			this.lastwindowHeight = windowHeight;
			this.lastpopupWidth = popupWidth;
			this.lastpopupHeight = popupHeight;
		}
	},

	Maps: {
		GetLocationFromElement: function (element) {
			var location = {
				Title: element.data("title"),
				Address1: element.data("address1"),
				Address2: ((element.data("address2")) ? element.data("address2") : ""),
				City: element.data("city"),
				State: element.data("state"),
				ZipCode: ((element.data("zip-code")) ? element.data("zip-code") : ""),
				Phone: element.data("phone"),
				Fax: element.data("fax"),
				Url: element.data("href")
			};

			return location;
		},

		GetInfoWindowContent: function (location) {
			var html = '';
			html += '<h3>' + location.Title + '</h3>';
			html += '<p>';
			html += location.Address1 + '<br/>';
			if (location.Address2)
				html += location.Address2 + '<br>';
			html += location.City + ', ' + location.State + ', ' + location.ZipCode;
			if (location.Url)
				html += ('<br/><a href="' + location.Url + '">More about this location ></a>');
			html += '</p>';
			
			return html;
		},

		GetAddressString: function (location) {
			var address = "";
			/*
			if (location.Title)
				address += location.Title + ", ";
			*/
			if (location.Address1)
				address += location.Address1 + ", ";

			if (location.Address2)
				address += location.Address2 + ", ";

			if (location.City && location.State)
				address += location.City + ", " + location.State + " ";

			if (location.ZipCode)
				address += location.ZipCode;

			return address;
		},

		Markers: [],

		AddMarker: function (map, boundaries, location, latitude, longitude, showInfoWindow) {
			var markerImage = new google.maps.MarkerImage("/Configuration/Template%20Images/location-marker.png", new google.maps.Size(33, 47, "px", "px"));

			// Add Marker
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(latitude, longitude),
				icon: markerImage,
				optimized: false,
				map: map
			});

			// Position Map
			boundaries.extend(marker.getPosition());
			map.setCenter(boundaries.getCenter());
			map.fitBounds(boundaries);
			google.maps.event.trigger(map, 'resize');

			if (showInfoWindow) {
				var markerHtml = HHC.Maps.GetInfoWindowContent(location);
				google.maps.event.addListener(marker, 'click', HHC.Maps.InfoWindowCallback(markerHtml, marker, map));
			}
		},

		InfoWindowCallback: function (infoWindowHtml, marker, map) {
			return function () {

				HHC.Maps.InfoWindow.setContent(infoWindowHtml);
				HHC.Maps.InfoWindow.open(map, marker);
			};
		},

		GeocodeLocation: function (map, boundaries, location, showInfoWindow) {
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({ address: (HHC.Maps.GetAddressString(location)) }, function (results, status) {
				if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) { 
					return window.setTimeout(function () { HHC.Maps.GeocodeLocation(map, boundaries, location, showInfoWindow) }, 500) //retry if over query per second limit
				} else if (status == google.maps.GeocoderStatus.OK) { 
					// Marker Sprite
					var coords = results[0].geometry.location;
					HHC.Maps.SaveLocation(location, coords.lat(), coords.lng());
					HHC.Maps.AddMarker(map, boundaries, location, coords.lat(), coords.lng(), showInfoWindow);
				} else {
					return false; // if request is invalid, zero results, or other error retry will not help
				}
			})
			
		},

		GroupBy: function (list, keyGetter){
             map = new Map();

		}
        ,
		AddLocationToMap: function (map, boundaries, location, showInfoWindow) {
			if (!HHC.Maps.IsValidLocation(location)) {
				return false;
			}

			return $.ajax({
				type: "POST",
				url: "/CustomWeb/HHCService/MapService.asmx/getmaplocation",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				data: JSON.stringify({
					"address1": location.Address1,
					"address2": location.Address2,
					"city": location.City,
					"state": location.State,
					"zipcode": location.ZipCode
				}),
				success: ( function(data) {
					if (data && data.d != "null") {
						var result = JSON.parse(data.d);
						HHC.Maps.AddMarker(map, boundaries, location, result.Latitude, result.Longitude, showInfoWindow);
					} else {
						HHC.Maps.GeocodeLocation(map, boundaries, location, showInfoWindow);
					}
				}),
				error: ( function() {
					HHC.Maps.GeocodeLocation(map, boundaries, location, showInfoWindow);
				})
			});
		},

		SaveLocation: function (location, latitude, longitude) {
			$.ajax({
				type: "POST",
				url: "/CustomWeb/HHCService/MapService.asmx/savemaplocation",
				contentType: "application/json; charset=utf-8",
				dataType: "json",
				data: JSON.stringify({
					"address1": location.Address1,
					"address2": location.Address2,
					"city": location.City,
					"state": location.State,
					"zipcode": location.ZipCode,
					"latitude": latitude,
					"longitude": longitude
				})
			});
		},

		IsValidLocation: function(location) {
			if(location.ZipCode) {
				return true;
			} else if(location.City && location.State) {
				return true;
			} else {
				return false;
			}
		},

        
		DisplayMap: function (map, locations, showInfoWindow) {
            			if (typeof google === "object") {
				if (map instanceof jQuery)
					map = map[0];

				var mapOptions = {
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					zoom: 16,
					maxZoom: 16,
					streetViewControl: false,
				    mapTypeControl: false
				};

				if (showInfoWindow) {
					HHC.Maps.InfoWindow = new google.maps.InfoWindow();
				};

				var map = new google.maps.Map(map, mapOptions);
				var boundaries = new google.maps.LatLngBounds();

				$(map.getDiv()).data("markers", []);
				var delay = 100;



				for (var i = 0; i < locations.length; i++) {
					(function (index) {
						var location = locations[index];
						if(HHC.Maps.IsValidLocation(location)) {
							window.setTimeout(function () {
								HHC.Maps.AddLocationToMap(map, boundaries, location, showInfoWindow);
							}, delay * index);
						}
					})(i);
				}
			}
		},

		ActiveWindow: false,

		LoadAPI: function (callback) {
			if ($("script.google-maps").size() == 0) {
				var script = document.createElement("script");
				script.type = "text/javascript";
				script.className = "google-maps";
				script.src = "//maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAThgbUavjG8UBhGaLJoeVKNYGQ5hYfwuI&callback=" + callback;

				document.body.appendChild(script);
			}
		},

		InfoWindow: "",

		LoadLocations: function () {
			if ($("ul.locations#aggregate").length) {
				var map = $("div.map");
				var locations = [];
				$("ul.locations > li").each(function (index, value) {
					locations.push(HHC.Maps.GetLocationFromElement($(value)));
				});
				if (locations.length > 0)
					HHC.Maps.DisplayMap(map, locations, true);
			} else {
				$("ul.locations > li").each(function () {
					var map = $(this).find("div.map");
					var location = [
						HHC.Maps.GetLocationFromElement($(this))
					];

					if (location.length > 0)
						HHC.Maps.DisplayMap(map, location, false);
				});
			}
		},

		Initialize: function () {
			if ($("ul.locations").size() > 0) {
				HHC.Maps.LoadAPI("HHC.Maps.LoadLocations");
			}
		}
	},

	Sliders: {
		DisplayTile: function (slider, selectedIndex) {
			if (!slider.data("active")) {
				var sliderContainer = slider.find("ul.slider");
				var sliderItems = sliderContainer.children();
				var itemCount = sliderItems.size();
				var currentIndex = slider.data("selectedIndex");

				// Validate selectedIndex
				if (selectedIndex < 0)
					selectedIndex = itemCount - 1;
				else if (selectedIndex > itemCount - 1)
					selectedIndex = 0;

				// Animate Slider
				if (selectedIndex != currentIndex) {
					slider.data("active", true);

					sliderContainer.animate({
						left: (-100 * selectedIndex) + "%"
					}, 800, "easeInCirc", function () {
						slider.data("active", false);

						var pagerItems = slider.find("ol.selector li");

						pagerItems.removeClass("selected");
						pagerItems.filter(":eq(" + selectedIndex + ")").addClass("selected");
					});

					slider.data("selectedIndex", selectedIndex);
				}
			}
		},

		EqualizeHeight: function () {
			var sliders = $("div.slider", "div#content");

			sliders.each(function () {
				var slider = $(this);
				var sliderContainer = slider.find("ul.slider");
				var sliderItems = sliderContainer.children("li");

				var maxHeight = 0;

				sliderItems.height("auto");

				sliderItems.each(function () {
					var height = $(this).outerHeight(false);

					if (height > maxHeight)
						maxHeight = height;
				});

				sliderItems.outerHeight(maxHeight);
			});
		},

		Initialize: function () {
			var sliders = $("div.slider", "div#content");

			sliders.each(function () {
				var slider = $(this);
				var sliderContainer = slider.find("ul.slider");
				var sliderItems = sliderContainer.children("li");
				var itemCount = sliderItems.size();

				if (itemCount > 1) {
					sliderContainer.width((itemCount * 100) + "%");
					sliderItems.outerWidth((100 / itemCount) + "%").removeClass("hidden");

					slider.data("selectedIndex", 0);
					slider.data("active", false);
					slider.data("hover", false);

					// Selector click handler
					slider.find("ol.selector a").on("click", function (event) {
						event.preventDefault();

						if (!slider.data("active")) {
							var sliderContainer = slider.find("ul.slider");
							var sliderItems = sliderContainer.children();
							var itemCount = sliderItems.size();
							var currentIndex = slider.data("selectedIndex");
							var selectedIndex = $(this).parent().index();

							HHC.Sliders.DisplayTile(slider, selectedIndex);
						}
					});

					// Auto-rotation
					setInterval(function () {
						if (!slider.data("hover")) {
							var currentIndex = slider.data("selectedIndex");

							HHC.Sliders.DisplayTile(slider, currentIndex + 1);
						}
					}, 10000);

					slider.hover(function () {
						slider.data("hover", true);
					}, function () {
						slider.data("hover", false);
					});
				}
			});

			setTimeout(HHC.Sliders.EqualizeHeight, 100);

			$(window).on("load.sliders", HHC.Sliders.EqualizeHeight);

			// Window resize handler
			$(window).on("resize.sliders", HHC.Sliders.EqualizeHeight);
		}
	},

	ScrollingSlider: {
		Timer: null,

		Initialize: function () {
			// Set total width
			$("div.scrolling-slider", "div#content").each(function () {
				var slider = $(this).children("ul");
				var totalWidth = 0;

				slider.children("li").each(function () {
					totalWidth += $(this).outerWidth(true);
				});

				slider.width(totalWidth);
			});

			// Disable arrow click
			$("div.scrolling-slider a.previous, div.scrolling-slider a.next", "div#content").on("click", function (event) {
				event.preventDefault();
			});

			// Previous arrow hover
			$("div.scrolling-slider a.previous", "div#content").hover(function () {
				var slider = $(this).siblings("ul");
				var containerWidth = $(this).parent("div.scrolling-slider:first").width();
				var sliderWidth = slider.width();
				var sliderPadding = parseInt(slider.css("paddingLeft")) + parseInt(slider.css("paddingRight"));
				var maxPosition = 0;

				HHC.ScrollingSlider.Timer = setInterval(function () {
					if (sliderWidth > containerWidth) {
						var leftPosition = slider.position().left + 15;

						if (leftPosition > maxPosition) {
							leftPosition = maxPosition;

							clearInterval(HHC.ScrollingSlider.Timer);
						}

						slider.animate({
							left: leftPosition
						}, 80, "linear");
					}
				}, 100);
			}, function () {
				clearInterval(HHC.ScrollingSlider.Timer);
			});

			// Next arrow hover
			$("div.scrolling-slider a.next", "div#content").hover(function () {
				var slider = $(this).siblings("ul");
				var containerWidth = $(this).parent("div.scrolling-slider:first").width();
				var sliderWidth = slider.width();
				var sliderPadding = parseInt(slider.css("paddingLeft")) + parseInt(slider.css("paddingRight"));
				var minPosition = -1 * (sliderWidth - containerWidth + sliderPadding);

				HHC.ScrollingSlider.Timer = setInterval(function () {
					if (sliderWidth > containerWidth) {
						var leftPosition = slider.position().left - 15;

						if (leftPosition < minPosition) {
							leftPosition = minPosition;

							clearInterval(HHC.ScrollingSlider.Timer);
						}

						slider.animate({
							left: leftPosition
						}, 80, "linear");
					}
				}, 100);
			}, function () {
				clearInterval(HHC.ScrollingSlider.Timer);
			});
		}
	},

	CustomForms: {
		ToggleSelectClass: function (selectBox) {
			var selectedValue = selectBox.val();
			var customSelect = selectBox.next("span.select:first");

			if (selectedValue) {
				selectBox.removeClass("default");
				customSelect.removeClass("default");
			}
			else {
				selectBox.addClass("default");
				customSelect.addClass("default");
			}
		},

		ToggleValidators: function (formContainer, revalidate) {
			if (revalidate)
				Page_ClientValidate();

			formContainer.toggleClass("error", !Page_IsValid)

			for (var i = 0; i < Page_Validators.length; i++) {
				var validator = Page_Validators[i];

				$("#" + validator.controltovalidate, formContainer).parents("div.form-row:first").toggleClass("error", !validator.isvalid);
			}
		},

		Initialize: function () {
			var selectBoxes = $("select", "div#template");
			var textBoxes = $("input, textarea", "div#template");

			// Default text
			textBoxes.not(".no-javascript").placeholder();


			if (window.location.href.indexOf('photo-gallery') == -1) {
				selectBoxes.on("change", function () {
					HHC.CustomForms.ToggleSelectClass($(this));
				});

				selectBoxes.each(function () {
					HHC.CustomForms.ToggleSelectClass($(this));
				});

				// Select box
				selectBoxes.not(".no-javascript").customSelect({
					customClass: "select"
				});
			}

			$(window).on("resize.select", function () {
				selectBoxes.trigger("update");
			});

			// Validation on Page Load
			if (typeof Page_ValidationActive === "boolean" && Page_ValidationActive === true) {
				$("div.form-container", "div#template").each(function () {
					HHC.CustomForms.ToggleValidators($(this), false);
				});

				// Validation on Submit
				$("div.form-container div.form-footer input[type='submit']", "div#template").on("click", function () {
					var formContainer = $(this).parents("div.form-container:first");

					HHC.CustomForms.ToggleValidators(formContainer, true);
				});
			}
		}
	},

	RxSnippet: {
		/*
		Initialize: function () {
			var formContainer = $("div.form-container:first");
			rxSnippetFormId = '';
			if (formContainer.length > 0) {
				rxSnippetFormId = formContainer.parents('form').attr('id');
				if (rxSnippetFormId != null || rxSnippetFormId != '')
					(function (e, t, n, a, c) { a = e.createElement(t), c = e.getElementsByTagName(t)[0], a.async = 1, a.src = n, c.parentNode.insertBefore(a, c) })(document, "script", "https://mktgsres.advisory.com/resources/lp_snippet/prod/lplib.js");
				window.addEventListener ? window.addEventListener("load", init, false) : window.attachEvent && window.attachEvent("onload", init);
				function init() {
					lplib.set('hartford_a59', 'index.php');
					lplib.sendReferrer();
					document.querySelector('#' + rxSnippetFormId).onsubmit = function () {
					};
				}
			}
		}
		*/
		Initialize: function () {
			var formContainer = $("div.form-container:first");
			var classesEventsFormContainer = $("div.registration-form");

			rxSnippetFormId = '';


			if (rxSnippetFormId != null || rxSnippetFormId != '') {   // Ref: http://arxtracker.advisory.com/v2/docs/#/installation
				!function () {
					var arxtracker = window.arxtracker = window.arxtracker || {}; if (arxtracker.invoked) return void (window.console && console.error && console.error("ARx Tracker: Code snippet included twice")); arxtracker.invoked = !0, arxtracker.methods = ["catchSubmit", "catchClick", "ready", "trackCampaign", "trackConversion", "trackEvent", "trackPage"], arxtracker.cache = []; for (var r = function (r) { return function () { var e = Array.prototype.slice.call(arguments); arxtracker.cache.push({ method: r, args: e }) } }, e = 0; e < arxtracker.methods.length; e++) { var t = arxtracker.methods[e]; arxtracker[t] || (arxtracker[t] = r(t)) } arxtracker.SNIPPET_VERSION = "2.5.1", arxtracker.load = function (r, e) { arxtracker.sourceId = r, arxtracker.endpoint = e; var t = document.createElement("script"); t.type = "text/javascript", t.async = !0, t.src = "https://arxtracker.advisory.com/v2/scripts/tracker.min.js"; var c = document.getElementsByTagName("script")[0]; c.parentNode.insertBefore(t, c) },
					  arxtracker.load("hartford_a59")
				}();
			}
				// Ref: http://arxtracker.advisory.com/v2/docs/#/reference/track-campaign
				arxtracker.trackCampaign();

			if (formContainer.length > 0) {
				rxSnippetFormId = formContainer.parents('form').attr('id');

			  

					// Watch for click event on the form submit button
					$('#' + rxSnippetFormId + ' input[type=button]').on('click', function () {
						// Ref: http://arxtracker.advisory.com/v2/docs/#/reference/track-campaign
						arxtracker.trackConversion('#' + rxSnippetFormId);
					});
			}

			//added treatment specifically for classes and events campaign handling
			if (classesEventsFormContainer.length > 0) {
				rxSnippetFormId = classesEventsFormContainer.parents('form').attr('id');



				// Watch for click event on the form submit button
				$('input[type=submit]').on('click', function () {
					// Ref: http://arxtracker.advisory.com/v2/docs/#/reference/track-campaign
					arxtracker.trackConversion('#' + rxSnippetFormId);

				});
			}
		}
	},

	VideoPreviews: {
		Initialize: function () {
			$("img.video-preview", "div#content").each(function () {
				if (!$(this).parent().is("div.video-preview"))
					$(this).wrap('<div class="video-preview" />');
			});
		}
	},

	CycleAlerts:  {
		Initialize: function() {
			var alertDivs = $(".alert-item")
			if(alertDivs.length > 1) {
				alertDivs.hide(),
				i = 0;
				(function cycle() {
					alertDivs.eq(i).fadeIn(400).delay(6000).fadeOut(400, cycle);
					i = ++i % alertDivs.length;
				})();
			}
		}
	},

	Templates: {
		T01_Home: {
			Initialize: function () {
				$(document).on("click", "ul#home-brand-tile > li > div.preview", function () {
					$(this).parent("li").siblings("li").removeClass("expanded").addClass("collapsed");
					$(this).parent("li").removeClass("collapsed").addClass("expanded");
				});

				$(document).on("click", "ul#home-brand-tile div.popup a.close", function () {
					$(this).parents("ul#home-brand-tile").children("li").removeClass("expanded").addClass("collapsed");
				});
			}
		},

		T08_SearchResults: {
			Initialize: function () {
				var leftNavigation = $("div#left-navigation");

				// Display Filters
				$("h1 input[type='button']", "div#content").on("click", function () {
					leftNavigation.addClass("expanded");

					HHC.AnchoredLinks.Scroll("#search-filters");
				});

				// Hide Filters
				$("input.cancel", leftNavigation).on("click", function () {
					leftNavigation.removeClass("expanded");
				});
			}
		},

		T11_EventListing: {
			Initialize: function () {
				// Calendar Toggle
				$("div.events div.date h2", "div#content").on("click", function () {
					$(this).parents("div.date:first").toggleClass("expanded");
				});

				// Date Picker click event
				var datePicker = $("div.date-picker", "div#content");

				datePicker.datepicker("option", "onSelect", function (dateText, datePicker) {
					var redirectUrl = window.location.href;
					redirectUrl = HHC.QueryString.SetValue(redirectUrl, "y", datePicker.currentYear);
					redirectUrl = HHC.QueryString.SetValue(redirectUrl, "m", datePicker.currentMonth + 1);
					redirectUrl = HHC.QueryString.SetValue(redirectUrl, "d", datePicker.currentDay);

					window.location.href = redirectUrl;
				});
			}
		},

		T12_EventDetail: {
			DisplayMaps: function () {
				$("div.map", "div#content").each(function () {
					var map = $(this);

					var locations = [
						HHC.Maps.GetLocationFromElement(map)
					];

					HHC.Maps.DisplayMap(map, locations, false);
				});
			},

			Initialize: function () {
				// Load Map
				HHC.Maps.LoadAPI("HHC.Templates.T12_EventDetail.DisplayMaps");

				// Tell a Friend
				$("ul.circle-icons li.tell-a-friend", "div#right-column").on("click", function (event) {
					event.preventDefault();

					addthis_sendto('email');
				});
			}
		},

		T13_EventCalendar: {
			Initialize: function () {
				// Highlight current week
				$("table.calendar td.today", "div#content").parent("tr").addClass("current-week");

				// Remove ASP.NET tooltip
				$("table.calendar", "div#content").removeAttr("title");
			}
		},

		T21_PhysicianDetail: {
			DisplayMap: function () {
				var map = $("div.map", "div#content");
				var locations = [];
				var locationElements = $("ul.circle-icons > li.location", "div#content");
				var locationsToMap = locationElements.size() > 5 ? 5 : locationElements.size();

				for (var i = 0; i < locationsToMap; i++) {
					locations.push(HHC.Maps.GetLocationFromElement(locationElements.eq(i)));
				}

				HHC.Maps.DisplayMap(map, locations, false);
			},

			Initialize: function () {
				HHC.Maps.LoadAPI("HHC.Templates.T21_PhysicianDetail.DisplayMap");
			}
		},

		T23_CareGram_ChoosePicture: {
			HiddenField: null,

			UploadButton: null,

			Initialize: function () {
				// Select Picture
				$("ul.thumbnail-options input", "div#content").on("click", function () {
					$(this).parents("li:first").siblings("li").removeClass("selected");
					$(this).parents("li:first").addClass("selected");

					var picture = $(this).parents("li:first").data("picture");

					HHC.Templates.T23_CareGram_ChoosePicture.HiddenField.val(picture);
				});

				// File Upload
				$("div.custom input[type='file']", "div#content").on("change", function () {
					var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');

					if (fileName !== null && fileName !== "")
						HHC.Templates.T23_CareGram_ChoosePicture.UploadButton.click();
				});
			}
		},

		T23_CareGram_ChooseBorder: {
			HiddenField: null,

			Initialize: function () {
				// Select Border
				$("ul.thumbnail-options input", "div#content").on("click", function () {
					$(this).parents("li:first").siblings("li").removeClass("selected");
					$(this).parents("li:first").addClass("selected");

					var border = $(this).parents("li:first").data("border");

					HHC.Templates.T23_CareGram_ChooseBorder.HiddenField.val(border);
				});
			}
		},

		T24_CareGram_EnterMessage: {
			Initialize: function () {
				setTimeout(function () {
					var popup = $("div#caregram-preview");

					if (popup.size() > 0)
						HHC.Popups.DisplayPopup(popup);
				}, 100);
			}
		},

		T25_PracticeDetail: {
			DisplayMap: function () {
				var map = $("div.map", "div#content");
				var locations = [];
				var locationElements = $("ul.circle-icons > li.location", "div#right-column");
				var locationsToMap = locationElements.size() > 5 ? 5 : locationElements.size();

				for (var i = 0; i < locationsToMap; i++) {
					locations.push(HHC.Maps.GetLocationFromElement(locationElements.eq(i)));
				}

				HHC.Maps.DisplayMap(map, locations, false);
			},

			Initialize: function () {
				HHC.Maps.LoadAPI("HHC.Templates.T25_PracticeDetail.DisplayMap");
			}
		},

		T41_ConiferEventListing: {
			DisplayMap: function () {
				var map = $("div.map", "div#content");
				var locations = [];
				var locationElements = $("ul.circle-icons > li.location", "div#content");
				var locationsToMap = locationElements.size() > 10 ? 10 : locationElements.size();

				for (var i = 0; i < locationsToMap; i++) {
					locations.push(HHC.Maps.GetLocationFromElement(locationElements.eq(i)));
				}

				HHC.Maps.DisplayMap(map, locations, false);
			},

			Initialize: function () {
				HHC.Maps.LoadAPI("HHC.Templates.T41_ConiferEventListing.DisplayMap");
			}
		},

		T42_ConiferEventDetail: {
			DisplayMap: function () {
				var map = $("div.map", "div#content");
				var locations = [];
				var locationElements = $("ul.circle-icons > li.location", "div#content");
				var locationsToMap = locationElements.size() > 5 ? 5 : locationElements.size();

				for (var i = 0; i < locationsToMap; i++) {
					locations.push(HHC.Maps.GetLocationFromElement(locationElements.eq(i)));
				}

				HHC.Maps.DisplayMap(map, locations, false);
			},

			Initialize: function () {
				HHC.Maps.LoadAPI("HHC.Templates.T42_ConiferEventDetail.DisplayMap");
			}
		},

		T44_ConiferRegistration: {
			Initialize: function () {
				// Calendar Toggle
				$("#DateOfBirth, #PayerDateOfBirth").datepicker({
					yearRange: "1900:c",
					beforeShow: function (textbox, instance) {
						var txtBoxOffset = $(this).offset();
						var top = txtBoxOffset.top;
						var left = txtBoxOffset.left;
						var textBoxWidth = $(this).outerWidth();
						instance.dpDiv.addClass("event-calendar");
						setTimeout(function () {
							instance.dpDiv.css({
								top: top + 40,
								left: left + textBoxWidth - 20
							});
						}, 0);
					},
					dateFormat: 'mm-dd-yy',
					maxDate: 0,
					buttonImage: 'http://hartford-public.local.iapps.com/Style%20Library/Hartford%20Hospital/images/icon-calendar2-blue.png',
					changeYear: true
				});

				var EnrolleeDoB = $("#DateOfBirth").data("defaultdate");
				var PayerDoB = $("#PayerDateOfBirth").data("defaultdate");

				if(EnrolleeDoB) {
					$("#DateOfBirth").datepicker("setDate", EnrolleeDoB);
				}
				if(PayerDoB) {
					$("#PayerDateOfBirth").datepicker("setDate", PayerDoB);
				}

				$("#EnrolleeDobCalendarIcon").click(function () {
					$("#DateOfBirth").datepicker("show");
				});
				$("#PayerCalendarIcon").click(function () {
					$("#PayerDateOfBirth").datepicker("show");
				});
			}
		},

		Initialize: function () {
			var template = $("div#template");

			if (template.hasClass("t01"))
				this.T01_Home.Initialize();
			else if (template.hasClass("t08"))
				this.T08_SearchResults.Initialize();
			else if (template.hasClass("t11"))
				this.T11_EventListing.Initialize();
			else if (template.hasClass("t12"))
				this.T12_EventDetail.Initialize();
			else if (template.hasClass("t13"))
				this.T13_EventCalendar.Initialize();
			else if (template.hasClass("t21"))
				this.T21_PhysicianDetail.Initialize();
			else if (template.hasClass("t23") && template.hasClass("choose-picture"))
				this.T23_CareGram_ChoosePicture.Initialize();
			else if (template.hasClass("t23") && template.hasClass("choose-border"))
				this.T23_CareGram_ChooseBorder.Initialize();
			else if (template.hasClass("t24"))
				this.T24_CareGram_EnterMessage.Initialize();
			else if (template.hasClass("t25"))
				this.T25_PracticeDetail.Initialize();
			else if (template.hasClass("t41"))
				this.T41_ConiferEventListing.Initialize();
			else if (template.hasClass("t42"))
				this.T42_ConiferEventDetail.Initialize();
			else if (template.hasClass("t44"))
				this.T44_ConiferRegistration.Initialize();
		}
	},

	Initialize: function () {
		this.WebFonts.Initialize();
		this.AnchoredLinks.Initialize();
		this.PrimaryNavigation.Initialize();
		this.LeftNavigation.Initialize();
		this.PageNavigation.Initialize();
		this.TabbedNavigation.Initialize();
		this.AlphabeticalNavigation.Initialize();
		this.FileUpload.Initialize();
		this.DatePicker.Initialize();
		this.ToggleContainer.Initialize();
		this.Tooltips.Initialize();
		this.Popups.Initialize();
		this.Maps.Initialize();
		this.Sliders.Initialize();
		this.ScrollingSlider.Initialize();
		this.CustomForms.Initialize();
		this.VideoPreviews.Initialize();
		this.Templates.Initialize();
		//this.RxSnippet.Initialize();
		this.CycleAlerts.Initialize();
	}
};

$(document).ready(function () {
	HHC.Initialize();

	//Adds Social Media Icon to Footer
	$(".social-share-links").last().append('<li class="fadeInRight in-view"><a href="https://hartfordhealthcare.org/media/podcasts" target="_blank"><i class="fa fa-podcast"></i></a></li>');

	//Makes Links clickable under Videos on THOCC.org
	var origin = window.location.origin;

	if (origin == 'https://thocc.org') {
		var href1 = $("#ctl01_WidgetContainer8_widget_lvVideoWidget_ctrl0_VideoLink").attr("href");
		var href2 = $("#ctl01_WidgetContainer8_widget_lvVideoWidget_ctrl1_VideoLink").attr("href");
		var href3 = $("#ctl01_WidgetContainer8_widget_lvVideoWidget_ctrl2_VideoLink").attr("href");
		$("#ctl01_WidgetContainer8_widget_lvVideoWidget_ctrl0_TitleLink").attr("href", href1);
		$("#ctl01_WidgetContainer8_widget_lvVideoWidget_ctrl1_TitleLink").attr("href", href2);
		$("#ctl01_WidgetContainer8_widget_lvVideoWidget_ctrl2_TitleLink").attr("href", href3);
	}
	else
	{
	}

	if (origin == 'https://instituteofliving.org')
	{
		$(window).resize(function () {
			if ($(window).width() <= 800) {
				$("img#ctl01_ppheader_2_0_imgLogo").css("width", "10em");
				$("#microsite-hero > ul > li:nth-child(2)").css("display", "none");
			}
			else {
				$("#microsite-hero > ul > li:nth-child(2)").css("display", "initial");
			}
		});
	}

	//Fixes H4 Spacing in NewsHubArticles
	$("</br>").insertBefore("div.hhcnewsroom-article h4");
});

var onRecaptchaLoadCallback = function () {
	grecaptcha.render('recaptcha', {
		'sitekey': '6LcgpEYUAAAAAGFGyQh1eQ_sBOVYmRJfnJTWGqEg'
	});
};

function GetRepWidget(targetId, physicianId) {
	fetch('https://widgets.reputation.com/widgets/5d714a14e581b601787e4493/run?tk=d982fb1452e&lk=' + physicianId)
		.then(response => response.ok ? response.text() : Promise.reject())
		.then(data => data.includes('error-container') ? Promise.reject() : data)
		.then(data => document.getElementById(targetId).innerHTML = data)
		.catch(err => null)
};

// Drawer functions
(function ($) {
	$(document).ready(function () {
		$('.sliding-drawer').find('.drawer-header > h3').on('click', function () {
			$(this).parent().toggleClass('open');
			$(this).parent().next('.drawer-content').slideToggle();
		});
		$('a.open-drawer').on('click', function () {
			var href = $(this).attr("href");
			if (href !== undefined && href.indexOf("#") === 0) {
				$(href + ' .drawer-header').addClass('open');
				$(href + ' .drawer-content').slideDown();
			}
		});
		$('.drawer-footer .close').on('click', function () {
			var target = $(this).closest('.sliding-drawer')
			if (target.length > 0) {
				var headerHeight = 0;
				if ($(window).width() >= 990) {
					headerHeight = $('#siteheader').height();
					headerHeight = headerHeight + $('#microsite-sticky').height() + $('#microsite-sticky').height();
				}
				$("html, body").animate({
				    scrollTop: target.offset().top - headerHeight
				}, 500, "easeInCubic");
			}
			target.find('.drawer-header > h3').click();
		});
        function checkExternalDrawerOpenRequest() {
            if(window.location.search.includes('open-drawer') && window.location.hash.length > 0)
            {
                var drawer = $(window.location.hash + '.sliding-drawer')
                if (drawer.length == 1)
                {
                    drawer.find('.drawer-header').addClass('open');
                    drawer.find('.drawer-content').slideDown();
                }
            }
        }
        checkExternalDrawerOpenRequest();		
	});
})(jQuery);


//T-04 Template Locations Widget Fix
$(window).bind("load", function () {
	var url = window.location.href;

	//FAD Left Nav Bar Fix on T-03 Template
	if ($('div').hasClass('three-column-layout')) {

		$("div.left").addClass("left-cell");

	}


	//FAD More Locations Fix
	var incStr = url.includes("/find-a-doctor");
	var incStr2 = url.includes("/physician-detail");
	var incStr3 = url.includes("/buscar-un-doctor");



	if (incStr == true || incStr2 == true || incStr3 == true)
	{

	}
	else {


		$('div.more-locations a.slider').click(function (e) {

			$(this).toggleClass('open');
			$(this).next().toggle();

		});


	}

	//Design Audit Service Line Box Fix
	if (url == 'https://hartfordhealthcare.org/services/heart-vascular/departments')
	{
		$("div.small-24:nth-child(14) > div:nth-child(1) > h3:nth-child(1) > a:nth-child(1)").text("Advanced Heart Failure & Pulmonary Vascular Disease");
	};

	if (url == 'https://hartfordhealthcare.org/services/pain-treatment') {
		$("#ctl01_blneWidgetContent1_widget_wrapper > div:nth-child(2)").css("display", "flex");
		$("#ctl01_blneWidgetContent1_widget_wrapper > div:nth-child(10)").css("display", "flex");

		$("#ctl01_blneWidgetContent1_widget_wrapper > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1)").css("display", "flex");
		$("div.data-pager:nth-child(10) > div:nth-child(2) > ul:nth-child(1)").css("display", "flex");

		//Cleans up Mobile View for T-04 Template on Locations Widget
		var windowsize = $(window).width();
		if (windowsize < 450) {
			$(".result").css("display", "inline-grid");
			$(".div-info").css("display", "contents");
			$(".div-contact").css("display", "inline-table");
			$(".row").css("width", "95vw");
		}
		$(window).resize(function () {
			var windowsize = $(window).width();
			if (windowsize < 450) {
				$(".result").css("display", "inline-grid");
				$(".div-info").css("display", "contents");
				$(".div-contact").css("display", "inline-table");
				$(".row").css("width", "95vw");
			}
		});
	}
});


