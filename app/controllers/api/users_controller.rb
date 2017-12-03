class Api::UsersController < ApplicationController
  def index
    render json: { users: User.order(id: :desc).map(&:response) }
  end

  def me
    render json: { user: user_signed_in? ? current_user.detail : nil }
  end
end
