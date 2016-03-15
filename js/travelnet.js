(function ($) {
    
    $(document).on('ready', function () {
      $('select.room_type').on('change', updateTravellerOpts);

      $('select.travellers, select.room_type').on('change', updatePrice);

      $('select.room_type').trigger('change');

      function updateTravellerOpts () {
        var $travellers = $('[name="travellers"]');
        var traveller_count = parseInt($travellers, 10);
        var room_type = $(this).val();

        $travellers.find('option').attr('disabled', null);

        if (room_type === 'single') {
          $travellers.find('option[value="1"]').attr('selected', 'selected');
          $travellers.find('option:not([value="1"])').attr('disabled', 'disabled');
        }
      }

      function updatePrice() {
        var price = parseInt($('[name="original_price"]').val(), 10);
        var travellers = parseInt($('[name="travellers"]').val(), 10);
        var extra_person_price = 0;

        if (travellers > 1) {
          extra_person_price = parseInt($('[name="extra_person_price"]').val(), 10) * (travellers - 1);
        }

        price += extra_person_price;

        $('[name="amount"]').val(price);
        $('.price').html('Price &pound;' + price);
      }

      $('.bxslider').bxSlider({
        autoStart: false,
        adaptiveHeight: true,
        slideWidth: 600
      });
    });

  })(jQuery);