class FeedController < ApplicationController
  def index
      @activities = PublicActivity::Activity.order("created_at desc")
      @users = User.all
  end



end
