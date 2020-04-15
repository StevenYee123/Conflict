class EditDmMemberships < ActiveRecord::Migration[5.2]
  def change
    rename_table :dm_memberships, :homies
  end
end
