# == Schema Information
#
# Table name: servers
#
#  id             :bigint           not null, primary key
#  name           :string           not null
#  leader_id      :integer          not null
#  private_status :boolean          default(FALSE), not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Server < ApplicationRecord 
    
end
