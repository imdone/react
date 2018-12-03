/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

'use strict';

const ReactDOMFizzServerNode = require('./src/server/ReactDOMFizzServerNode');

// TODO: decide on the top-level export form. id:177
// This is hacky but makes it work with both Rollup and Jest
module.exports = ReactDOMFizzServerNode.default || ReactDOMFizzServerNode;