class EventsController < ApplicationController
  #allows creation of new event from form created through JS
  skip_before_action :verify_authenticity_token, :only => :create

  def index
    @events = Event.all
  end

  def create
    events = Event.new(event_params)
    events.user_id = current_user.id
    if events.save
      redirect_to "/"
    else
      render "/events"
    end
  end

  def show
    @event = Event.find(params[:id])
  end

  def edit
  end

  # def new
  # end

  private
  def event_params
    params.permit(:performer, :location, :date, :img_url )
  end
end
