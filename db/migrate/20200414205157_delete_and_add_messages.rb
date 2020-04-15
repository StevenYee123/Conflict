class DeleteAndAddMessages < ActiveRecord::Migration[5.2]
  def change
    drop_table :messages 
    create_table :messages do |t|
      t.text :body, null: false 
      t.integer :author_id, null: false
      t.integer :channel_id, null: false 

      t.timestamps 
    end
    add_index :messages, :author_id
    add_index :messages, :channel_id
  end
end
