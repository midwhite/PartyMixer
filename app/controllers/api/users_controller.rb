class Api::UsersController < ApplicationController
  def me
    render json: { user: user_signed_in? ? current_user.detail : nil }
  end
end
