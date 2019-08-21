$(document).ready(function(){
  setCustumInputs();
});
function setCustumInputs() {
  $('input.customCheckbox').checkbox();
  $('input.customRadio').checkbox();
  $('select.customSelect').selectmenu();
  $('[placeholder]').placeholder();
  $('form').live('submit', function() {
    $('[placeholder]').placeholder('clear');
  });
  $('input.phone-mask').mask('+9?(999)999-99-99');
}
function dump(arr, level) {
  var dumped_text = '';
  if(!level) level = 0;
  var level_padding = '';
  for(var j=0; j<level+1; j++) level_padding += '    ';
  if(typeof(arr) == 'object') {
    for(var item in arr) {
      var value = arr[item];
      if(typeof(value) == 'object') {
        dumped_text += level_padding + "'" + item + "' ...\n";
        dumped_text += dump(value,level+1);
      } else {
        dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
      }
    }
  } else {
    dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
  }
  return dumped_text;
}

function suffix(count, s1, s2, s3) {
  count = count + '';
  if (count != '') {
    count = count.split(/(.)/);
    if (count.length) {
      var s = [];
      for (var i = 0; i < count.length; i++) {
        if(count[i] != '') {
          s[s.length] = count[i];
        }
      }
      if(s.length) {
        s = s.reverse();
        if(s.length == 1) {
          s[1] = 0;
        }
        if (s[0] == 1 && s[1] != 1) {
          return s1;
        }
        if (s[0] > 1 && s[0] < 5 && s[1] != 1) {
          return s2;
        }
      }
    }
  }
  return s3;
}

jQuery(function($){ $.datepicker.regional['ru'] = { closeText: 'Закрыть', prevText: '&#x3c;Пред', nextText: 'След&#x3e;', currentText: 'Сегодня', monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 'Июл','Авг','Сен','Окт','Ноя','Дек'], dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], weekHeader: 'Не', dateFormat: 'dd.mm.yy', firstDay: 1, isRTL: false, showMonthAfterYear: false, showOtherMonths: true, selectOtherMonths: true, yearSuffix: ''}; $.datepicker.setDefaults($.datepicker.regional['ru']); });