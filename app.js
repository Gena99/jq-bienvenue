console.log('have fun !');
$(document).ready(function(){

// Déclarer un gestionnaire d'évènement click (event handler) sur le button créé dans le HTML
	$('button').click(function(){
		
		// Déclarer une variable contact de type objet
		var contact = {
			firstName: $('#first_name').val(),
			lastName: $('#last_name').val(),
			city: $('#city').val()
		};
		console.log(contact);

		// Changer le titre "stranger" par nom et prénom
		$('#username').text(contact.lastName + ' ' + contact.firstName);
	});
});
