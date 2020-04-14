class RemoveMessageIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :messages, [:thread_type, :thread_id]
  end
end
