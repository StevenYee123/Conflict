# == Schema Information
#
# Table name: homies
#
#  id         :bigint           not null, primary key
#  user_one   :integer          not null
#  user_two   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Homie < ApplicationRecord
    validates :user_one, :user_two, presence: true
    validates :user_one, uniqueness: {scope: :user_two, message: "Already Homies!"}

    belongs_to :first_user,
    foreign_key: :user_one,
    class_name: :User 

    belongs_to :second_user,
    foreign_key: :user_two,
    class_name: :User
end
