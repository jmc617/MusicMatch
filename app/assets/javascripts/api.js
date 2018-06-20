$(document).on("turbolinks:load", function(){
var searchSubmit = document.getElementById('search-submit')
var results = document.getElementById('results')
var searchValue = document.getElementById('search-value').value
var key = config.KEY

console.log(searchValue);
  searchSubmit.addEventListener('click', function() {

    var results = document.getElementById('results')
    var searchValue = document.getElementById('search-value').value
    results.innerHTML = ''

    search(searchValue,results)
  })

  function search(value, results) {
    $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey="+key+"&keyword=" + value,
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                for (var i = 0; i <= 20; i++) {

                  // results.innerHTML += json._embedded.events[i].name
                  // results.innerHTML += '~'+json._embedded.events[i]._embedded.venues[0].name
                  var display = results.appendChild(document.createElement('div'));
                  display.innerHTML = json._embedded.events[i].name+json._embedded.events[i]._embedded.venues[0].name
                  var form = results.appendChild(document.createElement('form'));

                  form.name = 'event';
                  form.action = '/events';
                  form.method = 'post';

                  input = form.appendChild(document.createElement('input'))
                  input.type = 'hidden'
                  input.value = json._embedded.events[i].name
                  input.name = 'performer'

                  input = form.appendChild(document.createElement('input'))
                  input.type = 'hidden'
                  input.value = json._embedded.events[i]._embedded.venues[0].name
                  input.name = 'location'

                  input = form.appendChild(document.createElement('input'))
                  input.type = 'hidden'
                  input.value = json._embedded.events[i].dates.start.localDate
                  input.name = 'date'

                  input = form.appendChild(document.createElement('input'))
                  input.type = 'hidden'
                  input.value = json._embedded.events[i].images[4].url
                  input.name = 'img_url'

                  input = form.appendChild(document.createElement('input'))
                  input.type = 'hidden'
                  input.value = json._embedded.events[i].url
                  input.name = 'url'

                  input = form.appendChild(document.createElement('input'))
                  input.type = 'hidden'
                  input.value = json._embedded.events[i].priceRanges[0].min
                  input.name = 'price_min'

                  input = form.appendChild(document.createElement('input'))
                  input.type = 'hidden'
                  input.value = json._embedded.events[i].priceRanges[0].max
                  input.name = 'price_max'

                  submit = form.appendChild(document.createElement('input'));
                  submit.type = 'submit';
                  submit.value = 'Create Event';

                }

             },
    error: function(xhr, status, err) {

             }
    })
  }
})


// function search(value, results) {
//   $.ajax({
//   type:"GET",
//   url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=oUPwzHwcM1P78UtYeEbbaHZAxcIU93DC&keyword=" + value,
//   async:true,
//   dataType: "json",
//   success: function(json) {
//               console.log(json);
//               for (var i = 0; i <= 10; i++) {
//
//                 results.innerHTML += json._embedded.events[i].name
//                 results.innerHTML += '~'+json._embedded.events[i]._embedded.venues[0].name
//
//                 var form = results.appendChild(document.createElement('form'));
//
//                 form.name = 'input';
//                 form.action = '/placeholder-for-create-event-method';
//                 form.method = 'post';
//
//                 input = form.appendChild(document.createElement('input'))
//                 input.type = 'hidden'
//                 input.value = json._embedded.events[i].name
//                 input.name = 'event[name]'
//
//                 submit = form.appendChild(document.createElement('input'));
//                 submit.type = 'submit';
//                 submit.value = 'Create Event';
//
//               }
//
//            },
//   error: function(xhr, status, err) {
//
//            }
//   })
// }
