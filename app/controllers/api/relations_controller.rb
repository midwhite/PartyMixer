class Api::RelationsController < ApplicationController
  def create
    relation = Relation.create(
      user_id: current_user.id,
      friend_id: params[:user_id],
      event_id: params[:event_id],
      status: 1
    )
    render json: relation
  end
end
