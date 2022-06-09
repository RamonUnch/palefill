/*
 This Source Code Form is subject to the terms of the Mozilla Public
 License, v. 2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.

 Pale Moon Web Technologies Polyfill Add-on
 Copyright (c) 2020-22 Martok & Contributors. All rights reserved.
*/
"use strict";

const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
Cu.import('resource://gre/modules/Services.jsm');

var gStringBundle = Services.strings.createBundle('chrome://palefill/locale/global.properties?' + Math.random()); // Randomize URI to work around bug 719376

function _(msg_name) {
    return gStringBundle.GetStringFromName(msg_name);
}


exports = {
    _,
}