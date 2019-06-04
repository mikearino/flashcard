$(function() {
  $(".ja").click(function() {
    $(".ja p").toggle();
  });

  $(".op").click(function() {
    $(".op p").toggle();
  });

  $(".va").click(function() {
    $(".va p").toggle();
  });
});

var ourFunction = function (param1, param2) {
  return param1 + param2;
}

ourFunction(1, 4);
