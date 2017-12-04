class Api::UsersController < ApplicationController
  def index
    render json: { users: User.order(id: :desc).map(&:response) }
  end

  def me
    render json: { user: user_signed_in? ? current_user.detail : nil }
  end

  def update
    current_user.update(user_params)
    render json: { user: current_user.detail }
  end

  private
  def user_params
    params.require(:user).permit(
      :name, :birthday, :gender, :area, :industry, :job, :university, :profile
    )
  end
end
