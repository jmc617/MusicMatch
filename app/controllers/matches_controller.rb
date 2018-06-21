class MatchesController < ApplicationController
skip_before_action :verify_authenticity_token, :only => :assign

  def assign

    match = Match.new(match_params)
    match.user_id = current_user.id
    match.event_id = params[:event_id]
    if match.save!
      redirect_to "/"
    else
      redirect_to "/"
    end
  end

  def index
  end

  def show

  end

  def edit
  end

  def destroy
    match = Match.find(params[:id])
    match.destroy
    redirect_to '/'
  end

  def new
  end

  def match_params
    params.permit(:event_id, :user_id)
  end
end
