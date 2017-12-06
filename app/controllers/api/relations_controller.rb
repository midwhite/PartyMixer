class Api::RelationsController < ApplicationController
  def create
    relation = Relation.where(
      user_id: current_user.id,
      friend_id: params[:user_id],
      event_id: params[:event_id]
    ).first_or_initialize

    relation.status = 0
    relation.save

    render json: relation
  end
end
