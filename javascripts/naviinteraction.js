function main() {
    $('.navitem').on('mouseenter',
    function() {
      $(this).css({
        "border-style": "solid",
        "border-radius": "7px"
      });
    })
    $('.navitem').on('mouseleave',
    function() {
      if ($(this).hasClass('navselected')) {
        $(this).css({
          "border-style": "solid",
          "border-radius": "7px"
        });
      } else {
        $(this).css("border-style", "none");
      }
    });
}

$(document).ready(main);
