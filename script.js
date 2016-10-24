$(function() {
   window.app = {};
   app.url = 'http://localhost/utilbit/projects/webservice/api/index.php';
   app.template = $('.products-template').val();
   display_items();
});

$('body').on('click', '.btn-create', function () {
   create_item();

}).on('click', 'button.btn-edit', function() {
   var parent = $(this).parent().parent();
   var id = parent.attr('data-id');
   var name = parent.find('div.caption a').text();
   var url = parent.find('div.caption a').attr('href');
   var image = parent.find('img').attr('src');
   var price = parent.find('div.caption span').text();

   edit_item(id, name, url, image, price, parent);

}).on('click', 'button.btn-delete', function() {
   delete_item($(this).parent().parent().attr('data-id'));
});



function display_items() {
   $.get( app.url, function( data ) {
      $.each( data, function( index, value ){

         var template =  app.template
             .replace('{{ID}}', value.id)
             .replace('{{NAME}}', value.name)
             .replace('{{URL}}', value.url)
             .replace('{{URL}}', value.url)
             .replace('{{IMAGE}}', value.image)
             .replace('{{PRICE}}', value.price);

         $('.products-list').append(template);
      });
   });
}

function edit_item(id, name, url, image, price, parent) {

   var par = parent;
   $('input[name="id"]').val(id);
   $('input[name="name"]').val(name);
   $('input[name="url"]').val(url);
   $('input[name="image"]').val(image);
   $('input[name="price"]').val(price);

   $('.btn-update').css('display', 'block').click(function () {
      update_item(par);

   });

   $('.btn-create').css('display', 'none');

}


function update_item(parent) {
   var id = $('input[name="id"]').val();
   var url = $('input[name="url"]').val();

   if (parent.attr('data-id') == id) {
      var par = parent;

      $.post(app.url + '/' + id, {
            name: $('input[name="name"]').val(),
            url: url,
            image: $('input[name="image"]').val(),
            price: $('input[name="price"]').val()

      }).done(function () {

             par.find('div.caption a').text($('input[name="name"]').val());
             par.find('div.caption a').attr('href', url);
             par.find('div.thumbnail a').attr('href', url);
             par.find('img').attr('src', $('input[name="img"]').val());
             par.find('div.caption span').text($('input[name="price"]').val());

          }
      );
   }
}


function create_item() {

   $.post( app.url, {
      name: $('input[name="name"]').val(),
      url: $('input[name="url"]').val(),
      image: $('input[name="image"]').val(),
      price: $('input[name="price"]').val()

   } ).done(function (data) {

      var template =  app.template
          .replace('{{ID}}', data.id)
          .replace('{{NAME}}', data.name)
          .replace('{{URL}}', data.url)
          .replace('{{URL}}', data.url)
          .replace('{{IMAGE}}', data.image)
          .replace('{{PRICE}}', data.price);

      $('.products-list').append(template);

   })
}

function delete_item(id) {

   $.ajax({
      url: app.url + '/' + id,
      type: 'DELETE'
   });

   $('[data-id="' + id + '"]').remove();
}