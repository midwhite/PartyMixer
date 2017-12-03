class Api::UsersController < ApplicationController
  def me
    render json: { user: current_user.detail }
  end
end
