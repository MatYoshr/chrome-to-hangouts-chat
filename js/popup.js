// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var show = function(out) {
  $('#sk-fading-circle').fadeOut("fast");	
  $('#view').text(out).delay(2000).fadeIn("slow");;
};

$(function() {
  chrome.tabs.getSelected(null, function(tab) {
    const WebhookURL = localStorage.getItem('Webhook_url');
    const text = tab.title + ' \n ' + tab.url;
    const message = { 'text' : text }
    $.ajax({
      url: WebhookURL,
      type: 'POST',
      headers : {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      data: JSON.stringify(message),
      success: function() {
          console.log('success');
          show('Post Success');
      },
      error: function() {
          console.log('fail');
          show('Post Fail');
      }
    });
  });
});
