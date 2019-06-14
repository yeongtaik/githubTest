/*
 * Copyright (c) 2012-2015 S-Core Co., Ltd.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(['dijit',
        'dijit/registry',
        'dijit/Tree',
        'dijit/tree/dndSource',
        'dijit/tree/ObjectStoreModel',
        'dojo/aspect',
        'dojo/_base/declare',
        'dojo/store/Memory',
        'dojo/store/Observable',
        'webida-lib/util/path',
        './dlg-content-template'],
});

function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    } else {
        y = x;
    }
}
function CWE_476() { // NULL_POINTER
    var obj;
    var y = obj.x;  // UNINITIALIZED_LOCAL_VAR
    console.log(y);
}
