class OmniauthCallbacksController < Devise::OmniauthCallbacksController
  include Devise::Controllers::Rememberable

  def facebook
    auth = request.env['omniauth.auth']
    user = User.where(uid: auth.uid).first_or_initialize

    if user.new_record? && auth.info.present?
      user.name = auth.info.name
      user.email = auth.info.email
    end

    user.save

    remember_me(user)

    sign_in_and_redirect user, event: :authentication
  end

  def failure
    redirect_to root_path
  end
end
