Drupal.behaviors.huddle = function(context) {
  // Click handler for toggling block visibility (much of this is
  // taken from the Ginkgo theme.
  $('a.block-toggle', context)
    .addClass('huddle-block-toggle')
    .each(function() {
      $(this).click(function() {
        var target = $('div#' + $(this).attr('href').split('#')[1]);
        if (target.size() > 0) {
          if (target.css('display') == 'none') {
            target.show();
            // If the block contains a pageEditor form, trigger its
            // start handler.
            if (jQuery().pageEditor && $('form', target).pageEditor) {
              $('form', target).pageEditor('start');
            }
	  }
          else {
            target.hide();
            // If the block contains a pageEditor form, trigger its
            // end handler.
            if (jQuery().pageEditor && $('form', target).pageEditor) {
              $('form', target).pageEditor('end');
            }
          }
	}
        return false;
      });
    });
}