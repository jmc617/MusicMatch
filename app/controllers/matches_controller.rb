class MatchesController < ApplicationController

  def create
    match = Match.new(match_params)
    match.user_id = current_user.id
    if match.save
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

  def new
  end

  def match_params
    params.require(:match).permit(:event_id)
  end
end
