# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord 
    validates :username, length: {minimum: 4, maximum: 32}
    validates :username, :session_token, :password_digest, presence: true 
    validates :email, length: {maximum: 32}, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}
    after_initialize :ensure_session_token

    attr_reader :password 

    has_many :owned_servers,
    foreign_key: :leader_id,
    class_name: :Server,
    dependent: :destroy

    has_many :server_memberships,
    foreign_key: :member_id,
    class_name: :ServerMembership,
    dependent: :destroy

    has_many :servers,
    through: :server_memberships,
    source: :server

    has_many :channels,
    through: :servers,
    source: :channels

    has_many :messages,
    class_name: :Message,
    foreign_key: :author_id

    has_many :homie_memberships,
    foreign_key: :user_one,
    class_name: :Homie

    has_many :homies,
    through: :homie_memberships,
    source: :second_user
    
    
    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def is_password?(password)
        bcrypt = BCrypt::Password.new(self.password_digest)
        bcrypt.is_password?(password)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end

    def reset_session_token
        self.update(session_token: User.generate_session_token)
    end
end
