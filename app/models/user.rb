class User < ApplicationRecord
  devise :rememberable, :trackable, :omniauthable, omniauth_providers: [:facebook]

  def response
    {
      name: self.name,
      uid: self.uid,
      age: self.age,
      gender: self.gender,
      area: self.area,
      industry: self.industry,
      job: self.job,
      university: self.university,
      interests: self.interests,
      blog_url: self.blog_url,
      profile: self.profile,
      presence: self.presence
    }
  end

  def detail
    self.response.merge(
      email: self.email,
      twitter_id: self.twitter_id,
      line_id: self.line_id
    )
  end

  def age
    return nil if self.birthday.blank?
    date_format = "%Y%m%d"
    (Date.today.strftime(date_format).to_i - self.birthday.strftime(date_format).to_i) / 10000
  end

  def interests
    self.interest_str.present? ? self.interest_str.split(",") : []
  end
end
