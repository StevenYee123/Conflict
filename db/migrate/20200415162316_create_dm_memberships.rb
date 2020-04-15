class CreateDmMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_memberships do |t|
      t.integer :user_one, null: false
      t.integer :user_two, null: false 

      t.timestamps 
    end
    add_index :dm_memberships, [:user_one, :user_two], unique: true
  end
end
