# == Schema Information
#
# Table name: server_memberships
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  member_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ServerMembership < ApplicationRecord
    validates :server_id, :member_id, presence: true

    belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

    belongs_to :user,
    foreign_key: :member_id,
    class_name: :User
end
