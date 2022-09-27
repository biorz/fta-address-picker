import { ActionSheet, SelectorCore, inRN } from '@fta/components';
import React, { forwardRef, useState, useEffect } from 'react';
import Taro from '@tarojs/taro';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function resolveAsyncSource(depth) {
    if (depth === void 0) { depth = 3; }
    return Taro.request({
        method: 'POST',
        data: {
            callerFlag: 'Applet',
            regionLevel: depth,
        },
    }).then(function (res) {
        var _a, _b;
        var data = ((_b = (_a = res.data) === null || _a === void 0 ? void 0 : _a.regionTree) !== null && _b !== void 0 ? _b : []);
        // data.unshift({
        //   code: 0,
        //   id: 0,
        //   shortName: '全国',
        //   name: '全国',
        //   children: [
        //     {
        //       code: 0,
        //       id: 0,
        //       shortName: '全国',
        //       name: '全国',
        //       children: [
        //         {
        //           code: 0,
        //           id: 0,
        //           shortName: '全国',
        //           name: '全国',
        //           children: [],
        //         },
        //       ],
        //     },
        //   ],
        // })
        return data;
    });
}

function _AddressPicker(props, ref) {
    var 
    // ActionSheet Props
    isOpened = props.isOpened, onClose = props.onClose, onConfirm = props.onConfirm, onCancel = props.onCancel, confirmText = props.confirmText, cancelText = props.cancelText, title = props.title, clickOverlayOnClose = props.clickOverlayOnClose, 
    // Component Props
    options = props.options, useCustom = props.useCustom, prefix = props.prefix, suffix = props.suffix, onFetch = props.onFetch, onError = props.onError, onChange = props.onChange, 
    // Selector Props
    selectorProps = __rest(props, ["isOpened", "onClose", "onConfirm", "onCancel", "confirmText", "cancelText", "title", "clickOverlayOnClose", "options", "useCustom", "prefix", "suffix", "onFetch", "onError", "onChange"]);
    var _a = __read(useState([]), 2), _options = _a[0], setOptions = _a[1];
    var _b = __read(useState([]), 2), selected = _b[0], setSelected = _b[1];
    var _onChange = function (result, flattenResult) {
        setSelected(flattenResult);
        onChange === null || onChange === void 0 ? void 0 : onChange(result, flattenResult);
    };
    var _onConfirm = function () {
        onConfirm === null || onConfirm === void 0 ? void 0 : onConfirm(selected);
    };
    useEffect(function () {
        useCustom || resolveAsyncSource(props.depth).then(setOptions).catch(onError);
    }, []);
    useEffect(function () {
        if (!useCustom && _options.length)
            onFetch === null || onFetch === void 0 ? void 0 : onFetch(_options);
    }, [_options]);
    return (React.createElement(ActionSheet, { title: {
            title: title,
            confirmText: confirmText,
            cancelText: cancelText,
            onCancel: onCancel,
            onConfirm: _onConfirm,
            confirmTextStyle: props.theme ? { backgroundColor: props.theme } : void 0,
        }, className: 'fta-address-picker', isOpened: isOpened, onClose: onClose, clickOverlayOnClose: clickOverlayOnClose },
        prefix,
        React.createElement(SelectorCore, __assign({ ref: ref, options: useCustom ? options : _options, onChange: _onChange }, selectorProps)),
        suffix));
}
var AddressPicker = forwardRef(_AddressPicker);
var defaultProps = {
    title: '请选择地址',
    isOpened: false,
    options: [],
    useCustom: false,
    clickOverlayOnClose: false,
    confirmText: '确定',
    cancelText: '取消',
    placeholder: '支持按城市、区县名称搜索',
    onError: function () { },
    limitHint: '最多可选择3个地区',
    fieldNames: inRN
        ? {
            label: 'name',
            value: 'code',
            children: 'children',
        }
        : {
            label: 'shortName',
            value: 'id',
            children: 'children',
        },
};
AddressPicker.defaultProps = defaultProps;

export { AddressPicker as default };
