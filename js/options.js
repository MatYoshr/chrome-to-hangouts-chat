// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

(function() {

  var restoreAll = function() {
      document.getElementById('Webhook_url').value = localStorage.getItem('Webhook_url');
  };
  
  var saveAll = function() {
      localStorage.setItem('Webhook_url', document.getElementById('Webhook_url').value);
  };

  var init = function() {
      restoreAll();
      document.getElementById('save').addEventListener('click', saveAll);
  };

  init();

})();