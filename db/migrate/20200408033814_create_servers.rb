class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.integer :leader_id, null: false 
      t.boolean :private_status, null: false, default: false

      t.timestamps

      t.index :name
      t.index :leader_id
    end
  end 
end
