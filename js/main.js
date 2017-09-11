$(document).ready(function(){
$('#searchUser').on('keyup', function (e) {
let username = e.target.value;

//make request to github
$.ajax({
  url:'https://api.github.com/users/' + username ,
  data:{
    client_id: 'dbd99b4f27963e737d05',
    client_secret:'5ff7a8bd5ccdfcd77e427f5bc9be1caddbfcbc89'
      }
}).done(function(user){
$('#profile').html(`
<div class="panel panel-default">
  <div class="panel-heading">Panel heading without title</div>
  <div class="panel-body">
    Panel content
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">${user.name}</h3>
  </div>
  <div class="panel-body">
<div class="row">
<div class="col-md-3">
<img  src="${user.avatar_url}" class="thumbnail avatar">
<a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>

</div>
<div class="col-md-9">

</div>
</div>
  </div>
</div>
`);
});


});
});
