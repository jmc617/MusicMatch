function SendMessage()
{
	var message = document.getElementById("message")
	var tempmessage = message.value
	App.room.speak(tempmessage)
}