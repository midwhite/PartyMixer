class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # 例外処理
  rescue_from ActiveRecord::RecordNotFound, with: :render_404
  rescue_from ActionController::RoutingError, with: :render_404
  rescue_from Exception, with: :render_500 if Rails.env.production?

  def render_404
    render template: 'homes/welcome', status: 200, content_type: 'text/html'
  end

  def render_500
    render template: 'errors/error_500', status: 500, layout: 'application', content_type: 'text/html'
  end
end
