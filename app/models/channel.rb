# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Channel < ApplicationRecord
    validates :name, :server_id, presence: true

    belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

    has_one :leader,
    through: :server,
    source: :leader

    has_many :messages,
    foreign_key: :channel_id,
    class_name: :Message,
    dependent: :destroy

    after_create_commit do 
        ChannelCreationEventBroadcastJob.perform_later(self)
    end
end
