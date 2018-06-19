$(document).on("turbolinks:load", function(){
var searchSubmit = document.getElementById('search-submit')
var results = document.getElementById('results')
var searchValue = document.getElementById('search-value').value

console.log(searchValue);
  searchSubmit.addEventListener('click', search(searchValue,results))
  // {
  //   console.log('click');
  //   // $.ajax({
  //   // type:"GET",
  //   // url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=oUPwzHwcM1P78UtYeEbbaHZAxcIU93DC&keyword=" + searchValue,
  //   // async:true,
  //   // dataType: "json",
  //   // success: function(json) {
  //   //             console.log(json);
  //   //             for (var i = 0; i <= 10; i++) {
  //   //               results.innerHTML += json._embedded.events[i].name
  //   //             }
  //   //
  //   //          },
  //   // error: function(xhr, status, err) {
  //   //
  //   //          }
  //   // })
  // })
})

function search(value, results) {
  $.ajax({
  type:"GET",
  url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=oUPwzHwcM1P78UtYeEbbaHZAxcIU93DC&keyword=" + value,
  async:true,
  dataType: "json",
  success: function(json) {
              console.log(json);
              for (var i = 0; i <= 10; i++) {
                results.innerHTML += json._embedded.events[i].name
              }

           },
  error: function(xhr, status, err) {

           }
  })
}
