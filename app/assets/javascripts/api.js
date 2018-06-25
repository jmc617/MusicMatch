$(document).on("turbolinks:load", function(){
var searchSubmit = document.getElementById('search-submit')
var results = document.getElementById('results')
var searchValue = document.getElementById('search-value').value
var key = config.KEY

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
                //if json does not have _embedded(which is where event data is stored if found)
                if ( !json.hasOwnProperty('_embedded')) {
                  var message = results.appendChild(document.createElement('div'));
                  message.innerHTML = 'Sorry! No results found. Try again!'
                } else {

                for (var i = 0; i < 20; i++) {

                  var display = results.appendChild(document.createElement('div'));

                  var picture = display.appendChild(document.createElement('img'));
                  picture.style.height = '500px';
                  picture.alt = ' artist image'
                  picture.src = json._embedded.events[i].images[4].url

                  var artist = display.appendChild(document.createElement('div'));
                  artist.innerHTML = json._embedded.events[i].name

                  var venue = display.appendChild(document.createElement('div')); venue.innerHTML= json._embedded.events[i]._embedded.venues[0].name

                  //formats date from json into mm/dd/yyyy
                  var formatDate = function(date){
                    var split = date.split('-');
                    var holder = split[0]
                    split[0] = split[1]
                    split[1] = split[2]
                    split[2] = holder

                    var formatted = split.join('/')
                    return formatted
                  }

                  var date = display.appendChild(document.createElement('div'));
                  date.innerHTML= formatDate(json._embedded.events[i].dates.start.localDate)

                  var website = display.appendChild(document.createElement('a'));
                  website.href= json._embedded.events[i].url
                  website.target= "_blank" 
                  website.innerHTML= 'More Info/Purchase Tickets'

                  var price = display.appendChild(document.createElement('div'));

                  //displays single value if the price min and max are equal
                  if (json._embedded.events[i].priceRanges[0].min == json._embedded.events[i].priceRanges[0].max) {
                    price.innerHTML = 'Price: $'+ json._embedded.events[i].priceRanges[0].min
                  } else {
                    price.innerHTML = 'Price range: $'+Math.round(json._embedded.events[i].priceRanges[0].min)
                    + ' - $'
                    + Math.round(json._embedded.events[i].priceRanges[0].max)
                  }

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
                  input.value = formatDate(json._embedded.events[i].dates.start.localDate)
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
                  input.value = Math.round(json._embedded.events[i].priceRanges[0].min)
                  input.name = 'price_min'

                  input = form.appendChild(document.createElement('input'))
                  input.type = 'hidden'
                  input.value = Math.round(json._embedded.events[i].priceRanges[0].max)
                  input.name = 'price_max'

                  submit = form.appendChild(document.createElement('input'));
                  submit.type = 'submit';
                  submit.value = 'Create Event';

                }
              }
             },
    error: function(xhr, status, err) {

             }
    })
  }
})
