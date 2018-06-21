class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
  	# ActionCable.server.broadcast 'room_channel', data['message'] 
  	# The above command was used to broadcast the message on to the screen and test that Action Cable was working.
  	# This broadcast is now being sent using the broadcast_message_job (app/jobs/broadcast_message_job.rb)
  	Message.create content: data["message"], user: current_user
  end
end
