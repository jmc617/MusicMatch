module UsersHelper

  def full_name
    @user.firstName + ' ' + @user.lastName
  end

end
