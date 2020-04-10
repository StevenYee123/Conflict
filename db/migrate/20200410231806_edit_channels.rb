class EditChannels < ActiveRecord::Migration[5.2]
  def change
    remove_index :channels, name: "index_channels_on_server_id"
    add_index :channels, :server_id
  end
end
