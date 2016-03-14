(function ($) {
    
    $(document).on('ready', function () {
      updatePaypalForm(true);
      updateBookingForm();

      $('[name="event_name"]').on('change', updatePaypalForm);
      $('[name="quantity"]').on('change', updateBookingForm);

      $('.bxslider').bxSlider({
        autoStart: false,
        adaptiveHeight: true,
        slideWidth: 600
      });
    });

    function updatePaypalForm (init) {
      var $event = $('[name="event_name"]');
      var preselect = getParameterByName('event');

      if (!$event.length) {
        return;
      }

      if (init && preselect) {
        $event.val(preselect);
      }

      var name = $event.val();
      var price = $('[name="price_' + name.replace(/-/g, '_') + '"]').val();

      $('[name="item_name"]').val(name);
      $('[name="amount"]').val(price);
    }

    function updateBookingForm() {
      if (!$('[name="quantity"]').length) {
        return;
      }

      var quantity = parseInt($('[name="quantity"]').val(), 10);

      $('.room_type').addClass('hide');

      for (var i = 0; i < quantity; i++) {
        $('.room_type:eq(' + i + ')').removeClass('hide');
      }
    }

    function getParameterByName (name) {
      var url = window.location.href.toLowerCase();

      name = name.replace(/[\[\]]/g, '\\$&').toLowerCase();

      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
      var results = regex.exec(url);

      if (!results) {
        return null;
      }

      if (!results[2]) {
        return '';
      }

      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

  })(jQuery);