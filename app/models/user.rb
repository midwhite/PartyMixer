class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable
  devise :rememberable, :trackable, :omniauthable, omniauth_providers: [:facebook]
end
